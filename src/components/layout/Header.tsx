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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled || open ? "glass-strong" : "bg-white/85 shadow-sm lg:bg-transparent lg:shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-teal to-teal-dim text-sm font-bold text-white shadow-[0_0_20px_rgba(14,155,135,0.28)] sm:h-10 sm:w-10">
            CB
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide">
              CareBridge
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
          className="rounded-xl border border-black/10 p-2.5 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-black/8 px-4 py-5 sm:px-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="py-1 text-lg text-ivory">
                {link.label}
              </Link>
            ))}
            <a href={company.phoneHref} className="flex items-center gap-2 py-1 text-mist">
              <Phone className="h-4 w-4 text-teal" />
              {company.phone}
            </a>
            <Link href="/contact" className="btn-primary mt-2 w-full">
              Get a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
