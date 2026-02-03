"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";

export function PromoBanners() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Banner 1 - Delicious Deals */}
          <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a]">
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
                  className="mt-4 rounded-full bg-white px-6 py-5 text-sm font-semibold text-foreground hover:bg-white/90"
                  asChild
                >
                  <a href="#menu">
                    Explore Menu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Image */}
              <div className="relative h-40 w-full sm:h-48 sm:w-48 lg:h-56 lg:w-56">
                <Image
                  src="/images/promo/deal-1.jpg"
                  alt="Delicious deals"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Banner 2 - 20% OFF */}
          <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a]">
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
                  className="mt-4 rounded-full bg-primary px-6 py-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href="#menu">
                    Explore Menu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Image */}
              <div className="relative h-40 w-full sm:h-48 sm:w-48 lg:h-56 lg:w-56">
                <Image
                  src="/images/promo/deal-2.jpg"
                  alt="20% off deal"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
