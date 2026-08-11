"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Command, ArrowRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/contexts/language-context";

type CommandItem = {
  label: string;
  href: string;
  group: "pages";
};

export function CommandPalette() {
  const router = useRouter();
  const { content, locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const portalRoot = typeof document !== "undefined" ? document.body : null;

  const commands = useMemo<CommandItem[]>(() => {
    const base: CommandItem[] = [
      { label: content.navigation.home, href: "/", group: "pages" },
      { label: content.navigation.projects, href: "/projects", group: "pages" },
      { label: content.navigation.skills, href: "/skills", group: "pages" },
      { label: content.navigation.experience, href: "/experience", group: "pages" },
      { label: content.navigation.contact, href: "/contact", group: "pages" },
      { label: content.navigation.blog, href: "/blog", group: "pages" }
    ];
    return base;
  }, [content.navigation]);

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setMounted(true);
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (!mounted || !portalRoot) return;
    const body = portalRoot;
    if (open) {
      const prev = body.style.overflow;
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = prev;
      };
    }
  }, [open, mounted, portalRoot]);

  const placeholder =
    locale === "fr"
      ? "Chercher une page ou un projet (Ctrl/Cmd + K)"
      : "Search a page or project (Ctrl/Cmd + K)";

  if (!mounted) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setQuery("");
        }}
        className="flex w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:border-white/30 sm:w-auto"
        aria-label="Open command palette"
      >
        <Command size={14} /> {placeholder}
      </button>
      {portalRoot &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[1200] flex items-start justify-center bg-[color:var(--overlay)] p-4 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              >
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f] p-4 shadow-2xl shadow-black/50"
                  initial={{ scale: 0.97, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.97, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-2">
                    <input
                      autoFocus
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={placeholder}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none focus:border-cyan-400"
                    />
                    <button
                      type="button"
                      aria-label={locale === "fr" ? "Fermer" : "Close"}
                      className="group h-10 w-10 rounded-full border border-white/10 text-white/70 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                      onClick={() => setOpen(false)}
                    >
                      <X
                        size={16}
                        className="mx-auto transition group-hover:rotate-90 group-hover:scale-110"
                      />
                    </button>
                  </div>
                  <div className="mt-3 max-h-[65vh] overflow-y-auto rounded-xl border border-white/5 bg-white/5">
                    {(() => {
                      const items = filtered;
                      if (items.length === 0) return null;
                      const title = locale === "fr" ? "Pages" : "Pages";
                      return (
                        <div>
                          <p className="px-4 pt-3 text-xs uppercase tracking-[0.2em] text-white/50">
                            {title}
                          </p>
                          {items.map((item) => (
                            <button
                              type="button"
                              key={item.href}
                              className="flex w-full items-center justify-between gap-3 border-b border-white/5 px-4 py-3 text-left text-sm text-white/85 last:border-b-0 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                              onClick={() => {
                                router.push(item.href);
                                setOpen(false);
                              }}
                            >
                              {item.label}
                              <ArrowRight size={14} className="text-white/50" />
                            </button>
                          ))}
                        </div>
                      );
                    })()}
                    {filtered.length === 0 && (
                      <p className="px-4 py-3 text-sm text-white/70">
                        {locale === "fr"
                          ? "Aucun resultat, essayez un autre mot-cle."
                          : "No result, try another keyword."}
                      </p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          portalRoot
        )}
    </>
  );
}
