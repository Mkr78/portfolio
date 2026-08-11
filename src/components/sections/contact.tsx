"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

const EMAIL = "m.moh78260@gmail.com";

export function ContactSection() {
  const { content } = useLanguage();
  const { title, subtitle } = content.contact;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-emerald-500/20" />
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="text-sm text-white/60">{subtitle}</p>
        </div>
      </div>
      <Card>
        <div className="space-y-4">
          <p className="text-base font-semibold text-white">{EMAIL}</p>
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleCopy} variant="secondary">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {content.contact.copyEmail}
            </Button>
            <a href={`mailto:${EMAIL}`}>
              <Button variant="outline">
                <Mail size={16} />
                {content.contact.emailCta}
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-mahmoud-a31a81168"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline">
                <Linkedin size={16} />
                {content.contact.linkedinCta}
              </Button>
            </a>
            <a href="https://github.com/Mkr78" target="_blank" rel="noreferrer">
              <Button variant="outline">
                <Github size={16} />
                {content.contact.githubCta}
              </Button>
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}
