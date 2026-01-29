"use client";

import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ArrowUp, ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const MoleculeViewer = dynamic(() => import("./MoleculeViewer"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black/20 animate-pulse" />,
});

const stats = [
  {
    icon: ArrowUp,
    label: "Pearson (r)",
    value: 18.39,
    description: "Bioactivity Prediction",
  },
  {
    icon: ArrowDown,
    label: "RMSE",
    value: 9.93,
    description: "Accuracy Improvement",
  },
  {
    icon: ArrowUp,
    label: "Kendall (τ)",
    value: 19.09,
    description: "Ligand Ranking",
  },
];

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
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary font-mono text-sm tracking-wider uppercase"
          >
            Proprietary Predictive Model
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 mb-6"
          >
            <img
              src="/ligospace.svg"
              alt="LigoSPACE"
              className="h-10 md:h-12"
            />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-light mb-6 text-white/90"
          >
            AI for Drug Target Interaction
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/60 leading-relaxed mb-8"
          >
            LigoSPACE is our state-of-the-art graph deep learning engine for
            drug–target interaction and bioactivity prediction, capturing
            biological context to deliver high-precision results. Natively
            integrated into Vecura, it powers end-to-end discovery workflows
            from screening to prioritization.
          </motion.p>

          {/* Stats with stagger animation */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                className="flex flex-col gap-1 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider">
                  <stat.icon className="w-3 h-3" />
                  {stat.label}
                </div>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  <NumberTicker value={stat.value} decimalPlaces={2} />%
                </div>
                <div className="text-white/50 text-xs leading-tight">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center md:justify-start gap-8 md:gap-10 mt-2"
          >
            <Link
              href="https://ieeexplore.ieee.org/document/10645211/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img
                src="/IEEE.svg"
                alt="IEEE"
                className="h-14 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300"
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
                className="h-14 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300"
              />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square md:aspect-video rounded-lg bg-black/50 border border-white/10 flex items-center justify-center overflow-hidden"
        >
          {/* 3D Protein Display */}
          <div className="absolute inset-0">
            <MoleculeViewer
              url="/7S61-COMPOUND_CID_64982-d4xxf_DOCKED.pdb"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
