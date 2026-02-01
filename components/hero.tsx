"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";
import { contactInfo } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* Background Image Collage */}
      <div className="absolute inset-0 grid grid-cols-2 gap-0.5 opacity-50 md:grid-cols-3 lg:grid-cols-4">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/images/dishes/jollof-rice.jpg"
            alt="Jollof Rice"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/images/dishes/egusi-soup.jpg"
            alt="Egusi Soup"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/images/dishes/peppered-chicken.jpg"
            alt="Peppered Chicken"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative hidden aspect-square overflow-hidden lg:block">
          <Image
            src="/images/dishes/asun.jpg"
            alt="Asun"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/images/dishes/coconut-rice.jpg"
            alt="Coconut Rice"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/images/dishes/jollof-pasta.jpg"
            alt="Jollof Pasta"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative hidden aspect-square overflow-hidden md:block">
          <Image
            src="/images/dishes/small-chops.jpg"
            alt="Small Chops"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative hidden aspect-square overflow-hidden lg:block">
          <Image
            src="/images/dishes/zobo.jpg"
            alt="Zobo"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative hidden aspect-square overflow-hidden md:block">
          <Image
            src="/images/food-1.png"
            alt="Nigerian Food"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative hidden aspect-square overflow-hidden lg:block">
          <Image
            src="/images/food-2.png"
            alt="Nigerian Food"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 rounded-2xl bg-white p-4 shadow-2xl">
          <Image
            src="/logo.png"
            alt="10:01 Cuisine and more"
            width={120}
            height={120}
            className="mx-auto h-20 w-auto sm:h-28 lg:h-32"
            priority
          />
        </div>

        <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-balance">Hot meals, made on order.</span>
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-white/80 sm:text-xl md:text-2xl">
          Authentic African cuisine, fresh ingredients, delivered across Abuja
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button
            size="lg"
            className="bg-primary px-8 py-6 text-lg font-semibold text-white hover:bg-primary/90"
            asChild
          >
            <a href="#menu">
              Order Now
              <ChevronDown className="ml-2 h-5 w-5" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/50 bg-transparent px-8 py-6 text-lg font-semibold text-white hover:bg-white/10"
            asChild
          >
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Order
            </a>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            <span>Fresh Daily</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-secondary" />
            <span>30-60 min Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-accent" />
            <span>Trained by Hilda Baci</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#menu" className="text-white/60 hover:text-white">
          <ChevronDown className="h-8 w-8" />
          <span className="sr-only">Scroll to menu</span>
        </a>
      </div>
    </section>
  );
}
