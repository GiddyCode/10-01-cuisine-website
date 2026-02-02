"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Flame, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { categories, dishes } from "@/lib/data";
import type { Dish } from "@/lib/types";
import { CustomizeSheet } from "./customize-sheet";

function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const filteredDishes = useMemo(() => {
    let filtered = dishes;

    // Filter by category
    if (selectedCategory === "popular") {
      filtered = filtered.filter((dish) => dish.popular);
    } else {
      filtered = filtered.filter(
        (dish) => dish.categoryId === selectedCategory
      );
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (dish) =>
          dish.name.toLowerCase().includes(query) ||
          dish.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Delicious Picks
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold italic text-foreground sm:text-4xl lg:text-5xl">
            Our Menu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Fresh, homemade African dishes prepared with love and authentic flavors
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-8 max-w-md">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-full border-border bg-card py-6 pl-12 pr-4 shadow-sm"
            />
          </div>
        </div>

        {/* Category Tabs - Pill Style Container */}
        <div className="mx-auto mt-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1 rounded-full bg-card p-1.5 shadow-md">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dishes Grid - 4 Column Card Layout */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              onClick={() => setSelectedDish(dish)}
            />
          ))}
        </div>

        {filteredDishes.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              No dishes found. Try a different search or category.
            </p>
          </div>
        )}
      </div>

      {/* Customize Sheet */}
      {selectedDish && (
        <CustomizeSheet
          dish={selectedDish}
          open={!!selectedDish}
          onOpenChange={(open) => !open && setSelectedDish(null)}
        />
      )}
    </section>
  );
}

interface DishCardProps {
  dish: Dish;
  onClick: () => void;
}

function DishCard({ dish, onClick }: DishCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-lg">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={dish.image || "/placeholder.svg"}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Popular Badge */}
        {dish.popular && (
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-foreground/90 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            <Flame className="h-3 w-3 text-orange-400" />
            <span>Popular</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground">{dish.name}</h3>
        
        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-bold text-primary">
            {formatPrice(dish.basePrice)}
          </p>
          
          {/* Add Button */}
          <button
            type="button"
            onClick={onClick}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white transition-transform hover:scale-110"
            aria-label={`Add ${dish.name} to cart`}
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
