"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Star, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { categories, dishes } from "@/lib/data";
import type { Dish } from "@/lib/types";
import { CustomizeModal } from "./customize-modal";

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
              className="bg-card pl-10"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-md border-2 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all ${
                selectedCategory === category.id
                  ? "border-accent bg-accent text-white"
                  : "border-accent/30 bg-card text-foreground hover:border-accent"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Dishes List - Two Column Layout */}
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {filteredDishes.map((dish) => (
            <DishListItem
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

      {/* Customize Modal */}
      {selectedDish && (
        <CustomizeModal
          dish={selectedDish}
          open={!!selectedDish}
          onOpenChange={(open) => !open && setSelectedDish(null)}
        />
      )}
    </section>
  );
}

interface DishListItemProps {
  dish: Dish;
  onClick: () => void;
}

function DishListItem({ dish, onClick }: DishListItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center gap-4 rounded-lg bg-card p-3 text-left shadow-sm transition-all hover:shadow-md"
    >
      {/* Thumbnail */}
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={dish.image || "/placeholder.svg"}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
          <span className="text-xs font-medium text-muted-foreground">4.8</span>
        </div>
        
        {/* Name */}
        <h3 className="truncate font-semibold text-foreground">{dish.name}</h3>
        
        {/* Price */}
        <p className="font-serif text-lg font-bold text-accent">
          {formatPrice(dish.basePrice)}
        </p>
      </div>

      {/* Action Button */}
      <div className="flex-shrink-0">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-white transition-transform group-hover:scale-110">
          <Heart className="h-4 w-4" />
        </div>
      </div>
    </button>
  );
}
