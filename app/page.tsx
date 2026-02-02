import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FoodCategories } from "@/components/food-categories";
import { PromoBanners } from "@/components/promo-banners";
import { MenuSection } from "@/components/menu-section";
import { Testimonials } from "@/components/testimonials";
import { InstagramReels } from "@/components/instagram-reels";
import { DeliverySection } from "@/components/delivery-section";
import { Footer } from "@/components/footer";
import { FloatingCart } from "@/components/floating-cart";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FoodCategories />
      <PromoBanners />
      <MenuSection />
      <Testimonials />
      <InstagramReels />
      <DeliverySection />
      <Footer />
      <FloatingCart />
    </main>
  );
}
