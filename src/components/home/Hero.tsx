import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroCanvas } from "@/components/three/DynamicScenes";
import { company } from "@/lib/company";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <HeroCanvas />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-ink via-ink/78 to-ink/25" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-ink to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pt-28 pb-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/8 px-4 py-2 text-xs tracking-[0.22em] text-teal uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            Revenue Cycle, Elevated
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{company.tagline}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-mist">
            {company.description} Precision billing, cleaner claims, and dashboards
            your leadership can actually use.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/appointments" className="btn-primary">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-ghost">
              Our Services
            </Link>
          </div>
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <p className="font-serif text-3xl text-teal">98%</p>
              <p className="mt-1 text-xs text-mist">Clean claims</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-gold">32%</p>
              <p className="mt-1 text-xs text-mist">Faster cash</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-ivory">15+</p>
              <p className="mt-1 text-xs text-mist">Specialties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
