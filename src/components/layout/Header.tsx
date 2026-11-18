"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/common/Button";
import { CandySweetIcon } from "@/components/common/DecorativeCandy";
import { MobileDrawer } from "./MobileDrawer";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Sản phẩm", href: "/products" },
    { name: "Câu chuyện cửa hàng", href: "/about" },
    { name: "Liên hệ", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FFF7E9]/95 backdrop-blur-md border-b border-[#F0DFCA]/80 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Brand */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Về trang chủ Bánh kẹo Thịnh Vượng"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FFB83F] flex items-center justify-center shadow-[0_4px_12px_rgba(255,184,63,0.35)] group-hover:scale-105 group-hover:rotate-3 transition-transform">
                <CandySweetIcon className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl sm:text-2xl text-[#2D2320] leading-none tracking-tight group-hover:text-[#FF777B] transition-colors">
                  Bánh kẹo Thịnh Vượng
                </span>
                <span className="text-xs text-[#7A6F68] font-medium tracking-wide mt-1">
                  Mỗi ngày một chút ngọt ngào ✨
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1.5 bg-white/70 p-1.5 rounded-full border border-[#EEDFCD] shadow-sm">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-[#FFB83F] text-[#2D2320] shadow-sm"
                        : "text-[#5C4F48] hover:text-[#2D2320] hover:bg-[#FFF2DE]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={siteConfig.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#E9F3FE] text-[#1B5793] hover:bg-[#D5E9FD] text-xs font-bold transition-all border border-[#ADD3FA]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#5A9EE8]" />
                <span>Chat Zalo</span>
              </a>

              <Button
                href={`tel:${siteConfig.phone}`}
                variant="primary"
                size="sm"
                icon={<Phone className="w-3.5 h-3.5" />}
                className="font-bold shadow-sm"
              >
                Hotline: {siteConfig.phoneDisplay}
              </Button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={`tel:${siteConfig.phone}`}
                className="p-2.5 rounded-full bg-[#FFB83F] text-[#2D2320] shadow-sm active:scale-95 transition-transform"
                aria-label="Gọi điện thoại cho cửa hàng"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2.5 rounded-2xl bg-white border border-[#EBDCCB] text-[#2D2320] hover:bg-[#FFF4DF] transition-colors focus:outline-none"
                aria-label="Mở menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

