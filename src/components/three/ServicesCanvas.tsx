"use client";

import { AdaptiveFrame } from "@/components/three/AdaptiveFrame";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";

function FloatingShape({
  position,
  color,
  kind,
}: {
  position: [number, number, number];
  color: string;
  kind: "torus" | "octa" | "icosa";
}) {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.18;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.26;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.5} floatIntensity={1.1}>
      <mesh ref={mesh} position={position}>
        {kind === "torus" ? <torusGeometry args={[0.38, 0.12, 16, 48]} /> : null}
        {kind === "octa" ? <octahedronGeometry args={[0.36, 0]} /> : null}
        {kind === "icosa" ? <icosahedronGeometry args={[0.32, 0]} /> : null}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.22}
          metalness={0.55}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.12) * 0.18;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 2, 4]} intensity={14} color="#2ee6c5" />
      <pointLight position={[-3, -1, 3]} intensity={10} color="#e8c97a" />
      <AdaptiveFrame mobileX={0} mobileY={0.1} mobileScale={0.62}>
        <FloatingShape position={[-3.2, 1.1, -1]} color="#0e9b87" kind="torus" />
        <FloatingShape position={[3.4, 0.6, -1.2]} color="#b8862a" kind="octa" />
        <FloatingShape position={[-2.4, -1.2, -0.6]} color="#1ac4ab" kind="icosa" />
        <FloatingShape position={[2.6, -1.3, -0.8]} color="#0e9b87" kind="icosa" />
        <FloatingShape position={[0.2, 1.5, -1.6]} color="#c9a44a" kind="torus" />
        <FloatingShape position={[0.1, -1.6, -1.1]} color="#12786c" kind="octa" />
        <FloatingShape position={[-0.8, 0.2, 0.2]} color="#0e9b87" kind="icosa" />
        <FloatingShape position={[0.9, -0.3, 0.1]} color="#b8862a" kind="torus" />
      </AdaptiveFrame>
      <Sparkles count={45} scale={[12, 5, 4]} size={2} speed={0.35} color="#0e9b87" opacity={0.32} />
    </group>
  );
}

export function ServicesCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, 1.35]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
