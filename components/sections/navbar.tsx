"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLenis } from "@/components/providers/LenisProvider";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

const links = [
  { label: "Services", href: "#services" },
  { label: "Influencers", href: "#influencers" },
  { label: "Verticals", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) {
      setScrolled(false);
      return;
    }
    const update = () => setScrolled(lenis.scroll > 24);
    update();
    lenis.on("scroll", update);
    return () => {
      lenis.off("scroll", update);
    };
  }, [lenis]);

  function scrollTo(href: string) {
    setOpen(false);
    if (lenis) {
      lenis.scrollTo(href, { duration: 1.2 });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/5 bg-[#09090b]/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#home");
          }}
          className="group flex items-center gap-2.5"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-violet shadow-lg shadow-neon-violet/30 transition-transform duration-300 group-hover:scale-105">
            <ArrowRight className="h-5 w-5 -rotate-45 text-white" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            crewpack<span className="text-neon-cyan">.agency</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-8 text-sm font-medium text-slate-300">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.href);
                }}
                className="transition-colors duration-200 hover:text-neon-cyan"
              >
                {l.label}
              </a>
            ))}
          </div>

          <LanguageSwitcher />

          <MagneticButton>
            <Button variant="glow" size="sm" onClick={() => scrollTo("#contact")}>
              Get Traffic
            </Button>
          </MagneticButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-200 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/5 bg-[#09090b]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4 text-sm font-medium text-slate-200">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(l.href);
                  }}
                  className="rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5 hover:text-neon-cyan"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 px-3">
                <LanguageSwitcher className="inline-flex" />
              </div>
              <Button
                variant="glow"
                className="mt-3 w-full"
                onClick={() => scrollTo("#contact")}
              >
                Get Traffic
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
