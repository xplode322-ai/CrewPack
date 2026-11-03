"use client";

import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { useLenis } from "@/components/providers/LenisProvider";

export function Footer() {
  const lenis = useLenis();

  function toTop(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <footer className="border-t border-white/5 bg-white/[0.02] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <a href="#home" onClick={toTop} className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon-cyan to-neon-violet">
            <ArrowRight className="h-4 w-4 -rotate-45 text-white" />
          </span>
          <span className="font-display text-base font-bold text-white">
            crewpack<span className="text-neon-cyan">.agency</span>
          </span>
        </a>

        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} CrewPack Agency. All rights reserved. ·
          Global Web Traffic Buying Agency
        </p>

        <div className="flex items-center gap-3 text-slate-400">
          <a
            href="https://t.me/your_username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 transition-all duration-300 hover:border-neon-cyan/50 hover:text-neon-cyan"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href="mailto:hello@crewpack.agency"
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 transition-all duration-300 hover:border-neon-violet/50 hover:text-neon-violet"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
