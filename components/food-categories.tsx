"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCw } from "lucide-react";
import { useState } from "react";

// All categories - organized in display order
const allCategories = [
  // First batch (always visible)
  { id: "main-dishes", name: "Main Dishes", itemCount: 16, image: "/images/categories/rice-dishes.jpg"},
  { id: "pasta", name: "Special Pasta & Noodles", itemCount: 16, image: "/images/categories/pasta.jpg" },
  { id: "beverages", name: "Beverages", itemCount: 16, image: "/images/categories/beverages.jpg" },
    { id: "sides", name: "Scrumptious Sides", itemCount: 16, image: "/images/categories/sides.jpg" },

 
  
  // Second batch (shown after "Browse More Categories")
  { id: "beef-chicken", name: "Beef & Chicken", itemCount: 16, image: "/images/categories/beef-chicken.jpg" },
  { id: "burgers-wraps", name: "Burgers & Wraps", itemCount: 16, image: "/images/categories/burgers-wraps.jpg" },
  { id: "snacks", name: "Sizzling Snacks", itemCount: 16, image: "/images/categories/snacks.jpg" },
  { id: "salads", name: "Exquisite Salads ", itemCount: 16, image: "/images/categories/salads.jpg" },
  
  // Third batch (shown after "Load More")
  { id: "sandwiches", name: "Gourmet Sandwiches", itemCount: 16, image: "/images/categories/sandwiches.jpg" },
  
  { id: "spicy", name: "Spicy & Zesty Dishes", itemCount: 16, image: "/images/categories/spicy.jpg" },
  
  // Fourth batch (final - shown after second "Load More")
  { id: "sweet-bites", name: "Sweet Bites Delight", itemCount: 48, image: "/images/categories/sweet-bites.jpg" },
  { id: "mozzastick", name: "MozzaStick Madness", itemCount: 73, image: "/images/categories/mozzastick.jpg" },
  { id: "spicy-sub", name: "Spicy Sub Crunch", itemCount: 26, image: "/images/categories/spicy-sub.jpg" },
   { id: "desserts", name: "Delicious Desserts", itemCount: 16, image: "/images/categories/desserts.jpg" },
  // { id: "vegetables", name: "Hearty Vegetables", itemCount: 16, image: "/images/categories/vegetables.jpg" },
];

// Decorative doodle SVG component
function DoodleIcon({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const positionClasses = {
    "top-left": "-left-1 -top-1",
    "top-right": "-right-1 -top-1",
    "bottom-left": "-bottom-1 -left-1",
    "bottom-right": "-bottom-1 -right-1",
  };

  return (
    <div className={`pointer-events-none absolute z-10 text-muted-foreground/40 ${positionClasses[position]}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 14 Q14 8, 20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 18 Q14 14, 18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

// Category card component
function CategoryCard({ category, index, isAnimatingIn }: { category: typeof allCategories[0]; index: number; isAnimatingIn: boolean }) {
  // Alternate doodle positions for visual variety
  const doodlePositions: Array<"top-left" | "top-right" | "bottom-left" | "bottom-right"> = [
    "top-left", "top-right", "bottom-right", "bottom-left"
  ];
  const doodlePos = doodlePositions[index % 4];

  return (
    <a
      href="#menu"
      className={`group relative flex flex-col items-center transition-all duration-500 ${
        isAnimatingIn ? "animate-in slide-in-from-bottom-4 fade-in" : ""
      }`}
      style={{ animationDelay: isAnimatingIn ? `${(index % 4) * 100}ms` : "0ms", animationFillMode: "both" }}
    >
      {/* Decorative doodle */}
      <DoodleIcon position={doodlePos} />
      
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden rounded-2xl">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
        
        {/* Centered yellow arrow button - only visible on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-primary shadow-lg transition-transform duration-300 group-hover:scale-100">
            <ArrowRight className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
      </div>

      {/* Category Info */}
      <div className="mt-4 text-center">
        <h3 className="font-serif text-xl font-bold text-foreground">{category.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{category.itemCount} Items</p>
      </div>

      {/* Second decorative doodle */}
      <DoodleIcon position={doodlePositions[(index + 2) % 4]} />
    </a>
  );
}

export function FoodCategories() {
  // 0 = initial (first 4), 1 = show 8, 2 = show 12, 3 = show all
  const [loadState, setLoadState] = useState(0);
  const [animatingBatch, setAnimatingBatch] = useState<number | null>(null);

  const getVisibleCategories = () => {
    switch (loadState) {
      case 0: return allCategories.slice(0, 4);
      case 1: return allCategories.slice(0, 8);
      case 2: return allCategories.slice(0, 12);
      default: return allCategories;
    }
  };

  const handleLoadMore = () => {
    const nextState = loadState + 1;
    setAnimatingBatch(nextState);
    setLoadState(nextState);
    
    // Clear animation state after animations complete
    setTimeout(() => setAnimatingBatch(null), 600);
  };

  const visibleCategories = getVisibleCategories();
  const hasMore = loadState < 3;

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
          {visibleCategories.map((category, index) => {
            // Determine if this card should animate in
            const batchStart = loadState === 1 ? 4 : loadState === 2 ? 8 : loadState === 3 ? 12 : 0;
            const isAnimatingIn = animatingBatch !== null && index >= batchStart;
            
            return (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
                isAnimatingIn={isAnimatingIn}
              />
            );
          })}
        </div>

        {/* Action Button */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            {loadState === 0 ? (
              <Button
                variant="outline"
                size="lg"
                onClick={handleLoadMore}
                className="rounded-full border-2 border-foreground bg-transparent px-8 py-6 text-base font-semibold text-foreground hover:bg-foreground hover:text-background"
              >
                Browse More Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            ) : (
              <Button
                size="lg"
                onClick={handleLoadMore}
                className="rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Load More
                <RefreshCw className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
