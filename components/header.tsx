"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { CartSheet } from "./cart-sheet";
import { contactInfo } from "@/lib/data";

export function Header() {
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#menu", label: "Menu" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#delivery", label: "Delivery Areas" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="10:01 Cuisine and more"
            width={50}
            height={50}
            className="h-10 w-auto sm:h-12"
          />
          <span className="hidden font-serif text-lg font-semibold text-foreground sm:block">
            10:01 Cuisine
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Phone - Desktop */}
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground lg:flex"
          >
            <Phone className="h-4 w-4" />
            <span>{contactInfo.phone}</span>
          </a>

          {/* Cart */}
          <CartSheet>
            <Button variant="outline" size="icon" className="relative bg-transparent">
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>
          </CartSheet>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col gap-6 pt-6">
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src="/logo.png"
                    alt="10:01 Cuisine and more"
                    width={40}
                    height={40}
                  />
                  <span className="font-serif text-lg font-semibold">
                    10:01 Cuisine
                  </span>
                </Link>

                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="border-t pt-6">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="font-medium">{contactInfo.phone}</span>
                  </a>
                </div>

                <Button
                  asChild
                  className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href={contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order via WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
