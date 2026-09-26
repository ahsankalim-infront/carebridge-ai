"use client";

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
    <group ref={group} position={[2.2, 0.2, -1]}>
      <Float speed={1.2} floatIntensity={0.8}>
        <mesh>
          <torusKnotGeometry args={[0.85, 0.18, 120, 16]} />
          <meshStandardMaterial
            color="#0b3d3a"
            emissive="#2ee6c5"
            emissiveIntensity={0.35}
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
}

export function PageCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <color attach="background" args={["#04080f"]} />
          <fog attach="fog" args={["#04080f", 7, 14]} />
          <ambientLight intensity={0.4} />
          <pointLight position={[3, 2, 4]} intensity={20} color="#2ee6c5" />
          <pointLight position={[-3, -1, 2]} intensity={12} color="#e8c97a" />
          <Rings />
          <Sparkles count={60} scale={[12, 5, 4]} size={2} color="#7ef0e0" opacity={0.45} />
        </Suspense>
      </Canvas>
    </div>
  );
}
