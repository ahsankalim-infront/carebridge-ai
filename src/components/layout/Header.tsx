"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, navLinks } from "@/lib/company";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || open ? "glass-strong" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-teal to-teal-dim text-sm font-bold text-ink shadow-[0_0_24px_rgba(46,230,197,0.35)]">
            CC
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide">
              CareCommerce
            </span>
            <span className="block text-[11px] text-mist/70">Solutions</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition ${
                pathname === link.href
                  ? "text-teal"
                  : "text-mist hover:text-ivory"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm text-mist hover:text-teal"
          >
            <Phone className="h-4 w-4" />
            {company.phone}
          </a>
          <Link href="/contact" className="btn-primary !px-4 !py-2.5 text-sm">
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="rounded-xl border border-white/10 p-2 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-lg text-ivory">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-2">
              Get a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
