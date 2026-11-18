import React from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "sunshine" | "coral" | "mint" | "sky" | "neutral";
  title: string;
  highlightText?: string;
  highlightColor?: "sunshine" | "coral" | "mint" | "sky";
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "sunshine",
  title,
  highlightText,
  highlightColor = "coral",
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const highlightStyles = {
    sunshine: "text-[#FFB83F] underline decoration-wavy decoration-[#FFB83F]/60 decoration-2 underline-offset-4",
    coral: "text-[#FF777B] underline decoration-wavy decoration-[#FF777B]/60 decoration-2 underline-offset-4",
    mint: "text-[#4DBF92] underline decoration-wavy decoration-[#4DBF92]/60 decoration-2 underline-offset-4",
    sky: "text-[#589FE9] underline decoration-wavy decoration-[#589FE9]/60 decoration-2 underline-offset-4",
  }[highlightColor];

  const renderTitle = () => {
    if (!highlightText) {
      return <>{title}</>;
    }

    const parts = title.split(highlightText);
    return (
      <>
        {parts[0]}
        <span className={highlightStyles}>{highlightText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={cn(
        "flex flex-col mb-8 sm:mb-12",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <Badge variant={badgeVariant} dot className="mb-3">
          {badge}
        </Badge>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#2D2320] leading-snug tracking-tight">
        {renderTitle()}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-[#6F645D] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

