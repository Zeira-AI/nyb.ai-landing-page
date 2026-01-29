"use client";

import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ArrowUp, ArrowDown } from "lucide-react";
import Link from "next/link";

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
          <div className="grid grid-cols-3 gap-4 mb-10">
            {/* Stat 1 */}
            <div className="flex flex-col gap-1 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider">
                <ArrowUp className="w-3 h-3" />
                Pearson (r)
              </div>
              <div className="text-3xl font-bold tracking-tight text-white">
                <NumberTicker value={18.39} decimalPlaces={2} />%
              </div>
              <div className="text-white/50 text-xs leading-tight">
                Bioactivity Prediction
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-1 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider">
                <ArrowDown className="w-3 h-3" />
                RMSE
              </div>
              <div className="text-3xl font-bold tracking-tight text-white">
                <NumberTicker value={9.93} decimalPlaces={2} />%
              </div>
              <div className="text-white/50 text-xs leading-tight">
                Accuracy Improvement
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-1 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider">
                <ArrowUp className="w-3 h-3" />
                Kendall (τ)
              </div>
              <div className="text-3xl font-bold tracking-tight text-white">
                <NumberTicker value={19.09} decimalPlaces={2} />%
              </div>
              <div className="text-white/50 text-xs leading-tight">
                Ligand Ranking
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-2">
            <Link
              href="https://ieeexplore.ieee.org/document/10645211/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img
                src="/IEEE.svg"
                alt="IEEE"
                className="h-8 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300"
              />
            </Link>
            <Link
              href="https://neurips.cc/virtual/2025/loc/san-diego/poster/117890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img
                src="/NeurIPS.svg"
                alt="NeurIPS"
                className="h-8 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300"
              />
            </Link>
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
            [3D Protein Display]
          </div>
        </motion.div>
      </div>
    </section>
  );
}
