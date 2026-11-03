"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { Parallax } from "@/components/ui/parallax";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { cn } from "@/lib/utils";

const projects = [
  {
    category: "Crypto",
    title: "Exchange Launch",
    description:
      "High-intent traders and Web3 audiences across tier-1 and emerging markets.",
    stats: [
      { value: 2.4, suffix: "M", label: "Impressions / mo" },
      { value: 3.8, suffix: "%", label: "Avg. CTR" },
      { value: 40, suffix: "+", label: "Geos" },
    ],
    accent: "text-neon-cyan",
    glow: "bg-neon-cyan/25",
  },
  {
    category: "iGaming",
    title: "Sportsbook Scale-Up",
    description:
      "Casino and sportsbook audiences that convert around the clock.",
    stats: [
      { value: 5.1, suffix: "M", label: "Impressions / mo" },
      { value: 4.2, suffix: "%", label: "Avg. CTR" },
      { value: 25, suffix: "+", label: "Geos" },
    ],
    accent: "text-neon-violet",
    glow: "bg-neon-violet/25",
  },
  {
    category: "Nutra",
    title: "Direct-Response Nutra",
    description:
      "Health, beauty and wellness buyers ready for direct-response offers.",
    stats: [
      { value: 1.8, suffix: "M", label: "Impressions / mo" },
      { value: 2.9, suffix: "%", label: "Avg. CTR" },
      { value: 15, suffix: "+", label: "Geos" },
    ],
    accent: "text-neon-fuchsia",
    glow: "bg-neon-fuchsia/25",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Verticals & Results"
          title={
            <>
              Selected <span className="text-gradient">playbooks</span>
            </>
          }
          description="Campaigns engineered for high-intent audiences across crypto, iGaming and nutra."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12} className="h-full">
              <TiltCard className="h-full">
                <div className="relative flex h-full flex-col p-7">
                  <Parallax
                    from={24}
                    to={-24}
                    className="pointer-events-none absolute -right-8 -top-8 h-36 w-36"
                  >
                    <div
                      className={cn("h-full w-full rounded-full blur-3xl", p.glow)}
                    />
                  </Parallax>

                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur",
                        p.accent
                      )}
                    >
                      {p.category}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 group-hover:border-white/30 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {p.description}
                  </p>

                  <div className="mt-auto grid grid-cols-3 gap-3 pt-8">
                    {p.stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center"
                      >
                        <div className="font-display text-xl font-bold text-white sm:text-2xl">
                          <AnimatedNumber value={s.value} />
                          <span className={p.accent}>{s.suffix}</span>
                        </div>
                        <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
