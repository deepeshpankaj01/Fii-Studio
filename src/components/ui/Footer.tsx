"use client";

import React from "react";
import { ArrowUp, Terminal, Shield } from "lucide-react";
import { FiiMonogram } from "./FiiMonogram";
import { sounds } from "./SoundEffects";

export const Footer = () => {
  const scrollToTop = () => {
    sounds.playWarp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#040406] py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        {/* Upper Footer: Brand Monogram + Statement */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div className="flex items-center space-x-4">
            <FiiMonogram size={48} glow={true} />
            <div>
              <span className="font-display font-bold text-lg tracking-wider text-white">
                FII STUDIO
              </span>
              <p className="font-mono text-xs text-zinc-400">
                THE NEXT DIMENSION IN PRODUCT ARCHITECTURE
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center space-x-2 transition-all hover:border-fii-lime/40"
            >
              <span>RETURN TO APEX</span>
              <ArrowUp size={14} className="text-fii-lime" />
            </button>
          </div>
        </div>

        {/* Lower Footer: Technical Telemetry & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-mono text-xs text-zinc-500">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-fii-lime" />
              <span>DESIGNED & ARCHITECTED BY DEEPESH PANKAJ</span>
            </div>
            <div className="text-[11px] text-zinc-600">
              ICAIEST-2026 CLINICAL AI RESEARCH AUTHOR · LNCT UNIVERSITY BHOPAL
            </div>
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <span className="flex items-center gap-1.5">
              <Terminal size={12} className="text-fii-lime" />
              REACT 18 · THREE.JS · NEXT.JS
            </span>
            <span className="flex items-center gap-1.5">
              <Shield size={12} className="text-fii-lime" />
              VERIFIED AUTHENTICITY
            </span>
            <span>© {new Date().getFullYear()} FII STUDIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
