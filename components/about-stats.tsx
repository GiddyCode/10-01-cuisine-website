"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, ShieldCheck, HeadphonesIcon, BadgePercent } from "lucide-react";

const stats = [
  { value: "40+", label: "Unique Menu Items" },
  { value: "500+", label: "Positive Reviews" },
  { value: "5+", label: "Years Experience" },
  { value: "2,000+", label: "Orders Delivered" },
];

const features = [
  {
    icon: ChefHat,
    title: "Expertly Crafted Recipes",
    description: "Our chefs mix creativity with flavor to make every dish unforgettable.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene & Safety First",
    description: "Clean kitchens, sealed packaging, and contactless delivery - always.",
  },
  {
    icon: HeadphonesIcon,
    title: "Friendly Support Team",
    description: "Got a question or issue? Our team is just a message away.",
  },
  {
    icon: BadgePercent,
    title: "Exciting Offers & Deals",
    description: "Crave more, spend less. Enjoy exclusive discounts every week!",
  },
];

export function AboutStats() {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] py-16 sm:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/food-pattern-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold italic text-white sm:text-4xl lg:text-5xl">
            More Than Just Food - {"It's"} a Flavor Story
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            At 10:01 Cuisine, we offer bold flavors and fresh ingredients. From savory jollof 
            to refreshing drinks, every bite satisfies your cravings. Fast, fun, and flavorful!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl font-bold text-primary sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/3]">
              <Image
                src="/images/about-food.jpg"
                alt="Delicious food at 10:01 Cuisine"
                fill
                className="object-cover"
              />
            </div>
            {/* Happy Customers Badge */}
            <div className="absolute -bottom-6 -right-6 flex flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-xl sm:p-8">
              <div className="flex -space-x-2">
                <Image src="/images/testimonials/avatar-1.jpg" alt="" width={40} height={40} className="h-10 w-10 rounded-full border-2 border-white" />
                <Image src="/images/testimonials/avatar-2.jpg" alt="" width={40} height={40} className="h-10 w-10 rounded-full border-2 border-white" />
                <Image src="/images/testimonials/avatar-3.jpg" alt="" width={40} height={40} className="h-10 w-10 rounded-full border-2 border-white" />
              </div>
              <p className="mt-2 font-serif text-lg font-bold text-foreground">500+ Happy Customers</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="font-serif text-2xl font-bold italic text-white sm:text-3xl">
              Satisfy Your Cravings
            </h3>
            <p className="mt-4 text-white/60">
              At 10:01 Cuisine, we believe great food unites people. Our mission is to serve bold 
              meals that blend African flavors with modern love. From savory jollof to peppered 
              chicken, every dish is crafted with care and a touch of passion.
            </p>
            <Button
              className="mt-6 rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="#menu">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            {/* Features Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-xl bg-white/5 p-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                  <h4 className="mt-3 font-semibold text-white">{feature.title}</h4>
                  <p className="mt-1 text-sm text-white/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
