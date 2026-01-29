"use client";

import { motion } from "motion/react";

export default function VecurateSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Natural Intelligence
          </span>
          <div className="mt-3 mb-6">
            <img src="/vecurate.svg" alt="Vecurate" className="h-7 md:h-10" />
          </div>
          <p className="text-xl text-white/90 mb-6">
            Nature-Derived Molecules, Ready for AI
          </p>
          <p className="text-white/60 leading-relaxed mb-8">
            Vecurate contains over 1 million structurally diverse compounds from
            underexplored plants, microbes, and marine sources. Designed for
            compatibility with AI tools, it supports discovery across domains.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full relative h-[300px] rounded-lg bg-linear-to-br from-green-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,148,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[250%_250%] animate-[shimmer_3s_infinite]" />
          <div className="text-center z-10">
            <div className="text-6xl font-bold text-white mb-2 font-mono">
              1M+
            </div>
            <div className="text-primary text-sm tracking-wider uppercase">
              Compounds
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
