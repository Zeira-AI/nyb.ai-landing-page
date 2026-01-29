"use client";

import Link from "next/link";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { Meta } from "@/lib/constants";
import { FooterConnect } from "./FooterConnect";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <FooterConnect />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 mb-4 md:mb-0"
          >
            <span className="font-bold text-white">
              {Meta.SITE_NAME}
              <span className="text-primary">{Meta.SITE_DOMAIN}</span>
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/40 text-sm"
          >
            &copy; {new Date().getFullYear()} {Meta.SITE_NAME}
            {Meta.SITE_DOMAIN}. All rights reserved.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6 mt-4 md:mt-0"
          >
            <Link
              href={`mailto:${Meta.COMPANY_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Connect
            </Link>
            <Link
              href={Meta.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              LinkedIn
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <TextHoverEffect text={`${Meta.SITE_NAME}${Meta.SITE_DOMAIN}`} />
    </footer>
  );
}
