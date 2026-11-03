"use client";

import { cn } from "@/lib/utils";
import { SNAP_SECTION } from "@/lib/section";
import { services } from "@/lib/services";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedNumber } from "@/components/ui/animated-number";

export function Services() {
  return (
    <section id="services" className={cn(SNAP_SECTION, "overflow-hidden py-20")}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Services"
          title={
            <>
              Built to move{" "}
              <span className="text-gradient">high-intent traffic</span>
            </>
          }
          description="A full-stack media buying operation — from exclusive inventory to transparent reporting."
        />

        <BentoGrid className="mt-10">
          {services.map((s, i) => (
            <BentoCard
              key={s.id}
              className={cn(s.span)}
              title={s.title}
              description={s.description}
              image={s.image}
              backgrounds={s.backgrounds}
              spotColor={s.spotColor}
              delay={i * 0.06}
              icon={<s.icon className={cn("h-6 w-6", s.accent)} />}
            >
              <div className="mt-auto pt-5">
                {s.stat && (
                  <div>
                    <div className="font-display text-4xl font-bold text-white sm:text-5xl">
                      <AnimatedNumber value={s.stat.value} />
                      <span className={s.accent}>{s.stat.suffix}</span>
                    </div>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-slate-400">
                      {s.stat.label}
                    </p>
                  </div>
                )}
                {s.tags && (
                  <div
                    className={cn(
                      "flex flex-wrap gap-2",
                      s.stat && "mt-4"
                    )}
                  >
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {s.formats && (
                  <ul className="mt-6 flex flex-col gap-3">
                    {s.formats.map((f) => (
                      <li
                        key={f.name}
                        className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04] sm:gap-4 sm:p-4"
                      >
                        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5">
                          <f.icon className={cn("h-4 w-4", s.accent)} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-white">
                            {f.name}
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-zinc-400">
                            {f.description}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold">
                          <span className="font-medium text-zinc-500">
                            CR&nbsp;
                          </span>
                          <span className={s.accent}>{f.cr}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
