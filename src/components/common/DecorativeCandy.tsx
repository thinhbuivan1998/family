import React from "react";
import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export function CandyLollipopIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-10 h-10 drop-shadow-sm", className)}
    >
      <circle cx="32" cy="24" r="20" fill="#FFB83F" />
      <path
        d="M32 4C20.954 4 12 12.954 12 24C12 35.046 20.954 44 32 44"
        stroke="#FF777B"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M32 12C25.373 12 20 17.373 20 24C20 30.627 25.373 36 32 36"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="32" cy="24" r="4" fill="#FF777B" />
      <path
        d="M32 44V60"
        stroke="#D9C7B2"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CandySweetIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-10 h-10 drop-shadow-sm", className)}
    >
      {/* Wrapped candy ends */}
      <path
        d="M10 24L22 32L10 40L6 32L10 24Z"
        fill="#79D8B1"
      />
      <path
        d="M54 24L42 32L54 40L58 32L54 24Z"
        fill="#79D8B1"
      />
      {/* Candy body */}
      <rect
        x="18"
        y="18"
        width="28"
        height="28"
        rx="14"
        fill="#FF777B"
      />
      {/* Diagonal stripes */}
      <path
        d="M26 20L40 44"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M20 28L34 50"
        stroke="#FFB83F"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SparkleStar({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
    >
      <path
        d="M16 2L19.5 12.5L30 16L19.5 19.5L16 30L12.5 19.5L2 16L12.5 12.5L16 2Z"
        fill="#FFB83F"
      />
    </svg>
  );
}

