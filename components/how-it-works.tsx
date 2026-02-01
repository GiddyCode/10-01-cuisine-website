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
    <section id="how-it-works" className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Ordering your favorite meals has never been easier
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-border lg:block" />
              )}
              
              {/* Step Circle */}
              <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="h-10 w-10 text-primary" />
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
