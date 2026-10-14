"use client";

import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

export const FiiSculpture = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const orbRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();

  // Create custom metallic chrome material
  const chromeMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#E2E7F0"),
      metalness: 0.96,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.98,
      ior: 2.3,
      specularIntensity: 1.0,
    });
  }, []);

  // Dark brushed obsidian material for accents
  const darkMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#0C0C12"),
      metalness: 0.9,
      roughness: 0.3,
      clearcoat: 0.5,
    });
  }, []);

  // Luminous electric lime core material
  const limeGlowMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color("#CCFF00"),
      emissive: new THREE.Color("#CCFF00"),
      emissiveIntensity: 2.2,
      roughness: 0.2,
      metalness: 0.1,
    });
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth cursor-driven parallax tilt
    const targetRotX = (mouse.y * viewport.height * 0.05);
    const targetRotY = (mouse.x * viewport.width * 0.05);

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.05
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY + Math.sin(state.clock.elapsedTime * 0.4) * 0.15,
      0.05
    );

    // Subtle gentle breathing float
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      Math.sin(state.clock.elapsedTime * 0.8) * 0.12,
      0.05
    );

    // Orbiting chrome rings
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.4;
      ringRef.current.rotation.y += delta * 0.6;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= delta * 0.3;
      ring2Ref.current.rotation.z += delta * 0.5;
    }

    // Pulsing energy orb
    if (orbRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.15;
      orbRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* ── Central FII 3D Sculptural Geometry ── */}

      {/* --- Letter F --- */}
      {/* F Vertical Spine */}
      <mesh position={[-1.2, 0, 0]} material={chromeMaterial} castShadow receiveShadow>
        <boxGeometry args={[0.32, 2.6, 0.4]} />
      </mesh>
      {/* F Top Arm */}
      <mesh position={[-0.8, 1.14, 0]} material={chromeMaterial} castShadow receiveShadow>
        <boxGeometry args={[0.9, 0.32, 0.4]} />
      </mesh>
      {/* F Middle Arm */}
      <mesh position={[-0.9, 0.15, 0]} material={chromeMaterial} castShadow receiveShadow>
        <boxGeometry args={[0.7, 0.28, 0.38]} />
      </mesh>
      {/* F Obsidian Inlay Accent */}
      <mesh position={[-1.2, 0, 0.21]} material={darkMaterial}>
        <boxGeometry args={[0.12, 2.2, 0.05]} />
      </mesh>

      {/* --- First I Pillar --- */}
      <mesh position={[0.2, 0, 0]} material={chromeMaterial} castShadow receiveShadow>
        <boxGeometry args={[0.32, 2.6, 0.4]} />
      </mesh>
      {/* First I Top Cap */}
      <mesh position={[0.2, 1.25, 0]} material={darkMaterial}>
        <boxGeometry args={[0.42, 0.1, 0.46]} />
      </mesh>
      {/* First I Bottom Pedestal */}
      <mesh position={[0.2, -1.25, 0]} material={darkMaterial}>
        <boxGeometry args={[0.42, 0.1, 0.46]} />
      </mesh>

      {/* --- Second I Pillar --- */}
      <mesh position={[1.1, 0, 0]} material={chromeMaterial} castShadow receiveShadow>
        <boxGeometry args={[0.32, 2.6, 0.4]} />
      </mesh>
      {/* Second I Top Cap with Electric Lime Quantum Beacon */}
      <mesh position={[1.1, 1.25, 0]} material={darkMaterial}>
        <boxGeometry args={[0.42, 0.1, 0.46]} />
      </mesh>
      <mesh ref={orbRef} position={[1.1, 1.6, 0]} material={limeGlowMaterial}>
        <octahedronGeometry args={[0.18, 0]} />
      </mesh>
      <pointLight position={[1.1, 1.6, 0.5]} color="#CCFF00" intensity={3} distance={5} />

      {/* Second I Bottom Pedestal */}
      <mesh position={[1.1, -1.25, 0]} material={darkMaterial}>
        <boxGeometry args={[0.42, 0.1, 0.46]} />
      </mesh>

      {/* --- Dynamic Orbiting Kinetic Chrome Rings --- */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.5}>
        <mesh ref={ringRef} material={chromeMaterial} position={[0, 0, 0]}>
          <torusGeometry args={[2.2, 0.04, 16, 100]} />
        </mesh>
        <mesh ref={ring2Ref} material={chromeMaterial} position={[0, 0, 0]}>
          <torusGeometry args={[2.5, 0.025, 16, 100]} />
        </mesh>
      </Float>

      {/* Bottom Sub-surface Lime Accent Beam */}
      <mesh position={[0, -1.45, 0]} material={limeGlowMaterial}>
        <boxGeometry args={[3.2, 0.04, 0.08]} />
      </mesh>
    </group>
  );
};
