"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

const sections = [
  { href: "/", key: "home" },
  { href: "/projects", key: "projects" },
  { href: "/about", key: "about" },
  { href: "/skills", key: "skills" },
  { href: "/experience", key: "experience" },
  { href: "/contact", key: "contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const { content } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--border)] bg-[color:var(--nav-bg)] backdrop-blur-xl shadow-[var(--shadow)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold">
          <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30" />
          <span className="text-white">
            Mahmoud Mohamed
            <span className="block text-xs font-normal text-white/60">
              Big Data & IA
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-3 md:flex">
          {sections.map((section) => {
            const label = content.navigation[section.key as keyof typeof content.navigation];
            const isActive =
              section.href === "/"
                ? pathname === "/"
                : pathname.startsWith(section.href);
            return (
              <Link
                key={section.href}
                href={section.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:text-white",
                  isActive && "bg-white/10 text-white"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        <Button
          variant="ghost"
          className="md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-black/90 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-2">
            {sections.map((section) => {
              const label =
                content.navigation[section.key as keyof typeof content.navigation];
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  className="rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/10"
                >
                  {label}
                </Link>
              );
            })}
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
