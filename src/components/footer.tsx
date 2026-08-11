"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Footer() {
  const { content, locale } = useLanguage();
  const tag =
    locale === "fr"
      ? "Construit avec Next.js · Dark mode + i18n · Prêt à déployer"
      : "Built with Next.js · Dark mode + i18n · Deploy ready";
  return (
    <footer className="border-t border-white/5 bg-black/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            Mahmoud Mohamed — {content.seo.headline}
          </p>
          <p className="text-sm text-white/60">{tag}</p>
        </div>
        <div className="flex items-center gap-3 text-white/70">
          <Link
            href="mailto:m.moh78260@gmail.com"
            className="text-sm hover:text-white"
          >
            m.moh78260@gmail.com
          </Link>
          <Link
            href="https://github.com/Mkr78"
            className="rounded-full border border-white/10 p-2 hover:border-white/30 hover:text-white"
          >
            <Github size={16} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mohamed-mahmoud-a31a81168"
            className="rounded-full border border-white/10 p-2 hover:border-white/30 hover:text-white"
          >
            <Linkedin size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
