"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What kind of food does 10:01 Cuisine offer?",
    answer: "We specialize in authentic Nigerian and African cuisine including Jollof Rice, Fried Rice, Egusi Soup, Peppered Chicken, and many more homemade dishes. All our meals are freshly prepared with quality ingredients.",
  },
  {
    question: "How can I pay for my order?",
    answer: "We accept bank transfers, card payments, and cash on delivery. You can also pay via our WhatsApp ordering system for a seamless experience.",
  },
  {
    question: "Do you offer discounts or loyalty programs?",
    answer: "Yes! Keep an eye out for promo codes, and enjoy rewards through our loyalty program. First-time customers get 20% off with code TASTE20. We also run Buy 1 Get 1 FREE deals every Friday!",
  },
  {
    question: "Is the food fresh and hygienic?",
    answer: "Absolutely. We follow strict hygiene practices and prepare every order fresh with high-quality ingredients. Our kitchen is regularly sanitized and all packaging is sealed for your safety.",
  },
  {
    question: "What are your delivery areas in Abuja?",
    answer: "We deliver across major areas in Abuja including Wuse, Garki, Maitama, Gwarinpa, Apo, Asokoro, Jabi, and surrounding areas. Delivery typically takes 30-60 minutes depending on your location.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach our support team via WhatsApp, phone call, or Instagram DM. We're available Monday to Sunday from 8AM to 10PM and always happy to help!",
  },
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Header */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-3xl font-bold italic text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Curious about 10:01 Cuisine? {"We've"} answered the most common questions about 
              delivery, customization, and payment all in one place!
            </p>
            <div className="mt-6 rounded-xl bg-muted p-4">
              <p className="text-sm text-muted-foreground">
                {"We've"} answered the most common questions, but if {"you're"} still unsure - {"don't"} worry! 
                Our team is ready to help.
              </p>
              <Button
                className="mt-4 rounded-full bg-foreground px-6 py-5 text-sm font-semibold text-background hover:bg-foreground/90"
                asChild
              >
                <a href="#contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right FAQs */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                      {openIndex === index ? (
                        <Minus className="h-4 w-4 text-foreground" />
                      ) : (
                        <Plus className="h-4 w-4 text-foreground" />
                      )}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="border-t border-border px-5 pb-5 pt-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
