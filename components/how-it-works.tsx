"use client";

import { ShoppingBag, CreditCard, Truck, Clock } from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    title: "Browse & Customize",
    description: "Explore our menu and customize your order with your preferred portions, proteins, and add-ons.",
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description: "Pay securely with Paystack. We accept cards, bank transfers, and mobile money.",
  },
  {
    icon: Clock,
    title: "We Cook Fresh",
    description: "Your order is prepared fresh with quality ingredients. No pre-made meals here!",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Enjoy hot, fresh meals delivered to your doorstep within 30-60 minutes across Abuja.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Delivered Anytime
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Ordering your favorite meals has never been easier
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="group relative text-center">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-14 hidden h-px w-full bg-border lg:block" />
              )}
              
              {/* Step Circle */}
              <div className="relative mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-card shadow-lg transition-transform group-hover:scale-105">
                <step.icon className="h-12 w-12 text-primary" />
                <span className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-md">
                  {index + 1}
                </span>
              </div>

              <h3 className="font-serif text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
