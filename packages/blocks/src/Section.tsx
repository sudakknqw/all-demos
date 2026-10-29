import type { ReactNode } from "react";
import { cn } from "./cn";

export function Section({ id, title, intro, className, children }: {
  id: string;
  title?: string;
  intro?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 px-5 py-16 md:py-24", className)}>
      <div className="mx-auto max-w-6xl">
        {title && <h2 className="font-display text-3xl md:text-4xl">{title}</h2>}
        {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
        <div className={title ? "mt-10" : undefined}>{children}</div>
      </div>
    </section>
  );
}
