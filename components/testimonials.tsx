"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    role: "Business Owner",
    image: "/images/testimonials/user-1.jpg",
    text: "Ordered for a family night. The kids loved the jollof rice and peppered chicken, and I was impressed with the portion sizes. Affordable, tasty, and perfect for everyone in the family.",
  },
  {
    id: 2,
    name: "Tunde Adeyemi",
    role: "Software Engineer",
    image: "/images/testimonials/user-2.jpg",
    text: "I honestly didn't think online food could be this awesome, but 10:01 Cuisine totally blew me away! It looked and tasted so fancy, like I was eating at a restaurant right at home!",
  },
  {
    id: 3,
    name: "Chioma Nnamdi",
    role: "Marketing Analyst",
    image: "/images/testimonials/user-3.jpg",
    text: "I've ordered from 10:01 Cuisine many times, and they've never messed up my order. Everything is hot, fresh, and tasty. Customer support is great too. Highly recommend!",
  },
  {
    id: 4,
    name: "Emmanuel Okoro",
    role: "Logistics Manager",
    image: "/images/testimonials/user-1.jpg",
    text: "10:01 Cuisine totally leveled up my lunch! Their jollof rice is always fresh, super filling, and packed with flavor. And I love that it comes hot every single time.",
  },
  {
    id: 5,
    name: "Funke Adewale",
    role: "Startup Founder",
    image: "/images/testimonials/user-2.jpg",
    text: "Every single time I order, the food is just as tasty as the first time! The WhatsApp ordering is super easy to use, and the delivery crew is always on point and friendly. Totally dependable!",
  },
];

const avatars = [
  "/images/testimonials/avatar-1.jpg",
  "/images/testimonials/avatar-2.jpg",
  "/images/testimonials/avatar-3.jpg",
];

export function Testimonials() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 320 + 24; // card width (w-80 = 320px) + gap (gap-6 = 24px)
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with Happy Customer Count */}
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold italic text-foreground sm:text-4xl lg:text-5xl">
              {"Here's What Our Foodies"}
              <br />
              Are Raving About!
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              We serve happiness, flavor, and unforgettable experiences. {"Here's"}
              what our customers say about their 10:01 Cuisine moments.
            </p>
          </div>

          {/* Happy Customer Stats */}
          <div className="flex flex-col items-center">
            <div className="flex -space-x-3">
              {avatars.map((avatar, i) => (
                <div
                  key={i}
                  className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-background"
                >
                  <Image
                    src={avatar || "/placeholder.svg"}
                    alt="Happy customer"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="mt-3 font-serif text-xl font-bold text-foreground">500+ Happy Customers</p>
          </div>
        </div>

        {/* Testimonial Cards - Horizontal Scroll */}
        <div 
          ref={scrollRef}
          className="mt-12 -mx-4 px-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          <div className="flex gap-6 min-w-max">
            {testimonials.map((testimonial) => {
              const isSelected = selectedId === testimonial.id;
              return (
                <button
                  type="button"
                  key={testimonial.id}
                  onClick={() => setSelectedId(isSelected ? null : testimonial.id)}
                  className={`w-80 flex-shrink-0 rounded-2xl border-2 p-6 text-left transition-all duration-300 ${
                    isSelected ? "border-primary bg-primary/5" : "border-border bg-card hover:border-border/80"
                  }`}
                >
                  {/* Quote Icon */}
                  <div className={`font-serif text-5xl leading-none transition-colors duration-300 ${isSelected ? "text-primary" : "text-foreground"}`}>
                    {'\u201C\u201C'}
                  </div>

                  {/* Review Text */}
                  <p className="mt-4 text-base leading-relaxed text-foreground">
                    {`"${testimonial.text}"`}
                  </p>

                  {/* Customer Info */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="mt-8 flex justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="h-12 w-12 rounded-full border-foreground bg-foreground text-background hover:bg-foreground/90 hover:text-background"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonials</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="h-12 w-12 rounded-full border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonials</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
