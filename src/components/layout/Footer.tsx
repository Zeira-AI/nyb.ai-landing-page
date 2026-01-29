import Link from "next/link";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { Meta } from "@/lib/constants";
import { FooterConnect } from "./FooterConnect";
import { FooterPartners as partners } from "@/lib/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <FooterConnect />
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-white/40 uppercase tracking-wider">
                Secure Infrastructure
              </h3>
              <p className="text-white/60 max-w-md mb-8">
                Our AI infrastructure is built for life sciences, combining
                scientific rigor, data integrity, and enterprise-grade security.
                Powered by NVIDIA, HPE, Equinix.
              </p>
              <div className="flex flex-wrap justify-start gap-8">
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
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-bold text-white">
              {Meta.SITE_NAME}
              <span className="text-primary">{Meta.SITE_DOMAIN}</span>
            </span>
          </div>
          <div className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} {Meta.SITE_NAME}
            {Meta.SITE_DOMAIN}. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href={`mailto:${Meta.COMPANY_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-sm"
            >
              Connect
            </Link>
            <Link
              href={Meta.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-sm"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <TextHoverEffect text={`${Meta.SITE_NAME}${Meta.SITE_DOMAIN}`} />
    </footer>
  );
}
