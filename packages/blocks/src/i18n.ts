import type { L, Lang } from "./content";

export const t = (s: L | undefined, lang: Lang) => (s ? s[lang] || s.en : "");

/** Fixed interface strings shared by every demo. */
export const ui = {
  services: { en: "Services & prices", th: "บริการและราคา" },
  priceExample: { en: "Example price", th: "ราคาตัวอย่าง" },
  gallery: { en: "Gallery", th: "แกลเลอรี" },
  reviews: { en: "What clients say", th: "รีวิวจากลูกค้า" },
  allReviews: { en: "All reviews on Google", th: "ดูรีวิวทั้งหมดบน Google" },
  contacts: { en: "Contacts", th: "ติดต่อเรา" },
  hours: { en: "Opening hours", th: "เวลาเปิดทำการ" },
  call: { en: "Call", th: "โทร" },
  route: { en: "Get directions", th: "เส้นทาง" },
  demoNote: {
    en: "Demo site prepared by Kirill Sudakov — sudakknqw.com",
    th: "เว็บไซต์ตัวอย่างจัดทำโดย Kirill Sudakov — sudakknqw.com",
  },
} satisfies Record<string, L>;
