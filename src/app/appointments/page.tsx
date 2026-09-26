import type { Metadata } from "next";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Appointments",
  description: "Book a CareCommerce Solutions consultation for medical billing and revenue cycle management.",
};

export default function AppointmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Book consultation"
        title="Reserve a working session."
        body="Pick a time that works. We will review your specialty mix, current A/R, and whether you need full-cycle RCM or a focused recovery sprint."
      />
      <section className="mx-auto grid max-w-5xl gap-8 px-5 pb-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="glass rounded-[2rem] p-8">
          <h2 className="font-serif text-3xl">What to expect</h2>
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
        <AppointmentForm />
      </section>
    </>
  );
}
