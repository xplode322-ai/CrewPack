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
      className={cn(SNAP_SECTION, "overflow-hidden py-20")}
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

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2 md:h-[560px] lg:h-[640px]">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className={cn("h-full", p.span)}
            >
              <TiltCard className="h-full">
                {/* Background image with dark blend */}
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  draggable={false}
                  className={cn(
                    "pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-multiply",
                    p.imagePosition ?? "object-center"
                  )}
                />
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-gradient-to-t",
                    p.overlayClassName ?? "from-[#09090b] to-[#09090b]/40"
                  )}
                />
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -right-10 -top-10 rounded-full opacity-60 blur-3xl",
                    p.large ? "h-44 w-44" : "h-32 w-32",
                    p.glow
                  )}
                />

                <div
                  className={cn(
                    "relative z-10 flex h-full flex-col",
                    p.large ? "p-8 sm:p-10" : "p-6 sm:p-7"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-neon-cyan backdrop-blur">
                      {p.category}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 group-hover:border-white/30 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <h3
                    className={cn(
                      "mt-6 font-display font-bold tracking-tight text-white",
                      p.large ? "text-3xl sm:text-4xl" : "text-2xl"
                    )}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 leading-relaxed text-slate-400",
                      p.large ? "text-base" : "text-sm"
                    )}
                  >
                    {p.description}
                  </p>

                  <div
                    className={cn(
                      "mt-auto grid grid-cols-3 gap-3",
                      p.large ? "pt-10" : "pt-8"
                    )}
                  >
                    {p.stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl border border-white/5 bg-[#09090b]/50 p-3 text-center backdrop-blur"
                      >
                        <div
                          className={cn(
                            "font-display font-bold text-white",
                            p.large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                          )}
                        >
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
