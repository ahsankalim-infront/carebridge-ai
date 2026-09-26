import { Reveal } from "@/components/ui/Reveal";
import { partners } from "@/lib/company";
import type { Testimonial } from "@/lib/types";

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <Reveal>
        <p className="text-xs tracking-[0.32em] text-gold uppercase">
          Client Proof
        </p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">
          What our clients say
        </h2>
        <p className="mt-4 max-w-2xl text-mist">
          First-hand feedback from practices we have partnered with—concise,
          specific, and actionable.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.08}>
            <figure className="glass flex h-full flex-col rounded-3xl p-7">
              <p className="text-5xl leading-none text-teal/50">&ldquo;</p>
              <blockquote className="mt-2 flex-1 text-[15px] leading-7 text-ivory/90">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/8 pt-5">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-mist">
                  {item.role} • {item.location}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <p className="text-center text-xs tracking-[0.28em] text-mist uppercase">
          Trusted by healthcare practices nationwide
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {partners.map((partner) => (
            <div
              key={partner}
              className="rounded-full border border-white/10 px-5 py-2 text-sm text-ivory/80"
            >
              {partner}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
