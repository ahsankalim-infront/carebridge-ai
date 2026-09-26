import { PageCanvas } from "@/components/three/DynamicScenes";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { Reveal } from "@/components/ui/Reveal";
import { SpecialtyIcon } from "@/components/ui/SpecialtyIcon";
import { images } from "@/lib/media";
import type { Specialty } from "@/lib/types";

export function SpecialtiesMarquee({ specialties }: { specialties: Specialty[] }) {
  const loop = [...specialties, ...specialties];

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <BackdropImage src={images.consult} className="opacity-12 md:opacity-14" />
      <PageCanvas />
      <div className="pointer-events-none absolute inset-0 bg-white/80 md:bg-ink/40" />
      <Reveal className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <p className="text-[10px] tracking-[0.18em] text-gold uppercase sm:text-xs sm:tracking-[0.32em]">
          Coverage
        </p>
        <h2 className="mt-3 font-serif text-[1.75rem] leading-tight sm:text-4xl md:text-5xl">
          Our Popular Specialties
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-mist sm:text-base">
          From primary care to molecular labs, we bill the specialties most
          practices find hardest to staff in-house.
        </p>
      </Reveal>

      <div className="relative z-10 mt-8 overflow-hidden sm:mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-ink to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-ink to-transparent sm:w-24" />
        <div className="animate-marquee flex w-max gap-3 pr-4">
          {loop.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm whitespace-nowrap text-ivory sm:px-5 sm:py-2.5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal/12 text-teal">
                <SpecialtyIcon name={item.name} className="h-3.5 w-3.5" />
              </span>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
