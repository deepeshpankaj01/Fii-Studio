"use client";

import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { sounds } from "../ui/SoundEffects";

interface LabSettings {
  mode: "topology" | "liquid" | "latent";
  speed: number;
  distortion: number;
  colorScheme: "lime" | "chrome" | "nebula";
  wireframe: boolean;
}

// ── 1. NEURAL TOPOLOGY EXPERIMENT ──
function NeuralTopologyMesh({ settings }: { settings: LabSettings }) {
  const meshRef = useRef<THREE.Mesh>(null);

  // High-density plane geometry for smooth organic wave deformation
  const geom = useMemo(() => new THREE.PlaneGeometry(5, 5, 64, 64), []);

  const material = useMemo(() => {
    let col = "#CCFF00";
    if (settings.colorScheme === "chrome") col = "#E2E8F0";
    if (settings.colorScheme === "nebula") col = "#A855F7";

    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(col),
      wireframe: settings.wireframe,
      roughness: 0.2,
      metalness: 0.85,
      side: THREE.DoubleSide,
    });
  }, [settings.colorScheme, settings.wireframe]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * settings.speed;
    const pos = (meshRef.current.geometry as THREE.BufferGeometry).attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      // Dual sinusoidal harmonic wave equation
      const z =
        Math.sin(u * 1.8 + t) * Math.cos(v * 1.8 + t) * (0.35 * settings.distortion) +
        Math.sin(Math.sqrt(u * u + v * v) * 3 - t * 1.5) * (0.2 * settings.distortion);
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geom}
      material={material}
      rotation={[-Math.PI / 3, 0, 0]}
      position={[0, -0.3, 0]}
    />
  );
}

// ── 2. LIQUID CHROME DEFORMER EXPERIMENT ──
function LiquidChromeSphere({ settings }: { settings: LabSettings }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const geom = useMemo(() => new THREE.IcosahedronGeometry(1.6, 32), []);

  const basePositions = useMemo(() => {
    return geom.attributes.position.clone();
  }, [geom]);

  const chromeMaterial = useMemo(() => {
    let col = "#E4E8EE";
    if (settings.colorScheme === "lime") col = "#CCFF00";
    if (settings.colorScheme === "nebula") col = "#EC4899";

    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(col),
      metalness: 0.95,
      roughness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      wireframe: settings.wireframe,
      reflectivity: 1.0,
      ior: 2.4,
    });
  }, [settings.colorScheme, settings.wireframe]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * settings.speed * 1.4;
    const pos = (meshRef.current.geometry as THREE.BufferGeometry).attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const ox = basePositions.getX(i);
      const oy = basePositions.getY(i);
      const oz = basePositions.getZ(i);

      // Noise displacement
      const wave =
        Math.sin(ox * 3 + t) *
        Math.cos(oy * 3 + t) *
        Math.sin(oz * 3 + t) *
        (0.28 * settings.distortion);

      pos.setXYZ(i, ox * (1 + wave), oy * (1 + wave), oz * (1 + wave));
    }
    pos.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();

    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.x += 0.003;
  });

  return (
    <mesh ref={meshRef} geometry={geom} material={chromeMaterial} position={[0, 0, 0]} />
  );
}

