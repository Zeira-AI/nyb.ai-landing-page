"use client";

import Link from "next/link";
import { Meta } from "@/lib/constants";
import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none transform translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 text-white"
        >
          Where your next <br className="hidden md:block" />
          <span className="text-gradient-primary">breakthrough begins.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href={`mailto:${Meta.COMPANY_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-bold tracking-wide rounded-sm hover:bg-gray-200 transition-colors"
          >
            BOOK A DEMO
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
