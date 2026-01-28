"use client";

import { motion } from "motion/react";

export function LigoSpaceSection() {
  return (
    <section className="py-24 bg-white/5 border-y border-white/5">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Proprietary Predictive Engine
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            LigoSPACE
          </h2>
          <h3 className="text-2xl font-light mb-6 text-white/90">
            Deep Learning for Molecular Mechanisms
          </h3>
          <p className="text-white/60 leading-relaxed mb-8">
            LigoSPACE applies graph-based deep learning to model compound–target
            interactions with biological context, delivering predictive accuracy
            beyond conventional approaches. It is natively integrated into
            Vecura to power end-to-end discovery workflows.
          </p>
          <div className="inline-block px-4 py-2 border border-white/20 rounded-sm text-xs font-mono text-white/70">
            Research published on IEEE and NeurIPS
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-video rounded-lg bg-black/50 border border-white/10 flex items-center justify-center overflow-hidden"
        >
          {/* Abstract visualization placeholder */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-20 animate-pulse-slow" />
          <div className="text-white/20 font-mono text-sm">
            [Graph Network Visualization]
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function VecurateSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">VECURATE</h2>
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
          className="flex-1 w-full relative h-[300px] rounded-lg bg-gradient-to-br from-green-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,148,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />
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
