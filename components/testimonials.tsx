"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Adaeze O.",
    location: "Wuse 2",
    rating: 5,
    text: "Absolutely love the quality and freshness! Every order tastes like it was made with love. The jollof rice is the best I've had in Abuja.",
  },
  {
    id: 2,
    name: "Tunde A.",
    location: "Garki",
    rating: 5,
    text: "Their peppered chicken is amazing! Delivery was fast and the food was still hot. This has become my go-to for office lunch.",
  },
  {
    id: 3,
    name: "Chioma N.",
    location: "Maitama",
    rating: 5,
    text: "I ordered for a family gathering and everyone loved it! The portions are generous and the taste is authentic. Highly recommend!",
  },
  {
    id: 4,
    name: "Ibrahim M.",
    location: "Gwarinpa",
    rating: 5,
    text: "The egusi soup reminds me of my mother's cooking. Fresh ingredients, proper seasoning, and always on time. 10:01 never disappoints!",
  },
  {
    id: 5,
    name: "Ngozi E.",
    location: "Apo",
    rating: 5,
    text: "Best food delivery service in Abuja hands down! The customer service is excellent and the food quality is consistently amazing.",
  },
  {
    id: 6,
    name: "David K.",
    location: "Asokoro",
    rating: 5,
    text: "I've tried many food vendors but 10:01 Cuisine stands out. Their attention to detail and the authentic taste keeps me coming back.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Customer Love
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Hear It From Our Happy Customers
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {`"${testimonial.text}"`}
                </p>

                {/* Customer Info */}
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
