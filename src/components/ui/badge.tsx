"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Badge({
  className,
  children,
  glow = false,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { glow?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold",
        "border-[color:var(--border)] bg-[color:var(--panel)] text-[color:var(--text)]",
        glow && "shadow-[0_0_18px_-4px_rgba(94,234,212,0.6)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
