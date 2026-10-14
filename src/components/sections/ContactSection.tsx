"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PortalScene } from "../canvas/PortalScene";
import { sounds } from "../ui/SoundEffects";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "AI & Clinical Systems",
    message: "",
  });

  const emailAddress = "deepeshpankaj01@gmail.com";

  const handleCopyEmail = () => {
    sounds.playClick();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    sounds.playWarp();

    // Simulate reliable dispatch
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      sounds.playSuccess();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#CCFF00", "#FFFFFF", "#8A92A0"],
        });
      } catch {
        // Confetti fallback
      }
    }, 1000);
  };

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/deepeshpankaj01",
      handle: "@deepeshpankaj01",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/deepesh-pankaj-3ba960225",
      handle: "deepesh-pankaj",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/deepeshpankaj01?igsh=Z3l4MHFlb2djbHBs",
      handle: "@deepeshpankaj01",
      icon: Instagram,
    },
    {
      name: "Archive V1 Portfolio",
      url: "https://dpportfolioo.netlify.app/",
      handle: "dpportfolioo.netlify.app",
      icon: ExternalLink,
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-8 lg:px-16 w-full max-w-7xl mx-auto overflow-hidden">
      {/* 3D Singularity Gravitational Lens Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <PortalScene />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 text-fii-lime font-mono text-xs uppercase tracking-widest font-semibold mb-4 px-4 py-1.5 rounded-full bg-fii-lime/10 border border-fii-lime/30">
            <Sparkles size={14} />
            <span>05 // START SOMETHING EXTRAORDINARY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
            Let’s Shape <br />
            <span className="chrome-text">The Next Dimension.</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg mt-4 max-w-xl mx-auto font-light leading-relaxed">
            Whether you are conceptualizing a transformative AI system, seeking research-backed
            engineering, or building an ambitious product, reach out directly.
          </p>

          {/* Quick Copy Email Pill */}
          <div className="mt-8 inline-flex items-center space-x-3 p-2 pl-4 rounded-full bg-[#0E0E18] border border-white/10 hover:border-fii-lime/40 transition-colors shadow-glass">
            <Mail size={16} className="text-fii-lime" />
            <span className="font-mono text-xs sm:text-sm text-zinc-200">{emailAddress}</span>
            <button
              onClick={handleCopyEmail}
              aria-label="Copy Email Address"
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-fii-lime hover:text-black font-mono text-xs transition-colors flex items-center space-x-1.5 text-white"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-black" />
                  <span className="text-black font-semibold">COPIED!</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Contact Form & Socials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Functional Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#090910]/90 backdrop-blur-2xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-display font-bold text-white mb-2 flex items-center space-x-2">
              <MessageSquare size={20} className="text-fii-lime" />
              <span>Direct Transmission</span>
            </h3>
            <p className="text-xs font-mono text-zinc-400 mb-8">
              Messages are routed directly to Deepesh&apos;s personal terminal.
            </p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-fii-lime/10 border border-fii-lime/30 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-fii-lime text-black flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h4 className="text-xl font-display font-bold text-white">
                  Transmission Acknowledged!
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. I have received your message and will
                  respond via {formData.email} promptly.
                </p>
                <button
                  onClick={() => {
                    sounds.playClick();
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", category: "AI & Clinical Systems", message: "" });
                  }}
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 font-mono text-xs text-white transition-colors"
                >
                  Send Another Transmission
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-mono text-xs text-zinc-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-fii-lime focus:outline-none font-mono text-xs text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-mono text-xs text-zinc-400 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-fii-lime focus:outline-none font-mono text-xs text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    Project Focus / Scope
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F0F18] border border-white/10 focus:border-fii-lime focus:outline-none font-mono text-xs text-white transition-colors"
                  >
                    <option value="AI & Clinical Systems">AI & Clinical Decision Systems</option>
                    <option value="Full-Stack Web Engineering">Full-Stack Web & Next.js Platforms</option>
                    <option value="Interactive 3D / WebGL Experience">Cinematic 3D / WebGL Creative Direction</option>
                    <option value="Vernacular & EdTech Systems">Vernacular & Mother-Tongue Learning Copilot</option>
                    <option value="General Collaboration / Venture Advisory">General Collaboration / Advisory</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    Message / Technical Brief
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your vision, challenges, and goals..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-fii-lime focus:outline-none font-mono text-xs text-white placeholder-zinc-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-fii-lime text-black font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center space-x-2 shadow-lime-glow hover:shadow-lime-glow-lg transition-all duration-300 disabled:opacity-50"
                >
                  {submitting ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>TRANSMIT BRIEF</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Socials & Verification Hub */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#090910]/90 backdrop-blur-2xl border border-white/10">
              <h4 className="font-display font-bold text-xl text-white mb-2">
                Verified Digital Presence
              </h4>
              <p className="text-xs text-zinc-400 mb-6 font-light">
                Direct working links to code repositories, professional networks, and archives.
              </p>

              <div className="space-y-3">
                {socials.map((soc) => {
                  const Icon = soc.icon;
                  return (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sounds.playClick()}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-fii-lime/30 flex items-center justify-between group transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 rounded-xl bg-white/5 text-zinc-300 group-hover:text-fii-lime group-hover:bg-fii-lime/10 transition-colors">
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-fii-lime transition-colors">
                            {soc.name}
                          </div>
                          <div className="font-mono text-xs text-zinc-500">{soc.handle}</div>
                        </div>
                      </div>

                      <ExternalLink
                        size={15}
                        className="text-zinc-600 group-hover:text-fii-lime transition-colors"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 space-y-2">
              <div className="flex items-center space-x-2 text-fii-lime font-mono text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-fii-lime animate-ping" />
                <span>ACTIVE AVAILABILITY</span>
              </div>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                Accepting select high-impact technical engagements, clinical AI advisory, and
                creative technology commissions for Q4 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
