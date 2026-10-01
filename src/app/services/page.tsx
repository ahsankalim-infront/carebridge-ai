import type { Metadata } from "next";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ContactBand } from "@/components/home/ContactBand";
import { PageHero } from "@/components/layout/PageHero";
import { getServices } from "@/lib/data";
import { images } from "@/lib/media";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Medical billing and coding, credentialing, eligibility, denial management, A/R recovery, and collection reporting.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        eyebrow="Medical billing services"
        title="Everything between the visit and the payment."
        body="Coding, payer enrollment, eligibility, claim follow-up, denials, and collection reports — as one billing file, not six disconnected vendors."
        image={images.billing}
      />
      <ServicesGrid
        services={services.data}
        heading="Choose full-cycle billing or a single service"
        intro="Outsource the entire billing file, or start with coding, credentialing, or aged A/R. Every engagement includes a clear collection report."
      />
      <ContactBand />
    </>
  );
}
