"use client";

import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { useScrollController } from "@/components/providers/scroll-provider";

export function Footer() {
  const { scrollTo } = useScrollController();

  function toTop(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    scrollTo("#home");
  }

  return (
    <footer className="border-t border-white/5 bg-white/[0.02] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <a href="#home" onClick={toTop} className="flex items-center gap-2.5">
          <Image
            src="/logo111.png"
            alt="CrewPack.Agency logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain transition-transform duration-300 hover:scale-110"
          />
          <span className="font-display text-base font-bold text-white">
            CrewPack<span className="text-neon-cyan">.Agency</span>
          </span>
        </a>

        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} CrewPack.Agency. All rights reserved. ·
          Global Web Traffic Buying Agency
        </p>

        <div className="flex items-center gap-3 text-slate-400">
          <a
            href="https://t.me/AlexRank"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 transition-all duration-300 hover:border-neon-cyan/50 hover:text-neon-cyan"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href="mailto:ceo@crewpack.agency"
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
