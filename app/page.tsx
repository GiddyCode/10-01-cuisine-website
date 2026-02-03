import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FoodCategories } from "@/components/food-categories";
import { PromoBanners } from "@/components/promo-banners";
import { MenuSection } from "@/components/menu-section";
import { AboutStats } from "@/components/about-stats";
import { CateringSection } from "@/components/catering-section";
import { Testimonials } from "@/components/testimonials";
import { PhotoGallery } from "@/components/photo-gallery";
import { InstagramReels } from "@/components/instagram-reels";
import { FAQs } from "@/components/faqs";
import { Newsletter } from "@/components/newsletter";
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
      <AboutStats />
      <CateringSection />
      <Testimonials />
      <PhotoGallery />
      <InstagramReels />
      <FAQs />
      <Newsletter />
      <Footer />
      <FloatingCart />
    </main>
  );
}
