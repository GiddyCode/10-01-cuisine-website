"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import { FAQs } from "@/components/faqs";
import { Newsletter } from "@/components/newsletter";
import { CustomizeSheet } from "@/components/customize-sheet";
import { categories, dishes } from "@/lib/data";
import type { Dish } from "@/lib/types";

function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}

const eventCategories = [
  { id: "social", name: "Social Event" },
  { id: "corporate", name: "Corporate" },
  { id: "wedding", name: "Wedding" },
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter dishes based on category and search
  const filteredDishes = useMemo(() => {
    let filtered = dishes;

    if (selectedCategory) {
      filtered = filtered.filter((dish) => dish.categoryId === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (dish) =>
          dish.name.toLowerCase().includes(query) ||
          dish.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const displayedDishes = filteredDishes.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 sm:py-28">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]" />
        
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold italic text-white sm:text-5xl lg:text-6xl">
            Crafted to Please Every Palate - Dive Into Our Delicious Menu
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            At 10:01 Cuisine, we expertly whip up every single meal using only the freshest 
            ingredients and the most delicious flavors, crafted just for you!
          </p>
        </div>
      </section>

      {/* Promo Banners */}
      <section className="bg-background py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Banner 1 */}
            <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] p-6">
              <div className="flex items-start gap-3">
                <Flame className="h-5 w-5 shrink-0 text-orange-500" />
                <div>
                  <h3 className="font-serif text-xl font-bold italic text-white">
                    Delicious Deals Await!
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Enjoy <span className="font-semibold text-primary">Buy 1 Get 1 FREE</span> on
                    selected items every Friday!
                  </p>
                  <Button
                    className="mt-4 rounded-full bg-white px-6 py-5 text-sm font-semibold text-foreground hover:bg-white/90"
                    asChild
                  >
                    <a href="#menu-grid">
                      Explore Menu
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] p-6">
              <div className="flex items-start gap-3">
                <Flame className="h-5 w-5 shrink-0 text-orange-500" />
                <div>
                  <h3 className="font-serif text-xl font-bold italic text-white">
                    20% OFF Your First Order!
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Use code <span className="font-semibold text-primary">TASTE20</span> at checkout.
                    Taste the deal today!
                  </p>
                  <Button
                    className="mt-4 rounded-full bg-primary px-6 py-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a href="#menu-grid">
                      Explore Menu
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section id="menu-grid" className="bg-background py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search Recipe"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-full bg-muted pl-10 pr-4 py-6"
                />
              </div>

              {/* Food Categories */}
              <div className="mb-6">
                <h3 className="mb-4 font-semibold text-foreground">Food Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(null)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      selectedCategory === null
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    All Items
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Event Categories */}
              <div>
                <h3 className="mb-4 font-semibold text-foreground">Event Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {eventCategories.map((event) => (
                    <a
                      key={event.id}
                      href="#contact"
                      className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80"
                    >
                      {event.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Menu Grid */}
            <div className="lg:col-span-3">
              {filteredDishes.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <p className="text-lg font-medium text-foreground">No dishes found</p>
                  <p className="mt-2 text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 bg-transparent"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {displayedDishes.map((dish) => (
                      <DishCard
                        key={dish.id}
                        dish={dish}
                        onClick={() => setSelectedDish(dish)}
                      />
                    ))}
                  </div>

                  {/* Load More */}
                  {visibleCount < filteredDishes.length && (
                    <div className="mt-8 flex justify-center">
                      <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full border-2 border-foreground bg-transparent px-8 py-6 font-semibold text-foreground hover:bg-foreground hover:text-background"
                        onClick={() => setVisibleCount((prev) => prev + 6)}
                      >
                        Load More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQs */}
      <FAQs />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />

      {/* Customize Sheet */}
      {selectedDish && (
        <CustomizeSheet
          dish={selectedDish}
          open={!!selectedDish}
          onOpenChange={(open) => !open && setSelectedDish(null)}
        />
      )}
    </main>
  );
}

interface DishCardProps {
  dish: Dish;
  onClick: () => void;
}

function DishCard({ dish, onClick }: DishCardProps) {
  const category = categories.find((c) => c.id === dish.categoryId);

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl border-2 border-transparent bg-card p-4 text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Image Container with Overlay */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        <Image
          src={dish.image || "/placeholder.svg"}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
        
        {/* Centered yellow arrow button on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-primary shadow-lg transition-transform duration-300 group-hover:scale-100">
            <ArrowRight className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        {/* Price and Category Row */}
        <div className="flex items-center justify-between">
          <p className="font-serif text-xl font-bold text-primary">
            {formatPrice(dish.basePrice)}
          </p>
          <span className="text-xs text-muted-foreground">{category?.name}</span>
        </div>

        {/* Name */}
        <h3 className="mt-2 font-serif text-lg font-bold text-foreground">{dish.name}</h3>

        {/* Description */}
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {dish.description}
        </p>
      </div>
    </button>
  );
}
