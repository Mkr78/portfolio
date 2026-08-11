import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mahmoud Mohamed | Big Data & IA",
    template: "%s | Mahmoud Mohamed"
  },
  description:
    "Développeur Big Data & IA basé à Cergy : streaming Kafka/Spark, ML/DL, sécurité by design, produits fullstack.",
  keywords: [
    "Big Data",
    "IA",
    "Spark",
    "Kafka",
    "Sécurité",
    "Fullstack",
    "DevOps",
    "Mahmoud Mohamed"
  ],
  openGraph: {
    title: "Mahmoud Mohamed — Big Data & IA",
    description:
      "Streaming, ML/DL, sécurité by design, produits fullstack et dashboards.",
    url: siteUrl,
    siteName: "Portfolio Mahmoud Mohamed",
    locale: "fr_FR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mahmoud Mohamed",
    jobTitle: "Développeur Big Data & IA",
    url: siteUrl,
    sameAs: [
      "https://github.com/Mkr78",
      "https://www.linkedin.com/in/mohamed-mahmoud-a31a81168"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cergy",
      addressCountry: "France"
    }
  };

  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          <main className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 md:px-8 md:pt-12">
            <div className="grid-overlay absolute inset-0 pointer-events-none" />
            <div className="relative z-10 flex justify-end pb-4">
              <CommandPalette />
            </div>
            {children}
          </main>
          <Footer />
        </Providers>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
