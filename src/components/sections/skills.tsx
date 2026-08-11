"use client";

import { BrainCircuit, Cloud, Lock, ServerCog, Wand2 } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";

const icons = [BrainCircuit, ServerCog, Wand2, Cloud, Lock];

export function SkillsSection() {
  const { content, locale } = useLanguage();
  const categories = content.skills.categories;
  const description =
    locale === "fr"
      ? "Blocs orientés data, IA, fullstack, devops et sécurité."
      : "Data, AI, fullstack, devops and security focused blocks.";

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-cyan-500/20" />
        <div>
          <p className="text-sm font-semibold text-white">{content.skills.title}</p>
          <p className="text-sm text-white/60">{description}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {categories.map((category, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <Card>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-cyan-200">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {category.name}
                      </p>
                      <p className="text-xs text-white/60">
                        {category.level}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-emerald-500/15 text-emerald-100">
                    {category.level}
                  </Badge>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
