import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  rounded?: "default" | "xl" | "2xl" | "3xl";
}

export function Card({
  children,
  hoverEffect = true,
  padding = "md",
  rounded = "3xl",
  className,
  ...props
}: CardProps) {
  const paddingStyles = {
    none: "p-0",
    sm: "p-3 sm:p-4",
    md: "p-4 sm:p-6",
    lg: "p-6 sm:p-8",
  }[padding];

  const roundedStyles = {
    default: "rounded-2xl",
    xl: "rounded-2xl",
    "2xl": "rounded-[1.75rem]",
    "3xl": "rounded-[2rem]",
  }[rounded];

  return (
    <div
      className={cn(
        "bg-white border border-[#F2E5D3] text-[#2D2320]",
        "shadow-[0_8px_24px_rgba(139,92,43,0.06)]",
        hoverEffect &&
          "transition-all duration-300 hover:shadow-[0_16px_36px_rgba(139,92,43,0.12)] hover:-translate-y-1 hover:border-[#FFDCA8]",
        paddingStyles,
        roundedStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

