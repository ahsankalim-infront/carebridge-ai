import { BackdropImage } from "@/components/ui/BackdropImage";
import { Reveal } from "@/components/ui/Reveal";
import { TiltImage } from "@/components/ui/TiltImage";
import { processSteps, stats, values } from "@/lib/company";
import { images } from "@/lib/media";

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden">
      <BackdropImage src={images.team} className="opacity-10 md:opacity-12" />
      <div className="pointer-events-none absolute inset-0 bg-white/80 md:bg-ink/45" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-10 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <Reveal className="min-w-0">
          <div className="glass-strong overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
            <TiltImage
              src={images.team}
              alt="CareBridge team collaborating on revenue cycle work"
              className="h-48 rounded-none sm:h-56 md:h-64"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
            <div className="p-5 sm:p-8 md:p-10">
              <p className="text-[10px] tracking-[0.18em] text-teal uppercase sm:text-xs sm:tracking-[0.32em]">
                Why CareBridge
              </p>
              <h2 className="mt-3 font-serif text-[1.75rem] leading-tight sm:text-4xl md:text-5xl">
                Healthcare expertise, financial intelligence.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-mist sm:mt-5 sm:text-base sm:leading-8">
                We combine certified coding, payer operations, and live analytics
                to improve reimbursement, transparency, and cash flow for medical
                practices of every size.
              </p>
              <div className="mt-6 grid gap-3 md:mt-8 md:grid-cols-3 md:gap-4">
                {values.map((value) => (
                  <div key={value.title} className="rounded-2xl bg-teal/5 p-4">
                    <p className="font-semibold text-teal">{value.title}</p>
                    <p className="mt-2 text-sm leading-6 text-mist">{value.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass flex min-h-28 flex-col justify-end rounded-2xl p-4 sm:min-h-36 sm:rounded-3xl sm:p-6"
              >
                <p className="font-serif text-3xl text-gradient sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs text-mist sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((item, index) => (
          <Reveal key={item.step} delay={index * 0.05} className="min-w-0">
            <div className="h-full rounded-3xl border border-black/8 bg-white p-5 shadow-[0_10px_30px_rgba(16,42,48,0.05)] sm:p-6">
              <p className="font-serif text-3xl text-gold">{item.step}</p>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mist">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  );
}
