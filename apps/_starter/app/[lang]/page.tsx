import { DemoPage, type DemoContent, type Lang } from "@demos/blocks";
import content from "@/content.json";

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <DemoPage c={content as DemoContent} lang={lang} />;
}
