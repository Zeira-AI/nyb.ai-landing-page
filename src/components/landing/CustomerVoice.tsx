"use client";

import Link from "next/link";
import { Meta } from "@/lib/constants";
import { motion } from "motion/react";

export default function CustomerVoice() {
  return (
    <section id="company" className="py-24 bg-white/2">
      <div className="container mx-auto px-6">
        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block"
          >
            Customer Voice
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-light italic leading-tight mb-8"
          >
            "We've always believed that nature holds more than we've been able
            to access. What made this project different was the ability to
            explore that space with scientific precision."
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/60"
          >
            — Client, AI-Driven Discovery of Naturally Derived Neuroactive
            Compounds
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8"
          >
            <Link
              href={`mailto:${Meta.COMPANY_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors border-b border-primary/30 hover:border-white pb-1"
            >
              Request Case Study
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
