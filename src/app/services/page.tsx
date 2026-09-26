import type { Metadata } from "next";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ContactBand } from "@/components/home/ContactBand";
import { PageHero } from "@/components/layout/PageHero";
import { getServices } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Medical billing, credentialing, A/R recovery, eligibility, denial management, and revenue analytics.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        eyebrow="Full-cycle RCM"
        title="Services built for cleaner cash."
        body="Six connected disciplines—coding, enrollment, eligibility, recovery, denials, and analytics—working as one operating system for your revenue."
      />
      <ServicesGrid
        services={services.data}
        heading="Everything between charge and cash"
        intro="Choose a single service or a complete outsourced revenue cycle. Every engagement includes transparent reporting."
      />
      <ContactBand />
    </>
  );
}
