"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Sparkles } from "@/components/ui/sparkles";
import { TextReveal } from "@/components/ui/text-reveal";
import { Reveal } from "@/components/ui/reveal";
import { GlowOrb } from "@/components/ui/glow-orb";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

const stats = [
  { value: 300, suffix: "+", label: "Exclusive sites", accent: "text-neon-cyan" },
  { value: 100, suffix: "+", label: "Countries covered", accent: "text-neon-violet" },
  { value: 100, suffix: "%", label: "Direct with admins", accent: "text-neon-cyan" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#09090b] pb-24 pt-32 sm:pt-40"
    >
      {/* ---------- Background layers ---------- */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-grid mask-radial-faded absolute inset-0" aria-hidden />
        <DotPattern className="text-white/[0.07]" fade />
        <Sparkles className="opacity-80" count={36} />
      </div>
      <GlowOrb
        className="left-[-10%] top-[-12%] h-[420px] w-[420px]"
        color="bg-neon-cyan/20"
      />
      <GlowOrb
        className="right-[-12%] top-[16%] h-[480px] w-[480px]"
        color="bg-neon-violet/25"
        duration={12}
      />
      <GlowOrb
        className="bottom-[-20%] left-[30%] h-[360px] w-[360px]"
        color="bg-neon-blue/15"
        delay={-4}
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-300 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
              </span>
              Worldwide coverage · Crypto · iGaming · Nutra
            </div>
          </Reveal>

          {/* Headline */}
          <h1 className="mt-8 font-display text-[2.75rem] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">
              <TextReveal text="Global Web Traffic" />
            </span>
            <span className="block">
              <TextReveal
                text="Buying Agency"
                accentWords={["Agency"]}
                delay={0.25}
              />
            </span>
          </h1>

          {/* Subheadline */}
          <Reveal delay={0.5}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Exclusive organic traffic direct from admins. Worldwide coverage,
              lowest market commissions.
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.6} className="mt-9">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton>
                <Button variant="glow" size="lg" asChild>
                  <a href="#contact">
                    Get Traffic
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="ghost" size="lg" asChild>
                  <a href="#contact">Become a Partner</a>
                </Button>
              </MagneticButton>
            </div>
          </Reveal>

          {/* Stats */}
          <dl className="mt-14 grid w-full max-w-2xl grid-cols-3 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.7 + i * 0.08} className="h-full">
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-5">
                  <dd className="font-display text-2xl font-bold text-white sm:text-4xl">
                    <AnimatedNumber value={s.value} />
                    <span className={s.accent}>{s.suffix}</span>
                  </dd>
                  <dt className="mt-1 text-[11px] uppercase tracking-wider text-slate-500 sm:text-xs">
                    {s.label}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <motion.a
          href="#services"
          className="flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-white"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll to services"
        >
          <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}
