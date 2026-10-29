import type { DemoContent, Lang } from "./content";
import { About } from "./About";
import { ContactBar } from "./ContactBar";
import { Contacts } from "./Contacts";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Niche } from "./Niche";
import { Reviews } from "./Reviews";
import { Services } from "./Services";

/** Default page order. A demo that needs a different layout composes the blocks itself. */
export function DemoPage({ c, lang }: { c: DemoContent; lang: Lang }) {
  return (
    <>
      <Header c={c} lang={lang} />
      <main>
        <Hero c={c} lang={lang} />
        <About c={c} lang={lang} />
        <Services c={c} lang={lang} />
        <Niche c={c} lang={lang} />
        <Gallery c={c} lang={lang} />
        <Reviews c={c} lang={lang} />
        <Contacts c={c} lang={lang} />
      </main>
      <Footer c={c} lang={lang} />
      <ContactBar c={c} lang={lang} />
    </>
  );
}
