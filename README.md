# all-demos

Demo websites for small businesses in Bangkok. One Next.js app per business, shared section blocks, content in one JSON file per site (English + Thai).

**Stack:** Next.js 16 (App Router, static pages) · TypeScript · Tailwind CSS 4 · Turborepo + pnpm workspaces · Playwright (video).

```
apps/
  _starter/          template app, copied for every new demo
  <business>/        one app per demo
packages/
  blocks/            shared sections: Header, Hero (3 variants), About, Services,
                     Niche (schedule / before-after / features), Gallery, Reviews,
                     Contacts (map, hours, LINE / WhatsApp / IG), ContactBar, Footer
scripts/
  new-demo.mjs       pnpm new <slug>
  record-video.mjs   pnpm video <url>
```

## New demo (goal: 1–2 hours)

1. `pnpm new <slug>` then `pnpm install`.
2. **Content** — fill `apps/<slug>/content.json` (types in `packages/blocks/src/content.ts`):
   - texts from their Google Maps / Instagram, EN + TH (Thai: Claude + Google Translate cross-check, owner confirms);
   - real prices where found, otherwise `"priceIsExample": true`;
   - 3 real Google reviews (name, rating, text) + link to all reviews;
   - phone, LINE, WhatsApp, Instagram, hours, address, Maps link.
3. **Photos** — put their photos in `apps/<slug>/public/` (stock only for backgrounds and gaps).
4. **Design** — every business gets its own look:
   - colors, radius in `app/globals.css` (`@theme`);
   - fonts in `app/[lang]/layout.tsx`;
   - `hero.variant`: `split` | `centered` | `fullbleed`;
   - pick one niche block, or compose the page yourself instead of `<DemoPage>` if the layout needs it.
5. `pnpm --filter <slug> dev` → check `/en` and `/th` on a phone-size screen.
6. Deploy on Vercel (root directory `apps/<slug>`) → domain `<slug>.sudakknqw.com`.
7. `pnpm video https://<slug>.sudakknqw.com/en` → 15–20 s phone-size scroll video in `videos/`.
   First run on a new machine: `npx playwright install chromium`.

Demos are marked only by a line in the footer and are hidden from search engines (`robots: noindex`).
