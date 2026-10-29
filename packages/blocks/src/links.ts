import type { DemoContent } from "./content";

type C = DemoContent["contacts"];

export const lineUrl = (line: string) =>
  line.startsWith("http") ? line : `https://line.me/R/ti/p/${encodeURIComponent(line.startsWith("@") ? line : `~${line}`)}`;
export const waUrl = (n: string) => `https://wa.me/${n.replace(/\D/g, "")}`;
export const telUrl = (n: string) => `tel:${n.replace(/[^\d+]/g, "")}`;
export const mapEmbedUrl = (q: string) => `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

/** Contact channels in display order, only the ones the business has. */
export function channels(c: C) {
  return [
    c.line && { key: "line", label: "LINE", href: lineUrl(c.line) },
    c.whatsapp && { key: "whatsapp", label: "WhatsApp", href: waUrl(c.whatsapp) },
    c.instagram && { key: "instagram", label: "Instagram", href: c.instagram },
    c.facebook && { key: "facebook", label: "Facebook", href: c.facebook },
  ].filter(Boolean) as { key: string; label: string; href: string }[];
}
