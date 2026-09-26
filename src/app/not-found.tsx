import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-xs tracking-[0.32em] text-teal uppercase">404</p>
      <h1 className="mt-4 font-serif text-5xl">This page is off the ledger.</h1>
      <p className="mt-4 max-w-md text-mist">
        The link may be outdated. Head back to services or book a consultation.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="btn-primary">
          Home
        </Link>
        <Link href="/services" className="btn-ghost">
          Services
        </Link>
      </div>
    </section>
  );
}
