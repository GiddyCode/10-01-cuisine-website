"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-8 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Main Hero Content */}
        <div className="flex flex-col items-center text-center">
          {/* Headline */}
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-balance">
              Delicious Food,{" "}
              <span className="text-primary">Delivered Fast</span>
            </span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Fresh, homemade African cuisine delivered to your doorstep in Abuja. 
            Made with love by a chef trained by Hilda Baci.
          </p>
          
          <div className="mt-8">
            <Button
              size="lg"
              className="rounded-full bg-primary px-10 py-6 text-base font-semibold text-white hover:bg-primary/90"
              asChild
            >
              <a href="#menu">
                Order Now
              </a>
            </Button>
          </div>
        </div>

        {/* Floating Food Images */}
        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-12">
            {/* Left Food Item */}
            <div className="relative flex-shrink-0">
              <div className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
                {/* Smoke effect */}
                <div className="absolute -top-8 left-1/2 h-16 w-32 -translate-x-1/2 opacity-40">
                  <svg viewBox="0 0 100 50" className="h-full w-full">
                    <path
                      d="M20,50 Q30,30 25,20 Q20,10 30,5 M50,50 Q55,35 50,25 Q45,15 55,5 M80,50 Q75,30 80,20 Q85,10 75,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="animate-pulse text-muted-foreground/30"
                    />
                  </svg>
                </div>
                <Image
                  src="/images/dishes/jollof-rice.jpg"
                  alt="Jollof Rice"
                  width={320}
                  height={320}
                  className="h-full w-full rounded-3xl object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Center Food Item - Larger */}
            <div className="relative flex-shrink-0">
              <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-96 lg:w-96">
                {/* Smoke effect */}
                <div className="absolute -top-10 left-1/2 h-20 w-40 -translate-x-1/2 opacity-40">
                  <svg viewBox="0 0 100 50" className="h-full w-full">
                    <path
                      d="M15,50 Q25,25 20,15 Q15,5 25,0 M40,50 Q45,30 40,20 Q35,10 45,0 M65,50 Q60,30 65,20 Q70,10 60,0 M85,50 Q80,25 85,15 Q90,5 80,0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="animate-pulse text-muted-foreground/30"
                    />
                  </svg>
                </div>
                <Image
                  src="/images/dishes/egusi-soup.jpg"
                  alt="Egusi Soup"
                  width={400}
                  height={400}
                  className="h-full w-full rounded-3xl object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Right Food Item */}
            <div className="relative flex-shrink-0">
              <div className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
                {/* Smoke effect */}
                <div className="absolute -top-8 left-1/2 h-16 w-32 -translate-x-1/2 opacity-40">
                  <svg viewBox="0 0 100 50" className="h-full w-full">
                    <path
                      d="M20,50 Q30,30 25,20 Q20,10 30,5 M50,50 Q55,35 50,25 Q45,15 55,5 M80,50 Q75,30 80,20 Q85,10 75,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="animate-pulse text-muted-foreground/30"
                    />
                  </svg>
                </div>
                <Image
                  src="/images/dishes/peppered-chicken.jpg"
                  alt="Peppered Chicken"
                  width={320}
                  height={320}
                  className="h-full w-full rounded-3xl object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
