"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Cpu, ShieldCheck, Terminal, Layers } from "lucide-react";
import { sounds } from "./SoundEffects";

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  timeline: string;
  role: string;
  abstract: string;
  problem: string;
  solution: string;
  architecture: string[];
  keyHighlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  researchNote?: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 350 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090910] border border-white/15 p-6 sm:p-10 shadow-2xl z-10 text-fii-ivory"
        >
          {/* Close button */}
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            aria-label="Close Case Study"
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-fii-lime transition-colors"
          >
            <X size={20} />
          </button>

          {/* Header Info */}
          <div className="space-y-3 pb-6 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-fii-lime/10 border border-fii-lime/30 text-fii-lime font-mono text-xs uppercase tracking-wider">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 font-mono text-xs">
                {project.timeline}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono text-xs">
                Role: {project.role}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-lg text-zinc-400 font-light max-w-2xl">
              {project.tagline}
            </p>
          </div>

          {/* Research citation callout if applicable */}
          {project.researchNote && (
            <div className="my-6 p-4 rounded-2xl bg-fii-lime/5 border border-fii-lime/25 flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-fii-lime flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm font-mono text-zinc-300">
                <span className="text-fii-lime font-bold block mb-1">
                  PEER-REVIEWED SCIENTIFIC FOUNDATION
                </span>
                {project.researchNote}
              </div>
            </div>
          )}

          {/* Main Body Grid */}
          <div className="py-6 space-y-8">
            {/* The Challenge & The Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                  <Terminal size={14} className="text-zinc-500" />
                  The Problem
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="font-mono text-xs text-fii-lime uppercase tracking-wider flex items-center gap-2">
                  <Cpu size={14} className="text-fii-lime" />
                  Engineering Architecture
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Architecture Pipeline */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <Layers size={14} className="text-fii-lime" />
                System Pipeline Components
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start space-x-2.5 text-xs text-zinc-300"
                  >
                    <span className="font-mono text-fii-lime font-bold">0{idx + 1}.</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Highlights */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                Key Technical Breakthroughs
              </h3>
              <ul className="space-y-2">
                {project.keyHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-zinc-300">
                    <CheckCircle2 size={16} className="text-fii-lime flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                Tech Stack & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center space-x-2 transition-colors border border-white/10"
                >
                  <Github size={15} />
                  <span>Inspect Code on GitHub</span>
                  <ExternalLink size={12} className="text-zinc-400" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="px-5 py-2.5 rounded-xl bg-fii-lime text-black font-mono text-xs font-semibold flex items-center space-x-2 transition-all shadow-lime-glow hover:opacity-95"
                >
                  <span>Launch Live System</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="text-xs font-mono text-zinc-500 hover:text-white transition-colors"
            >
              [ESC TO DISMISS]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
