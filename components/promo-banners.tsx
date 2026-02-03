"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export function PromoBanners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold italic text-foreground sm:text-3xl">
              Hot Deals & Offers
            </h2>
            <p className="mt-2 text-muted-foreground">Limited time offers you cannot miss!</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="h-10 w-10 rounded-full border-foreground/20 bg-transparent hover:bg-foreground hover:text-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-full border-foreground/20 bg-transparent hover:bg-foreground hover:text-background"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-4 scrollbar-hide sm:mx-0 sm:px-0"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {/* Banner 1 - Delicious Deals */}
          <div 
            className="group relative min-w-[320px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-w-[500px]"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* Decorative doodles */}
            <div className="pointer-events-none absolute bottom-4 left-4 text-white/20">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M10 20 Q20 10, 30 20 Q20 30, 10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="pointer-events-none absolute right-4 top-4 text-white/20">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>
            </div>

            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:p-8">
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-orange-500" />
                  <h3 className="font-serif text-2xl font-bold italic text-white sm:text-3xl">
                    Delicious Deals Await!
                  </h3>
                </div>
                <p className="mt-3 text-sm text-white/70">
                  Enjoy <span className="font-semibold text-primary">Buy 1 Get 1 FREE</span> on
                  selected items every Friday!
                </p>
                <Button
                  className="mt-4 rounded-full bg-white px-6 py-5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg"
                  asChild
                >
                  <a href="#menu">
                    Explore Menu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden sm:h-48 sm:w-48 lg:h-56 lg:w-56">
                <Image
                  src="/images/promo/deal-1.jpg"
                  alt="Delicious deals"
                  fill
                  className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Banner 2 - 20% OFF */}
          <div 
            className="group relative min-w-[320px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-w-[500px]"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* Decorative doodles */}
            <div className="pointer-events-none absolute bottom-4 right-4 text-white/20">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M10 20 Q20 10, 30 20 Q20 30, 10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="pointer-events-none absolute right-4 top-4 text-white/20">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>
            </div>

            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:p-8">
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-orange-500" />
                  <h3 className="font-serif text-2xl font-bold italic text-white sm:text-3xl">
                    20% OFF Your First Order!
                  </h3>
                </div>
                <p className="mt-3 text-sm text-white/70">
                  Use code <span className="font-semibold text-primary">TASTE20</span> at checkout.
                  Taste the deal today!
                </p>
                <Button
                  className="mt-4 rounded-full bg-primary px-6 py-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
                  asChild
                >
                  <a href="#menu">
                    Explore Menu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden sm:h-48 sm:w-48 lg:h-56 lg:w-56">
                <Image
                  src="/images/promo/deal-2.jpg"
                  alt="20% off deal"
                  fill
                  className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Banner 3 - Free Delivery */}
          <div 
            className="group relative min-w-[320px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-w-[500px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:p-8">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-orange-500" />
                  <h3 className="font-serif text-2xl font-bold italic text-white sm:text-3xl">
                    Free Delivery Weekend!
                  </h3>
                </div>
                <p className="mt-3 text-sm text-white/70">
                  Get <span className="font-semibold text-primary">FREE delivery</span> on all orders
                  above N10,000 this weekend!
                </p>
                <Button
                  className="mt-4 rounded-full bg-primary px-6 py-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
                  asChild
                >
                  <a href="#menu">
                    Order Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="relative h-40 w-full overflow-hidden sm:h-48 sm:w-48 lg:h-56 lg:w-56">
                <Image
                  src="/images/dishes/jollof-rice.jpg"
                  alt="Free delivery"
                  fill
                  className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
