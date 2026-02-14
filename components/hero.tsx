"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#1a1a1a]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/70 to-transparent" />
      </div>

      {/* Decorative doodles */}
      <div className="pointer-events-none absolute right-[45%] top-20 text-white/20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M5 20 Q20 5, 35 20 M5 25 Q20 10, 35 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="pointer-events-none absolute right-20 top-32 text-white/20">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M5 15 L15 5 M15 5 L25 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto flex min-h-[90vh] items-center px-4 py-16">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Brand badge */}
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="10:01 Cuisine"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <span className="text-sm font-medium text-primary">10:01 Cuisine - Best Food Forever</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl font-bold italic leading-tight text-white sm:text-5xl lg:text-6xl">
              Satisfy Your Cravings, Delight Your Tastebuds
            </h1>
            
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
              At 10:01 Cuisine, we expertly whip up every single meal using only the freshest 
              ingredients and the most delicious flavors, crafted just for you!
            </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button
                size="lg"
                className="rounded-full bg-primary px-8 py-6 text-base font-semibold text-white hover:bg-primary/90"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              {/* Google Rating */}
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Google</span>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={`h-4 w-4 ${i <= 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`} />
                  ))}
                </div>
                <span className="text-sm text-white/70">4.5/5</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image with Discount Badge */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main food image */}
            <div className="relative">
              <Image
                src="/images/hero-food.png"
                alt="Delicious food"
                width={900}
                height={900}
                className="h-auto max-h-[600px] w-auto object-contain drop-shadow-2xl lg:max-h-[800px]"
                priority
              />
              
              {/* Discount Badge - Yellow Sticker Style */}
              <div className="absolute left-0 top-1/3 flex h-28 w-28 -translate-x-1/4 flex-col items-center justify-center rounded-full bg-primary text-center shadow-xl transition-transform duration-300 hover:scale-105 sm:h-32 sm:w-32">
                <span className="text-[10px] font-bold uppercase tracking-wide text-primary-foreground/70">Limited Offer</span>
                <span className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl">20%</span>
                <span className="text-[10px] font-bold uppercase tracking-wide text-primary-foreground/70">Discount</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
