import type { Metadata } from "next";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Gift,
  PartyPopper,
  Sparkles,
  Navigation,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";

export const metadata: Metadata = {
  title: "Liên Hệ & Địa Chỉ - Bánh kẹo Thịnh Vượng",
  description:
    "Thông tin liên hệ, hotline, Zalo và địa chỉ cửa hàng Bánh kẹo Thịnh Vượng tại Hà Nội. Hỗ trợ tư vấn đặt quà liên hoan, sinh nhật chu đáo.",
};

export default function ContactPage() {
  const specialServices = [
    {
      title: "Gói Quà Sinh Nhật & Thôi Nôi",
      desc: "Phối sẵn các set bánh kẹo, bim bim và đồ chơi xinh xắn thắt nơ ruy băng theo chủ đề bé thích.",
      icon: Gift,
      color: "coral",
    },
    {
      title: "Liên Hoan Lớp Học & Trường Mầm Non",
      desc: "Cung cấp số lượng lớn bánh kẹo date mới, chia sẵn từng túi phần thưởng tiện lợi cho các cô giáo.",
      icon: PartyPopper,
      color: "sunshine",
    },
    {
      title: "Quà Tết & Thiếu Nhi 1/6, Trung Thu",
      desc: "Nhận hợp đồng bánh kẹo cho công đoàn cơ quan, doanh nghiệp với mức giá ưu đãi và hóa đơn đầy đủ.",
      icon: Sparkles,
      color: "mint",
    },
  ];

  return (
    <div className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-14">
      {/* 1. Header */}
      <SectionHeading
        badge="Kết Nối Cùng Tiệm"
        badgeVariant="sunshine"
        title="Thông Tin Liên Hệ & Ghé Thăm"
        highlightText="Liên Hệ & Ghé Thăm"
        highlightColor="coral"
        subtitle="Thịnh Vượng luôn sẵn lòng lắng nghe và phục vụ quý khách. Đừng ngần ngại liên hệ qua Zalo hoặc Hotline để được hỗ trợ nhanh nhất!"
      />

      {/* 2. Main Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Hotline Card */}
        <div className="p-6 rounded-[2rem] bg-white border border-[#EFE2D1] shadow-sm hover:border-[#FFB83F] transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#FFF4DC] flex items-center justify-center text-[#D98700] mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#8A5820] uppercase tracking-wider block mb-1">
              Hotline Tư Vấn
            </span>
            <h3 className="font-heading font-bold text-xl text-[#2D2320] mb-2">
              {siteConfig.phoneDisplay}
            </h3>
            <p className="text-xs text-[#71655E] leading-relaxed">
              Hỗ trợ hỏi giá, đặt hàng nhanh và tư vấn chọn món hàng ngày.
            </p>
          </div>
          <div className="pt-5 mt-4 border-t border-[#F4E8D8]">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#FFB83F] hover:text-[#D98700] transition-colors"
            >
              <span>Gọi điện thoại ngay →</span>
            </a>
          </div>
        </div>

        {/* Zalo Card */}
        <div className="p-6 rounded-[2rem] bg-white border border-[#EFE2D1] shadow-sm hover:border-[#7CB9F5] transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#EBF4FE] flex items-center justify-center text-[#1B5691] mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#1B5691] uppercase tracking-wider block mb-1">
              Chat Zalo Trực Tiếp
            </span>
            <h3 className="font-heading font-bold text-xl text-[#2D2320] mb-2">
              Zalo Thịnh Vượng
            </h3>
            <p className="text-xs text-[#71655E] leading-relaxed">
              Gửi ảnh mẫu quà, trao đổi danh sách bánh kẹo và nhận phản hồi tức thì.
            </p>
          </div>
          <div className="pt-5 mt-4 border-t border-[#F4E8D8]">
            <a
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#5A9EE8] hover:text-[#1B5691] transition-colors"
            >
              <span>Mở ứng dụng Zalo →</span>
            </a>
          </div>
        </div>

        {/* Address Card */}
        <div className="p-6 rounded-[2rem] bg-white border border-[#EFE2D1] shadow-sm hover:border-[#FF777B] transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#FFEBEB] flex items-center justify-center text-[#FF777B] mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#FF777B] uppercase tracking-wider block mb-1">
              Địa Chỉ Cửa Hàng
            </span>
            <h3 className="font-heading font-bold text-base text-[#2D2320] mb-2 leading-snug">
              {siteConfig.address}
            </h3>
            <p className="text-xs text-[#71655E] leading-relaxed">
              Mặt tiền đường rộng rãi, dễ tìm, thuận tiện đỗ xe máy và ô tô ghé mua.
            </p>
          </div>
          <div className="pt-5 mt-4 border-t border-[#F4E8D8]">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#FF777B]">
              <span>Mở cửa đón khách mỗi ngày</span>
            </span>
          </div>
        </div>

        {/* Hours Card */}
        <div className="p-6 rounded-[2rem] bg-white border border-[#EFE2D1] shadow-sm hover:border-[#79D8B1] transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#EBF8F2] flex items-center justify-center text-[#4DBF92] mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#136142] uppercase tracking-wider block mb-1">
              Giờ Mở Cửa
            </span>
            <h3 className="font-heading font-bold text-xl text-[#2D2320] mb-2">
              07:30 – 21:30
            </h3>
            <p className="text-xs text-[#71655E] leading-relaxed">
              Mở cửa tất cả các ngày trong tuần, kể cả ngày lễ Tết và cuối tuần.
            </p>
          </div>
          <div className="pt-5 mt-4 border-t border-[#F4E8D8]">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#136142]">
              <span className="w-2 h-2 rounded-full bg-[#79D8B1] animate-pulse" />
              <span>Đang hoạt động</span>
            </span>
          </div>
        </div>
      </div>

      {/* 3. Services / Party & Gift Ordering */}
      <div className="bg-[#FFFBF5] rounded-[2.5rem] border border-[#EFE3D4] p-6 sm:p-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF777B] block mb-2">
            Dịch vụ đặc biệt
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#2D2320]">
            Đặt Quà Sự Kiện & Tiệc Lớp Học
          </h2>
          <p className="mt-2 text-sm text-[#70645E]">
            Thịnh Vượng nhận chuẩn bị các phần quà bánh kẹo theo ngân sách và chủ đề yêu thích của bé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialServices.map((srv) => (
            <div
              key={srv.title}
              className="p-6 rounded-[2rem] bg-white border border-[#EFE2D1] hover:border-[#FFB83F] transition-all shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FFF6E9] border border-[#F3E5D4] flex items-center justify-center mb-4">
                <srv.icon className="w-6 h-6 text-[#FF777B]" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#2D2320] mb-2">
                {srv.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6A5E57] leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            href={siteConfig.zaloUrl}
            isExternal
            variant="primary"
            size="lg"
            icon={<MessageCircle className="w-4 h-4" />}
            className="font-bold shadow-md"
          >
            Nhắn tin Zalo để nhận báo giá quà tiệc
          </Button>
        </div>
      </div>

      {/* 4. Directions Map Frame Preview */}
      <div className="bg-white rounded-[2.5rem] border border-[#EFE2D1] p-6 sm:p-10 shadow-[0_12px_36px_rgba(139,92,43,0.06)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB83F] flex items-center gap-1.5">
              <Navigation className="w-4 h-4" />
              Chỉ dẫn đường đi
            </span>
            <h3 className="font-heading font-bold text-2xl text-[#2D2320]">
              Ghé Tiệm Bánh Kẹo Thịnh Vượng
            </h3>
            <p className="text-sm text-[#665A54] leading-relaxed">
              Cửa hàng tọa lạc tại vị trí trung tâm, rất thuận tiện đi lại từ các quận Hoàn Kiếm, Ba Đình, Hai Bà Trưng.
            </p>

            <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#5E514B]">
              <p>📍 <strong>Địa chỉ:</strong> {siteConfig.address}</p>
              <p>⏰ <strong>Thời gian:</strong> 07:30 – 21:30 hàng ngày</p>
              <p>📞 <strong>Điện thoại:</strong> {siteConfig.phoneDisplay}</p>
            </div>

            <div className="pt-2">
              <Button
                href={`tel:${siteConfig.phone}`}
                variant="outline"
                size="md"
                icon={<Phone className="w-4 h-4" />}
                className="font-bold"
              >
                Gọi trước khi ghé tiệm
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[16/9] w-full rounded-[2rem] overflow-hidden bg-[#FAF0E1] border-2 border-[#EFE2D1] flex flex-col items-center justify-center p-6 text-center shadow-inner">
              <div className="w-16 h-16 rounded-full bg-[#FF777B] flex items-center justify-center text-white mb-3 shadow-md">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-bold text-lg text-[#2D2320]">
                {siteConfig.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#73665F] max-w-sm mt-1">
                {siteConfig.address}
              </p>
              <div className="mt-4">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFB83F] hover:bg-[#F2A321] text-[#2D2320] font-bold text-xs shadow-sm transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Mở Google Maps chỉ đường</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
