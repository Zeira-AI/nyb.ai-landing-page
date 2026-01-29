"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import { Meta, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (lenis) {
      lenis.scrollTo(href, { offset: -80 });
    } else {
      // Fallback if lenis isn't ready
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
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
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center gap-2 group"
          >
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
                <Link
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
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href={`mailto:${Meta.COMPANY_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-5 py-2 text-sm font-mono font-medium text-black bg-primary hover:bg-white transition-colors rounded-sm"
          >
            Talk to Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-black border-l border-white/10 z-50 md:hidden"
            >
              <div className="flex flex-col h-full pt-24 px-6">
                {/* Nav Items */}
                <nav className="flex flex-col gap-6">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <button
                        key={item.name}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={cn(
                          "flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-300 text-left",
                          isActive
                            ? "bg-white/10 border border-white/20"
                            : "hover:bg-white/5 border border-transparent",
                        )}
                      >
                        <img
                          src={item.logo}
                          alt={item.name}
                          className={cn(
                            "h-5 w-auto",
                            isActive ? "opacity-100" : "opacity-60",
                          )}
                        />
                      </button>
                    );
                  })}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-auto pb-8">
                  <Link
                    href={`mailto:${Meta.COMPANY_EMAIL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-5 py-3 text-sm font-mono font-medium text-black bg-primary hover:bg-white transition-colors rounded-sm"
                  >
                    Talk to Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
