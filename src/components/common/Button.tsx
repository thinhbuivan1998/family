import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "mint" | "sky" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  rounded?: "full" | "playful";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  rounded = "full",
  icon,
  iconPosition = "left",
  isExternal = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  }[size];

  const roundedStyles = {
    full: "rounded-full",
    playful: "rounded-2xl",
  }[rounded];

  const variantStyles = {
    primary:
      "bg-[#FFB83F] hover:bg-[#F2A321] text-[#2D2320] shadow-[0_4px_14px_rgba(255,184,63,0.35)] hover:shadow-[0_6px_20px_rgba(255,184,63,0.45)] focus:ring-[#FFB83F]",
    secondary:
      "bg-[#FF777B] hover:bg-[#F05C61] text-white shadow-[0_4px_14px_rgba(255,119,123,0.35)] hover:shadow-[0_6px_20px_rgba(255,119,123,0.45)] focus:ring-[#FF777B]",
    mint:
      "bg-[#79D8B1] hover:bg-[#5FC89D] text-[#164e39] shadow-[0_4px_14px_rgba(121,216,177,0.35)] focus:ring-[#79D8B1]",
    sky:
      "bg-[#7CB9F5] hover:bg-[#5EA5EB] text-[#143B66] shadow-[0_4px_14px_rgba(124,185,245,0.35)] focus:ring-[#7CB9F5]",
    outline:
      "bg-white/80 hover:bg-white text-[#2D2320] border-2 border-[#EADAC5] hover:border-[#FFB83F] shadow-sm focus:ring-[#FFB83F]",
    ghost:
      "bg-transparent hover:bg-[#F6E6CA]/60 text-[#2D2320] focus:ring-[#FFB83F]",
  }[variant];

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, sizeStyles, roundedStyles, variantStyles, className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles, roundedStyles, variantStyles, className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles, roundedStyles, variantStyles, className)}
      {...props}
    >
      {content}
    </button>
  );
}

