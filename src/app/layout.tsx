import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Immigration Law in Denver`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Immigration law practice in Southeast Denver. Removal defense, humanitarian and family-based immigration, citizenship, appeals, and related Colorado matters.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    locale: "en_US",
    alternateLocale: "es_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full scroll-smooth antialiased`} data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Header />
        <div id="main" className="flex-1">
          {children}
        </div>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
