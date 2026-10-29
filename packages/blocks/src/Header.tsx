import type { DemoContent, Lang } from "./content";
import { t, ui } from "./i18n";

export function Header({ c, lang }: { c: DemoContent; lang: Lang }) {
  const other: Lang = lang === "en" ? "th" : "en";
  const nav = [
    ["#services", t(ui.services, lang)],
    ["#gallery", t(ui.gallery, lang)],
    ["#contacts", t(ui.contacts, lang)],
  ];
  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="truncate font-display text-lg">{c.business.name}</a>
        <nav className="flex items-center gap-5 text-sm">
          {nav.map(([href, label]) => (
            <a key={href} href={href} className="hidden hover:text-brand md:inline">{label}</a>
          ))}
          <a href={`/${other}`} className="rounded-card border border-ink/20 px-3 py-1 uppercase hover:border-brand">
            {other}
          </a>
        </nav>
      </div>
    </header>
  );
}
