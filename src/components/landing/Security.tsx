"use client";

import { FooterPartners as partners } from "@/lib/constants";

export default function Security() {
  return (
    <section className="py-24 border-y border-white/5 bg-white/2">
      <div className="container mx-auto px-6 text-center">
        <span className="text-primary font-mono text-sm tracking-wider uppercase">
          Our AI infrastructure is built for life sciences, combining scientific
          rigor, data integrity, and enterprise-grade security.
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 tracking-tight">
          Secure Infrastructure
        </h2>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-white/60 leading-relaxed">
            We partner with industry leaders in compute, compliance, and cloud
            operations to deliver performance you can trust. Powered by NVIDIA,
            HPE, and Equinix.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`${partner.className} w-auto object-contain brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 scale-150`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
