import type { DemoContent, Lang } from "./content";
import { t } from "./i18n";
import { Section } from "./Section";

export function Gallery({ c, lang }: { c: DemoContent; lang: Lang }) {
  const g = c.gallery;
  return (
    <Section id="gallery" title={t(g.title, lang)}>
      <div className="columns-2 gap-3 md:columns-3 [&>img]:mb-3">
        {g.images.map((img, i) => (
          <img key={i} src={img.src} alt={t(img.alt, lang)} loading="lazy" className="w-full break-inside-avoid rounded-card" />
        ))}
      </div>
    </Section>
  );
}
