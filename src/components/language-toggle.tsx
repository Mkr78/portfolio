"use client";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const nextLocale = locale === "fr" ? "en" : "fr";

  return (
    <Button
      variant="secondary"
      className="h-10 rounded-full px-4 text-xs uppercase tracking-wide"
      onClick={() => setLocale(nextLocale)}
      aria-label="Change language"
    >
      {locale} ↔ {nextLocale}
    </Button>
  );
}
