import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle, Heart, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { categories } from "@/data/categories";
import { CandySweetIcon } from "@/components/common/DecorativeCandy";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFF2DE] border-t border-[#EED7BD] text-[#423732] pt-14 pb-24 sm:pb-14 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#E7CEB2]">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-[#FFB83F] flex items-center justify-center shadow-sm">
                <CandySweetIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-[#2D2320] block leading-tight">
                  Bánh kẹo Thịnh Vượng
                </span>
                <span className="text-xs text-[#FF777B] font-medium">
                  {siteConfig.brandSlogan}
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#665952] leading-relaxed">
              Cửa hàng bánh kẹo & đồ chơi truyền thống của gia đình. Nơi lưu giữ những vị ngon tuổi thơ, mang đến niềm vui ngọt ngào và an tâm cho mọi lứa tuổi.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#8B5C2B] bg-white/70 py-2 px-3 rounded-xl border border-[#EDD9C4] w-fit">
              <Sparkles className="w-4 h-4 text-[#FFB83F]" />
              <span>Gắn bó cùng gia đình từ năm {siteConfig.establishedYear}</span>
            </div>
          </div>

          {/* Col 2: Danh mục món ngon */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-base text-[#2D2320] tracking-wide">
              Danh Mục Món Ngon
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-[#5E514B] hover:text-[#FF777B] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFB83F]" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-[#B85800] font-semibold hover:underline inline-flex items-center gap-1.5 mt-1"
                >
                  <span>→ Xem tất cả sản phẩm</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Liên kết nhanh */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-base text-[#2D2320] tracking-wide">
              Khám Phá Cửa Hàng
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#5E514B] hover:text-[#FF777B] transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#5E514B] hover:text-[#FF777B] transition-colors">
                  Câu chuyện cửa hàng gia đình
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#5E514B] hover:text-[#FF777B] transition-colors">
                  Danh sách sản phẩm mới
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#5E514B] hover:text-[#FF777B] transition-colors">
                  Thông tin liên hệ & Hướng dẫn ghé tiệm
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Thông tin liên hệ */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-base text-[#2D2320] tracking-wide">
              Ghé Thăm Cửa Hàng
            </h3>
            <ul className="space-y-3 text-sm text-[#5E514B]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF777B] shrink-0 mt-1" />
                <span className="leading-snug">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#79D8B1] shrink-0" />
                <span>{siteConfig.openingHours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFB83F] shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-bold text-[#2D2320] hover:text-[#FF777B] transition-colors"
                >
                  Hotline: {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={siteConfig.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#7CB9F5] text-[#143B66] font-bold text-xs shadow-sm hover:bg-[#5EA5EB] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Nhắn tin Zalo trực tiếp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#80726A] gap-3">
          <p>© {currentYear} {siteConfig.name}. Tất cả quyền được bảo lưu.</p>
          <p className="flex items-center gap-1">
            <span>Được thực hiện với</span>
            <Heart className="w-3.5 h-3.5 text-[#FF777B] fill-[#FF777B]" />
            <span>dành tặng niềm vui cho các gia đình</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

