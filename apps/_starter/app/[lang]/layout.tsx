import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Noto_Sans_Thai, Playfair_Display } from "next/font/google";
import { LANGS, t, type Lang } from "@demos/blocks";
import content from "@/content.json";
import type { DemoContent } from "@demos/blocks";
import "../globals.css";

const c = content as DemoContent;

// Fonts are part of the per-business design: swap these two.
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display-family" });
const body = Noto_Sans_Thai({ subsets: ["latin", "thai"], variable: "--font-body-family" });

export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: t(c.meta.title, lang),
    description: t(c.meta.description, lang),
    robots: { index: false }, // demos must not show up in Google before the owner says yes
  };
}

export default async function LangLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
