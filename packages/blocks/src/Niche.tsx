import type { DemoContent, Lang } from "./content";
import { t } from "./i18n";
import { Section } from "./Section";

/** The one niche-specific block: schedule (gyms, schools), before/after (clinics, salons), features (anything else). */
export function Niche({ c, lang }: { c: DemoContent; lang: Lang }) {
  const n = c.niche;
  if (!n) return null;

  if (n.type === "schedule") {
    return (
      <Section id="schedule" title={t(n.title, lang)}>
        <div className="grid gap-4 md:grid-cols-3">
          {n.rows.map((row, i) => (
            <div key={i} className="rounded-card border border-ink/10 p-5">
              <h3 className="font-medium">{t(row.day, lang)}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {row.items.map((it, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="w-14 shrink-0 tabular-nums text-brand">{it.time}</span>
                    <span>{t(it.name, lang)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  if (n.type === "beforeAfter") {
    return (
      <Section id="results" title={t(n.title, lang)}>
        <div className="grid gap-6 md:grid-cols-2">
          {n.pairs.map((p, i) => (
            <figure key={i}>
              <div className="grid grid-cols-2 gap-2">
                {[p.before, p.after].map((src, j) => (
                  <div key={j} className="relative">
                    <img src={src} alt="" className="aspect-square w-full rounded-card object-cover" />
                    <span className="absolute top-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
                      {j === 0 ? (lang === "th" ? "ก่อน" : "Before") : lang === "th" ? "หลัง" : "After"}
                    </span>
                  </div>
                ))}
              </div>
              {p.caption && <figcaption className="mt-2 text-sm text-muted">{t(p.caption, lang)}</figcaption>}
            </figure>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section id="features" title={t(n.title, lang)}>
      <div className="grid gap-6 md:grid-cols-3">
        {n.items.map((it, i) => (
          <div key={i} className="rounded-card border border-ink/10 p-6">
            {it.icon && <div className="text-3xl">{it.icon}</div>}
            <h3 className="mt-3 font-medium">{t(it.title, lang)}</h3>
            <p className="mt-2 text-sm text-muted">{t(it.text, lang)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
