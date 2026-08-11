"use client";

import { Award, GraduationCap, Languages } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";

export function AcademicSection() {
  const { content } = useLanguage();
  const academic = content.academic;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-200">
          <GraduationCap size={18} />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{academic.title}</p>
          <p className="text-sm text-white/60">{academic.subtitle}</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-3">
          {academic.education.map((item) => (
            <Card key={`${item.degree}-${item.school}`}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">{item.degree}</p>
                  <p className="text-xs text-white/60">
                    {item.school}
                    {item.location ? ` — ${item.location}` : ""}
                  </p>
                </div>
                <Badge className="bg-white/10 text-white/80">{item.period}</Badge>
              </div>
              <ul className="mt-3 grid gap-2 text-sm text-white/75 sm:grid-cols-2">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card>
          <div className="space-y-5">
            <div>
              <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
                <Award size={14} /> {academic.certificationsTitle}
              </p>
              <div className="flex flex-wrap gap-2">
                {academic.certifications.map((certification) => (
                  <Badge key={certification} className="bg-white/10 text-white/80">
                    {certification}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
                <Languages size={14} /> {academic.languagesTitle}
              </p>
              <div className="flex flex-wrap gap-2">
                {academic.languages.map((language) => (
                  <Badge key={language} className="border-white/5 bg-white/5 text-white/70">
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
