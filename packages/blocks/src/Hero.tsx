import type { DemoContent, Lang } from "./content";
import { t } from "./i18n";
import { cn } from "./cn";

export function Hero({ c, lang }: { c: DemoContent; lang: Lang }) {
  const { hero } = c;
  const cta = (
    <a href="#contacts" className="inline-block rounded-card bg-brand px-6 py-3 font-medium text-on-brand hover:opacity-90">
      {t(hero.cta, lang)}
    </a>
  );

  if (hero.variant === "fullbleed") {
    return (
      <section id="top" className="relative flex min-h-[85svh] items-end overflow-hidden">
        <img src={hero.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 text-white">
          <h1 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">{t(hero.title, lang)}</h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">{t(hero.subtitle, lang)}</p>
          <div className="mt-8">{cta}</div>
        </div>
      </section>
    );
  }

  const centered = hero.variant === "centered";
  return (
    <section id="top" className="px-5 pt-10 pb-16 md:pt-16">
      <div className={cn("mx-auto max-w-6xl", centered ? "text-center" : "grid items-center gap-10 md:grid-cols-2")}>
        <div>
          <h1 className={cn("font-display text-4xl leading-tight md:text-6xl", centered && "mx-auto max-w-3xl")}>
            {t(hero.title, lang)}
          </h1>
          <p className={cn("mt-4 text-lg text-muted", centered && "mx-auto max-w-xl")}>{t(hero.subtitle, lang)}</p>
          <div className="mt-8">{cta}</div>
        </div>
        <img
          src={hero.image}
          alt=""
          className={cn("w-full rounded-card object-cover", centered ? "mt-12 aspect-[21/9]" : "aspect-[4/5] md:aspect-square")}
        />
      </div>
    </section>
  );
}
