import { Clock, MapPin, Phone } from "lucide-react";
import type { DemoContent, Lang } from "./content";
import { t, ui } from "./i18n";
import { channels, mapEmbedUrl, telUrl } from "./links";
import { Section } from "./Section";

export function Contacts({ c, lang }: { c: DemoContent; lang: Lang }) {
  const k = c.contacts;
  return (
    <Section id="contacts" title={t(k.title, lang)}>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <p className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-brand" size={20} />{t(k.address, lang)}</p>
          <div className="flex gap-3">
            <Clock className="mt-0.5 shrink-0 text-brand" size={20} />
            <div>
              <p className="font-medium">{t(ui.hours, lang)}</p>
              <ul className="mt-1 text-sm text-muted">
                {k.hours.map((h, i) => <li key={i}>{t(h.days, lang)}: {typeof h.time === "string" ? h.time : t(h.time, lang)}</li>)}
              </ul>
            </div>
          </div>
          {k.phone && (
            <a href={telUrl(k.phone)} className="flex gap-3 hover:text-brand">
              <Phone className="mt-0.5 shrink-0 text-brand" size={20} />{k.phone}
            </a>
          )}
          <div className="flex flex-wrap gap-3">
            {channels(k).map((ch) => (
              <a key={ch.key} href={ch.href} target="_blank" rel="noreferrer"
                className="rounded-card border border-ink/20 px-4 py-2 text-sm hover:border-brand hover:text-brand">
                {ch.label}
              </a>
            ))}
            <a href={k.mapsUrl} target="_blank" rel="noreferrer"
              className="rounded-card bg-brand px-4 py-2 text-sm text-on-brand hover:opacity-90">
              {t(ui.route, lang)}
            </a>
          </div>
        </div>
        <iframe
          title="map"
          src={mapEmbedUrl(k.mapsQuery)}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-card border-0"
        />
      </div>
    </Section>
  );
}
