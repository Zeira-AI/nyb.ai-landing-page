"use client";

import { Spotlight } from "@/components/ui/spotlight-new";
import { Meta } from "@/lib/constants";
import { motion } from "motion/react";
import Link from "next/link";

import { useLenis } from "lenis/react";

export default function Hero() {
  const lenis = useLenis();

  const handleExplore = () => {
    if (lenis) {
      lenis.scrollTo("#vecura", { offset: -80 });
    } else {
      document.getElementById("vecura")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <Spotlight />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-primary/5 blur-[120px] rounded-full mix-blend-screen opacity-20 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          POWERED BY NATURE, SCALED BY AI
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
        >
          Democratizing AI <br className="hidden md:block" />
          for <span className="text-gradient-primary">Life Science</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We build modular systems that make advanced AI accessible across every
          layer of life science R&D from molecular prediction to product
          validation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <Link
            href={`mailto:${Meta.COMPANY_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-black text-sm font-bold tracking-wide rounded-sm hover:bg-gray-200 transition-colors"
          >
            TALK TO US
          </Link>
          <button
            onClick={handleExplore}
            className="px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-bold tracking-wide rounded-sm hover:bg-white/5 transition-colors"
          >
            EXPLORE PLATFORM
          </button>
        </motion.div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-20" />
    </section>
  );
}
