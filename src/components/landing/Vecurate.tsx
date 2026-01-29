"use client";

import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { FlaskConical, Leaf, Network, CircleDot } from "lucide-react";

export default function VecurateSection() {
  return (
    <section id="vecurate" className="py-24">
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
          className="flex-1 w-full pl-6"
        >
          <div className="grid grid-cols-2 gap-4">
            {/* Stat 1 */}
            <div className="flex flex-col justify-between gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <FlaskConical className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1 font-mono">
                  <NumberTicker value={1} decimalPlaces={0} />
                  M+
                </div>
                <div className="text-white/60 text-xs leading-relaxed">
                  Total digitized natural compounds
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col justify-between gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1 font-mono">
                  <NumberTicker value={50} decimalPlaces={0} />
                  K+
                </div>
                <div className="text-white/60 text-xs leading-relaxed">
                  Tropical species with ethnobotanical context
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col justify-between gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Network className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1 font-mono">
                  &gt;
                  <NumberTicker value={100} decimalPlaces={0} />
                </div>
                <div className="text-white/60 text-xs leading-relaxed">
                  Curated families classified by structure & bioactivity
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col justify-between gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <CircleDot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2 font-mono leading-none">
                  Multiple sources
                </div>
                <div className="text-white/60 text-xs leading-relaxed">
                  Plants, fungi, marine organisms, and traditional herbs
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
