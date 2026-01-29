"use client";

import Link from "next/link";
import { Meta } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full mix-blend-screen opacity-20 pointer-events-none transform translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 text-white">
          Where your next <br className="hidden md:block" />
          <span className="text-gradient-primary">breakthrough begins.</span>
        </h2>

        <Link
          href={`mailto:${Meta.COMPANY_EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-bold tracking-wide rounded-sm hover:bg-gray-200 transition-colors"
        >
          BOOK A DEMO
        </Link>
      </div>
    </section>
  );
}
