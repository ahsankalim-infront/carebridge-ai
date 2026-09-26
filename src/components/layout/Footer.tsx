import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { DataSourceBadge } from "@/components/layout/DataSourceBadge";
import { company, navLinks } from "@/lib/company";

export function Footer() {
  return (
    <footer className="relative z-10 mt-6 border-t border-black/8 bg-white/80 sm:mt-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-5 sm:py-16 md:grid-cols-3 md:gap-10 lg:px-8">
        <div className="min-w-0">
          <p className="text-lg font-semibold">{company.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-mist">
            Optimizing healthcare revenue with innovative billing, credentialing,
            and analytics for practices of every size.
          </p>
        </div>
        <div className="min-w-0">
          <p className="mb-4 text-xs tracking-[0.2em] text-teal uppercase">
            Contact
          </p>
          <div className="space-y-3 text-sm text-mist">
            <a href={company.phoneHref} className="flex items-center gap-3 hover:text-ivory">
              <Phone className="h-4 w-4 shrink-0 text-teal" />
              <span>{company.phone}</span>
            </a>
            <a href={company.emailHref} className="flex items-start gap-3 hover:text-ivory">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <span className="break-all">{company.email}</span>
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <span>{company.address}</span>
            </p>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs tracking-[0.2em] text-teal uppercase">
            Links
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-mist hover:text-ivory">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="text-mist hover:text-ivory">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 border-t border-black/8 px-4 py-5 text-center text-xs text-mist sm:flex-row sm:px-5">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <DataSourceBadge />
      </div>
    </footer>
  );
}
