"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "main-dishes",
    name: "Main Dishes",
    itemCount: 16,
    image: "/images/categories/main-dishes.jpg",
  },
  {
    id: "beverages",
    name: "Beverages",
    itemCount: 8,
    image: "/images/categories/beverages.jpg",
  },
  {
    id: "soups",
    name: "Soups & Swallow",
    itemCount: 12,
    image: "/images/categories/soups.jpg",
  },
  {
    id: "sides",
    name: "Sides & Extras",
    itemCount: 10,
    image: "/images/categories/sides.jpg",
  },
];

export function FoodCategories() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold italic text-foreground sm:text-4xl lg:text-5xl">
            Discover Our Food Category
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From sizzling starters to satisfying mains and sweet endings - our menu is thoughtfully organized into
            categories that make finding your next craving quick and easy.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <a
              key={category.id}
              href="#menu"
              className="group relative flex flex-col items-center"
            >
              {/* Decorative doodle */}
              <div className="pointer-events-none absolute -left-2 -top-2 text-muted-foreground/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 12 Q12 6, 18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {index === 1 && (
                <div className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}
              
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Category Info */}
              <div className="mt-4 text-center">
                <h3 className="font-serif text-xl font-bold text-foreground">{category.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{category.itemCount} Items</p>
              </div>

              {/* Bottom doodle */}
              <div className="pointer-events-none absolute -bottom-2 right-2 text-muted-foreground/30">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10 Q10 5, 15 10 Q10 15, 5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Browse Button */}
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-2 border-foreground bg-transparent px-8 py-6 text-base font-semibold text-foreground hover:bg-foreground hover:text-background"
            asChild
          >
            <a href="#menu">
              Browse More Categories
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
