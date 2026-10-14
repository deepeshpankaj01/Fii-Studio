"use client";

import React from "react";
import { motion } from "framer-motion";

interface FiiMonogramProps {
  className?: string;
  size?: number;
  glow?: boolean;
  animated?: boolean;
}

export const FiiMonogram: React.FC<FiiMonogramProps> = ({
  className = "",
  size = 40,
  glow = true,
  animated = false,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {glow && (
        <div
          className="absolute inset-0 bg-fii-lime/20 rounded-full blur-xl pointer-events-none transform scale-150"
          aria-hidden="true"
        />
      )}

      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        <defs>
          <linearGradient id="fiiChromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#D4D9E2" />
            <stop offset="70%" stopColor="#8A92A0" />
            <stop offset="100%" stopColor="#E5EBF5" />
          </linearGradient>

          <linearGradient id="fiiLimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CCFF00" />
            <stop offset="100%" stopColor="#80B300" />
          </linearGradient>

          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer subtle geometric bounding hex */}
        <polygon
          points="50,4 90,26 90,74 50,96 10,74 10,26"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1.5"
          fill="rgba(12, 12, 18, 0.4)"
        />

        {/* F Pillar & Bars */}
        <motion.path
          d="M 28 26 L 44 26 L 44 32 L 35 32 L 35 46 L 42 46 L 42 52 L 35 52 L 35 74 L 28 74 Z"
          fill="url(#fiiChromeGrad)"
          stroke="#FFFFFF"
          strokeWidth="0.5"
          initial={animated ? { opacity: 0, pathLength: 0 } : false}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* Pillar I (First) */}
        <motion.path
          d="M 52 26 L 59 26 L 59 74 L 52 74 Z"
          fill="url(#fiiChromeGrad)"
          stroke="#FFFFFF"
          strokeWidth="0.5"
          initial={animated ? { opacity: 0, scaleY: 0 } : false}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        />

        {/* Pillar II (Second) with Electric-Lime Top Accent */}
        <motion.path
          d="M 67 26 L 74 26 L 74 74 L 67 74 Z"
          fill="url(#fiiChromeGrad)"
          stroke="#FFFFFF"
          strokeWidth="0.5"
          initial={animated ? { opacity: 0, scaleY: 0 } : false}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        />

        {/* Electric-Lime Kinetic Energy Diamond on Pillar II */}
        <circle cx="70.5" cy="22" r="3" fill="url(#fiiLimeGrad)" filter="url(#glowFilter)" />
        <line x1="28" y1="78" x2="74" y2="78" stroke="url(#fiiLimeGrad)" strokeWidth="1.5" strokeOpacity="0.8" />
      </svg>
    </div>
  );
};
