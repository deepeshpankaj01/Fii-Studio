"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { FiiSculpture } from "./FiiSculpture";

function ParticleCloud({ count = 800 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const color1 = new THREE.Color("#FFFFFF");
    const color2 = new THREE.Color("#CCFF00");
    const color3 = new THREE.Color("#8A92A0");

    for (let i = 0; i < count; i++) {
      // Distribute in a spherical cloud around the scene
      const r = 3 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;

      // Color distribution: mostly white/chrome, 25% electric lime
      const rand = Math.random();
      const chosenColor = rand > 0.75 ? color2 : rand > 0.4 ? color1 : color3;
      cols[i * 3] = chosenColor.r;
      cols[i * 3 + 1] = chosenColor.g;
      cols[i * 3 + 2] = chosenColor.b;
    }
    return { positions: pos, colors: cols };
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.04;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function SceneLights() {
  return (
    <>
      {/* Ambient foundational void light */}
      <ambientLight intensity={0.5} />

      {/* Main Studio Key Light - Warm Ivory */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={2.4}
        color="#F8FAFC"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Rim light - Electric Lime */}
      <directionalLight
        position={[-6, -3, -4]}
        intensity={2.8}
        color="#CCFF00"
      />

      {/* Soft Top Down Cyan-Chrome Fill */}
      <spotLight
        position={[0, 10, 0]}
        intensity={1.2}
        color="#CBD5E1"
        angle={0.6}
        penumbra={0.8}
      />
    </>
  );
}

export const HeroScene = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    setHasMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebGLSupported(false);
      }
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  if (!hasMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-t-2 border-fii-lime animate-spin" />
      </div>
    );
  }

  // Graceful fallback if WebGL is unavailable
  if (!webGLSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-72 h-72 rounded-full border border-fii-lime/30 bg-gradient-radial from-fii-lime/10 to-transparent flex items-center justify-center">
          <div className="text-center font-mono text-xs text-fii-lime">
            FII STUDIO ENGINE [2D MODE]
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <SceneLights />
        <FiiSculpture />
        <ParticleCloud count={650} />
      </Canvas>
    </div>
  );
};
