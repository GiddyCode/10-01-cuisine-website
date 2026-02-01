import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MenuSection } from "@/components/menu-section";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { DeliverySection } from "@/components/delivery-section";
import { Footer } from "@/components/footer";
import { FloatingCart } from "@/components/floating-cart";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MenuSection />
      <HowItWorks />
      <Testimonials />
      <DeliverySection />
      <Footer />
      <FloatingCart />
    </main>
  );
}
