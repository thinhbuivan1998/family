import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Smile,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/common/Button";

export function AboutStoreSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#FF777B]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#FFB83F]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-[#4DBF92]" />;
      case "Smile":
      default:
        return <Smile className="w-5 h-5 text-[#589FE9]" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Visual Store Photo & Badges */}
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-white border border-[#EFE2D1] shadow-[0_16px_36px_rgba(139,92,43,0.08)]">
            <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden bg-[#FFF3DF]">
              <Image
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
                alt="Cửa hàng Bánh kẹo Thịnh Vượng ấm cúng"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase font-bold tracking-wider text-[#FFB83F] block">
                  Tiệm bánh kẹo gia đình
                </span>
                <p className="font-heading font-bold text-lg">
                  Tận tâm phục vụ từ năm {siteConfig.establishedYear}
                </p>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-5 right-6 bg-[#FFB83F] text-[#2D2320] px-4 py-2.5 rounded-2xl shadow-lg border border-[#F2A321] flex items-center gap-2">
              <span className="font-heading font-extrabold text-xl leading-none">
                Gần 10
              </span>
              <span className="text-xs font-bold leading-tight">
                Năm gắn bó
                <br />
                cùng tuổi thơ
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Story & 4 Core Values */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF8F2] border border-[#A7E7CD] text-[#136142] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#4DBF92]" />
            <span>Về Bánh Kẹo Thịnh Vượng</span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#2D2320] leading-snug tracking-tight">
            Nơi Lưu Giữ Ký Ức &{" "}
            <span className="text-[#FF777B]">Gửi Gắm Yêu Thương</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#61554E] leading-relaxed">
            {siteConfig.fullStory[0]}
          </p>

          <p className="mt-2.5 text-sm sm:text-base text-[#61554E] leading-relaxed">
            {siteConfig.fullStory[1]}
          </p>

          {/* 4 Core Values Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteConfig.coreValues.map((val) => (
              <div
                key={val.title}
                className="p-4 rounded-2xl bg-white border border-[#EFE3D3] hover:border-[#FFD599] transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="p-2 rounded-xl bg-[#FFF6E9] border border-[#F3E5D4]">
                    {getIcon(val.icon)}
                  </span>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#2D2320]">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs text-[#6F635C] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

          {/* Link to About Page */}
          <div className="mt-8">
            <Button
              href="/about"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="font-bold border-2"
            >
              Đọc toàn bộ câu chuyện cửa hàng
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
