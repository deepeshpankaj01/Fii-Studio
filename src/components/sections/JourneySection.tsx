"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Milestone, Award, BookOpen, MapPin, CheckCircle, Sparkles } from "lucide-react";

export const JourneySection = () => {
  const milestones = [
    {
      year: "2026",
      title: "ICAIEST-2026 Research Paper Presentation",
      subtitle: "International Conference on Advanced Innovation in Engineering, Science and Technology",
      description:
        "Authored and presented peer-reviewed research on 'Trust-Centric AI in Critical Clinical Environments: Eliminating Black-Box Opacity through Deterministic Case Retrieval in Oncology'. Conceived the dual-portal architecture and deployed HAi Pilot as proof of concept.",
      tag: "Academic Publication",
      icon: BookOpen,
      highlight: true,
    },
    {
      year: "2026",
      title: "AI Innovates 2K26 National Finalist",
      subtitle: "Bharat Mandapam, New Delhi · Team PARAKRAM",
      description:
        "Selected as a national finalist among leading engineering teams across India. Pitched advanced AI systems to industry and academic juries at the premier national innovation convention.",
      tag: "National Competition",
      icon: Award,
      highlight: true,
    },
    {
      year: "2025 – 2026",
      title: "Building ANUVAA & Panchayat",
      subtitle: "Grassroots Tech for Mother-Tongue Learning & Civic Law",
      description:
        "Engineered ANUVAA to solve tribal classroom language barriers via offline Hindi-to-Santali translation and Ol Chiki script rendering. Built Panchayat to bring legal transparency to rural governance.",
      tag: "Product Engineering",
      icon: Milestone,
      highlight: false,
    },
    {
      year: "2024 – Present",
      title: "Foundations at LNCT University, Bhopal",
      subtitle: "BCA · First-Principles Software Development",
      description:
        "Committed to learning systems from the ground up: Data structures, TypeScript, React, WebGL, Node.js, and neural pipelines. Vowed never to stop at design mockups, shipping 4+ production systems with zero placeholders.",
      tag: "Academic Foundation",
      icon: MapPin,
      highlight: false,
    },
  ];

  return (
    <section id="journey" className="relative py-28 px-4 sm:px-8 lg:px-16 w-full max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center space-x-2 text-fii-lime font-mono text-xs uppercase tracking-widest font-semibold mb-3">
          <Milestone size={14} />
          <span>03 // THE JOURNEY & VERIFIED MILESTONES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Ambition Built on Evidence.
        </h2>
        <p className="text-zinc-400 max-w-2xl text-base mt-2">
          From writing initial lines of code in Bhopal to presenting peer-reviewed clinical AI
          research at international conferences and competing on national stages at Bharat Mandapam.
        </p>
      </div>

      {/* Narrative & Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left: Authentic Bio Card with Profile Photo */}
        <div className="lg:col-span-5 p-7 sm:p-9 rounded-3xl bg-[#090910] border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 border border-white/10">
            <Image
              src="/images/profile.jpg"
              alt="Deepesh Pankaj — Systems Developer & Founder of FII Studio"
              fill
              className="object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs">
              <span className="text-white font-semibold">DEEPESH PANKAJ</span>
              <span className="text-fii-lime">LNCT BHOPAL</span>
            </div>
          </div>

          <div className="space-y-4 text-sm text-zinc-300 font-light leading-relaxed">
            <p>
              &ldquo;I believe the greatest engineering does not reside in speculative slide decks,
              but in functioning code that touches human reality. Whether designing a
              deterministic co-pilot for oncologists or an offline phonetic bridge for Santali
              tribal children, every project I architect begins from first principles.&rdquo;
            </p>
            <p className="text-xs font-mono text-zinc-500 pt-2 border-t border-white/5">
              CURRENT FOCUS: Clinical decision explainability, edge offline language models, and
              the next generation of cinematic WebGL interfaces under FII Studio.
            </p>
          </div>
        </div>

        {/* Right: Chronological Milestones */}
        <div className="lg:col-span-7 space-y-6">
          {milestones.map((ms, idx) => {
            const Icon = ms.icon;
            return (
              <motion.div
                key={ms.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                  ms.highlight
                    ? "bg-[#0E0E18] border-fii-lime/30 shadow-lime-glow"
                    : "bg-[#08080E] border-white/5 hover:border-white/15"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-2.5">
                    <div
                      className={`p-2 rounded-xl ${
                        ms.highlight
                          ? "bg-fii-lime text-black"
                          : "bg-white/5 text-zinc-300"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <span className="font-mono text-xs font-bold text-fii-lime uppercase tracking-wider">
                      {ms.year}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                    {ms.tag}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {ms.title}
                </h3>
                <h4 className="text-xs font-mono text-zinc-400 mb-3">{ms.subtitle}</h4>
                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {ms.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
