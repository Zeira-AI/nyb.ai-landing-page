"use client";

import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { FlaskConical, Leaf, Network, CircleDot } from "lucide-react";

const stats = [
  {
    icon: FlaskConical,
    value: 1,
    suffix: "M+",
    description: "Total digitized natural compounds",
  },
  {
    icon: Leaf,
    value: 50,
    suffix: "K+",
    description: "Tropical species with ethnobotanical context",
  },
  {
    icon: Network,
    prefix: ">",
    value: 100,
    suffix: "",
    description: "Curated families classified by structure & bioactivity",
  },
  {
    icon: CircleDot,
    text: "Multiple sources",
    description: "Plants, fungi, marine organisms, and traditional herbs",
  },
];

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
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary font-mono text-sm tracking-wider uppercase"
          >
            Natural Intelligence
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 mb-6"
          >
            <img src="/vecurate.svg" alt="Vecurate" className="h-8 md:h-10" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-white/90 mb-6"
          >
            Nature-Derived Molecules, Ready for AI
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/60 leading-relaxed mb-8"
          >
            Vecurate contains over 1 million structurally diverse compounds from
            underexplored plants, microbes, and marine sources. Designed for
            compatibility with AI tools, it supports discovery across domains.
          </motion.p>
        </motion.div>

        {/* Stats Grid with stagger animation */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          className="flex-1 w-full pl-0 md:pl-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                className="flex flex-col justify-between gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1 font-mono leading-none">
                    {stat.text ? (
                      stat.text
                    ) : (
                      <>
                        {stat.prefix}
                        <NumberTicker
                          value={stat.value || 0}
                          decimalPlaces={0}
                        />
                        {stat.suffix}
                      </>
                    )}
                  </div>
                  <div className="text-white/60 text-xs leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
