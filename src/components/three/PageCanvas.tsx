"use client";

import { AdaptiveFrame } from "@/components/three/AdaptiveFrame";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group } from "three";

function Rings() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.z = state.clock.elapsedTime * 0.08;
    group.current.rotation.y = state.clock.elapsedTime * 0.12;
  });

  return (
    <group ref={group}>
      <AdaptiveFrame mobileX={0} mobileY={0.2} mobileScale={0.85}>
        <group position={[0.15, 0.15, -0.4]}>
      <Float speed={1.2} floatIntensity={0.8}>
        <mesh>
          <torusKnotGeometry args={[0.85, 0.18, 120, 16]} />
          <meshStandardMaterial
            color="#12786c"
            emissive="#0e9b87"
            emissiveIntensity={0.28}
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      </Float>
        </group>
      </AdaptiveFrame>
    </group>
  );
}

export function PageCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.25]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.75} />
          <pointLight position={[3, 2, 4]} intensity={16} color="#2ee6c5" />
          <pointLight position={[-3, -1, 2]} intensity={10} color="#e8c97a" />
          <Rings />
          <Sparkles count={50} scale={[12, 5, 4]} size={2} color="#0e9b87" opacity={0.35} />
        </Suspense>
      </Canvas>
    </div>
  );
}
