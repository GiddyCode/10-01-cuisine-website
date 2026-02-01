"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { CartItem, Dish, SelectedOptions } from "./types";

interface CartContextType {
  items: CartItem[];
  addItem: (dish: Dish, quantity: number, options: SelectedOptions) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function calculateLineTotal(dish: Dish, quantity: number, options: SelectedOptions): number {
  let total = dish.basePrice;
  
  if (options.portion) {
    total += options.portion.priceModifier;
  }
  
  if (options.protein) {
    total += options.protein.price;
  }
  
  for (const addOn of options.addOns) {
    total += addOn.price;
  }
  
  return total * quantity;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((dish: Dish, quantity: number, options: SelectedOptions) => {
    const lineTotal = calculateLineTotal(dish, quantity, options);
    const newItem: CartItem = {
      id: `${dish.id}-${Date.now()}`,
      dish,
      quantity,
      selectedOptions: options,
      lineTotal,
    };
    
    setItems((prev) => [...prev, newItem]);
  }, []);

  const removeItem = useCallback((itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.id !== itemId));
      return;
    }
    
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          const lineTotal = calculateLineTotal(item.dish, quantity, item.selectedOptions);
          return { ...item, quantity, lineTotal };
        }
        return item;
      })
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
