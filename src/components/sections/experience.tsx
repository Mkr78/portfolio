"use client";

import { Building2, ShieldCheck, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";

export function ExperienceSection() {
  const { content, locale } = useLanguage();
  const { roles, title } = content.experience;
  const description =
    locale === "fr"
      ? "Missions freelance, outils data/IA, automatisations et garde-fous de sécurité."
      : "Freelance missions, data/AI tools, automation, and security guardrails.";
  const labels =
    locale === "fr"
      ? { achievements: "Réalisations", stack: "Stack", security: "Sécurité" }
      : { achievements: "Achievements", stack: "Stack", security: "Security" };

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-blue-500/20" />
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="text-sm text-white/60">{description}</p>
        </div>
      </div>
      <div className="space-y-4">
        {roles.map((role, idx) => (
          <motion.div
            key={`${role.role}-${role.company}-${role.period}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
          >
            <Card>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-cyan-200">
                    <Building2 size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{role.role}</p>
                    <p className="text-xs text-white/60">
                      {role.company} — {role.location}
                    </p>
                  </div>
                </div>
                <Badge className="bg-white/10 text-white/80">{role.period}</Badge>
              </div>
              <p className="mt-3 text-sm text-white/70">{role.description}</p>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <Block title={labels.achievements} items={role.achievements} />
                <Block title={labels.stack} items={role.stack} />
                <Block
                  title={labels.security}
                  icon={<ShieldCheck size={14} />}
                  items={role.security}
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Block({
  title,
  items,
  icon
}: {
  title: string;
  items: string[];
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/5 p-3">
      <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
        {icon ?? <Workflow size={14} />} {title}
      </p>
      <ul className="mt-2 space-y-2 text-sm text-white/75">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
