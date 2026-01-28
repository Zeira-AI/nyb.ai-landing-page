"use client";

import { motion } from "motion/react";

const features = [
  {
    title: "Target Identification",
    description:
      "Identifies and prioritizes molecular targets through integration of omics data, biological networks, and literature-derived knowledge graphs.",
  },
  {
    title: "Hit Identification",
    description:
      "Identifies molecular hits through large-scale virtual screening using a diverse ensemble of AI-driven tools. Balances interaction accuracy with diversity.",
  },
  {
    title: "Lead Optimization",
    description:
      "Refines hit series into lead compounds by predicting safety, efficacy, and developability properties.",
  },
  {
    title: "Preclinical Validation Design",
    description:
      "Designs in vitro and in vivo studies to validate biological activity and mechanisms. Translates model predictions into experimental protocols.",
  },
  {
    title: "Translational Readiness",
    description:
      "Packages validated results into regulatory- and IP-ready outputs. Ensures discovery findings can progress to clinical development.",
  },
];

export default function VecuraSection() {
  return (
    <section id="platform" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            AI for Enterprise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">VECURA</h2>
          <p className="text-xl text-white/60 max-w-3xl">
            The Complete AI Stack for Life Science Innovation. Vecura
            democratizes AI-driven discovery with a no-code, audit-ready
            environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-sm bg-white/5 border border-white/10 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-xl font-bold mb-3 relative z-10 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
