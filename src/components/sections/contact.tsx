"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

const EMAIL = "m.moh78260@gmail.com";
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function ContactSection() {
  const { content } = useLanguage();
  const { title, subtitle, form } = content.contact;
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
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <div className="space-y-3">
            <p className="text-sm text-white/80">{EMAIL}</p>
            <div className="flex flex-wrap gap-2">
              <Button onClick={handleCopy} variant="secondary">
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {content.contact.copyEmail}
              </Button>
              <a href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
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
        <Card>
          <form className="space-y-3" action={FORM_ENDPOINT ?? "/api/contact"} method="POST">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                {form.name}
              </label>
              <input
                required
                name="name"
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                {form.email}
              </label>
              <input
                required
                type="email"
                name="email"
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                {form.message}
              </label>
              <textarea
                required
                name="message"
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              {form.submit}
            </Button>
            <p className="text-xs text-white/60">
              {form.hint} · {form.providerNote}
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}
