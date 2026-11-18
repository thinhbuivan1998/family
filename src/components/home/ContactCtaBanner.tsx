"use client";

import React from "react";
import { Phone, MessageCircle, MapPin, Clock, Heart } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/common/Button";
import { CandySweetIcon, SparkleStar } from "@/components/common/DecorativeCandy";
import { FloatingElement, FadeIn } from "@/components/common/MotionWrapper";

export function ContactCtaBanner() {
  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FFF0D6] via-[#FFEADB] to-[#FFF4E5] border-2 border-[#F6DCBD] p-6 sm:p-12 shadow-[0_16px_36px_rgba(139,92,43,0.08)]">
        {/* Floating candies in background */}
        <div className="absolute top-6 right-8 opacity-30 pointer-events-none rotate-12">
          <FloatingElement duration={5} amplitude={8}>
            <CandySweetIcon className="w-16 h-16 sm:w-24 sm:h-24" />
          </FloatingElement>
        </div>
        <div className="absolute bottom-6 left-6 opacity-25 pointer-events-none -rotate-6">
          <FloatingElement duration={4} amplitude={6} delay={1}>
            <SparkleStar className="w-8 h-8 text-[#FF777B]" />
          </FloatingElement>
        </div>

        <FadeIn className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#F2DECA] text-xs font-bold text-[#8A5820] uppercase tracking-wide mb-4 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-[#FF777B] fill-[#FF777B]" />
            <span>Liên Hệ Đặt Món & Tư Vấn</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#2D2320] leading-snug tracking-tight">
            Bạn Cần Tư Vấn Bánh Kẹo Hay <span className="text-[#FF777B]">Đặt Quà Sự Kiện?</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#61554E] leading-relaxed">
            Thịnh Vượng luôn sẵn sàng hỗ trợ tư vấn chọn bánh kẹo theo sở thích, đóng gói quà tặng sinh nhật, liên hoan lớp học và giao tận nơi chu đáo.
          </p>

          {/* Contact Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              href={siteConfig.zaloUrl}
              isExternal
              variant="sky"
              size="lg"
              icon={<MessageCircle className="w-4 h-4" />}
              className="w-full sm:w-auto font-bold text-base shadow-[0_6px_20px_rgba(124,185,245,0.4)]"
            >
              Nhắn tin Zalo ngay
            </Button>

            <Button
              href={`tel:${siteConfig.phone}`}
              variant="primary"
              size="lg"
              icon={<Phone className="w-4 h-4" />}
              className="w-full sm:w-auto font-bold text-base shadow-[0_6px_20px_rgba(255,184,63,0.4)]"
            >
              Gọi Hotline: {siteConfig.phoneDisplay}
            </Button>
          </div>

          {/* Address & Hours pill */}
          <div className="mt-8 pt-6 border-t border-[#EDD5BA] flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#6F625B]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF777B]" />
              {siteConfig.address}
            </span>
            <span className="hidden sm:inline text-[#D4C1AE]">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#79D8B1]" />
              {siteConfig.openingHours}
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
