import Link from "next/link";
import { TextHoverEffect } from "../ui/text-hover-effect";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where your next breakthrough begins.
            </h2>
            <Link
              href="#demo"
              className="inline-block px-8 py-4 bg-primary text-black font-bold rounded-sm hover:bg-white transition-colors"
            >
              Book a Demo
            </Link>
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-white/40 uppercase tracking-wider">
                Secure Infrastructure
              </h3>
              <p className="text-white/60 max-w-md">
                Our AI infrastructure is built for life sciences, combining
                scientific rigor, data integrity, and enterprise-grade security.
                Powered by NVIDIA, HPE, Equinix.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-primary/20 rounded-xs flex items-center justify-center border border-primary/50">
              <div className="w-3 h-3 bg-primary rounded-xs" />
            </div>
            <span className="font-bold text-white">NYB.ai</span>
          </div>
          <div className="text-white/40 text-sm">
            &copy; 2026 NYB AI. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-white/60 hover:text-white text-sm">
              Connect
            </Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <TextHoverEffect text="NYB.ai" />
    </footer>
  );
}
