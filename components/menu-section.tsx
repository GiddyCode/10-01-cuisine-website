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
    <section id="menu" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our Menu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Fresh, homemade African dishes prepared with love and authentic
            flavors
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

        {/* Category Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : ""
              }
            >
              <span className="mr-1.5">{category.icon}</span>
              {category.name}
            </Button>
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
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={dish.image || "/placeholder.svg"}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {dish.popular && (
          <Badge className="absolute left-3 top-3 bg-secondary text-secondary-foreground">
            <Flame className="mr-1 h-3 w-3" />
            Popular
          </Badge>
        )}
        {/* 10:01 Watermark */}
        <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs font-medium text-white">
          10:01 Cuisine
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground">{dish.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {dish.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-sm text-muted-foreground">From</span>
            <span className="ml-1 text-lg font-bold text-primary">
              {formatPrice(dish.basePrice)}
            </span>
          </div>
          <Button
            size="sm"
            onClick={onCustomize}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Customize
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
