"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Product } from "@/types/product";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { siteConfig } from "@/data/site-config";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(product.image);

  const getCategoryColor = (
    cat: string
  ): "sunshine" | "coral" | "mint" | "sky" | "neutral" => {
    switch (cat) {
      case "banh-keo":
        return "sunshine";
      case "bim-bim":
        return "coral";
      case "do-choi":
        return "sky";
      case "san-pham-khac":
        return "mint";
      default:
        return "neutral";
    }
  };

  const zaloInquiryUrl = `${siteConfig.zaloUrl}?text=${encodeURIComponent(
    `Xin chào Bánh kẹo Thịnh Vượng! Mình muốn hỏi thông tin về sản phẩm: ${product.name}`
  )}`;

  return (
    <Card
      rounded="3xl"
      padding="none"
      className="flex flex-col h-full overflow-hidden group border-[#EFE2D1] hover:border-[#FFD599] transition-all duration-300"
    >
      {/* Product Image & Badges */}
      <div className="relative aspect-[4/3] w-full bg-[#FAF0E1] overflow-hidden">
        <Image
          src={imgSrc}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => {
            // Fallback image in case of network or upstream image issue
            setImgSrc(
              "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80"
            );
          }}
        />

        {/* Status badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {product.isNew && (
            <Badge variant="coral" size="sm" dot>
              Mới về
            </Badge>
          )}
          {product.isBestSeller && (
            <Badge variant="sunshine" size="sm">
              Bán chạy
            </Badge>
          )}
          {product.isFeatured && !product.isNew && !product.isBestSeller && (
            <Badge variant="sky" size="sm">
              Đặc sắc
            </Badge>
          )}
        </div>

        {/* Category tag */}
        <div className="absolute bottom-3 left-3 z-10">
          <Badge
            variant={getCategoryColor(product.category)}
            size="sm"
            className="bg-white/90 backdrop-blur-sm shadow-sm"
          >
            {product.categoryName}
          </Badge>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Packaging note */}
          {product.packaging && (
            <span className="text-[11px] font-medium text-[#8F8077] block mb-1">
              Đóng gói: {product.packaging}
            </span>
          )}

          {/* Title */}
          <h3 className="font-heading font-bold text-base sm:text-lg text-[#2D2320] leading-snug group-hover:text-[#E86064] transition-colors line-clamp-2">
            <Link href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          {/* Short description */}
          <p className="mt-2 text-xs sm:text-sm text-[#6E635C] leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Origin or taste highlight */}
          {product.tasteNote && (
            <div className="mt-3 flex items-start gap-1.5 text-[11px] text-[#855D28] bg-[#FFF8EC] py-1.5 px-2.5 rounded-xl border border-[#F3E3CD]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB83F] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{product.tasteNote}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-3.5 border-t border-[#F3E7D8] flex items-center justify-between gap-2">
          {/* Link to detail */}
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#2D2320] hover:text-[#FF777B] transition-colors group/link"
          >
            <span>Chi tiết</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>

          {/* Zalo Inquiry */}
          <a
            href={zaloInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EBF4FE] hover:bg-[#D5E9FE] text-[#1B5691] text-xs font-bold transition-all border border-[#B3D7FC]"
            aria-label={`Hỏi mua ${product.name} qua Zalo`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#4D96E6]" />
            <span>Hỏi mua</span>
          </a>
        </div>
      </div>
    </Card>
  );
}
