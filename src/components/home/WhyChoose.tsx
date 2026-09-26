import { Reveal } from "@/components/ui/Reveal";
import { processSteps, stats, values } from "@/lib/company";

export function WhyChoose() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="glass-strong overflow-hidden rounded-[2rem] p-8 md:p-10">
            <p className="text-xs tracking-[0.32em] text-teal uppercase">
              Why CareCommerce
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Healthcare expertise, financial intelligence.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-mist">
              We combine certified coding, payer operations, and live analytics
              to improve reimbursement, transparency, and cash flow for medical
              practices of every size.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl bg-white/4 p-4">
                  <p className="font-semibold text-teal">{value.title}</p>
                  <p className="mt-2 text-sm leading-6 text-mist">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass flex min-h-36 flex-col justify-end rounded-3xl p-6"
              >
                <p className="font-serif text-4xl text-gradient">{stat.value}</p>
                <p className="mt-2 text-sm text-mist">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {processSteps.map((item, index) => (
          <Reveal key={item.step} delay={index * 0.05}>
            <div className="rounded-3xl border border-white/8 bg-white/3 p-6">
              <p className="font-serif text-3xl text-gold">{item.step}</p>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mist">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
