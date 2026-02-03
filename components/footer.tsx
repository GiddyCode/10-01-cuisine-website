"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="10:01 Cuisine and more"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
              <span className="font-serif text-xl font-semibold text-primary">
                10:01 Cuisine
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70">
              Fresh, homemade African cuisine delivered to your doorstep in Abuja. 
              Made with love, served with pride.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              <a 
                href={contactInfo.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/70 hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-sm text-white/70 hover:text-primary"
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/70 hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/checkout"
                  className="text-sm text-white/70 hover:text-primary"
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  {contactInfo.address}
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Order */}
          <div>
            <h3 className="font-semibold text-white">Order Now</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Button
                asChild
                className="bg-accent text-white hover:bg-accent/90"
              >
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Order
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <a
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  {contactInfo.instagram}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} 10:01 Cuisine and more. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <span>Powered by fresh ingredients & love</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
