import type { DemoContent, Lang } from "./content";
import { t, ui } from "./i18n";

export function Footer({ c, lang }: { c: DemoContent; lang: Lang }) {
  return (
    <footer className="border-t border-ink/10 px-5 pt-8 pb-24 text-sm text-muted md:pb-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 md:flex-row">
        <span>© {new Date().getFullYear()} {c.business.name}</span>
        <a href="https://sudakknqw.com" target="_blank" rel="noreferrer" className="hover:text-brand">{t(ui.demoNote, lang)}</a>
      </div>
    </footer>
  );
}