// ── 3. MULTILINGUAL LATENT SPACE (ANUVAA / PHONETIC GRAPH) ──
function LatentSpaceNodes({ settings }: { settings: LabSettings }) {
  const groupRef = useRef<THREE.Group>(null);

  const nodeData = useMemo(() => {
    const nodes = [];
    const labels = [
      "Santali / Ol Chiki",
      "Hindi Phonetics",
      "Offline ASR",
      "Teacher Copilot",
      "ICD-10 Clinical",
      "Dual Portal",
      "jsPDF Medical",
      "Deterministic Case Match",
      "Zero-Shot Tribal Pedagogy",
      "Local Edge LLM",
    ];

    for (let i = 0; i < labels.length; i++) {
      const phi = Math.acos(-1 + (2 * i) / labels.length);
      const theta = Math.sqrt(labels.length * Math.PI) * phi;
      const radius = 2.0;

      nodes.push({
        id: i,
        label: labels[i],
        pos: new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        ),
      });
    }
    return nodes;
  }, []);

  const linePositions = useMemo(() => {
    const posArr: number[] = [];
    for (let i = 0; i < nodeData.length; i++) {
      for (let j = i + 1; j < nodeData.length; j++) {
        const d = nodeData[i].pos.distanceTo(nodeData[j].pos);
        if (d < 2.4) {
          posArr.push(
            nodeData[i].pos.x,
            nodeData[i].pos.y,
            nodeData[i].pos.z,
            nodeData[j].pos.x,
            nodeData[j].pos.y,
            nodeData[j].pos.z
          );
        }
      }
    }
    return new Float32Array(posArr);
  }, [nodeData]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.2 * settings.speed;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });

  const nodeColor = settings.colorScheme === "lime" ? "#CCFF00" : settings.colorScheme === "chrome" ? "#FFFFFF" : "#38BDF8";

  return (
    <group ref={groupRef}>
      {/* Interconnecting neural synapses */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={nodeColor}
          transparent
          opacity={0.35}
          linewidth={1}
        />
      </lineSegments>

      {/* Nodes */}
      {nodeData.map((node) => (
        <mesh key={node.id} position={node.pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color={nodeColor}
            emissive={nodeColor}
            emissiveIntensity={1.2}
          />
        </mesh>
      ))}
    </group>
  );
}

export const InteractiveLabCanvas = () => {
  const [settings, setSettings] = useState<LabSettings>({
    mode: "liquid",
    speed: 1.0,
    distortion: 1.2,
    colorScheme: "lime",
    wireframe: false,
  });

  const handleModeChange = (mode: LabSettings["mode"]) => {
    sounds.playWarp();
    setSettings((prev) => ({ ...prev, mode }));
  };

  const handleColorChange = (colorScheme: LabSettings["colorScheme"]) => {
    sounds.playClick();
    setSettings((prev) => ({ ...prev, colorScheme }));
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#06060A] overflow-hidden relative shadow-2xl flex flex-col">
      {/* Top HUD Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-white/[0.02] border-b border-white/10 z-20">
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 rounded-full bg-fii-lime animate-ping" />
          <span className="font-mono text-xs uppercase tracking-wider text-fii-lime font-bold">
            FII_LAB // REALTIME_3D_GPU_SIMULATION
          </span>
        </div>

        {/* Mode selector pills */}
        <div className="flex items-center space-x-1.5 bg-[#0C0C14] p-1 rounded-xl border border-white/5">
          {(
            [
              { id: "liquid", label: "Liquid Chrome" },
              { id: "topology", label: "Neural Topology" },
              { id: "latent", label: "Latent Manifold" },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => handleModeChange(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-300 ${
                settings.mode === item.id
                  ? "bg-fii-lime text-black font-semibold shadow-lime-glow"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main 3D Viewport */}
      <div className="relative w-full h-[460px] md:h-[540px] cursor-grab active:cursor-grabbing bg-radial from-fii-lime/5 via-transparent to-transparent">
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[6, 8, 6]} intensity={2.5} color="#FFFFFF" />
          <directionalLight position={[-6, -6, -4]} intensity={2.0} color="#CCFF00" />
          <pointLight position={[0, 0, 3]} intensity={1.5} color="#FFFFFF" />

          {settings.mode === "topology" && <NeuralTopologyMesh settings={settings} />}
          {settings.mode === "liquid" && <LiquidChromeSphere settings={settings} />}
          {settings.mode === "latent" && <LatentSpaceNodes settings={settings} />}

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            maxDistance={8}
            minDistance={2.5}
            dampingFactor={0.05}
          />
        </Canvas>

        {/* Interactive Floating Sliders Overlay */}
        <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#090910]/80 backdrop-blur-xl border border-white/10 z-10">
          {/* Sliders */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-[11px] text-zinc-400 uppercase">Kinetic Warp:</span>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.1"
                value={settings.distortion}
                onChange={(e) => {
                  setSettings((prev) => ({
                    ...prev,
                    distortion: parseFloat(e.target.value),
                  }));
                }}
                className="w-24 md:w-32 accent-fii-lime cursor-pointer"
              />
              <span className="font-mono text-xs text-fii-lime w-7">
                {settings.distortion.toFixed(1)}x
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="font-mono text-[11px] text-zinc-400 uppercase">Simulation Speed:</span>
              <input
                type="range"
                min="0.2"
                max="2.5"
                step="0.1"
                value={settings.speed}
                onChange={(e) => {
                  setSettings((prev) => ({
                    ...prev,
                    speed: parseFloat(e.target.value),
                  }));
                }}
                className="w-24 md:w-32 accent-fii-lime cursor-pointer"
              />
              <span className="font-mono text-xs text-fii-lime w-7">
                {settings.speed.toFixed(1)}x
              </span>
            </div>
          </div>

          {/* Color Harmonics & Wireframe */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleColorChange("lime")}
                aria-label="Electric Lime"
                className={`w-5 h-5 rounded-full bg-[#CCFF00] border-2 transition-transform ${
                  settings.colorScheme === "lime"
                    ? "border-white scale-110 shadow-[0_0_10px_#CCFF00]"
                    : "border-transparent opacity-60"
                }`}
              />
              <button
                onClick={() => handleColorChange("chrome")}
                aria-label="Chrome"
                className={`w-5 h-5 rounded-full bg-[#E2E8F0] border-2 transition-transform ${
                  settings.colorScheme === "chrome"
                    ? "border-white scale-110 shadow-[0_0_10px_#FFFFFF]"
                    : "border-transparent opacity-60"
                }`}
              />
              <button
                onClick={() => handleColorChange("nebula")}
                aria-label="Nebula"
                className={`w-5 h-5 rounded-full bg-[#EC4899] border-2 transition-transform ${
                  settings.colorScheme === "nebula"
                    ? "border-white scale-110 shadow-[0_0_10px_#EC4899]"
                    : "border-transparent opacity-60"
                }`}
              />
            </div>

            <button
              onClick={() => {
                sounds.playClick();
                setSettings((prev) => ({ ...prev, wireframe: !prev.wireframe }));
              }}
              className={`px-3 py-1 rounded text-[11px] font-mono transition-colors ${
                settings.wireframe
                  ? "bg-fii-lime text-black font-semibold"
                  : "bg-white/10 text-zinc-300 hover:bg-white/20"
              }`}
            >
              {settings.wireframe ? "Mesh: Wireframe" : "Mesh: Solid"}
            </button>
          </div>
        </div>

        {/* Help tip indicator */}
        <div className="absolute top-4 right-4 pointer-events-none hidden sm:block">
          <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/10 font-mono text-[10px] text-zinc-400">
            DRAG TO ROTATE 360° · SCROLL TO ZOOM
          </span>
        </div>
      </div>
    </div>
  );
};
