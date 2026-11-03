"use client";

import type { LucideIcon } from "lucide-react";
import { FileText, Mic, Monitor, MonitorPlay, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SNAP_SECTION } from "@/lib/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";

interface AdFormat {
  name: string;
  description: string;
  cr: string;
  icon: LucideIcon;
  /** Tailwind text color for the card icon. */
  accent: string;
  /** Tailwind text color for the CR badge number. */
  badgeColor: string;
  /** Tailwind background color for the ambient glow. */
  glow: string;
  /** Grid placement classes for the responsive layout. */
  span: string;
  /** Premium dark image used as the card backdrop. */
  image: string;
}

const formats: AdFormat[] = [
  {
    name: "Display & Site Branding",
    description:
      "Premium banners and full-site branding for maximum visibility.",
    cr: "1-4%",
    icon: Monitor,
    accent: "text-neon-cyan",
    badgeColor: "text-neon-cyan",
    glow: "bg-neon-cyan/25",
    span: "md:col-span-1 lg:col-span-2",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "Interactive & Video",
    description:
      "Persistent Catfish/Stickers and captive in-player video ads (Pre-roll/Pause-roll).",
    cr: "3-7%",
    icon: MonitorPlay,
    accent: "text-neon-violet",
    badgeColor: "text-neon-cyan",
    glow: "bg-neon-violet/25",
    span: "md:col-span-1 lg:col-span-2",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "Native PR & SEO",
    description:
      "Custom articles, deep-dive reviews, and linkbuilding on trusted WebSites.",
    cr: "8-15%",
    icon: FileText,
    accent: "text-neon-blue",
    badgeColor: "text-neon-cyan",
    glow: "bg-neon-blue/25",
    span: "md:col-span-1 lg:col-span-2",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "Viral Social",
    description: "Massive top-of-funnel reach via TikTok Clippers.",
    cr: "2-5%",
    icon: Share2,
    accent: "text-neon-fuchsia",
    badgeColor: "text-neon-fuchsia",
    glow: "bg-neon-fuchsia/25",
    span: "md:col-span-1 lg:col-span-3",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "KOL & Streamers",
    description:
      "Direct endorsements and ambassadorships across Twitch, Kick, Telegram, X, and TikTok.",
    cr: "10-25%",
    icon: Mic,
    accent: "text-neon-cyan",
    badgeColor: "text-neon-cyan",
    glow: "bg-neon-cyan/25",
    span: "md:col-span-2 lg:col-span-3",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=70",
  },
];

export function AdFormats() {
  return (
    <section
      id="ad-formats"
      className={cn(SNAP_SECTION, "overflow-hidden py-20")}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Ad Formats"
          title={
            <>
              High-Converting <span className="text-gradient">Ad Formats</span>
            </>
          }
          description="Five battle-tested formats engineered for conversion."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {formats.map((f, i) => (
            <Reveal
              key={f.name}
              delay={i * 0.08}
              className={cn("h-full", f.span)}
            >
              <TiltCard className="h-full">
                {/* Background image with heavy dark gradient overlay */}
                <img
                  src={f.image}
                  alt={f.name}
                  loading="lazy"
                  draggable={false}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent"
                />
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-60 blur-3xl",
                    f.glow
                  )}
                />

                <div className="relative z-10 flex min-h-[220px] h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 backdrop-blur">
                      <f.icon className={cn("h-5 w-5", f.accent)} />
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold backdrop-blur">
                      <span className="font-medium text-zinc-400">CR</span>
                      <span className={f.badgeColor}>{f.cr}</span>
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {f.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {f.description}
                    </p>
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
