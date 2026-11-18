"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, MessageCircle, Store, Sparkles, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { categories } from "@/data/categories";
import { CandySweetIcon } from "@/components/common/DecorativeCandy";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  // Close drawer on path change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Tất cả sản phẩm", href: "/products" },
    { name: "Câu chuyện cửa hàng", href: "/about" },
    { name: "Liên hệ & Địa chỉ", href: "/contact" },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer content */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FFFDF9] shadow-2xl flex flex-col z-10 border-l border-[#F0E2D0] overflow-y-auto">
        {/* Header */}
        <div className="p-5 flex items-center justify-between border-b border-[#F4E7D6] bg-[#FFF7E9]/80 sticky top-0 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#FFB83F] flex items-center justify-center shadow-sm">
              <CandySweetIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="font-heading font-bold text-base text-[#2D2320] block leading-tight">
                Thịnh Vượng
              </span>
              <span className="text-[10px] text-[#FF777B] font-medium tracking-wide">
                Bánh kẹo gia đình
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#7A6F68] hover:text-[#2D2320] hover:bg-[#F3E5D3] transition-colors"
            aria-label="Đóng menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="p-5 flex-1 space-y-6">
          <nav className="space-y-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#FFB83F] text-[#2D2320] shadow-sm"
                      : "text-[#473B35] hover:bg-[#FFF4DE] hover:text-[#2D2320]"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </Link>
              );
            })}
          </nav>

          {/* Categories Quick Links */}
          <div className="pt-2">
            <p className="text-xs font-bold text-[#8A7A71] uppercase tracking-wider px-3 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB83F]" />
              Danh mục món ngon
            </p>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products?category=${cat.slug}`}
                  className="p-2.5 rounded-xl bg-white border border-[#F2E5D3] hover:border-[#FFB83F] transition-all text-xs font-medium text-[#2D2320] flex items-center justify-between hover:shadow-sm"
                >
                  <span className="truncate">{cat.name}</span>
                  <span className="w-2 h-2 rounded-full bg-[#FF777B]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick contact buttons */}
          <div className="pt-4 border-t border-[#F2E5D3] space-y-2.5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-[#FFB83F] text-[#2D2320] font-bold text-sm shadow-[0_4px_12px_rgba(255,184,63,0.35)] hover:bg-[#F2A321] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Gọi Hotline: {siteConfig.phoneDisplay}</span>
            </a>

            <a
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-[#7CB9F5] text-[#143B66] font-bold text-sm shadow-[0_4px_12px_rgba(124,185,245,0.35)] hover:bg-[#5EA5EB] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat Zalo tư vấn ngay</span>
            </a>
          </div>

          {/* Store Info box */}
          <div className="p-4 rounded-2xl bg-[#FFF7E9] border border-[#F0DFCA] text-xs text-[#6F645D] space-y-2">
            <div className="flex items-start gap-2">
              <Store className="w-4 h-4 text-[#FF777B] shrink-0 mt-0.5" />
              <span>{siteConfig.address}</span>
            </div>
            <p className="text-[11px] text-[#8E8078] pl-6">
              Mở cửa: {siteConfig.openingHours}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

