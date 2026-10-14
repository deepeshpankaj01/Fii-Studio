"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles, Terminal, Award, FileText } from "lucide-react";
import { HeroScene } from "../canvas/HeroScene";
import { sounds } from "../ui/SoundEffects";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-4 sm:px-8 lg:px-16 overflow-hidden hero-spotlight">
      {/* 3D WebGL Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <HeroScene />
      </div>

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-fii-void via-transparent to-fii-void/80 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-fii-void/60 via-transparent to-fii-void/60 pointer-events-none z-[1]" />

      {/* Top Status & Verified Accreditations */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-6 flex flex-wrap items-center justify-between gap-3">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-2"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-fii-lime animate-pulse" />
            <span className="font-mono text-xs text-zinc-300 font-medium">
              FII STUDIO // SYSTEM CORE v2.6
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-fii-lime/10 border border-fii-lime/30 backdrop-blur-md text-fii-lime">
            <FileText size={13} />
            <span className="font-mono text-xs font-semibold">
              ICAIEST-2026 CLINICAL AI AUTHOR
            </span>
          </div>

          <div className="hidden md:inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-zinc-300">
            <Award size={13} className="text-fii-lime" />
            <span className="font-mono text-xs">
              AI INNOVATES 2K26 FINALIST · BHARAT MANDAPAM
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs text-zinc-500"
        >
          COORDINATES: 23.2599° N, 77.4126° E [BHOPAL]
        </motion.div>
      </div>

      {/* Center Hero Headlines & Narrative Copy */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-12 flex flex-col justify-center">
        <div className="max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center space-x-2 text-fii-lime font-mono text-sm tracking-widest uppercase font-semibold"
          >
            <Sparkles size={16} />
            <span>THE NEXT DIMENSION IN PRODUCT ENGINEERING</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.04]"
          >
            Building What <br />
            <span className="chrome-text">Comes Next.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl"
          >
            I am <strong className="text-white font-semibold">Deepesh Pankaj</strong> — developer,
            clinical AI researcher, and founder of{" "}
            <span className="text-fii-lime font-semibold">FII Studio</span>. Architecting
            human-aligned AI engines, offline-first mother-tongue copilots, and cinematic digital
            experiences from first principles.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              onClick={() => sounds.playClick()}
              className="px-7 py-3.5 rounded-full bg-fii-lime text-black font-mono text-sm font-bold flex items-center space-x-2.5 shadow-lime-glow hover:shadow-lime-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDownRight size={17} />
            </a>

            <a
              href="#lab"
              onClick={() => sounds.playWarp()}
              className="px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/10 text-white font-mono text-sm border border-white/15 backdrop-blur-xl flex items-center space-x-2.5 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Terminal size={16} className="text-fii-lime" />
              <span>THE 3D LAB</span>
            </a>

            <a
              href="#contact"
              onClick={() => sounds.playClick()}
              className="px-6 py-3.5 rounded-full text-zinc-400 hover:text-white font-mono text-sm transition-colors"
            >
              INITIALIZE CONTACT →
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Live Metrics Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 w-full max-w-7xl mx-auto pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        <div className="space-y-1">
          <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center">
            04<span className="text-fii-lime">+</span>
          </span>
          <p className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
            Deployed Systems (Zero Mockups)
          </p>
        </div>

        <div className="space-y-1">
          <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center">
            ICAIEST<span className="text-fii-lime text-lg ml-1">’26</span>
          </span>
          <p className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
            Clinical AI Research Paper
          </p>
        </div>

        <div className="space-y-1">
          <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center">
            Top 10<span className="text-fii-lime text-lg ml-1">★</span>
          </span>
          <p className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
            AI Innovates 2K26 Finalist
          </p>
        </div>

        <div className="space-y-1">
          <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center">
            100<span className="text-fii-lime">%</span>
          </span>
          <p className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
            First-Principles Architecture
          </p>
        </div>
      </motion.div>
    </section>
  );
};
