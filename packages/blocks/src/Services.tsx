import type { DemoContent, Lang } from "./content";
import { t, ui } from "./i18n";
import { Section } from "./Section";

export function Services({ c, lang }: { c: DemoContent; lang: Lang }) {
  const s = c.services;
  return (
    <Section id="services" title={t(s.title, lang)} intro={t(s.intro, lang)} className="bg-tint">
      <ul className="grid gap-4 md:grid-cols-2">
        {s.items.map((item, i) => (
          <li key={i} className="flex items-start justify-between gap-6 rounded-card bg-surface p-5 shadow-sm">
            <div>
              <h3 className="font-medium">{t(item.name, lang)}</h3>
              {item.description && <p className="mt-1 text-sm text-muted">{t(item.description, lang)}</p>}
            </div>
            {item.price && (
              <div className="shrink-0 text-right">
                <span className="font-display text-lg text-brand">{item.price}</span>
                {item.priceIsExample && <p className="text-xs text-muted">{t(ui.priceExample, lang)}</p>}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
