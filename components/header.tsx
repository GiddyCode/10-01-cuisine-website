"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? "bg-[#1a1a1a]/95 shadow-lg backdrop-blur-md" 
        : "bg-transparent"
    }`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="10:01 Cuisine"
            width={50}
            height={50}
            className="h-10 w-auto"
          />
          <span className="hidden font-serif text-lg font-semibold italic text-[#F5C400] sm:block">
            10:01 Cuisine
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button variant="outline" className="rounded-full">
          Contact Us
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
