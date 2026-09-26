import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroCanvas } from "@/components/three/DynamicScenes";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { TiltImage } from "@/components/ui/TiltImage";
import { company } from "@/lib/company";
import { images } from "@/lib/media";

export function Hero() {
  return (
    <section className="relative overflow-hidden md:min-h-[100svh]">
      <BackdropImage src={images.clinic} className="opacity-25 md:opacity-20" />
      <HeroCanvas />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/80 via-white/55 to-ink/90 md:from-ink/55 md:via-ink/20 md:to-transparent lg:bg-linear-to-r lg:from-ink/80 lg:via-ink/35 lg:to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 px-4 pt-24 pb-10 sm:gap-8 sm:px-5 sm:pt-28 sm:pb-16 md:min-h-[100svh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-20">
        <div className="max-w-2xl rounded-3xl bg-white/80 p-4 shadow-[0_12px_40px_rgba(16,42,48,0.06)] backdrop-blur-md sm:p-6 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-teal/25 bg-white px-3 py-2 text-[10px] tracking-[0.14em] text-teal uppercase sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.22em]">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">Revenue Cycle, Elevated</span>
          </div>
          <h1 className="font-serif text-[2rem] leading-[1.12] sm:text-5xl lg:text-7xl">
            <span className="text-gradient">{company.tagline}</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-mist sm:mt-6 sm:text-lg sm:leading-8">
            {company.description} Precision billing, cleaner claims, and dashboards
            your leadership can actually use.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <Link href="/appointments" className="btn-primary w-full sm:w-auto">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-ghost w-full sm:w-auto">
              Our Services
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2 border-t border-black/8 pt-5 sm:mt-12 sm:gap-4 sm:pt-6">
            <div>
              <p className="font-serif text-2xl text-teal sm:text-3xl">98%</p>
              <p className="mt-1 text-[11px] leading-4 text-mist sm:text-xs">Clean claims</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-gold sm:text-3xl">32%</p>
              <p className="mt-1 text-[11px] leading-4 text-mist sm:text-xs">Faster cash</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-ivory sm:text-3xl">15+</p>
              <p className="mt-1 text-[11px] leading-4 text-mist sm:text-xs">Specialties</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 lg:hidden">
          <div className="relative col-span-2 h-36 overflow-hidden rounded-2xl sm:h-44">
            <TiltImage
              src={images.doctor}
              alt="Physician reviewing patient care"
              className="h-full w-full rounded-2xl"
              sizes="100vw"
              priority
            />
          </div>
          <div className="relative h-28 overflow-hidden rounded-2xl sm:h-32">
            <TiltImage
              src={images.officeWorkstations}
              alt="Medical billing workstations"
              className="h-full w-full rounded-2xl"
              sizes="50vw"
            />
          </div>
          <div className="relative h-28 overflow-hidden rounded-2xl sm:h-32">
            <TiltImage
              src={images.officeTeam}
              alt="Billing team reviewing claims"
              className="h-full w-full rounded-2xl"
              sizes="50vw"
            />
          </div>
        </div>

        <div className="relative hidden h-[520px] lg:block">
          <div className="animate-float absolute top-0 right-6 h-[340px] w-[260px] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
            <TiltImage
              src={images.doctor}
              alt="Physician reviewing patient care"
              className="h-full w-full"
              sizes="260px"
              priority
            />
          </div>
          <div className="animate-float absolute right-40 bottom-4 h-[220px] w-[280px] shadow-[0_24px_60px_rgba(0,0,0,0.16)] [animation-delay:1.2s]">
            <TiltImage
              src={images.clinic}
              alt="Modern healthcare facility"
              className="h-full w-full"
              sizes="280px"
            />
          </div>
          <div className="animate-float absolute top-28 left-0 h-[160px] w-[200px] shadow-[0_20px_50px_rgba(0,0,0,0.14)] [animation-delay:0.6s]">
            <TiltImage
              src={images.analytics}
              alt="Revenue analytics workspace"
              className="h-full w-full"
              sizes="200px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
