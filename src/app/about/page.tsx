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
    "CareBridge Solutions combines healthcare expertise with financial intelligence for measurable RCM results.",
};

const pillars = [
  {
    title: "Practice-first operators",
    body: "We staff certified coders and billing specialists who understand specialty nuance—not generic claim pushers.",
  },
  {
    title: "Payer fluency",
    body: "Enrollment, edits, and appeals are managed against current commercial, Medicare, and Medicaid rules.",
  },
  {
    title: "Visible math",
    body: "Owners see clean-claim rate, A/R days, denial mix, and cash forecast without waiting for month-end.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built for the business of care."
        body="CareBridge Solutions partners with practices nationwide from Austin, helping clinicians stay with patients while we protect the revenue those visits create."
        image={images.team}
      />

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-5 sm:pb-16 lg:px-8">
        <div className="mb-6 grid gap-3 sm:mb-8 sm:gap-4 md:grid-cols-3">
          <TiltImage
            src={images.doctor}
            alt="Physician partner"
            className="h-48 sm:h-56 md:h-64"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <TiltImage
            src={images.clinic}
            alt="CareBridge partner clinic"
            className="h-48 sm:h-56 md:h-64"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <TiltImage
            src={images.lab}
            alt="Laboratory billing specialty"
            className="h-48 sm:h-56 md:h-64"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08} className="min-w-0">
              <article className="glass h-full rounded-3xl p-5 sm:p-7">
                <h2 className="text-xl font-semibold">{pillar.title}</h2>
                <p className="mt-3 leading-7 text-mist">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="glass-strong mt-6 overflow-hidden rounded-[1.5rem] sm:mt-8 sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-2">
            <TiltImage
              src={images.consult}
              alt="Consultation with a practice owner"
              className="h-52 rounded-none sm:h-72 lg:h-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="p-5 sm:p-8 md:p-10">
              <h2 className="font-serif text-3xl sm:text-4xl">Our story</h2>
              <p className="mt-4 text-base leading-7 text-mist sm:mt-5 sm:text-lg sm:leading-8">
                Too many practices still run revenue on heroic staff and opaque vendors.
                We built CareBridge to be the opposite: meticulous coding, rapid
                credentialing, disciplined A/R, and analytics that explain the “why”
                behind every dollar. From {company.address}, we support internal
                medicine, labs, therapy, behavioral health, and hospital-based groups
                with the same standard—clean claims, faster payments, honest reporting.
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
