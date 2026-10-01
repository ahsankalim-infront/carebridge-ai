import type { Metadata } from "next";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { PageHero } from "@/components/layout/PageHero";
import { TiltImage } from "@/components/ui/TiltImage";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "Appointments",
  description: "Book a CareBridge Solutions consultation for medical billing, coding, and collection follow-up.",
};

export default function AppointmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Billing consultation"
        title="Book a review of your billing file."
        body="Pick a time. We will look at your specialty mix, claim volume, and aged A/R, then recommend full-cycle billing or a focused recovery project."
        image={images.team}
      />
      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-16 sm:px-5 sm:pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:px-8 lg:pb-24">
        <div className="space-y-4">
          <TiltImage
            src={images.consult}
            alt="Medical billing consultation"
            className="h-44 sm:h-52"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        <div className="glass rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-8">
          <h2 className="section-title text-[2rem] sm:text-[2.35rem]">What we cover</h2>
          <ol className="mt-6 space-y-4 text-base leading-7 text-mist">
            <li>
              <span className="font-semibold text-ivory">Your current billing.</span> Visit
              volume, EHR/PM, payers, and where claims or A/R are stuck.
            </li>
            <li>
              <span className="font-semibold text-ivory">A candid fit check.</span> If we are not
              the right billing partner, we will say so.
            </li>
            <li>
              <span className="font-semibold text-ivory">A written next step.</span> Scope,
              timeline, and what it takes to move the billing file to CareBridge.
            </li>
          </ol>
        </div>
        </div>
        <AppointmentForm />
      </section>
    </>
  );
}
