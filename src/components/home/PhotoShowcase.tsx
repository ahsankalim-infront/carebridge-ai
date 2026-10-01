import { PageCanvas } from "@/components/three/DynamicScenes";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { Reveal } from "@/components/ui/Reveal";
import { TiltImage } from "@/components/ui/TiltImage";
import { images } from "@/lib/media";

const officePhotos = [
  {
    src: images.billing,
    alt: "Clinician reviewing patient accounts and claims on a laptop",
    label: "Medical billing workstation",
    className: "h-44 sm:h-64 md:h-80",
    sizes: "100vw",
    wide: true,
  },
  {
    src: images.chartReview,
    alt: "Clinical team reviewing records that become billable claims",
    label: "Chart and claim review",
    className: "h-36 sm:h-48 md:h-56",
    sizes: "(min-width: 768px) 50vw, 50vw",
  },
  {
    src: images.officeTeam,
    alt: "Billing specialists working a claim file together",
    label: "Billing team huddle",
    className: "h-36 sm:h-48 md:h-56",
    sizes: "(min-width: 768px) 50vw, 50vw",
  },
  {
    src: images.consult,
    alt: "Physician checking visit documentation on a tablet",
    label: "EHR visit review",
    className: "h-36 sm:h-48 md:h-56",
    sizes: "(min-width: 768px) 33vw, 50vw",
  },
  {
    src: images.officeClaims,
    alt: "Appointment schedule and stethoscope on a billing desk",
    label: "Scheduling & claims",
    className: "h-36 sm:h-48 md:h-56",
    sizes: "(min-width: 768px) 33vw, 50vw",
  },
  {
    src: images.officeMeeting,
    alt: "Practice owners reviewing an outsourced billing plan",
    label: "Practice consultation",
    className: "h-36 sm:h-48 md:h-56",
    sizes: "(min-width: 768px) 33vw, 50vw",
  },
];

export function PhotoShowcase() {
  return (
    <section className="relative overflow-hidden">
      <BackdropImage src={images.billing} className="opacity-15 md:opacity-15" />
      <PageCanvas />
      <div className="pointer-events-none absolute inset-0 bg-white/75 md:bg-ink/35" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-5 md:py-12 lg:px-8">
        <Reveal>
          <p className="eyebrow text-teal">Our billing office</p>
          <h2 className="section-title mt-3">
            The people who work your claims every day
          </h2>
          <p className="lede mt-4 max-w-2xl text-mist">
            Certified medical billers and coders submit claims, chase denials,
            post payments, and keep payer follow-up moving — so your front desk
            does not have to.
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
                <p className="pointer-events-none absolute bottom-2 left-2 max-w-[calc(100%-1rem)] truncate rounded-full bg-white/90 px-2.5 py-1 text-sm font-medium text-ivory shadow-sm sm:bottom-3 sm:left-3">
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
