// Usage: pnpm new <slug>     e.g. pnpm new wigglyville
// Copies apps/_starter to apps/<slug>, ready for content.json + theme.
import { cpSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const slug = process.argv[2];
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error("Usage: pnpm new <slug>  (lowercase letters, digits, dashes)");
  process.exit(1);
}

const root = new URL("..", import.meta.url).pathname;
const from = join(root, "apps/_starter");
const to = join(root, "apps", slug);
if (existsSync(to)) {
  console.error(`apps/${slug} already exists`);
  process.exit(1);
}

const skip = new Set(["node_modules", ".next", ".turbo", "next-env.d.ts"]);
cpSync(from, to, { recursive: true, filter: (src) => !skip.has(src.split("/").pop()) });

const pkgPath = join(to, "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
pkg.name = slug;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log(`Created apps/${slug}. Next:
  1. pnpm install
  2. Fill apps/${slug}/content.json, put photos in apps/${slug}/public/
  3. Set colors and fonts in apps/${slug}/app/globals.css and app/[lang]/layout.tsx
  4. pnpm --filter ${slug} dev`);
