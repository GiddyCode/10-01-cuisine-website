"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] py-16 sm:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/food-pattern-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
              Subscribe now and get 10% off your first order!
            </div>
            <h2 className="font-serif text-3xl font-bold italic text-white sm:text-4xl lg:text-5xl">
              Sign Up for Tasty Updates
            </h2>
            <p className="mt-4 max-w-lg text-white/60">
              Be the first to know about our newest dishes, exclusive discounts, seasonal 
              specials, and foodie tips. Delivered fresh to your inbox - just like our meals!
            </p>

            {/* Subscribe Form */}
            <form className="mt-8 flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border-white/20 bg-white/10 px-6 py-6 text-white placeholder:text-white/50 focus:border-primary"
              />
              <Button
                type="submit"
                size="lg"
                className="rounded-full bg-primary px-8 py-6 font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Right - Decorative Food Images */}
          <div className="relative hidden lg:block">
            <div className="relative h-80">
              {/* Floating food images */}
              <div className="absolute left-0 top-0 h-32 w-32 overflow-hidden rounded-2xl">
                <Image src="/images/dishes/jollof-rice.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="absolute right-0 top-8 h-40 w-40 overflow-hidden rounded-2xl">
                <Image src="/images/dishes/peppered-chicken.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="absolute bottom-0 left-20 h-36 w-36 overflow-hidden rounded-2xl">
                <Image src="/images/dishes/egusi-soup.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="absolute bottom-8 right-16 h-28 w-28 overflow-hidden rounded-2xl">
                <Image src="/images/dishes/fried-rice.jpg" alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
