"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FlaskConical, Sparkles, Sliders, Play, RotateCcw, Volume2, ShieldCheck } from "lucide-react";
import { InteractiveLabCanvas } from "../canvas/InteractiveLabCanvas";
import { sounds } from "../ui/SoundEffects";

export const LabSection = () => {
  // Micro-experiment 1: Ol Chiki Interactive Glyph Generator
  const [selectedGlyph, setSelectedGlyph] = useState({
    name: "La",
    santaliChar: "ᱞ",
    phonetic: "/l/",
    meaning: "Lever / Action",
  });

  const glyphList = [
    { name: "La", santaliChar: "ᱞ", phonetic: "/l/", meaning: "Action / Movement" },
    { name: "At", santaliChar: "ᱟ", phonetic: "/a/", meaning: "Beginning / Origin" },
    { name: "Ag", santaliChar: "ᱜ", phonetic: "/g/", meaning: "Vocal resonance" },
    { name: "Ang", santaliChar: "ᱝ", phonetic: "/ŋ/", meaning: "Breath / Nasal" },
    { name: "Al", santaliChar: "ᱚ", phonetic: "/ɔ/", meaning: "Foundational earth" },
  ];

  // Micro-experiment 2: Deterministic vs Generative Hallucination Simulator
  const [noiseLevel, setNoiseLevel] = useState(0);

  return (
    <section id="lab" className="relative py-28 px-4 sm:px-8 lg:px-16 w-full max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center space-x-2 text-fii-lime font-mono text-xs uppercase tracking-widest font-semibold mb-3">
          <FlaskConical size={14} />
          <span>02 // THE FII EXPERIMENTAL LAB</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Beyond Ordinary Interfaces.
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base mt-2">
          A dedicated creative sandbox for procedural WebGL graphics, linguistic neural algorithms,
          and clinical explainability experiments. Tweak parameters, rotate geometries, and interact
          in real time.
        </p>
      </div>

      {/* Main 3D WebGL Realtime Simulation */}
      <div className="mb-14">
        <InteractiveLabCanvas />
      </div>

      {/* Sub-Experiments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experiment A: Ol Chiki Mother-Tongue Glyph Synthesizer */}
        <div className="p-7 sm:p-8 rounded-3xl bg-[#090910] border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-fii-lime uppercase tracking-wider font-semibold">
                EXPERIMENT #02 · LINGUISTIC EMBEDDING
              </span>
              <span className="font-mono text-xs text-zinc-500">ANUVAA RESEARCH</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
              Ol Chiki Glyph Phonetic Synthesizer
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Interactive glyph rendering engine used in ANUVAA to translate tribal phonetics into
              visual script for primary school pupils.
            </p>

            {/* Interactive Glyph Showcase */}
            <div className="p-8 rounded-2xl bg-black/60 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden mb-6">
              <div className="absolute inset-0 bg-radial from-fii-lime/10 to-transparent pointer-events-none" />
              <motion.div
                key={selectedGlyph.name}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-7xl sm:text-8xl font-display font-bold text-white mb-3 text-center"
              >
                {selectedGlyph.santaliChar}
              </motion.div>
              <div className="font-mono text-sm text-fii-lime font-bold">
                GLYPH: &quot;{selectedGlyph.name}&quot; ({selectedGlyph.phonetic})
              </div>
              <div className="font-mono text-xs text-zinc-400 mt-1">
                Semantic: {selectedGlyph.meaning}
              </div>
            </div>

            {/* Glyph Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {glyphList.map((glyph) => (
                <button
                  key={glyph.name}
                  onClick={() => {
                    sounds.playHover();
                    setSelectedGlyph(glyph);
                  }}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all ${
                    selectedGlyph.name === glyph.name
                      ? "bg-fii-lime text-black font-bold shadow-lime-glow"
                      : "bg-white/5 text-zinc-300 hover:bg-white/10"
                  }`}
                >
                  {glyph.santaliChar} — {glyph.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Experiment B: Clinical AI Determinism vs Black-Box Hallucination */}
        <div className="p-7 sm:p-8 rounded-3xl bg-[#090910] border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-fii-lime uppercase tracking-wider font-semibold">
                EXPERIMENT #03 · TRUST & EXPLAINABILITY
              </span>
              <span className="font-mono text-xs text-zinc-500">ICAIEST-2026 THESIS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
              Black-Box Opacity vs Determinism
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Simulating why generative models degrade under clinical stress vs deterministic
              historical case matching in high-stakes oncology decisions.
            </p>

            {/* Interactive Confidence Metric Display */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/5 space-y-5 mb-6">
              {/* Metric 1: HAi Deterministic Pipeline */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-fii-lime flex items-center gap-1.5">
                    <ShieldCheck size={14} />
                    HAi Pilot (Deterministic Matching)
                  </span>
                  <span className="text-white font-bold">100% Verifiable</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-fii-lime rounded-full w-full" />
                </div>
                <div className="text-[10px] font-mono text-zinc-500">
                  Zero hallucinations · Deterministic ICD-10 cross-correlation
                </div>
              </div>

              {/* Metric 2: Standard Black-Box LLM with Temperature Noise */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-red-400">
                    Opaque Black-Box Model (Temperature: {(noiseLevel / 100).toFixed(2)})
                  </span>
                  <span className="text-red-400 font-bold">
                    {Math.max(12, Math.round(92 - noiseLevel * 0.78))}% Reliability
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-500 to-red-500 rounded-full"
                    animate={{ width: `${Math.max(12, 92 - noiseLevel * 0.78)}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="text-[10px] font-mono text-zinc-500">
                  {noiseLevel > 40
                    ? "CRITICAL: Generates unverified contraindications"
                    : "Moderate drift in edge cases"}
                </div>
              </div>
            </div>

            {/* Slider to trigger noise */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
                <span>Inference Temperature / Uncertainty Drift:</span>
                <span className="text-fii-lime font-bold">{noiseLevel}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={noiseLevel}
                onChange={(e) => {
                  sounds.playHover();
                  setNoiseLevel(parseInt(e.target.value));
                }}
                className="w-full accent-fii-lime cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
