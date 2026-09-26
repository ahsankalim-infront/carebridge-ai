import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
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
    <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <Reveal>
        <p className="text-xs tracking-[0.32em] text-teal uppercase">
          What we do
        </p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">{heading}</h2>
        <p className="mt-4 max-w-2xl text-mist">{intro}</p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.06}>
            <Link
              href={`/services/${service.slug}`}
              className="group glass relative block h-full overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1"
            >
              <div className="absolute -top-16 -right-10 h-36 w-36 rounded-full bg-teal/10 blur-3xl transition group-hover:bg-teal/20" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/12 text-teal">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="relative mt-6 text-xl font-semibold">{service.title}</h3>
              <p className="relative mt-3 text-sm leading-7 text-mist">
                {service.excerpt}
              </p>
              <span className="relative mt-6 inline-flex items-center gap-2 text-sm text-teal">
                Learn more
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
