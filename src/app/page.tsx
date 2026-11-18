import { HeroBanner } from "@/components/home/HeroBanner";
import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { AboutStoreSection } from "@/components/home/AboutStoreSection";
import { ContactCtaBanner } from "@/components/home/ContactCtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <HeroBanner />

      {/* 2. Product Categories */}
      <CategorySection />

      {/* 3. Featured Products */}
      <FeaturedProductsSection />

      {/* 4. About Store Preview */}
      <AboutStoreSection />

      {/* 5. Contact CTA Banner */}
      <ContactCtaBanner />
    </div>
  );
}
