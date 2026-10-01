import { ServicesCanvas } from "@/components/three/DynamicScenes";
import { ServiceCard3D } from "@/components/home/ServiceCard3D";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/media";
import type { Service } from "@/lib/types";

export function ServicesGrid({
  services,
  heading = "Medical billing services",
  intro = "Coding, claim submission, eligibility, denials, A/R follow-up, and reporting — the work most practices cannot staff in-house.",
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
          <p className="eyebrow text-teal">
            What we bill
          </p>
          <h2 className="section-title mt-3">{heading}</h2>
          <p className="lede mt-4 max-w-2xl text-mist">{intro}</p>
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
