"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram, Play } from "lucide-react";
import { contactInfo } from "@/lib/data";

const reels = [
  {
    id: 1,
    name: "Jollof Rice Special",
    views: "24K Views",
    image: "/images/reels/reel-1.jpg",
  },
  {
    id: 2,
    name: "Behind The Kitchen",
    views: "18K Views",
    image: "/images/reels/reel-2.jpg",
    isVideo: true,
  },
  {
    id: 3,
    name: "Peppered Chicken",
    views: "32K Views",
    image: "/images/reels/reel-3.jpg",
  },
  {
    id: 4,
    name: "Fresh Smoothies",
    views: "15K Views",
    image: "/images/reels/reel-4.jpg",
  },
  {
    id: 5,
    name: "Egusi Soup Making",
    views: "28K Views",
    image: "/images/reels/reel-5.jpg",
  },
];

export function InstagramReels() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold italic text-foreground sm:text-4xl lg:text-5xl">
            Bite-Sized Fun on Reels
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Catch a glimpse of the magic behind 10:01 Cuisine! From sizzling pans to happy
            customers, explore our tastiest moments through Reels.
          </p>

          {/* Follow Button */}
          <Button
            className="mt-6 rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href={contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Follow 10:01 Cuisine
            </a>
          </Button>
        </div>

        {/* Reels Horizontal Scroll */}
        <div className="mt-12 -mx-4 px-4 overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max">
            {reels.map((reel) => (
              <a
                key={reel.id}
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-80 w-56 flex-shrink-0 overflow-hidden rounded-2xl sm:h-96 sm:w-64"
              >
                <Image
                  src={reel.image || "/placeholder.svg"}
                  alt={reel.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Play Icon for Video */}
                {reel.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Play className="h-6 w-6 fill-white text-white" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-semibold text-white">{reel.name}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-white/70">
                    <Play className="h-3 w-3 fill-current" />
                    <span>{reel.views}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
