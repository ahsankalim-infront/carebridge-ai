import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk with CareCommerce Solutions about billing, credentialing, or a full RCM engagement.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Tell us where cash is leaking."
        body="Share a few details about your practice. We will respond with a clear next step—no opaque onboarding theater."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="space-y-4">
          {[
            { icon: Phone, label: "Call", value: company.phone, href: company.phoneHref },
            { icon: Mail, label: "Email", value: company.email, href: company.emailHref },
            { icon: MapPin, label: "Visit", value: company.address },
          ].map((item) => (
            <div key={item.label} className="glass rounded-3xl p-6">
              <item.icon className="h-5 w-5 text-teal" />
              <p className="mt-4 text-xs tracking-[0.24em] text-mist uppercase">
                {item.label}
              </p>
              {item.href ? (
                <a href={item.href} className="mt-2 block text-lg hover:text-teal">
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 text-lg">{item.value}</p>
              )}
            </div>
          ))}
          <p className="px-2 text-sm text-mist">Hours: {company.hours}</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
