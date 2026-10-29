/** One string in both site languages. */
export type L = { en: string; th: string };
export type Lang = keyof L;
export const LANGS: Lang[] = ["en", "th"];

export type Service = {
  name: L;
  description?: L;
  /** e.g. "800 ฿" or "from 1,200 ฿" */
  price?: string;
  /** true when the price was not found and is an approximate example */
  priceIsExample?: boolean;
};

export type NicheBlock =
  | { type: "schedule"; title: L; rows: { day: L; items: { time: string; name: L }[] }[] }
  | { type: "beforeAfter"; title: L; pairs: { before: string; after: string; caption?: L }[] }
  | { type: "features"; title: L; items: { title: L; text: L; icon?: string }[] };

export type DemoContent = {
  business: {
    name: string;
    /** Google Maps category, e.g. "pet grooming" */
    category: string;
  };
  meta: { title: L; description: L };
  hero: {
    variant: "split" | "centered" | "fullbleed";
    title: L;
    subtitle: L;
    image: string;
    cta: L;
  };
  about?: { title: L; text: L; image?: string };
  services: { title: L; intro?: L; items: Service[] };
  niche?: NicheBlock;
  gallery: { title: L; images: { src: string; alt: L }[] };
  /** Real Google reviews only: author name + text, plus link to all */
  reviews: { title: L; items: { author: string; text: string; rating: number }[]; allUrl: string };
  contacts: {
    title: L;
    address: L;
    /** time is "10:00–19:00" or {en: "Closed", th: "ปิด"} */
    hours: { days: L; time: string | L }[];
    phone?: string;
    /** LINE ID or lin.ee link */
    line?: string;
    /** digits only, with country code: 66812345678 */
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
    mapsUrl: string;
    /** Text for the embedded map search, usually "Name, district, Bangkok" */
    mapsQuery: string;
  };
};
