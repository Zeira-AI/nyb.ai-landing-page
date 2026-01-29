"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import { Meta, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const item of NAV_ITEMS) {
        // Remove '#' to get ID
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href, { offset: -80 });
    } else {
      // Fallback if lenis isn't ready
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "transition-opacity duration-300",
                  isActive ? "opacity-100" : "opacity-50 hover:opacity-80",
                )}
                aria-label={item.name}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className={cn(
                    item.className,
                    "transition-all duration-300",
                    isActive && "scale-105",
                  )}
                />
              </a>
            );
          })}
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
