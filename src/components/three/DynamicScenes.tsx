"use client";

import dynamic from "next/dynamic";

export const HeroCanvas = dynamic(
  () => import("./HeroCanvas").then((mod) => mod.HeroCanvas),
  { ssr: false },
);

export const PageCanvas = dynamic(
  () => import("./PageCanvas").then((mod) => mod.PageCanvas),
  { ssr: false },
);

export const ServicesCanvas = dynamic(
  () => import("./ServicesCanvas").then((mod) => mod.ServicesCanvas),
  { ssr: false },
);
