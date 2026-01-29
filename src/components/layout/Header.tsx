"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Meta } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-black/50 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-mono text-xl tracking-tight font-bold">
            {Meta.SITE_NAME}
            <span className="text-primary">{Meta.SITE_DOMAIN}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Platform", "Solutions", "Research", "Company"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href={`mailto:${Meta.COMPANY_EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-5 py-2 text-sm font-mono font-medium text-black bg-primary hover:bg-white transition-colors rounded-sm"
        >
          Talk to Us
        </Link>
      </div>
    </motion.header>
  );
}
