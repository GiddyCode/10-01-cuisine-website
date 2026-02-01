"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Truck, Shield, CreditCard, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Decorative Leaf Elements */}
      <div className="pointer-events-none absolute -left-16 top-32 h-48 w-48 opacity-30">
        <svg viewBox="0 0 100 150" className="h-full w-full fill-primary">
          <ellipse cx="50" cy="75" rx="25" ry="60" />
          <line x1="50" y1="15" x2="50" y2="135" stroke="currentColor" strokeWidth="2" className="stroke-primary" />
        </svg>
      </div>
      <div className="pointer-events-none absolute -right-12 bottom-48 h-36 w-36 rotate-45 opacity-20">
        <svg viewBox="0 0 100 150" className="h-full w-full fill-primary">
          <ellipse cx="50" cy="75" rx="25" ry="60" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              A Bite of Happiness
            </p>
            
            <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-balance">
                Delicious Deals{" "}
                <span className="text-primary">in One Click</span>
              </span>
            </h1>
            
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Fresh, homemade African cuisine delivered to your doorstep in Abuja. 
              Made with love by a chef trained by Hilda Baci.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent px-8 py-6 text-base font-semibold text-white hover:bg-accent/90"
                asChild
              >
                <a href="#menu">
                  Explore Menu
                  <ChevronDown className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <p className="font-serif text-4xl font-bold text-foreground">40+</p>
                <p className="mt-1 text-sm text-muted-foreground">Menu Items</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold text-foreground">500+</p>
                <p className="mt-1 text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Star className="h-6 w-6 fill-secondary text-secondary" />
                  <p className="font-serif text-4xl font-bold text-foreground">4.9</p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Food Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Background decorative shape */}
              <div className="absolute -inset-4 rounded-[3rem] bg-primary/5" />
              
              {/* Main food image */}
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/dishes/jollof-rice.jpg"
                  alt="Delicious Jollof Rice"
                  width={500}
                  height={500}
                  className="aspect-square w-full object-cover"
                  priority
                />
              </div>
              
              {/* Price tag */}
              <div className="absolute -right-2 top-6 z-20 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-accent text-white shadow-lg sm:-right-6">
                <span className="text-xs font-medium">from</span>
                <span className="font-serif text-lg font-bold">N2,000</span>
              </div>
              
              {/* Floating food thumbnail 1 */}
              <div className="absolute -left-4 bottom-24 z-20 h-24 w-24 overflow-hidden rounded-2xl border-4 border-card bg-card shadow-xl sm:-left-8">
                <Image
                  src="/images/dishes/peppered-chicken.jpg"
                  alt="Peppered Chicken"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
              
              {/* Floating food thumbnail 2 */}
              <div className="absolute -bottom-4 right-8 z-20 h-28 w-28 overflow-hidden rounded-2xl border-4 border-card bg-card shadow-xl sm:right-12">
                <Image
                  src="/images/dishes/egusi-soup.jpg"
                  alt="Egusi Soup"
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Badges */}
        <div className="mt-20 grid gap-8 border-t border-border pt-12 sm:grid-cols-3">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card shadow-md">
              <Truck className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Fast Delivery</p>
              <p className="text-sm text-muted-foreground">30-60 mins across Abuja</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card shadow-md">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Safe Packing</p>
              <p className="text-sm text-muted-foreground">Hygienic & secure packaging</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card shadow-md">
              <CreditCard className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Easy Payments</p>
              <p className="text-sm text-muted-foreground">Card, transfer & cash</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
