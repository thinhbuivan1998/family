"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/MotionWrapper";

export function FeaturedProductsSection() {
  // Ensure balanced representation of all 4 categories in featured products
  const featuredBanhKeo = products.filter((p) => p.category === "banh-keo" && p.isFeatured).slice(0, 2);
  const featuredBimBim = products.filter((p) => p.category === "bim-bim" && p.isFeatured).slice(0, 2);
  const featuredDoChoi = products.filter((p) => p.category === "do-choi" && p.isFeatured).slice(0, 2);
  const featuredKhac = products.filter((p) => p.category === "san-pham-khac" && p.isFeatured).slice(0, 2);

  const featuredProducts = [
    ...featuredBanhKeo,
    ...featuredBimBim,
    ...featuredDoChoi,
    ...featuredKhac,
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FFFBF4] border-y border-[#EFE3D2]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0D6] border border-[#FFD98C] text-[#8F5900] text-xs font-bold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB83F]" />
                <span>Tuyển Chọn Bán Chạy</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#2D2320] tracking-tight">
                Sản Phẩm <span className="text-[#FF777B]">Nổi Bật Nhất</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#6F635B] max-w-xl">
                Những món bánh kẹo giòn ngon, đồ chơi an toàn được các bạn nhỏ và quý phụ huynh yêu thích nhất tuần này.
              </p>
            </div>

            <div className="hidden md:block shrink-0">
              <Button
                href="/products"
                variant="outline"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="font-bold"
              >
                Xem tất cả món ngon
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeInGrid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex h-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Button
            href="/products"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            className="w-full font-bold shadow-sm"
          >
            Xem tất cả {products.length}+ sản phẩm
          </Button>
        </div>
      </div>
    </section>
  );
}
