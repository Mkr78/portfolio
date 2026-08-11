"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export function Hero() {
  const { content } = useLanguage();
  const hero = content.hero;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-black to-black p-8 shadow-2xl shadow-cyan-500/10 md:p-12">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25), transparent 25%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.2), transparent 30%), radial-gradient(circle at 60% 80%, rgba(56,189,248,0.18), transparent 28%)"
        }}
      />
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          {hero.badges.map((badge) => (
            <Badge key={badge} glow className="uppercase tracking-wide">
              {badge}
            </Badge>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
            {hero.highlight}
          </p>
          <h1 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {hero.title}
          </h1>
          <p className="max-w-3xl text-base text-white/70 sm:text-lg">
            {hero.subtitle}
          </p>
        </motion.div>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
          <Link href="/projects" className="w-full sm:w-auto">
            <Button className="w-full shadow-cyan-500/30">
              {hero.ctaProjects}
              <ArrowRight size={16} />
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full">
              {hero.ctaContact}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
