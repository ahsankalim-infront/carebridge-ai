import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { TiltImage } from "@/components/ui/TiltImage";
import { company } from "@/lib/company";
import { images } from "@/lib/media";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk with CareBridge Solutions about billing, credentialing, or a full RCM engagement.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Tell us where cash is leaking."
        body="Share a few details about your practice. We will respond with a clear next step—no opaque onboarding theater."
        image={images.consult}
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-5 sm:pb-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8 lg:px-8 lg:pb-24">
        <div className="space-y-4">
          <TiltImage
            src={images.doctor}
            alt="Speak with a CareBridge advisor"
            className="h-44 sm:h-52"
            sizes="(min-width: 1024px) 35vw, 100vw"
          />
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
