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
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
