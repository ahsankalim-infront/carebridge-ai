import { ContactBand } from "@/components/home/ContactBand";
import { Hero } from "@/components/home/Hero";
import { PhotoShowcase } from "@/components/home/PhotoShowcase";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { SpecialtiesMarquee } from "@/components/home/SpecialtiesMarquee";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChoose } from "@/components/home/WhyChoose";
import { getServices, getSpecialties, getTestimonials } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [services, specialties, testimonials] = await Promise.all([
    getServices(),
    getSpecialties(),
    getTestimonials(),
  ]);

  return (
    <>
      <Hero />
      <PhotoShowcase />
      <ServicesGrid services={services.data} />
      <SpecialtiesMarquee specialties={specialties.data} />
      <WhyChoose />
      <Testimonials items={testimonials.data} />
      <ContactBand />
    </>
  );
}
