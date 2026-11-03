"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SNAP_SECTION } from "@/lib/section";
import { projects } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { AnimatedNumber } from "@/components/ui/animated-number";

export function Projects() {
  return (
    <section
      id="projects"
      className={cn(SNAP_SECTION, "overflow-hidden bg-[#09090b] py-20")}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Verticals & Results"
          title={
            <>
              Selected <span className="text-gradient">playbooks</span>
            </>
          }
          description="Campaigns engineered for high-intent audiences across crypto, iGaming and nutra."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12} className="h-full">
              <TiltCard className="h-full">
                {/* Background image with dark blend */}
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  draggable={false}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-multiply"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/70 to-[#09090b]/30"
                />
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-60 blur-3xl",
                    p.glow
                  )}
                />

                <div className="relative z-10 flex h-full flex-col p-7">
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
                        className="rounded-xl border border-white/5 bg-[#09090b]/50 p-3 text-center backdrop-blur"
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
