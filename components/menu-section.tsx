"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Flame } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
    <section id="menu" className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Delicious Picks
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our Menu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Fresh, homemade African dishes prepared with love and authentic flavors
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-8 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 rounded-full bg-card p-2 shadow-sm sm:inline-flex sm:mx-auto sm:w-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-accent text-white shadow-md"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <span className="mr-1.5">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              onCustomize={() => setSelectedDish(dish)}
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
  onCustomize: () => void;
}

function DishCard({ dish, onCustomize }: DishCardProps) {
  return (
    <Card className="group overflow-hidden bg-card transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={dish.image || "/placeholder.svg"}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {dish.popular && (
          <Badge className="absolute left-3 top-3 bg-secondary text-secondary-foreground shadow-md">
            <Flame className="mr-1 h-3 w-3" />
            Popular
          </Badge>
        )}
        {/* Quick add button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            size="sm"
            onClick={onCustomize}
            className="bg-accent text-white hover:bg-accent/90"
          >
            Add to Order
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground line-clamp-1">{dish.name}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {dish.description}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-xl font-bold text-accent">
              {formatPrice(dish.basePrice)}
            </span>
          </div>
          <button
            type="button"
            onClick={onCustomize}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white transition-transform hover:scale-110"
            aria-label="Add to cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
