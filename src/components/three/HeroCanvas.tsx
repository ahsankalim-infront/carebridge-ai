"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";

function DNAHelix() {
  const group = useRef<Group>(null);
  const strands = useMemo(() => {
    const left: [number, number, number][] = [];
    const right: [number, number, number][] = [];
    const rungs: [number, number, number][] = [];

    for (let i = 0; i < 42; i += 1) {
      const t = i * 0.32;
      const y = i * 0.18 - 3.6;
      const x = Math.cos(t) * 0.72;
      const z = Math.sin(t) * 0.72;
      left.push([x, y, z]);
      right.push([-x, y, -z]);
      if (i % 3 === 0) rungs.push([0, y, 0]);
    }

    return { left, right, rungs };
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.18;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
  });

  return (
    <group ref={group} position={[1.8, 0.1, -0.4]} rotation={[0.15, 0.4, 0.1]}>
      {strands.left.map((pos, index) => (
        <mesh key={`l-${index}`} position={pos}>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshStandardMaterial
            color="#2ee6c5"
            emissive="#149e88"
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
      {strands.right.map((pos, index) => (
        <mesh key={`r-${index}`} position={pos}>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshStandardMaterial
            color="#e8c97a"
            emissive="#c9a44a"
            emissiveIntensity={0.55}
          />
        </mesh>
      ))}
      {strands.rungs.map((pos, index) => (
        <mesh key={`n-${index}`} position={pos} rotation={[0, index * 0.32, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 1.4, 8]} />
          <meshStandardMaterial
            color="#7ef0e0"
            transparent
            opacity={0.35}
            emissive="#2ee6c5"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function OrbitingOrbs() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.22;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.18;
  });

  return (
    <group ref={group}>
      {[
        { pos: [2.4, 1.1, 0.4] as const, color: "#2ee6c5", scale: 0.22 },
        { pos: [-2.1, -0.8, 0.8] as const, color: "#e8c97a", scale: 0.16 },
        { pos: [0.4, 1.8, -1.2] as const, color: "#7ef0e0", scale: 0.12 },
        { pos: [-1.6, 1.3, 1.4] as const, color: "#2ee6c5", scale: 0.1 },
      ].map((orb, index) => (
        <Float key={index} speed={1.4 + index * 0.2} rotationIntensity={0.6} floatIntensity={1.1}>
          <mesh position={[...orb.pos]}>
            <icosahedronGeometry args={[orb.scale, 0]} />
            <meshStandardMaterial
              color={orb.color}
              roughness={0.15}
              metalness={0.55}
              emissive={orb.color}
              emissiveIntensity={0.35}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function CoreBlob() {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.12;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.05;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.7}>
      <mesh ref={mesh} position={[-0.15, 0.15, 0]}>
        <sphereGeometry args={[1.15, 64, 64]} />
        <MeshDistortMaterial
          color="#0c3b3a"
          emissive="#149e88"
          emissiveIntensity={0.28}
          roughness={0.18}
          metalness={0.62}
          distort={0.42}
          speed={1.6}
        />
      </mesh>
      <mesh rotation={[1.2, 0.4, 0.2]}>
        <torusGeometry args={[1.65, 0.025, 16, 90]} />
        <meshStandardMaterial
          color="#2ee6c5"
          emissive="#2ee6c5"
          emissiveIntensity={0.7}
          transparent
          opacity={0.7}
        />
      </mesh>
      <mesh rotation={[0.3, 1.1, 1.4]}>
        <torusGeometry args={[1.95, 0.012, 12, 80]} />
        <meshStandardMaterial
          color="#e8c97a"
          emissive="#e8c97a"
          emissiveIntensity={0.45}
          transparent
          opacity={0.45}
        />
      </mesh>
    </Float>
  );
}

function CameraRig() {
  const vec = useMemo(() => new THREE.Vector3(), []);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    const x = pointer.current.x * 0.55;
    const y = pointer.current.y * 0.28;
    state.camera.position.lerp(vec.set(x, y + 0.15, 6.2), 0.045);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#04080f"]} />
      <fog attach="fog" args={["#04080f", 6.5, 16]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 4]} intensity={28} color="#2ee6c5" distance={14} />
      <pointLight position={[-4, -2, 2]} intensity={18} color="#e8c97a" distance={12} />
      <spotLight position={[0, 6, 2]} intensity={20} color="#ffffff" angle={0.45} penumbra={0.7} />
      <CoreBlob />
      <DNAHelix />
      <OrbitingOrbs />
      <Sparkles count={90} scale={[10, 6, 6]} size={2.2} speed={0.4} color="#7ef0e0" opacity={0.55} />
      <CameraRig />
    </>
  );
}

export function HeroCanvas() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (!enabled) {
    return <div className="pointer-events-none absolute inset-0 bg-ink" />;
  }

  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.2, 6.2], fov: 42 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
