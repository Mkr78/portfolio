"use client";

import { Map, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";

export function OpenDataSection() {
  const { content, locale } = useLanguage();
  const openData = content.openData;
  const subtitle =
    locale === "fr"
      ? "Idées prêtes à documenter et publier."
      : "Ideas ready to document and publish.";

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-indigo-500/20" />
        <div>
          <p className="text-sm font-semibold text-white">{openData.title}</p>
          <p className="text-sm text-white/60">{subtitle}</p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {openData.items.map((idea) => (
          <Card key={idea.title}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
              <Rocket size={14} /> {idea.status}
            </div>
            <h3 className="mt-3 text-base font-semibold text-white">
              {idea.title}
            </h3>
            <p className="mt-2 text-sm text-white/70">{idea.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {idea.tags.map((tag) => (
                <Badge key={tag} className="bg-white/10 text-white/70">
                  <Map size={12} />
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
