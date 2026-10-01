import type { Metadata } from "next";
import { ContactBand } from "@/components/home/ContactBand";
import { WhyChoose } from "@/components/home/WhyChoose";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { TiltImage } from "@/components/ui/TiltImage";
import { company } from "@/lib/company";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "About",
  description:
    "CareBridge Solutions is a medical billing company. We code, submit, and collect for clinics, labs, and specialty groups.",
};

const pillars = [
  {
    title: "Certified medical billers",
    body: "CPC- and CPB-trained specialists who code CPT, ICD-10, and HCPCS for the specialties you treat — not generic claim pushers.",
  },
  {
    title: "Payer enrollment & follow-up",
    body: "We enroll providers, submit claims daily, and work commercial, Medicare, and Medicaid denials until the balance is paid or closed.",
  },
  {
    title: "Collection reporting you can use",
    body: "Owners see clean-claim rate, A/R days, denial mix, and cash posted without waiting for a month-end spreadsheet.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CareBridge"
        title="A medical billing partner for growing practices."
        body="From Austin, we bill insurance for clinics nationwide. You stay with patients. We code the visit, submit the claim, and collect the payment."
        image={images.team}
      />

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-5 sm:pb-16 lg:px-8">
        <div className="mb-6 grid gap-3 sm:mb-8 sm:gap-4 md:grid-cols-3">
          <TiltImage
            src={images.doctor}
            alt="Physician whose visits we bill"
            className="h-48 sm:h-56 md:h-64"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <TiltImage
            src={images.clinic}
            alt="Hospital partner CareBridge bills for"
            className="h-48 sm:h-56 md:h-64"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <TiltImage
            src={images.lab}
            alt="Laboratory billing specialty we support"
            className="h-48 sm:h-56 md:h-64"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08} className="min-w-0">
              <article className="glass h-full rounded-3xl p-5 sm:p-7">
                <h2 className="text-2xl font-semibold">{pillar.title}</h2>
                <p className="mt-3 text-base leading-7 text-mist sm:text-lg">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="glass-strong mt-6 overflow-hidden rounded-[1.5rem] sm:mt-8 sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-2">
            <TiltImage
              src={images.consult}
              alt="Physician reviewing visit notes that become claims"
              className="h-52 rounded-none sm:h-72 lg:h-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="p-5 sm:p-8 md:p-10">
              <h2 className="section-title">How we started</h2>
              <p className="lede mt-4 text-mist sm:mt-5">
                Too many practices still run billing on overworked staff or opaque
                vendors. CareBridge was built as a medical billing company: accurate
                coding, faster payer enrollment, daily claim follow-up, and reports
                that explain every dollar. From {company.address} we bill for
                primary care, labs, therapy, behavioral health, and hospital-based
                groups — clean claims, faster payments, honest reporting.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <WhyChoose />
      <ContactBand />
    </>
  );
}
