"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { News as news } from "@/lib/constants";
import Image from "next/image";

export default function News() {
  return (
    <section className="py-24 bg-white/2">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Recognitions, research highlights, and milestones across our work in
            scientific AI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 tracking-tight">
            Special Features
          </h2>
        </motion.div>
        {/* Special Features / News */}
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
          className="grid md:grid-cols-3 gap-8"
        >
          {news.map((item) => (
            <motion.div
              key={item.link}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href={item.link}
                target="_blank"
                className="group block h-full bg-black/40 border border-white/10 hover:border-primary/50 transition-colors rounded-sm overflow-hidden"
              >
                <div className="aspect-video w-full overflow-hidden border-b border-white/5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-white/40 group-hover:text-primary transition-colors">
                      {item.source}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-medium leading-normal group-hover:text-white text-white/80 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
