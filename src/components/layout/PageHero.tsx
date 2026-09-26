import type { ReactNode } from "react";
import { PageCanvas } from "@/components/three/DynamicScenes";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, body, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <PageCanvas />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink/20 via-ink/55 to-ink" />
      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="mb-4 text-xs tracking-[0.32em] text-teal uppercase">
          {eyebrow}
        </p>
        <h1 className="font-serif text-5xl leading-tight text-gradient md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-mist">{body}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
