"use client";

import { openCalendly } from "@/lib/calendy";
import React, { useState } from "react";
import {debug} from "@/lib/debug"

type CalendlyButtonVariant = "primary" | "outline" | "ghost";
type CalendlyButtonSize = "sm" | "md" | "lg";
type CalendlyButtonRounded = "none" | "md" | "lg" | "xl" | "2xl" | "full";

interface CalendlyButtonProps {
  children: React.ReactNode;
  variant?: CalendlyButtonVariant;
  size?: CalendlyButtonSize;
  rounded?: CalendlyButtonRounded;
  className?: string;
}

export default function CalendlyButton({
  children,
  variant = "primary",
  size = "md",
  rounded = "2xl",
  className = "",
}: CalendlyButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    debug("CalendlyButton", "Button clicked");

    try {
      setLoading(true);
      await openCalendly();
      debug("CalendlyButton", "Calendly opened successfully");
    } catch (error) {
      debug("CalendlyButton", "Failed to open Calendly", error);
    } finally {
      setLoading(false);
    }
  };

  const variantClasses = {
    primary: `
      bg-[#00E5FF]
      text-[#0B0F17]
      border
      border-[#00E5FF]
      hover:bg-[#00E5FF]/90
      hover:border-[#00E5FF]/90
    `,

    outline: `
      bg-transparent
      text-[#00E5FF]
      border
      border-[#00E5FF]
      hover:bg-[#00E5FF]/10
    `,

    ghost: `
      bg-transparent
      text-white/70
      border
      border-white/10
      hover:text-white
      hover:bg-white/5
      hover:border-white/20
    `,
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-sm font-semibold",
  };

  const roundedClasses = {
    none: "rounded-none",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`
        group
        inline-flex
        items-center
        justify-center
        gap-2.5
        font-semibold
        transition-all
        duration-200
        active:scale-[0.98]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#00E5FF]/50
        disabled:cursor-wait
        disabled:opacity-70
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${roundedClasses[rounded]}
        ${className}
      `}
    >
      {loading ? (
        <>
          <span
            className="
              h-3.5
              w-3.5
              rounded-full
              border-2
              border-current
              border-t-transparent
              animate-spin
            "
            aria-hidden="true"
          />
          Opening...
        </>
      ) : (
        children
      )}
    </button>
  );
}