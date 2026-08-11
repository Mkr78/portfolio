"use client";

import { Shield, Sparkles, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";

export function AboutSection() {
  const { content, locale } = useLanguage();
  const about = content.about;
  const labels =
    locale === "fr"
      ? {
          contribution: "Ce que j’apporte",
          security: "Sécurité by design",
          values: "Valeurs"
        }
      : {
          contribution: "What I bring",
          security: "Security by design",
          values: "Values"
        };

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-purple-500/20" />
        <div>
          <p className="text-sm font-semibold text-white">{about.title}</p>
          <p className="text-sm text-white/60">{about.pitch}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <Header icon={<Target size={16} />} label={labels.contribution} />
          <List items={about.contribution} />
        </Card>
        <Card>
          <Header icon={<Shield size={16} />} label={labels.security} />
          <List items={about.securityByDesign} />
        </Card>
        <Card>
          <Header icon={<Sparkles size={16} />} label={labels.values} />
          <div className="flex flex-wrap gap-2">
            {about.values.map((value) => (
              <Badge key={value} className="bg-white/10 text-white/80">
                {value}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function Header({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
      {icon}
      {label}
    </p>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-white/80">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
