import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/media";

export function ContactBand() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-5 sm:pb-20 lg:px-8 lg:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[1.5rem] border border-teal/20 sm:rounded-[2rem]">
          <Image
            src={images.cta}
            alt="Medical billing workstation with clinical records"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/88 to-white/70" />
          <div className="animate-glow absolute -top-16 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-teal/25 blur-3xl sm:w-80" />
          <div className="relative px-5 py-10 text-center sm:px-8 sm:py-16">
            <p className="eyebrow text-gold">
              Start billing with CareBridge
            </p>
            <h2 className="section-title mt-3">
              Put your claims in expert hands
            </h2>
            <p className="lede mx-auto mt-4 max-w-2xl text-mist">
              Tell us your specialty, monthly visit volume, and where claims
              stall. We will show you how medical billing should collect.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Talk to billing
              </Link>
              <Link href="/appointments" className="btn-ghost w-full sm:w-auto">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
