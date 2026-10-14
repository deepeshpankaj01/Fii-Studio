"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Maximize2,
  Activity,
  Languages,
  Users2,
  Stethoscope,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";
import { ProjectDetail, ProjectModal } from "../ui/ProjectModal";
import { sounds } from "../ui/SoundEffects";

export const WorkSection = () => {
  const [activeProject, setActiveProject] = useState<ProjectDetail | null>(null);

  const projects: ProjectDetail[] = [
    {
      id: "hai-pilot",
      title: "HAI — Human Aligned Intelligence (HAi Pilot)",
      subtitle: "Clinical Oncology AI Co-Pilot for Indian Healthcare",
      tagline:
        "A trust-centric clinical AI platform replacing opaque black-box LLMs with deterministic historical case retrieval and explainable oncology decision pipelines.",
      category: "Flagship · Clinical AI Research",
      timeline: "ICAIEST-2026 Presentation",
      role: "Solo System Architect, Researcher & Full-Stack Engineer",
      abstract:
        "AI adoption in critical clinical environments like oncology suffers from black-box opacity and decision fatigue. This project establishes a clinician-in-the-loop paradigm with ICD-10 oncology cross-referencing and dual-portal clinician verification.",
      problem:
        "High-stress clinical workflows cannot tolerate generative hallucination. Oncologists require verifiable evidence chains, deterministic case comparisons, and transparent clinical reasoning before accepting AI suggestions.",
      solution:
        "Conceived the trust-centric architecture from the ground up: created dual clinician/patient portals, deterministic ICD-10 matching, interactive clinical telemetry dashboards, and a client-side jsPDF medical report generator.",
      architecture: [
        "Deterministic Historical Case Vector Indexing",
        "ICD-10 Clinical Oncology Cross-Referencing",
        "Dual-Portal Clinician / Patient Separation",
        "Client-side jsPDF Diagnostic Report Compiler",
      ],
      keyHighlights: [
        "Peer-reviewed academic research presented at ICAIEST-2026",
        "Deterministic matching eliminates medical hallucinations",
        "Client-side automated oncologist summary generation with zero server-side data leak",
        "Field-tested UI designed specifically for high-stress oncology consultations",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "jsPDF",
        "Lucide Icons",
        "Clinical APIs",
        "Vercel",
      ],
      githubUrl: "https://github.com/deepeshpankaj01/Co-pilot",
      researchNote:
        "Authored academic paper presented at ICAIEST-2026: 'Trust-Centric AI in Critical Clinical Environments: Eliminating Black-Box Opacity through Deterministic Case Retrieval in Oncology'.",
    },
    {
      id: "anuvaa",
      title: "ANUVAA",
      subtitle: "Offline-First AI Classroom Copilot for Mother-Tongue Primary Education",
      tagline:
        "Bridging the tribal primary education divide through Hindi-to-Santali localized learning, Ol Chiki script rendering, and edge neural phonetics.",
      category: "AI & Linguistic Equity",
      timeline: "2026 Deployed System",
      role: "Founder, AI Engineer & Core Developer",
      abstract:
        "Millions of tribal children in primary schools face acute learning poverty due to classroom language mismatch. ANUVAA delivers zero-cloud, offline-first mother-tongue translation, phonetic guidance, and interactive Ol Chiki pedagogy.",
      problem:
        "In rural and tribal regions like Jharkhand and Odisha, classroom textbooks are printed in Hindi, while primary school children only speak Santali. Compounding this, rural schools suffer from frequent internet dropouts and zero cloud connectivity.",
      solution:
        "Built a lightweight, offline-first classroom copilot that runs on low-power edge hardware. Converts Hindi curriculum into Santali with native Ol Chiki glyph visualization, phonetic audio breakdowns, and teacher guidance cards.",
      architecture: [
        "Offline-First SQLite / IndexedDB Local Cache",
        "Hindi-to-Santali Phonetic Translation Matrix",
        "Ol Chiki Dynamic Typography & Glyph Canvas Renderer",
        "Edge Neural Speech Synthesis for Mother-Tongue Pronunciation",
      ],
      keyHighlights: [
        "100% offline functionality — works without active internet connectivity in remote classrooms",
        "Full support for native Ol Chiki script rendering across standard browsers and mobile devices",
        "Culturally contextualized learning modules designed for primary students",
        "Featured at national hackathons and educational technology forums",
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "Web Speech API",
        "Tailwind CSS",
        "IndexedDB",
        "Edge Inference",
      ],
      githubUrl: "https://github.com/deepeshpankaj01/anuvaa",
      researchNote:
        "Designed to empower teachers in tribal belts to deliver mother-tongue education aligned with India's National Education Policy (NEP).",
    },
    {
      id: "panchayat",
      title: "Panchayat (Panchayat Legal)",
      subtitle: "Grassroots Community & Legal Awareness Governance Platform",
      tagline:
        "Empowering rural and local communities with transparent citizen-governance tools, dispute mediation protocols, and accessible legal awareness.",
      category: "Social Systems & GovTech",
      timeline: "2026 Active Product",
      role: "Lead Architect & Full-Stack Builder",
      abstract:
        "Panchayat digitizes and simplifies grassroots village governance, civic participation, and legal knowledge access, providing ordinary citizens with an intuitive channel to understand laws, track community initiatives, and voice village needs.",
      problem:
        "Grassroots citizens face severe information asymmetry regarding legal rights, local dispute resolution mechanisms, and Panchayat scheme allocations due to convoluted bureaucratic language.",
      solution:
        "Created an accessible community platform with localized vernacular legal awareness cards, community discussion hubs, and direct verification channels for local civic matters.",
      architecture: [
        "Multi-Tier Role Architecture (Citizens, Panchayat Representatives, Legal Advisors)",
        "Simplified Vernacular Legal Knowledge Engine",
        "Community Dispute Tracking & Mediation Log",
        "Lightweight Low-Bandwidth Responsive Client",
      ],
      keyHighlights: [
        "Architected specifically for low-bandwidth mobile devices in rural areas",
        "Translates complex legal penal codes into understandable vernacular summaries",
        "Published as an open-source civic empowerment framework",
        "Integrated community feedback and direct representative contact channels",
      ],
      techStack: [
        "React",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "REST APIs",
      ],
      githubUrl: "https://github.com/deepeshpankaj01/panchayat-legal",
    },
    {
      id: "ai-clinical-copilot",
      title: "AI Clinical Co-Pilot",
      subtitle: "Advanced Patient Data Telemetry & Clinical Exploration Engine",
      tagline:
        "High-throughput clinical knowledge exploration engine designed to assist healthcare practitioners with complex multi-variable diagnostic patterns.",
      category: "Healthcare Technology",
      timeline: "2026 Research Concept & Prototype",
      role: "Lead Developer & System Designer",
      abstract:
        "Explores multidimensional patient biomarkers, symptom correlations, and treatment history to generate explainable diagnostic hypothesis spaces without cognitive overload.",
      problem:
        "Clinicians face severe cognitive fatigue when synthesizing disparate lab reports, longitudinal histories, and evolving pharmacological literature during tight 10-minute outpatient visits.",
      solution:
        "Built a modular clinical telemetry copilot that highlights anomalies, cross-references contraindications, and structures patient telemetry into clear visual hierarchy.",
      architecture: [
        "Biomarker Anomaly Detection Engine",
        "Pharmacological Contraindication Cross-Check",
        "Interactive Timeline Patient Telemetry Canvas",
        "Clinician Action Validation Checkpoints",
      ],
      keyHighlights: [
        "Rapid 200ms telemetry parsing and anomaly prioritization",
        "Interactive visual charting of patient vitals over time",
        "Strict human-in-the-loop safeguards requiring clinician sign-off",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Recharts",
        "Tailwind CSS",
        "FastAPI",
        "Python",
      ],
      githubUrl: "https://github.com/deepeshpankaj01/Co-pilot",
    },
  ];

  const secondaryProjects = [
    {
      name: "Fiira",
      desc: "Contemporary curated lifestyle and digital commerce platform with fluid micro-interactions and instant checkout orchestration.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/deepeshpankaj01/fiira",
    },
    {
      name: "DP Jewels",
      desc: "High-elegance luxury digital storefront tailored for bespoke jewelry with high-fidelity visual presentation and real-time inventory tracking.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/deepeshpankaj01/dpjewels",
    },
    {
      name: "Sathi",
      desc: "Social peer-connection ecosystem built to bridge academic cohorts and project collaboration across engineering campuses.",
      tech: ["React", "Node.js", "Express"],
      github: "https://github.com/deepeshpankaj01/Sathi",
    },
  ];

  return (
    <section id="work" className="relative py-28 px-4 sm:px-8 lg:px-16 w-full max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-fii-lime font-mono text-xs uppercase tracking-widest font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-fii-lime" />
            <span>01 // SELECTED CREATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Cinematic Case Studies.
          </h2>
          <p className="text-zinc-400 max-w-xl text-base mt-2">
            Real production systems built from first principles. No static mockups or invented
            metrics—every system below solves real human problems in healthcare, education, and civic life.
          </p>
        </div>

        <div className="font-mono text-xs text-zinc-500 hidden md:block text-right">
          <div>TOTAL SYSTEMS: 04 FLAGSHIP + 03 DEPLOYED</div>
          <div>STATUS: ALL VERIFIED & REPRODUCIBLE</div>
        </div>
      </div>

      {/* Flagship Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative rounded-3xl bg-[#090910] border border-white/10 hover:border-fii-lime/40 transition-all duration-500 overflow-hidden flex flex-col justify-between p-7 sm:p-9 shadow-glass hover:shadow-lime-glow"
          >
            {/* Top decorative badge */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs text-fii-lime font-bold">0{idx + 1}</span>
                <span className="text-zinc-600 font-mono text-xs">/</span>
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  {proj.category}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {idx === 0 && <Activity className="w-4 h-4 text-fii-lime animate-pulse" />}
                {idx === 1 && <Languages className="w-4 h-4 text-fii-lime" />}
                {idx === 2 && <Users2 className="w-4 h-4 text-fii-lime" />}
                {idx === 3 && <Stethoscope className="w-4 h-4 text-fii-lime" />}
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-3 mb-8">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-fii-lime transition-colors">
                {proj.title}
              </h3>
              <p className="text-xs font-mono text-zinc-400">{proj.subtitle}</p>
              <p className="text-sm text-zinc-300 leading-relaxed font-light line-clamp-3">
                {proj.tagline}
              </p>
            </div>

            {/* Architecture Snapshot Pill Strip */}
            <div className="mb-8 p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                Key Breakthrough:
              </div>
              <div className="text-xs text-zinc-300 flex items-center space-x-2 font-mono">
                <span className="text-fii-lime">➔</span>
                <span>{proj.keyHighlights[0]}</span>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {proj.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 font-mono text-[11px] text-zinc-400"
                >
                  {tech}
                </span>
              ))}
              {proj.techStack.length > 4 && (
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] font-mono text-[11px] text-zinc-500">
                  +{proj.techStack.length - 4} more
                </span>
              )}
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <button
                onClick={() => {
                  sounds.playWarp();
                  setActiveProject(proj);
                }}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-fii-lime hover:text-black font-mono text-xs font-semibold flex items-center space-x-2 transition-all duration-300 text-white"
              >
                <Maximize2 size={13} />
                <span>DEEP DIVE CASE STUDY</span>
              </button>

              <div className="flex items-center space-x-3">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    aria-label={`GitHub repo for ${proj.title}`}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Deployed Systems Mini-Matrix */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#07070B] border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display font-bold text-xl text-white">
              Additional Deployed Production Ecosystems
            </h3>
            <p className="text-zinc-400 text-xs font-mono mt-1">
              Live web systems developed and deployed across Netlify & Vercel
            </p>
          </div>
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 self-start sm:self-auto">
            ECOMMERCE & SOCIAL
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryProjects.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display font-semibold text-lg text-white">{item.name}</h4>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    aria-label={`GitHub repo for ${item.name}`}
                    className="text-zinc-400 hover:text-fii-lime transition-colors"
                  >
                    <Github size={15} />
                  </a>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light mb-4">{item.desc}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Component */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
