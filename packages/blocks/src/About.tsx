import type { DemoContent, Lang } from "./content";
import { t } from "./i18n";
import { Section } from "./Section";

export function About({ c, lang }: { c: DemoContent; lang: Lang }) {
  if (!c.about) return null;
  const { about } = c;
  return (
    <Section id="about">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {about.image && <img src={about.image} alt="" className="aspect-[4/3] w-full rounded-card object-cover" />}
        <div>
          <h2 className="font-display text-3xl md:text-4xl">{t(about.title, lang)}</h2>
          <p className="mt-4 whitespace-pre-line text-muted">{t(about.text, lang)}</p>
        </div>
      </div>
    </Section>
  );
}
