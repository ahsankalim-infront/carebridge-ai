import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center sm:px-5">
      <p className="eyebrow text-teal">404</p>
      <h1 className="display-title mt-4">This page is not on the billing file.</h1>
      <p className="lede mt-4 max-w-md text-mist">
        The link may be outdated. Head back to medical billing services or book a consultation.
      </p>
      <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
        <Link href="/" className="btn-primary w-full sm:w-auto">
          Home
        </Link>
        <Link href="/services" className="btn-ghost w-full sm:w-auto">
          Services
        </Link>
      </div>
    </section>
  );
}
