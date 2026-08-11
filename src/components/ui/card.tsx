"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border p-6 text-white shadow-lg shadow-black/30",
        "backdrop-blur-md transition-transform duration-300 hover:-translate-y-1",
        className
      )}
      style={{
        background: "var(--panel)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow)",
        color: "var(--text)"
      }}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
