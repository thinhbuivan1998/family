"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function FloatingContactBar() {
  return (
    <aside
      aria-label="Liên hệ nhanh"
      className="fixed bottom-4 left-4 right-4 z-40 sm:left-auto sm:right-6 sm:bottom-6 sm:w-auto"
    >
      <div className="bg-white/95 backdrop-blur-md border border-[#F0DFCA] rounded-full p-1.5 shadow-[0_10px_25px_rgba(45,35,32,0.15)] flex items-center justify-between sm:justify-end gap-2">
        {/* Hotline Call Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FFB83F] hover:bg-[#F2A321] text-[#2D2320] font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
          aria-label={`Gọi điện thoại ${siteConfig.phoneDisplay}`}
        >
          <span className="w-6 h-6 rounded-full bg-white/40 flex items-center justify-center shrink-0">
            <Phone className="w-3.5 h-3.5 text-[#2D2320]" />
          </span>
          <span className="whitespace-nowrap">Gọi Hotline</span>
        </a>

        {/* Zalo Chat Button */}
        <a
          href={siteConfig.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#7CB9F5] hover:bg-[#5EA5EB] text-[#143B66] font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
          aria-label="Chat Zalo với Bánh kẹo Thịnh Vượng"
        >
          <span className="w-6 h-6 rounded-full bg-white/40 flex items-center justify-center shrink-0">
            <MessageCircle className="w-3.5 h-3.5 text-[#143B66]" />
          </span>
          <span className="whitespace-nowrap">Chat Zalo</span>
        </a>
      </div>
    </aside>
  );
}

