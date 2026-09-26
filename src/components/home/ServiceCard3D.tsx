"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { serviceImage } from "@/lib/media";
import type { Service } from "@/lib/types";

function tiltFromPoint(
  node: HTMLAnchorElement,
  clientX: number,
  clientY: number,
) {
  const rect = node.getBoundingClientRect();
  const x = (clientX - rect.left) / rect.width;
  const y = (clientY - rect.top) / rect.height;
  node.style.transform = `perspective(1100px) rotateY(${(x - 0.5) * 14}deg) rotateX(${(0.5 - y) * 10}deg) translateZ(8px)`;
}

export function ServiceCard3D({ service }: { service: Service }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  function onMove(event: React.MouseEvent<HTMLAnchorElement>) {
    if (window.matchMedia("(hover: none)").matches) return;
    if (!cardRef.current) return;
    tiltFromPoint(cardRef.current, event.clientX, event.clientY);
  }

  function resetTilt() {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "";
  }

  return (
    <Link
      ref={cardRef}
      href={`/services/${service.slug}`}
      onMouseMove={onMove}
      onMouseLeave={resetTilt}
      className="group glass service-card-3d relative block h-full overflow-hidden rounded-3xl"
    >
      <div className="pointer-events-none absolute -top-10 -right-8 h-28 w-28 rounded-full bg-teal/15 blur-2xl transition group-hover:bg-gold/20" />
      <div className="relative h-36 overflow-hidden sm:h-48">
        <Image
          src={serviceImage(service.slug)}
          alt={service.title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/5 to-transparent" />
        <div className="service-card-shine" />
      </div>
      <div className="p-5 sm:p-7">
        <div className="service-icon-3d relative flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/12 text-teal">
          <ServiceIcon name={service.icon} />
        </div>
        <h3 className="relative mt-5 text-lg font-semibold sm:text-xl">{service.title}</h3>
        <p className="relative mt-3 text-sm leading-7 text-mist">{service.excerpt}</p>
        <span className="relative mt-6 inline-flex items-center gap-2 text-sm text-teal">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
