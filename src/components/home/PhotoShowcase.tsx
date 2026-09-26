import { PageCanvas } from "@/components/three/DynamicScenes";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { Reveal } from "@/components/ui/Reveal";
import { TiltImage } from "@/components/ui/TiltImage";
import { images } from "@/lib/media";

const officePhotos = [
  {
    src: images.officeFloor,
    alt: "Medical billing operations floor",
    label: "Operations floor",
    className: "h-44 sm:h-64 md:h-80",
    sizes: "100vw",
    wide: true,
  },
  {
    src: images.officeWorkstations,
    alt: "Billing specialists at workstations",
    label: "Coding workstations",
    className: "h-36 sm:h-48 md:h-56",
    sizes: "(min-width: 768px) 50vw, 50vw",
  },
  {
    src: images.officeTeam,
    alt: "Revenue cycle team reviewing claims",
    label: "Claim review",
    className: "h-36 sm:h-48 md:h-56",
    sizes: "(min-width: 768px) 50vw, 50vw",
  },
  {
    src: images.officeDesk,
    alt: "Medical biller working patient accounts",
    label: "Patient accounts",
    className: "h-36 sm:h-48 md:h-56",
    sizes: "(min-width: 768px) 33vw, 50vw",
  },
  {
    src: images.officeClaims,
    alt: "Claims paperwork and reimbursement desk",
    label: "Reimbursement desk",
    className: "h-36 sm:h-48 md:h-56",
    sizes: "(min-width: 768px) 33vw, 50vw",
  },
  {
    src: images.officeMeeting,
    alt: "Billing managers planning payer follow-up",
    label: "Payer huddle",
    className: "h-36 sm:h-48 md:h-56",
    sizes: "(min-width: 768px) 33vw, 50vw",
  },
];

export function PhotoShowcase() {
  return (
    <section className="relative overflow-hidden">
      <BackdropImage src={images.officeFloor} className="opacity-15 md:opacity-15" />
      <PageCanvas />
      <div className="pointer-events-none absolute inset-0 bg-white/75 md:bg-ink/35" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-5 md:py-12 lg:px-8">
        <Reveal>
          <p className="text-[10px] tracking-[0.18em] text-teal uppercase sm:text-xs sm:tracking-[0.32em]">
            Inside the work
          </p>
          <h2 className="mt-3 font-serif text-[1.75rem] leading-tight sm:text-4xl md:text-5xl">
            Care that looks as precise as it bills.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-mist sm:text-base">
            From the operations floor to claim desks and payer huddles — this is
            the medical billing office behind every clean claim.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-4 lg:grid-cols-3">
          {officePhotos.map((photo, index) => (
            <Reveal
              key={photo.src}
              delay={index * 0.04}
              className={photo.wide ? "col-span-2 lg:col-span-3" : ""}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <TiltImage
                  src={photo.src}
                  alt={photo.alt}
                  className={`rounded-2xl ${photo.className}`}
                  sizes={photo.sizes}
                />
                <p className="pointer-events-none absolute bottom-2 left-2 max-w-[calc(100%-1rem)] truncate rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-ivory shadow-sm sm:bottom-3 sm:left-3 sm:text-xs">
                  {photo.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
