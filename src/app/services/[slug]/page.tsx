import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { ContactBand } from "@/components/home/ContactBand";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { getServiceBySlug, getServices } from "@/lib/data";

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
      <PageHero eyebrow="Service details" title={service.title} body={service.excerpt} />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <Reveal>
          <div className="glass-strong rounded-[2rem] p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/12 text-teal">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </div>
            <p className="text-lg leading-8 text-mist">{service.description}</p>
            <h2 className="mt-10 font-serif text-3xl">How we work this</h2>
            <ul className="mt-5 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-6 text-ivory/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-[2rem] border border-gold/20 bg-linear-to-b from-[#241d0d] to-[#07131f] p-8">
            <p className="text-xs tracking-[0.28em] text-gold uppercase">Outcomes</p>
            <h2 className="mt-3 font-serif text-3xl">What practices notice</h2>
            <ul className="mt-6 space-y-4">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="rounded-2xl bg-white/5 px-4 py-3 text-sm">
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

      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <h2 className="font-serif text-3xl">More ways we help</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {others.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className="glass rounded-2xl p-5 transition hover:-translate-y-1"
            >
              <p className="font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-mist">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
