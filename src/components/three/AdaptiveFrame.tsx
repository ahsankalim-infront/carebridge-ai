"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, type ReactNode } from "react";
import type { Group as ThreeGroup } from "three";

export function AdaptiveFrame({
  children,
  mobileX = -1.1,
  mobileY = 0.15,
  mobileScale = 0.78,
}: {
  children: ReactNode;
  mobileX?: number;
  mobileY?: number;
  mobileScale?: number;
}) {
  const group = useRef<ThreeGroup>(null);
  const mobile = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const sync = () => {
      mobile.current = media.matches;
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useFrame(() => {
    if (!group.current) return;
    const targetX = mobile.current ? mobileX : 0;
    const targetY = mobile.current ? mobileY : 0;
    const targetScale = mobile.current ? mobileScale : 1;
    group.current.position.x += (targetX - group.current.position.x) * 0.1;
    group.current.position.y += (targetY - group.current.position.y) * 0.1;
    const next = group.current.scale.x + (targetScale - group.current.scale.x) * 0.1;
    group.current.scale.setScalar(next);
  });

  return <group ref={group}>{children}</group>;
}
