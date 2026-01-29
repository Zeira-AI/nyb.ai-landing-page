"use client";

import { Partners as partners } from "@/lib/constants";
import { motion } from "motion/react";

export default function TrustedBy() {
  return (
    <section className="py-12 border-b border-white/5">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-mono text-white/40 mb-10 uppercase tracking-wider"
        >
          Supported by a global ecosystem
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="group flex items-start justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`${partner.className} w-auto object-contain ${
                  partner?.disableFilter
                    ? "opacity-60 group-hover:opacity-100 grayscale hover:grayscale-0"
                    : "brightness-0 invert opacity-40 group-hover:opacity-100"
                } transition-all duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
