import Image from "next/image";
import type { ReactNode } from "react";
import { PageCanvas } from "@/components/three/DynamicScenes";
import { images } from "@/lib/media";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  body,
  image = images.hospital,
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[22rem] overflow-hidden px-4 pt-24 pb-12 sm:min-h-[26rem] sm:px-5 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:px-8">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50 md:opacity-28"
      />
      <PageCanvas />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink/25 via-ink/45 to-ink/80" />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="mb-3 text-[10px] tracking-[0.18em] text-teal uppercase sm:mb-4 sm:text-xs sm:tracking-[0.32em]">
          {eyebrow}
        </p>
        <h1 className="font-serif text-3xl leading-tight text-gradient sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-mist sm:mt-5 sm:text-lg sm:leading-8">
          {body}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
