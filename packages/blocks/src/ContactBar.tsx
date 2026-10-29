import type { DemoContent, Lang } from "./content";
import { t, ui } from "./i18n";
import { channels, telUrl } from "./links";

/** Sticky bottom bar on phones: the main way a visitor reaches the business. */
export function ContactBar({ c, lang }: { c: DemoContent; lang: Lang }) {
  const k = c.contacts;
  const main = channels(k)[0];
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-ink/10 bg-surface/95 p-3 backdrop-blur md:hidden">
      {k.phone && (
        <a href={telUrl(k.phone)} className="flex-1 rounded-card border border-ink/20 py-3 text-center text-sm font-medium">
          {t(ui.call, lang)}
        </a>
      )}
      {main && (
        <a href={main.href} target="_blank" rel="noreferrer"
          className="flex-1 rounded-card bg-brand py-3 text-center text-sm font-medium text-on-brand">
          {main.label}
        </a>
      )}
    </div>
  );
}
