import { Reveal } from "@/components/ui/Reveal";
import type { Specialty } from "@/lib/types";

export function SpecialtiesMarquee({ specialties }: { specialties: Specialty[] }) {
  const loop = [...specialties, ...specialties];

  return (
    <section className="relative py-20">
      <Reveal className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-xs tracking-[0.32em] text-gold uppercase">
          Coverage
        </p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">
          Our Popular Specialties
        </h2>
        <p className="mt-4 max-w-2xl text-mist">
          From primary care to molecular labs, we bill the specialties most
          practices find hardest to staff in-house.
        </p>
      </Reveal>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-ink to-transparent" />
        <div className="animate-marquee flex w-max gap-4 pr-4">
          {loop.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="glass rounded-full px-5 py-3 text-sm whitespace-nowrap text-ivory"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
