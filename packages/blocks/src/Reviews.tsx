import { Star } from "lucide-react";
import type { DemoContent, Lang } from "./content";
import { t, ui } from "./i18n";
import { Section } from "./Section";

export function Reviews({ c, lang }: { c: DemoContent; lang: Lang }) {
  const r = c.reviews;
  if (!r.items.length) return null;
  return (
    <Section id="reviews" title={t(r.title, lang)} className="bg-tint">
      <div className="grid gap-4 md:grid-cols-3">
        {r.items.map((rev, i) => (
          <blockquote key={i} className="rounded-card bg-surface p-6 shadow-sm">
            <div className="flex gap-0.5 text-brand">
              {Array.from({ length: rev.rating }, (_, j) => <Star key={j} size={16} fill="currentColor" />)}
            </div>
            <p className="mt-3 text-sm">“{rev.text}”</p>
            <footer className="mt-4 text-sm font-medium">{rev.author}</footer>
          </blockquote>
        ))}
      </div>
      <a href={r.allUrl} target="_blank" rel="noreferrer" className="mt-8 inline-block text-brand underline underline-offset-4">
        {t(ui.allReviews, lang)}
      </a>
    </Section>
  );
}
