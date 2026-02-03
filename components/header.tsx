"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, Phone, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { CartSheet } from "./cart-sheet";
import { contactInfo } from "@/lib/data";

export function Header() {
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? "bg-[#1a1a1a]/95 shadow-lg backdrop-blur-md" 
        : "bg-transparent"
    }`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="10:01 Cuisine and more"
              width={50}
              height={50}
              className="h-10 w-auto sm:h-12"
            />
            <span className="hidden font-serif text-lg font-semibold italic text-primary sm:block">
              10:01 Cuisine
            </span>
          </Link>

          {/* Divider */}
          <div className="hidden h-6 w-px bg-white/30 md:block" />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.active ? "text-primary" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Cart */}
          <CartSheet>
            <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10 hover:text-white">
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>
          </CartSheet>

          {/* Contact Us Button - Desktop */}
          <Button
            variant="outline"
            className="hidden rounded-full border-white bg-transparent px-6 py-5 text-sm font-semibold text-white hover:bg-white hover:text-foreground md:flex"
            asChild
          >
            <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
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
