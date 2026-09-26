import type { Metadata } from "next";
import { ContactBand } from "@/components/home/ContactBand";
import { WhyChoose } from "@/components/home/WhyChoose";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "CareCommerce Solutions combines healthcare expertise with financial intelligence for measurable RCM results.",
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
        body="CareCommerce Solutions partners with practices nationwide from Austin, helping clinicians stay with patients while we protect the revenue those visits create."
      />

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <article className="glass h-full rounded-3xl p-7">
                <h2 className="text-xl font-semibold">{pillar.title}</h2>
                <p className="mt-3 leading-7 text-mist">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="glass-strong mt-8 rounded-[2rem] p-8 md:p-10">
          <h2 className="font-serif text-4xl">Our story</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-mist">
            Too many practices still run revenue on heroic staff and opaque vendors.
            We built CareCommerce to be the opposite: meticulous coding, rapid
            credentialing, disciplined A/R, and analytics that explain the “why”
            behind every dollar. From {company.address}, we support internal
            medicine, labs, therapy, behavioral health, and hospital-based groups
            with the same standard—clean claims, faster payments, honest reporting.
          </p>
        </Reveal>
      </section>

      <WhyChoose />
      <ContactBand />
    </>
  );
}
