"use client";

import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { LabSection } from "@/components/sections/LabSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040406] text-[#F5F3EF] relative selection:bg-fii-lime selection:text-black">
      {/* Custom Liquid Trailing Cursor */}
      <CustomCursor />

      {/* Floating Glass HUD Navigation */}
      <Navbar />

      {/* 01: Hero — Enter FII (Signature 3D Environment) */}
      <HeroSection />

      {/* 02: Selected Creations (Cinematic Case Studies) */}
      <WorkSection />

      {/* 03: The Lab (Interactive 3D Experiments & Visualizers) */}
      <LabSection />

      {/* 04: The Journey & Verified Milestones */}
      <JourneySection />

      {/* 05: Technical Capabilities & Systems Matrix */}
      <CapabilitiesSection />

      {/* 06: Contact & Singular Gravitational Portal */}
      <ContactSection />

      {/* Footer & Telemetry */}
      <Footer />
    </main>
  );
}
