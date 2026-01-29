"use client";

import { Meta } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function FooterConnect() {
  const [email, setEmail] = useState("");

  const handleConnect = () => {
    const subject = encodeURIComponent("Let's build something together");
    const body = encodeURIComponent(
      `Hi NYB Team,\n\nI'm interested in connecting. My email is ${email}.\n\nBest regards,`,
    );
    window.location.href = `mailto:${Meta.COMPANY_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
        Let’s build something together.
      </h2>
      <div className="flex items-center gap-4 max-w-md border-b border-white/20 pb-2 group focus-within:border-white transition-colors duration-300">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleConnect();
          }}
          className="bg-transparent border-none outline-none text-xl md:text-2xl text-white placeholder:text-white/20 flex-1 w-full p-0"
        />
        <button
          onClick={handleConnect}
          className="text-white/60 hover:text-white flex items-center gap-2 text-lg font-medium transition-colors"
        >
          Connect
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
