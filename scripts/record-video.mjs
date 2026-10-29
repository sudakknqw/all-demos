// Usage: pnpm video <url> [out.webm]
// Records a 15–20 s phone-sized scroll through the demo, to send with the link.
// Works with a local dev server (http://localhost:3000/en) or the deployed URL.
import { chromium, devices } from "playwright";
import { mkdirSync, renameSync } from "node:fs";
import { dirname, resolve } from "node:path";

const url = process.argv[2];
if (!url) {
  console.error("Usage: pnpm video <url> [out.webm]");
  process.exit(1);
}
const out = resolve(process.argv[3] ?? `videos/${new URL(url).hostname.split(".")[0]}.webm`);
mkdirSync(dirname(out), { recursive: true });

const phone = devices["iPhone 13"];
// First run on a new machine: npx playwright install chromium
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
const context = await browser.newContext({
  ...phone,
  recordVideo: { dir: dirname(out), size: phone.viewport },
});
const page = await context.newPage();
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(2000); // let the hero sit on screen

// Smooth scroll to the bottom in ~14 s, with short pauses so sections are readable.
const height = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
const steps = 70;
for (let i = 1; i <= steps; i++) {
  await page.evaluate((y) => scrollTo({ top: y, behavior: "instant" }), (height * i) / steps);
  await page.waitForTimeout(i % 14 === 0 ? 900 : 180);
}
await page.waitForTimeout(1500);

const video = page.video();
await context.close();
await browser.close();
renameSync(await video.path(), out);
console.log(`Saved ${out}`);
