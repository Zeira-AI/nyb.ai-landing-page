"use client";

import { FooterPartners as partners } from "@/lib/constants";
import { motion } from "motion/react";

export default function Security() {
  return (
    <section className="py-24 border-y border-white/5 bg-white/2">
      <div className="container mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono text-sm tracking-wider uppercase block"
        >
          Our AI infrastructure is built for life sciences, combining scientific
          rigor, data integrity, and enterprise-grade security.
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mt-2 mb-6 tracking-tight"
        >
          Secure Infrastructure
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-white/60 leading-relaxed">
            We partner with industry leaders in compute, compliance, and cloud
            operations to deliver performance you can trust. Powered by HPE, and
            Equinix.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
              },
            },
          }}
          className="flex flex-wrap justify-center gap-12 md:gap-16"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 },
              }}
              className="group flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`${partner.className} w-auto object-contain brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 scale-150`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
