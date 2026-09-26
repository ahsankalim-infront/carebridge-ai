import Image from "next/image";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { Reveal } from "@/components/ui/Reveal";
import { partners } from "@/lib/company";
import { images, portraitImage } from "@/lib/media";
import type { Testimonial } from "@/lib/types";

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="relative overflow-hidden">
      <BackdropImage src={images.doctor} className="opacity-10 md:opacity-12" />
      <div className="pointer-events-none absolute inset-0 bg-white/80 md:bg-ink/50" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-5 md:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <p className="text-[10px] tracking-[0.18em] text-gold uppercase sm:text-xs sm:tracking-[0.32em]">
            Client Proof
          </p>
          <h2 className="mt-3 font-serif text-[1.75rem] leading-tight sm:text-4xl md:text-5xl">
            What our clients say
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-mist sm:text-base">
            First-hand feedback from practices we have partnered with—concise,
            specific, and actionable.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08} className="min-w-0">
              <figure className="glass flex h-full flex-col rounded-3xl p-5 sm:p-7">
                <p className="text-5xl leading-none text-teal/50">&ldquo;</p>
                <blockquote className="mt-2 flex-1 text-[15px] leading-7 text-ivory/90">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-black/8 pt-5">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-teal/30">
                    <Image
                      src={portraitImage(item.name)}
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-mist">
                      {item.role} • {item.location}
                    </p>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 sm:mt-16">
          <p className="text-center text-[10px] tracking-[0.18em] text-mist uppercase sm:text-xs sm:tracking-[0.28em]">
            Trusted by healthcare practices nationwide
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-3">
            {partners.map((partner) => (
              <div
                key={partner}
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-ivory sm:px-5"
              >
                {partner}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
