"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";
import { FiiMonogram } from "./FiiMonogram";
import { sounds } from "./SoundEffects";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setIsMuted(sounds.getMuted());

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSoundToggle = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      sounds.playClick();
    }
  };

  const navLinks = [
    { name: "Selected Work", href: "#work" },
    { name: "The Lab", href: "#lab" },
    { name: "Journey", href: "#journey" },
    { name: "Capabilities", href: "#capabilities" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 sm:px-8 flex justify-center ${
          scrolled ? "backdrop-blur-xl bg-black/40 border-b border-white/5 py-3" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a
            href="#"
            onClick={() => sounds.playClick()}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <FiiMonogram size={38} glow={true} animated={false} />
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wider uppercase text-white group-hover:text-fii-lime transition-colors">
                FII STUDIO
              </span>
              <span className="font-mono text-[10px] text-zinc-400 tracking-tight">
                DEEPESH PANKAJ
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 px-4 py-1.5 rounded-full bg-[#0D0D14]/80 border border-white/10 backdrop-blur-xl shadow-glass">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => sounds.playHover()}
                className="px-4 py-1.5 text-xs font-mono text-zinc-300 hover:text-fii-lime rounded-full hover:bg-white/5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Controls HUD */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Live IST Time */}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 font-mono text-[11px] text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-fii-lime animate-pulse" />
              <span>BHOPAL / {time || "08:00:00"} IST</span>
            </div>

            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              title={isMuted ? "Unmute audio feedback" : "Mute audio feedback"}
              aria-label="Toggle Sound Effects"
              className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-fii-lime hover:border-fii-lime/40 transition-colors"
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-fii-lime" />}
            </button>

            {/* Direct Connect CTA */}
            <a
              href="#contact"
              onClick={() => sounds.playClick()}
              className="px-4 py-1.5 rounded-full bg-fii-lime text-black font-mono text-xs font-semibold flex items-center space-x-1.5 hover:shadow-lime-glow transition-all duration-300"
            >
              <span>CONNECT</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={handleSoundToggle}
              aria-label="Toggle sound"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-300"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} className="text-fii-lime" />}
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 p-6 bg-[#09090F]/95 backdrop-blur-2xl border-b border-white/10 lg:hidden shadow-2xl flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  sounds.playClick();
                  setMobileMenuOpen(false);
                }}
                className="text-base font-display font-medium text-zinc-200 hover:text-fii-lime py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={16} className="text-zinc-500" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 mt-2 rounded-xl bg-fii-lime text-black text-center font-mono text-sm font-bold shadow-lime-glow"
            >
              START SOMETHING EXTRAORDINARY
            </a>
            <div className="pt-2 text-center font-mono text-[11px] text-zinc-500">
              BHOPAL, INDIA · {time} IST
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
