"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Heart,
  Star,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/data/site-config";
import {
  CandyLollipopIcon,
  CandySweetIcon,
  SparkleStar,
} from "@/components/common/DecorativeCandy";
import { FadeIn, FloatingElement } from "@/components/common/MotionWrapper";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden pt-6 pb-14 sm:pt-10 sm:pb-20 bg-gradient-to-b from-[#FFF7E9] via-[#FFF3DF] to-[#FFF7E9]">
      {/* Decorative background floating elements */}
      <div className="absolute top-10 left-5 sm:left-12 opacity-40 pointer-events-none -rotate-12">
        <FloatingElement duration={5} amplitude={10}>
          <CandyLollipopIcon className="w-14 h-14 sm:w-20 sm:h-20" />
        </FloatingElement>
      </div>

      <div className="absolute bottom-10 right-4 sm:right-16 opacity-40 pointer-events-none rotate-12">
        <FloatingElement duration={6} amplitude={12} delay={1}>
          <CandySweetIcon className="w-14 h-14 sm:w-20 sm:h-20" />
        </FloatingElement>
      </div>

      <div className="absolute top-1/3 right-8 sm:right-1/4 opacity-35 pointer-events-none">
        <FloatingElement duration={4} amplitude={6} delay={0.5}>
          <SparkleStar className="w-6 h-6 text-[#FFB83F]" />
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <FadeIn delay={0.1}>
              {/* Friendly Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F2DECA] shadow-sm mb-5">
                <span className="w-2 h-2 rounded-full bg-[#FF777B] animate-ping" />
                <span className="text-xs font-bold text-[#8A5820] tracking-wide uppercase">
                  Cửa hàng bánh kẹo gia đình • Thịnh Vượng
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              {/* Main Headline */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#2D2320] leading-[1.15] tracking-tight">
                Mỗi ngày một chút{" "}
                <span className="relative inline-block text-[#FF777B]">
                  ngọt ngào!
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#FFB83F]"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 14C25 5 75 5 97 14"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              {/* Subtitle */}
              <p className="mt-5 text-base sm:text-lg text-[#5E514A] leading-relaxed max-w-xl mx-auto lg:mx-0">
                {siteConfig.shortIntro}
              </p>
            </FadeIn>

            {/* Call to action buttons */}
            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Button
                  href="/products"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  className="w-full sm:w-auto font-bold text-base shadow-[0_6px_20px_rgba(255,184,63,0.4)]"
                >
                  Khám phá món ngon
                </Button>

                <Button
                  href={siteConfig.zaloUrl}
                  isExternal
                  variant="outline"
                  size="lg"
                  icon={<MessageCircle className="w-4 h-4 text-[#5A9EE8]" />}
                  className="w-full sm:w-auto font-bold text-base border-2"
                >
                  Nhắn tin Zalo tư vấn
                </Button>
              </div>
            </FadeIn>

            {/* Quick trust badges */}
            <FadeIn delay={0.5}>
              <div className="mt-10 pt-6 border-t border-[#EED7BE] grid grid-cols-3 gap-3 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0D6] flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 text-[#D98700] fill-[#FFB83F]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-[#2D2320]">
                      Gần 10 Năm
                    </h4>
                    <p className="text-[11px] text-[#7A6F68]">Gắn bó mọi nhà</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#FFEBEB] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#FF777B]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-[#2D2320]">
                      100% Date Mới
                    </h4>
                    <p className="text-[11px] text-[#7A6F68]">
                      Nguồn gốc rõ ràng
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#EBF8F2] flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4 text-[#4DBF92] fill-[#79D8B1]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-[#2D2320]">
                      Tận Tâm
                    </h4>
                    <p className="text-[11px] text-[#7A6F68]">
                      Như người trong nhà
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Visual Product Showcase */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.3}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Card */}
                <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-white/90 border-2 border-[#F0DFC9] shadow-[0_20px_45px_rgba(139,92,43,0.12)]">
                  <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full rounded-[2rem] overflow-hidden bg-[#FFF3DF]">
                    <Image
                      src="https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=1000&q=80"
                      alt="Bánh kẹo Thịnh Vượng ngọt ngào"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#FF777B] text-xs font-bold mb-1 shadow-sm">
                        Món mới mỗi tuần
                      </span>
                      <p className="font-heading font-bold text-base sm:text-lg leading-tight">
                        Hơn 100+ món bánh kẹo & đồ chơi phong phú
                      </p>
                    </div>
                  </div>

                  {/* Floating pill badge 1: Top Right */}
                  <FloatingElement
                    duration={4}
                    amplitude={5}
                    delay={0.2}
                    className="absolute -top-4 -right-2 sm:-right-4"
                  >
                    <div className="bg-white rounded-2xl p-2.5 sm:p-3 border border-[#EED7BE] shadow-lg flex items-center gap-2.5 rotate-3 hover:rotate-0 transition-transform">
                      <div className="w-8 h-8 rounded-xl bg-[#FFB83F] flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-[#2D2320]" />
                      </div>
                      <div>
                        <span className="font-heading font-bold text-xs text-[#2D2320] block">
                          Kẹo dẻo & Bim bim
                        </span>
                        <span className="text-[10px] text-[#FF777B] font-semibold">
                          Giòn rụm • Ngọt thơm
                        </span>
                      </div>
                    </div>
                  </FloatingElement>

                  {/* Floating pill badge 2: Bottom Left */}
                  <FloatingElement
                    duration={5}
                    amplitude={6}
                    delay={0.8}
                    className="absolute -bottom-4 -left-2 sm:-left-4"
                  >
                    <div className="bg-white rounded-2xl p-2.5 sm:p-3 border border-[#EED7BE] shadow-lg flex items-center gap-2.5 -rotate-2 hover:rotate-0 transition-transform">
                      <div className="w-8 h-8 rounded-xl bg-[#79D8B1] flex items-center justify-center">
                        <Heart className="w-4 h-4 text-[#164E39]" />
                      </div>
                      <div>
                        <span className="font-heading font-bold text-xs text-[#2D2320] block">
                          Cửa hàng gia đình
                        </span>
                        <span className="text-[10px] text-[#6E6159]">
                          Chăm chút từng gói quà
                        </span>
                      </div>
                    </div>
                  </FloatingElement>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
