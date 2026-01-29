"use client";

import Link from "next/link";
import { Meta } from "@/lib/constants";

export default function CustomerVoice() {
  return (
    <section id="company" className="py-24 bg-white/2">
      <div className="container mx-auto px-6">
        {/* Testimonial */}
        <div className="mb-24 text-center">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Customer Voice
          </span>
          <h2 className="text-3xl md:text-5xl font-light italic leading-tight mb-8">
            “We’ve always believed that nature holds more than we’ve been able
            to access. What made this project different was the ability to
            explore that space with scientific precision.”
          </h2>
          <div className="text-white/60">
            — Client, AI-Driven Discovery of Naturally Derived Neuroactive
            Compounds
          </div>
          <div className="mt-8">
            <Link
              href={`mailto:${Meta.COMPANY_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors border-b border-primary/30 hover:border-white pb-1"
            >
              Request Case Study
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
