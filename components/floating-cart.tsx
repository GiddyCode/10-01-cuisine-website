"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { CartSheet } from "./cart-sheet";

function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function FloatingCart() {
  const { itemCount, subtotal } = useCart();

  if (itemCount === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <CartSheet>
        <Button
          size="lg"
          className="rounded-full bg-accent px-6 py-6 text-white shadow-xl hover:bg-accent/90 hover:shadow-2xl"
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          <span className="font-semibold">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
          <span className="mx-2 text-white/50">|</span>
          <span className="font-bold">{formatPrice(subtotal)}</span>
        </Button>
      </CartSheet>
    </div>
  );
}
