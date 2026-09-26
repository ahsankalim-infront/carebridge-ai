import type { Metadata } from "next";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { PageHero } from "@/components/layout/PageHero";
import { TiltImage } from "@/components/ui/TiltImage";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "Appointments",
  description: "Book a CareBridge Solutions consultation for medical billing and revenue cycle management.",
};

export default function AppointmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Book consultation"
        title="Reserve a working session."
        body="Pick a time that works. We will review your specialty mix, current A/R, and whether you need full-cycle RCM or a focused recovery sprint."
        image={images.team}
      />
      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-16 sm:px-5 sm:pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:px-8 lg:pb-24">
        <div className="space-y-4">
          <TiltImage
            src={images.consult}
            alt="Consultation session"
            className="h-44 sm:h-52"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        <div className="glass rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-8">
          <h2 className="font-serif text-2xl sm:text-3xl">What to expect</h2>
          <ol className="mt-6 space-y-4 text-sm leading-7 text-mist">
            <li>
              <span className="font-semibold text-ivory">15 minutes of context.</span> Volume,
              EHR/PM, payers, and the pain you want solved first.
            </li>
            <li>
              <span className="font-semibold text-ivory">A candid fit check.</span> If we are not
              the right partner, we will say so.
            </li>
            <li>
              <span className="font-semibold text-ivory">A written next step.</span> Scope,
              timeline, and what onboarding actually requires.
            </li>
          </ol>
        </div>
        </div>
        <AppointmentForm />
      </section>
    </>
  );
}
