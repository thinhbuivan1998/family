import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "sunshine" | "coral" | "mint" | "sky" | "neutral";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  children,
  variant = "sunshine",
  size = "md",
  dot = false,
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    sunshine: "bg-[#FFF2D9] text-[#9A6200] border border-[#FFD98C]",
    coral: "bg-[#FFE8E9] text-[#B82B30] border border-[#FFAEB2]",
    mint: "bg-[#E6F8F0] text-[#136142] border border-[#A7E7CD]",
    sky: "bg-[#E9F3FE] text-[#1B5793] border border-[#ADD3FA]",
    neutral: "bg-[#F5ECE0] text-[#5A4E46] border border-[#E3D4C3]",
  }[variant];

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 font-medium tracking-wide",
    md: "text-xs px-2.5 py-1 font-semibold",
  }[size];

  const dotColors = {
    sunshine: "bg-[#FFB83F]",
    coral: "bg-[#FF777B]",
    mint: "bg-[#79D8B1]",
    sky: "bg-[#7CB9F5]",
    neutral: "bg-[#8A796E]",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full uppercase transition-colors select-none",
        variantStyles,
        sizeStyles,
        className
      )}
      {...props}
    >
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full shrink-0 animate-pulse", dotColors)} />}
      <span>{children}</span>
    </span>
  );
}

