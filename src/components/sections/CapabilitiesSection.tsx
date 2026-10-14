"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Box, Layout, Sparkles, CheckCircle2, Compass } from "lucide-react";
import { sounds } from "../ui/SoundEffects";

export const CapabilitiesSection = () => {
  const [filter, setFilter] = useState<"all" | "mastery" | "frontier">("all");

  const domains = [
    {
      title: "AI & Clinical Decision Systems",
      icon: Cpu,
      description:
        "Architecting trust-centric AI architectures that prioritize clinical explainability, deterministic matching, and human clinician validation over speculative generation.",
      tier: "mastery",
      capabilities: [
        { name: "Deterministic Case Vector Retrieval", status: "mastery" },
        { name: "ICD-10 Clinical Oncology Cross-Referencing", status: "mastery" },
        { name: "Offline Mother-Tongue Neural Speech (ASR/TTS)", status: "mastery" },
        { name: "Explainable AI (XAI) Diagnostic Dashboards", status: "mastery" },
        { name: "Edge / Local Model Quantization & Inference", status: "frontier" },
        { name: "Multimodal Clinical Biomarker Synthesis", status: "frontier" },
      ],
    },
    {
      title: "Full-Stack Software Architecture",
      icon: Terminal,
      description:
        "Building resilient, type-safe full-stack platforms from ground up with offline-first state synchronization and high-performance client data layers.",
      tier: "mastery",
      capabilities: [
        { name: "TypeScript & Next.js App Router Architecture", status: "mastery" },
        { name: "React 18 Concurrent Rendering & State Pipelines", status: "mastery" },
        { name: "Node.js & Modular REST API Engineering", status: "mastery" },
        { name: "Client-side PDF & Diagnostic Document Generation", status: "mastery" },
        { name: "PostgreSQL, SQLite & IndexedDB Local Caching", status: "mastery" },
        { name: "Distributed Micro-Services & Webhooks", status: "frontier" },
      ],
    },
    {
      title: "Interactive 3D & Creative Engineering",
      icon: Box,
      description:
        "Crafting cinematic digital worlds that elevate digital interactions from mundane utilitarian pages into memorable sensory experiences.",
      tier: "mastery",
      capabilities: [
        { name: "Three.js & React Three Fiber (R3F)", status: "mastery" },
        { name: "Procedural Mesh & Noise Deformations", status: "mastery" },
        { name: "Web Audio API Spatial Sound Synthesis", status: "mastery" },
        { name: "Framer Motion & GSAP Cinematic Choreography", status: "mastery" },
        { name: "Custom GLSL Fragment & Vertex Shaders", status: "frontier" },
        { name: "Compute Shaders & GPU Fluid Simulation", status: "frontier" },
      ],
    },
    {
      title: "Product Building & Vernacular UX",
      icon: Layout,
      description:
        "Designing intuitive digital systems tailored for low-bandwidth rural conditions, native scripts (Ol Chiki), and mission-critical clinician environments.",
      tier: "mastery",
      capabilities: [
        { name: "Dual-Portal Clinician / Patient Separation", status: "mastery" },
        { name: "Low-Bandwidth Mobile First Ergonomics", status: "mastery" },
        { name: "Ol Chiki Native Script Canvas Typography", status: "mastery" },
        { name: "Accessibility (WCAG) & Dark Glass Design Systems", status: "mastery" },
        { name: "Vernacular Voice User Interfaces (VUI)", status: "frontier" },
        { name: "Decentralized Grassroots Civic Protocols", status: "frontier" },
      ],
    },
  ];

  return (
    <section id="capabilities" className="relative py-28 px-4 sm:px-8 lg:px-16 w-full max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-fii-lime font-mono text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles size={14} />
            <span>04 // TECHNICAL MATRIX & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Engineering Matrix.
          </h2>
          <p className="text-zinc-400 max-w-xl text-base mt-2">
            Clear separation between battle-tested production mastery and active frontier research.
            Every capability is anchored in shipped code or peer-reviewed work.
          </p>
        </div>

        {/* Filter Switcher */}
        <div className="flex items-center space-x-2 bg-[#090910] p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
          <button
            onClick={() => {
              sounds.playClick();
              setFilter("all");
            }}
            className={`px-4 py-2 rounded-xl font-mono text-xs transition-all ${
              filter === "all"
                ? "bg-fii-lime text-black font-semibold shadow-lime-glow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            All Capabilities
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setFilter("mastery");
            }}
            className={`px-4 py-2 rounded-xl font-mono text-xs transition-all ${
              filter === "mastery"
                ? "bg-fii-lime text-black font-semibold shadow-lime-glow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Production Mastery
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setFilter("frontier");
            }}
            className={`px-4 py-2 rounded-xl font-mono text-xs transition-all ${
              filter === "frontier"
                ? "bg-fii-lime text-black font-semibold shadow-lime-glow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Active Frontier
          </button>
        </div>
      </div>

      {/* Grid of Domains */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {domains.map((domain, idx) => {
          const Icon = domain.icon;
          const filteredCaps = domain.capabilities.filter((c) => {
            if (filter === "all") return true;
            return c.status === filter;
          });

          return (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-9 rounded-3xl bg-[#090910] border border-white/10 flex flex-col justify-between shadow-glass"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-2xl bg-fii-lime/10 border border-fii-lime/20 text-fii-lime">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {domain.title}
                  </h3>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
                  {domain.description}
                </p>

                {/* Capability Chips */}
                <div className="space-y-2.5">
                  {filteredCaps.map((cap) => (
                    <div
                      key={cap.name}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center space-x-2.5 text-zinc-300">
                        {cap.status === "mastery" ? (
                          <CheckCircle2 size={14} className="text-fii-lime flex-shrink-0" />
                        ) : (
                          <Compass size={14} className="text-cyan-400 flex-shrink-0 animate-spin-slow" />
                        )}
                        <span>{cap.name}</span>
                      </div>

                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded-full ${
                          cap.status === "mastery"
                            ? "bg-fii-lime/10 text-fii-lime border border-fii-lime/20"
                            : "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                        }`}
                      >
                        {cap.status === "mastery" ? "CORE" : "EXPLORING"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
