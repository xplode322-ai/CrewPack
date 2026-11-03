"use client";

import {
  BadgeDollarSign,
  Cpu,
  Dices,
  Globe2,
  Handshake,
} from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { cn } from "@/lib/utils";

const siteTypes = [
  "Sports News",
  "Global News",
  "Crypto Sites",
  "Adult",
  "File Sharing",
];

const verticals = [
  { label: "Crypto", dot: "bg-neon-cyan" },
  { label: "iGaming", dot: "bg-neon-violet" },
  { label: "Nutra", dot: "bg-neon-fuchsia" },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Built to move{" "}
              <span className="text-gradient">high-intent traffic</span>
            </>
          }
          description="A full-stack media buying operation — from exclusive inventory to transparent reporting."
        />

        <BentoGrid className="mt-12">
          {/* Flagship — Direct Admin Deals */}
          <SpotlightCard
            className="p-7 sm:p-8 md:col-span-2 md:row-span-2"
            spotColor="rgba(34, 211, 238, 0.12)"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 text-neon-cyan">
                  <Handshake className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Direct Admin Deals
                  </h3>
                  <p className="text-sm text-slate-400">
                    No middlemen. No inflated margins.
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <div className="font-display text-5xl font-bold text-white sm:text-6xl">
                  <AnimatedNumber value={300} />
                  <span className="text-neon-cyan">+</span>
                </div>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
                  exclusive sites, negotiated directly with admins and local
                  financial institutions across the globe.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {siteTypes.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Verticals */}
          <BentoCard
            delay={0.08}
            title="High-Intent Verticals"
            description="Three niches, one standard."
            spotColor="rgba(168, 85, 247, 0.14)"
            icon={<Dices className="h-6 w-6 text-neon-violet" />}
          >
            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {verticals.map((v) => (
                <span
                  key={v.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  <span className={cn("h-1.5 w-1.5 rounded-full", v.dot)} />
                  {v.label}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Global coverage */}
          <BentoCard
            delay={0.14}
            title="Global Coverage"
            description="Worldwide reach, localized execution."
            spotColor="rgba(59, 130, 246, 0.14)"
            icon={<Globe2 className="h-6 w-6 text-neon-blue" />}
          >
            <div className="mt-auto pt-4 font-display text-4xl font-bold text-white">
              <AnimatedNumber value={100} />
              <span className="text-neon-violet">+</span>
              <span className="ml-2 text-sm font-medium text-slate-400">
                countries
              </span>
            </div>
          </BentoCard>

          {/* Scraping */}
          <BentoCard
            delay={0.2}
            title="Proprietary Scraping"
            description="Custom-built scrapers find the exact sites you need, anywhere."
            spotColor="rgba(34, 211, 238, 0.14)"
            icon={<Cpu className="h-6 w-6 text-neon-cyan" />}
          />

          {/* Pricing */}
          <SpotlightCard
            className="p-7 sm:p-8 md:col-span-2"
            spotColor="rgba(217, 70, 239, 0.12)"
            delay={0.26}
          >
            <div className="flex h-full flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 sm:max-w-xs">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-neon-violet/20 to-neon-fuchsia/20 text-neon-fuchsia">
                  <BadgeDollarSign className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Flexible Pricing
                  </h3>
                  <p className="text-sm text-slate-400">
                    Pick the model that fits your goals.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 sm:ml-auto">
                {["CPM", "CPC", "Flat fee"].map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-display text-base font-bold text-white"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </BentoGrid>
      </div>
    </section>
  );
}
