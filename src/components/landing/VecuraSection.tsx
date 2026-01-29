"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Target,
  FlaskConical,
  Atom,
  Microscope,
  Briefcase,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    id: "01",
    title: "Target Identification",
    description:
      "Multi-omics data integration to identify and prioritize high-confidence molecular targets.",
    fullDescription:
      "Integrates omics data, biological networks, and literature-derived knowledge graphs to identify and prioritize molecular targets with the highest therapeutic potential.",
    icon: Target,
  },
  {
    id: "02",
    title: "Hit Identification",
    description:
      "AI-driven virtual screening of billions of compounds to find potent hits.",
    fullDescription:
      "Identifies molecular hits through large-scale virtual screening using a diverse ensemble of AI-driven tools, balancing interaction accuracy with structural diversity.",
    icon: Atom,
  },
  {
    id: "03",
    title: "Lead Optimization",
    description:
      "Predicting safety and efficacy to refine hits into developable leads.",
    fullDescription:
      "Refines hit series into lead compounds by predicting safety, efficacy, and developability properties (ADMET) with high precision.",
    icon: FlaskConical,
  },
  {
    id: "04",
    title: "Preclinical Validation",
    description:
      "Translating AI predictions into robust in vitro and in vivo protocols.",
    fullDescription:
      "Designs in vitro and in vivo studies to validate biological activity and mechanisms, actively translating model predictions into experimental protocols.",
    icon: Microscope,
  },
  {
    id: "05",
    title: "Translational Readiness",
    description:
      "Preparing discovery findings for clinical development and regulation.",
    fullDescription:
      "Packages validated results into regulatory- and IP-ready outputs, ensuring discovery findings can seamlessly progress to clinical development.",
    icon: Briefcase,
  },
];

export default function VecuraSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section
      id="vecura"
      className="py-12 md:py-16 relative overflow-hidden bg-background"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="text-primary font-mono text-xs tracking-wider uppercase">
              The AI Stack
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 mt-3"
          >
            <img src="/vecura.svg" alt="Vecura" className="h-8 md:h-12" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-light mb-6 text-white/90"
          >
            A complete, end-to-end AI operating system for life science
            innovation. From target to clinic, simplified.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Left Side: Pipeline Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-2">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={cn(
                  "group relative w-full text-left p-3 lg:p-4 transition-all duration-300 rounded-lg border border-transparent",
                  activeFeature === index
                    ? "bg-white/5 border-white/10"
                    : "hover:bg-white/5 hover:border-white/5",
                )}
              >
                {/* Progress Bar for Active Item */}
                {activeFeature === index && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 rounded-lg bg-linear-to-r from-primary/10 to-transparent opacity-50"
                  />
                )}

                <div className="relative z-10 flex items-baseline gap-4">
                  <span
                    className={cn(
                      "font-mono text-xs transition-colors duration-300",
                      activeFeature === index
                        ? "text-primary"
                        : "text-white/30 group-hover:text-white/50",
                    )}
                  >
                    {feature.id}
                  </span>
                  <h3
                    className={cn(
                      "text-lg font-bold transition-colors duration-300",
                      activeFeature === index
                        ? "text-white"
                        : "text-white/40 group-hover:text-white",
                    )}
                  >
                    {feature.title}
                  </h3>
                </div>

                <div
                  className={cn(
                    "relative z-10 pl-9 mt-1 text-xs text-white/60 transition-colors duration-300 max-w-md line-clamp-2",
                    activeFeature === index
                      ? "text-white/80"
                      : "text-white/40 group-hover:text-white/60",
                  )}
                >
                  {feature.description}
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Visual Display */}
          <div className="lg:col-span-7 relative h-[350px] lg:h-auto min-h-[350px] rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden p-1">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  activeFeature === index && (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex flex-col h-full"
                    >
                      {/* Illustration Area */}
                      <div className="flex-1 relative flex items-center justify-center bg-linear-to-br from-white/5 to-transparent m-1 rounded-xl">
                        {/* Abstract Grid Elements */}
                        <div className="absolute inset-0 z-0">
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)]" />
                          <div className="absolute top-0 left-0 right-0 h-[500px] bg-primary/5 blur-[120px] rounded-full mix-blend-screen opacity-20 pointer-events-none" />
                        </div>

                        <div className="relative z-10 p-12 rounded-full bg-linear-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-md">
                          <feature.icon
                            className="w-24 h-24 text-primary"
                            strokeWidth={1}
                          />
                        </div>

                        {/* Decorative floating elements */}
                        <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-white/20 animate-pulse delay-75" />
                      </div>

                      {/* Content Details */}
                      <div className="p-8 md:p-12 border-t border-white/10 bg-black/80 lg:bg-transparent">
                        <h3 className="text-3xl font-bold mb-4 text-white">
                          {feature.title}
                        </h3>
                        <p className="text-lg text-white/70 leading-relaxed">
                          {feature.fullDescription}
                        </p>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
