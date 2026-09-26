import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { DataSourceBadge } from "@/components/layout/DataSourceBadge";
import { company, navLinks } from "@/lib/company";

export function Footer() {
  return (
    <footer className="relative z-10 mt-10 border-t border-white/10 bg-[#050b13]/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-semibold">CareCommerce Solutions</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-mist">
            Optimizing healthcare revenue with innovative billing, credentialing,
            and analytics for practices of every size.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm tracking-[0.2em] text-teal uppercase">
            Contact
          </p>
          <div className="space-y-3 text-sm text-mist">
            <a href={company.phoneHref} className="flex items-center gap-3 hover:text-ivory">
              <Phone className="h-4 w-4 text-teal" />
              {company.phone}
            </a>
            <a href={company.emailHref} className="flex items-center gap-3 hover:text-ivory">
              <Mail className="h-4 w-4 text-teal" />
              {company.email}
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-teal" />
              {company.address}
            </p>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm tracking-[0.2em] text-teal uppercase">
            Links
          </p>
          <div className="grid gap-3 text-sm">
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
      <div className="flex flex-col items-center justify-center gap-3 border-t border-white/8 px-5 py-5 text-center text-xs text-mist/70 sm:flex-row">
        <span>© {new Date().getFullYear()} CareCommerce Solutions. All rights reserved.</span>
        <DataSourceBadge />
      </div>
    </footer>
  );
}
