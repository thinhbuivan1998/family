"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Candy, Flame, Gamepad2, Gift } from "lucide-react";
import { categories } from "@/data/categories";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/common/MotionWrapper";

export function CategorySection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Candy":
        return <Candy className="w-5 h-5 text-[#8F5900]" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-[#B82B30]" />;
      case "Gamepad2":
        return <Gamepad2 className="w-5 h-5 text-[#1B5793]" />;
      case "Gift":
      default:
        return <Gift className="w-5 h-5 text-[#136142]" />;
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case "sunshine":
        return "hover:border-[#FFB83F] hover:shadow-[0_12px_28px_rgba(255,184,63,0.18)]";
      case "coral":
        return "hover:border-[#FF777B] hover:shadow-[0_12px_28px_rgba(255,119,123,0.18)]";
      case "sky":
        return "hover:border-[#7CB9F5] hover:shadow-[0_12px_28px_rgba(124,185,245,0.18)]";
      case "mint":
      default:
        return "hover:border-[#79D8B1] hover:shadow-[0_12px_28px_rgba(121,216,177,0.18)]";
    }
  };

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeading
          badge="Thế Giới Tuổi Thơ"
          badgeVariant="sunshine"
          title="Danh Mục Sản Phẩm Đa Dạng"
          highlightText="Đa Dạng"
          highlightColor="coral"
          subtitle="Chọn lựa từng nhóm sản phẩm được Thịnh Vượng chăm chút, mang trọn hương vị ngọt ngào và niềm vui đến các bạn nhỏ."
        />
      </FadeIn>

      <StaggerContainer delay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <StaggerItem key={cat.slug} className="flex">
            <Link
              href={`/products?category=${cat.slug}`}
              className={`group w-full rounded-[2rem] bg-white border-2 border-[#EFE4D4] p-3 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${getBorderColor(
                cat.color
              )}`}
            >
              <div>
                {/* Category Image */}
                <div className="relative aspect-[4/3] w-full rounded-[1.5rem] overflow-hidden bg-[#FFF5E5]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <Badge variant={cat.color} size="sm">
                      {cat.badgeText}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="p-1.5 rounded-xl bg-[#FFF6E9] border border-[#F3E5D4]">
                      {getIcon(cat.iconName)}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-[#2D2320] group-hover:text-[#FF777B] transition-colors">
                      {cat.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6C6059] leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Link CTA */}
              <div className="px-3 pb-2 pt-3 border-t border-[#F4E9DC] flex items-center justify-between text-xs font-bold text-[#8A5820] group-hover:text-[#FF777B]">
                <span>Khám phá ngay</span>
                <span className="w-6 h-6 rounded-full bg-[#FFF2DE] group-hover:bg-[#FFEBEB] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
