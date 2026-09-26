import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function ContactBand() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-teal/20 bg-linear-to-br from-[#0b2a2a] via-[#07131f] to-[#1a1608] px-8 py-14 text-center">
          <div className="animate-glow absolute -top-16 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-teal/25 blur-3xl" />
          <p className="relative text-xs tracking-[0.32em] text-gold uppercase">
            Next step
          </p>
          <h2 className="relative mt-3 font-serif text-4xl md:text-5xl">
            Transform your revenue cycle today
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-mist">
            Expert medical billing solutions that increase collections, reduce
            denials, and streamline your operations.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Send a Message
            </Link>
            <Link href="/appointments" className="btn-ghost">
              Book Consultation
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
