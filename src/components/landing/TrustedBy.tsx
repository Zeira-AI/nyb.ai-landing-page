import { Partners as partners } from "@/lib/constants";
import Image from "next/image";

export default function TrustedBy() {
  return (
    <section className="py-12 border-b border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-mono text-white/40 mb-10 uppercase tracking-wider">
          Supported by a global ecosystem
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-start justify-center"
            >
              {/* Using img for SVGs to ensure correct aspect ratio display without defining explicit width/height ahead of time */}
              <img
                src={partner.logo}
                alt={partner.name}
                className={`${partner.className} w-auto object-contain ${
                  partner?.disableFilter
                    ? "opacity-60 group-hover:opacity-100 grayscale hover:grayscale-0"
                    : "brightness-0 invert opacity-40 group-hover:opacity-100"
                } transition-all duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
