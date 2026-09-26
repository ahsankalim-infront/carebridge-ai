import { ServicesCanvas } from "@/components/three/DynamicScenes";
import { ServiceCard3D } from "@/components/home/ServiceCard3D";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/media";
import type { Service } from "@/lib/types";

export function ServicesGrid({
  services,
  heading = "Our Core Services",
  intro = "Comprehensive revenue cycle management—precision, speed, and transparency.",
}: {
  services: Service[];
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <BackdropImage src={images.hospital} className="opacity-15 md:opacity-18" />
      <ServicesCanvas />
      <div className="pointer-events-none absolute inset-0 bg-white/70 md:bg-ink/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-5 md:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <p className="text-[10px] tracking-[0.18em] text-teal uppercase sm:text-xs sm:tracking-[0.32em]">
            What we do
          </p>
          <h2 className="mt-3 font-serif text-[1.75rem] leading-tight sm:text-4xl md:text-5xl">{heading}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-mist sm:text-base">{intro}</p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06} className="min-w-0">
              <ServiceCard3D service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
