"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function PortalRings() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  const rings = [
    { radius: 1.2, speed: 0.8, color: "#CCFF00" },
    { radius: 1.8, speed: -0.6, color: "#E2E8F0" },
    { radius: 2.4, speed: 0.4, color: "#8A92A0" },
    { radius: 3.0, speed: -0.3, color: "#CCFF00" },
  ];

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Follow mouse gently
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * 0.4,
      0.05
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.4,
      0.05
    );

    // Rotate individual children rings
    groupRef.current.children.forEach((child, i) => {
      const ring = rings[i % rings.length];
      child.rotation.z += delta * ring.speed;
      child.rotation.x += delta * (ring.speed * 0.5);
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {rings.map((ring, idx) => (
        <mesh key={idx}>
          <torusGeometry args={[ring.radius, 0.02, 16, 80]} />
          <meshStandardMaterial
            color={ring.color}
            emissive={ring.color}
            emissiveIntensity={ring.color === "#CCFF00" ? 1.8 : 0.8}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      ))}

      {/* Central Singularity Sphere */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhysicalMaterial
          color="#000000"
          roughness={0.05}
          metalness={0.95}
          clearcoat={1.0}
          reflectivity={1.0}
        />
      </mesh>
    </group>
  );
}

export const PortalScene = () => {
  return (
    <div className="w-full h-full relative pointer-events-none opacity-80">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 3]} color="#CCFF00" intensity={2} />
        <PortalRings />
      </Canvas>
    </div>
  );
};
