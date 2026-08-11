"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_0_25px_-10px_rgba(56,189,248,0.6)] hover:from-cyan-400 hover:to-blue-400",
  secondary:
    "border border-[color:var(--border)] bg-[color:var(--panel)] text-[color:var(--text)] hover:border-cyan-400/60 hover:shadow-[0_10px_30px_rgba(6,182,212,0.18)]",
  ghost:
    "text-sm text-muted-foreground hover:text-[color:var(--text)] hover:bg-[color:var(--panel-strong)] border border-transparent",
  outline:
    "border border-[color:var(--border)] text-[color:var(--text)] hover:border-cyan-400/60 hover:bg-[color:var(--panel)]"
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400",
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
