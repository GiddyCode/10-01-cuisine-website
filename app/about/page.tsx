"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ChefHat, ShieldCheck, HeadphonesIcon, BadgePercent, Sparkles, Utensils, Heart } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import { FAQs } from "@/components/faqs";
import { Newsletter } from "@/components/newsletter";

const features = [
  {
    icon: ChefHat,
    title: "Expertly Crafted Recipes",
    description: "Our chefs mix creativity with flavor to make every dish unforgettable.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene & Safety First",
    description: "Clean kitchens, sealed packaging, and contactless delivery - always.",
  },
  {
    icon: HeadphonesIcon,
    title: "Friendly Support Team",
    description: "Got a question or issue? Our team is just a message away.",
  },
  {
    icon: BadgePercent,
    title: "Exciting Offers & Deals",
    description: "Crave more, spend less. Enjoy exclusive discounts every week!",
  },
];

const stats = [
  { value: "40+", label: "Unique Menu Items" },
  { value: "500+", label: "Positive Reviews" },
  { value: "5+", label: "Years Experience" },
  { value: "2,000+", label: "Orders Delivered" },
];

const whyChooseUs = [
  {
    icon: Sparkles,
    title: "Freshness You Can Taste",
    description: "We select the finest ingredients and craft each dish with care, delivering vibrant flavors in every bite.",
  },
  {
    icon: Heart,
    title: "Flavor You'll Remember",
    description: "We serve moments, memorable tastes, and satisfaction in every order.",
  },
  {
    icon: Utensils,
    title: "Chef-Crafted Perfection",
    description: "Our expert chefs blend creativity and passion to deliver signature dishes you won't find anywhere else.",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Eating Healthy with 10:01 Cuisine: Yes, You Can!",
    excerpt: "Craving something tasty and healthy? We offer delicious options for...",
    date: "May 8, 2025",
    readTime: "24 mins read",
    image: "/images/blog/blog-1.jpg",
  },
  {
    id: 2,
    title: "How to Host the Ultimate Party",
    excerpt: "Get to know the creative minds crafting your favorite dishes. From their inspirations to secret...",
    date: "May 8, 2025",
    readTime: "24 mins read",
    image: "/images/blog/blog-2.jpg",
  },
  {
    id: 3,
    title: "Not Just Food - A Flavorful Lifestyle",
    excerpt: "Get inspired by what we're cooking, serving, and sharing. The blog serves...",
    date: "May 8, 2025",
    readTime: "24 mins read",
    image: "/images/blog/blog-3.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 sm:py-28">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold italic text-white sm:text-5xl lg:text-6xl">
            10:01 Cuisine - A Delicious Journey That Feels Like Home
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            At 10:01 Cuisine, we believe food should be more than just a meal - it should be an experience. 
            Born from a love of bold flavors, quality ingredients, and good vibes, we set out to create 
            a food destination that blends taste, fun, and freshness into every bite.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-border bg-card p-6">
                <feature.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-[#1a1a1a] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold italic text-white sm:text-4xl lg:text-5xl">
              Behind Every Bite - The 10:01 Cuisine Experience
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Step into the heart of 10:01 Cuisine through our videos - where sizzling sounds, fresh ingredients, 
              and happy moments come together. Watch our chefs in action, explore behind-the-scenes magic, 
              and see why foodies keep coming back for more. Crave it. Watch it. Feel the flavor!
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl font-bold text-primary sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Video Placeholder */}
          <div className="mt-12 relative aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/about-food.jpg"
              alt="Kitchen action"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <button 
                type="button"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-110"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <svg className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Story / Mission / Vision */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold italic text-foreground sm:text-4xl lg:text-5xl">
              Started from cravings, grounded in values, and looking to make a difference!
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Left - Image & Badge */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/about-food.jpg"
                  alt="Our chefs at work"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Chef Badge */}
              <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-4 shadow-xl">
                <p className="text-sm font-medium text-foreground">Our 5+ Culinary Experts</p>
                <p className="text-xs text-muted-foreground">Mixing skills, love for cooking, and tasty flavors!</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                    <Star className="h-4 w-4 fill-primary/50 text-primary/50" />
                  </div>
                  <span className="text-xs text-muted-foreground">(500+ Reviews)</span>
                </div>
              </div>
            </div>

            {/* Right - Story Cards */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl font-bold text-primary">Our Story</h3>
                <p className="mt-3 text-muted-foreground">
                  10:01 Cuisine takes your regular meals and turns them into awesome experiences with tasty 
                  flavors, fresh ingredients, and good vibes. {"We're"} all about sharing our love for great food!
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl font-bold text-primary">Our Mission</h3>
                <p className="mt-3 text-muted-foreground">
                  To serve flavorful, high-quality food that brings people together, sparks smiles, and satisfies 
                  cravings - all while delivering exceptional service and memorable experiences. {"We're"} here to 
                  make every bite count, every visit special, and every customer feel like part of the family.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl font-bold text-primary">Our Vision</h3>
                <p className="mt-3 text-muted-foreground">
                  To be a leading food brand known for taste, innovation, and heart. We aim to expand our love 
                  for food far and wide - creating a community that celebrates diversity in dishes, connects 
                  people through flavors, and sets new standards in the food experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#1a1a1a] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <h2 className="font-serif text-3xl font-bold italic text-white sm:text-4xl">
                Crave-Worthy Reasons to Choose 10:01 Cuisine
              </h2>
              <p className="mt-4 text-white/60">
                At 10:01 Cuisine, we blend fresh ingredients, bold flavors, and passion into every dish. 
                From service to taste, everything we do is crafted to give you an unforgettable food experience.
              </p>
              <Button
                className="mt-6 rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="#contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              {/* Happy Customers */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <Image src="/images/testimonials/avatar-1.jpg" alt="" width={40} height={40} className="h-10 w-10 rounded-full border-2 border-[#1a1a1a]" />
                  <Image src="/images/testimonials/avatar-2.jpg" alt="" width={40} height={40} className="h-10 w-10 rounded-full border-2 border-[#1a1a1a]" />
                  <Image src="/images/testimonials/avatar-3.jpg" alt="" width={40} height={40} className="h-10 w-10 rounded-full border-2 border-[#1a1a1a]" />
                </div>
                <p className="font-serif text-lg font-bold text-white">500+ Happy Customers</p>
              </div>
            </div>

            {/* Right - Features */}
            <div className="space-y-4">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQs */}
      <FAQs />

      {/* Blog Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold italic text-foreground sm:text-4xl">
                Taste the Talk - Our Food Stories
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Explore the stories behind your favorite dishes and discover new food trends with 10:01 Cuisine - 
                your go-to for tasty recipes!
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="shrink-0 rounded-full border-2 border-foreground bg-transparent px-6 py-5 font-semibold text-foreground hover:bg-foreground hover:text-background"
              asChild
            >
              <a href="/blog">
                Browse More Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Blog Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-lg font-bold text-foreground group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {post.excerpt}
                    <a href="/blog" className="ml-1 font-semibold text-foreground hover:text-primary">
                      Read More
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  );
}
