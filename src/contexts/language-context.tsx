"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, getContent } from "@/lib/content";
import { type Locale, type PortfolioContent } from "@/lib/types";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: PortfolioContent;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("portfolio-locale");
    if (stored === "fr" || stored === "en") {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    } else {
      document.documentElement.lang = defaultLocale;
    }
  }, []);

  const setLocale = (value: Locale) => {
    setLocaleState(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("portfolio-locale", value);
      document.documentElement.lang = value;
    }
  };

  const content = useMemo(() => getContent(locale), [locale]);

  const value: LanguageContextValue = useMemo(
    () => ({ locale, setLocale, content }),
    [locale, content]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
