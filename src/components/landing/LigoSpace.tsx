"use client";

import { motion } from "motion/react";

export default function LigoSpaceSection() {
  return (
    <section
      id="ligospace"
      className="py-24 bg-white/5 border-y border-white/5"
    >
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
          <div className="mt-3 mb-6">
            <img
              src="/ligospace.svg"
              alt="LigoSPACE"
              className="h-18 md:h-12"
            />
          </div>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-20 animate-pulse-slow" />
          <div className="text-white/20 font-mono text-sm">
            [Graph Network Visualization]
          </div>
        </motion.div>
      </div>
    </section>
  );
}
