"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const eventTypes = [
  {
    id: "social",
    name: "Social Event",
    image: "/images/catering/social-event.jpg",
  },
  {
    id: "corporate",
    name: "Corporate",
    image: "/images/catering/corporate.jpg",
  },
  {
    id: "wedding",
    name: "Wedding",
    image: "/images/catering/wedding.jpg",
  },
];

export function CateringSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold italic text-foreground sm:text-4xl lg:text-5xl">
              Catering Cravings for Every Celebration
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              From intimate gatherings to grand celebrations, 10:01 Cuisine delivers delicious 
              food options that impress every guest.
            </p>
          </div>
          <Button
            className="shrink-0 rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="#contact">
              Explore Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Event Types Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((event) => (
            <a
              key={event.id}
              href="#contact"
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl font-bold text-white">{event.name}</h3>
              </div>

              {/* Decorative corner */}
              <div className="pointer-events-none absolute -right-2 -top-2 text-white/20">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M10 20 Q20 10, 30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
