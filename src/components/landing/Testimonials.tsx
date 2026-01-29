"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Meta } from "@/lib/constants";

export default function Testimonials() {
  const news = [
    {
      title: "Winner of SuperAI Genesis Competition 2025",
      source: "SuperAI Genesis 2025",
      link: "https://www.superai.com/genesis-startup-competition",
    },
    {
      title: "Revolutionising drug discovery with AI in South-east Asia",
      source: "The Business Times",
      link: "https://www.businesstimes.com.sg/events-awards/design-ai-tech-awards/design-ai-and-tech-awards/revolutionising-drug-discovery-ai-south-east-asia",
    },
    {
      title: "How AI Is Accelerating Drug Discovery at NYB AI",
      source: "Equinix",
      link: "https://www.youtube.com/watch?v=V-JhZzkhCF4",
    },
  ];

  return (
    <section className="py-24 bg-white/2">
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

        {/* Special Features / News */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <Link
              href={item.link}
              key={item.link}
              target="_blank"
              className="group block p-6 bg-black/40 border border-white/10 hover:border-primary/50 transition-colors rounded-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-white/40 group-hover:text-primary transition-colors">
                  {item.source}
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-medium leading-normal group-hover:text-white text-white/80 transition-colors">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
