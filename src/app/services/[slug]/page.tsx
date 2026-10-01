import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { ContactBand } from "@/components/home/ContactBand";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { getServiceBySlug, getServices } from "@/lib/data";
import { serviceImage } from "@/lib/media";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await getServiceBySlug(slug);
  if (!data) return { title: "Service" };
  return { title: data.title, description: data.excerpt };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [{ data: service }, all] = await Promise.all([
    getServiceBySlug(slug),
    getServices(),
  ]);

  if (!service) notFound();

  const others = all.data.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Service details"
        title={service.title}
        body={service.excerpt}
        image={serviceImage(service.slug)}
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 sm:px-5 sm:pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:px-8">
        <Reveal>
          <div className="glass-strong overflow-hidden rounded-[2rem]">
            <div className="relative h-44 sm:h-56">
              <Image
                src={serviceImage(service.slug)}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5 sm:p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/12 text-teal">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </div>
            <p className="text-lg leading-8 text-mist sm:text-xl">{service.description}</p>
            <h2 className="section-title mt-10">How we work this</h2>
            <ul className="mt-5 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-base leading-7 text-ivory/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  {feature}
                </li>
              ))}
            </ul>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-[1.5rem] border border-gold/25 bg-linear-to-b from-[#fff8ea] to-white p-5 sm:rounded-[2rem] sm:p-8">
            <p className="eyebrow text-gold">Outcomes</p>
            <h2 className="section-title mt-3">What practices notice</h2>
            <ul className="mt-6 space-y-4">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="rounded-2xl bg-white px-4 py-3 text-base shadow-[0_8px_20px_rgba(16,42,48,0.06)]">
                  {outcome}
                </li>
              ))}
            </ul>
            <Link href="/appointments" className="btn-primary mt-8 w-full">
              Book Consultation
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-5 lg:px-8">
        <h2 className="section-title">More billing services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {others.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className="glass overflow-hidden rounded-2xl transition hover:-translate-y-1"
            >
              <div className="relative h-32">
                <Image
                  src={serviceImage(item.slug)}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="mt-2 text-base text-mist">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
