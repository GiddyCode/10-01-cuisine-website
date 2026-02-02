"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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

// Get category name by id
function getCategoryName(categoryId: string): string {
  const category = categories.find((c) => c.id === categoryId);
  return category?.name || categoryId;
}

export function MenuSection() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  
  // Get featured dishes (popular ones)
  const featuredDishes = useMemo(() => {
    return dishes.filter((dish) => dish.popular).slice(0, 6);
  }, []);

  return (
    <section id="menu" className="bg-[#1a1a1a] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold italic text-white sm:text-4xl lg:text-5xl">
              Find Your Best Delicious Flavor
            </h2>
            <p className="mt-4 max-w-2xl text-white/60">
              Scroll, select, and savor - our diverse menu brings together the best of local
              favorites and global flavors, all made fresh and full of taste.
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="shrink-0 rounded-full border-2 border-white bg-transparent px-6 py-5 text-sm font-semibold text-white hover:bg-white hover:text-foreground"
            asChild
          >
            <a href="#full-menu">
              Browse More Dishes
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Dishes Grid - Dark Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              onClick={() => setSelectedDish(dish)}
            />
          ))}
        </div>
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
    <button
      type="button"
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#252525] p-4 text-left transition-all hover:border-primary/50 hover:bg-[#2a2a2a]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        <Image
          src={dish.image || "/placeholder.svg"}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        {/* Price and Category Row */}
        <div className="flex items-center justify-between">
          <p className="font-serif text-xl font-bold text-primary">
            {formatPrice(dish.basePrice)}
          </p>
          <span className="text-xs text-white/50">{getCategoryName(dish.categoryId)}</span>
        </div>

        {/* Name */}
        <h3 className="mt-2 font-serif text-lg font-bold text-white">{dish.name}</h3>
        
        {/* Description */}
        <p className="mt-1 line-clamp-2 text-sm text-white/60">
          {dish.description}
        </p>
      </div>

      {/* Arrow indicator on hover */}
      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowRight className="h-5 w-5 text-primary-foreground" />
      </div>
    </button>
  );
}
