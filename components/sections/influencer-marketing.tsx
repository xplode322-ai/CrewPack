"use client";

import {
  Gamepad2,
  Music2,
  Send,
  Twitch,
  Twitter,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SNAP_SECTION } from "@/lib/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Sparkles } from "@/components/ui/sparkles";
import { GlowOrb } from "@/components/ui/glow-orb";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { useLanguage } from "@/context/LanguageContext";

const platforms = [
  { name: "Twitch", icon: Twitch, color: "text-violet-400", glow: "group-hover:border-violet-400/50 group-hover:shadow-[0_0_40px_-12px_rgba(167,139,250,0.5)]" },
  { name: "Kick", icon: Gamepad2, color: "text-emerald-400", glow: "group-hover:border-emerald-400/50 group-hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.5)]" },
  { name: "Twitter / X", icon: Twitter, color: "text-sky-400", glow: "group-hover:border-sky-400/50 group-hover:shadow-[0_0_40px_-12px_rgba(56,189,248,0.5)]" },
  { name: "Telegram", icon: Send, color: "text-cyan-400", glow: "group-hover:border-cyan-400/50 group-hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.5)]" },
  { name: "TikTok", icon: Music2, color: "text-fuchsia-400", glow: "group-hover:border-fuchsia-400/50 group-hover:shadow-[0_0_40px_-12px_rgba(232,121,249,0.5)]" },
];

const microStats = [
  { icon: TrendingUp, value: 3.5, suffix: "×", accent: "text-neon-cyan" },
  { icon: Zap, value: 48, suffix: "h-72h", accent: "text-neon-violet" },
  { icon: Users, value: 100, suffix: "%", accent: "text-neon-fuchsia" },
];

export function InfluencerMarketing() {
  const { t } = useLanguage();

  return (
    <section
      id="influencers"
      className={cn(SNAP_SECTION, "overflow-hidden py-20")}
    >
      {/* Ambient network glow */}
      <GlowOrb
        className="inset-0 m-auto h-[420px] w-[720px]"
        color="bg-neon-violet/15"
        duration={12}
      />
      <Sparkles className="opacity-50" count={28} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow={t.influencers.eyebrow}
          title={
            <>
              {t.influencers.title.line1}{" "}
              <span className="text-gradient">{t.influencers.title.accent}</span>
            </>
          }
          description={t.influencers.description}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          {/* Metrics */}
          <Reveal className="text-center lg:text-left">
            <div className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
              <AnimatedNumber value={20} suffix="K" />
              <span className="mx-2 text-slate-500">–</span>
              <AnimatedNumber value={70} suffix="K" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              {t.influencers.membersLine}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {microStats.map((m, i) => (
                <Reveal key={t.influencers.microStats[i]} delay={i * 0.07}>
                  <div className="group flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                    <m.icon
                      className={cn(
                        "mx-auto h-5 w-5 transition-transform duration-500 group-hover:scale-110",
                        m.accent
                      )}
                    />
                    <div className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                      <AnimatedNumber value={m.value} />
                      <span className={m.accent}>{m.suffix}</span>
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                      {t.influencers.microStats[i]}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Platform grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {platforms.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.07}>
                <div
                  className={cn(
                    "group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition-all duration-500 hover:-translate-y-1",
                    p.glow
                  )}
                >
                  <p.icon
                    className={cn(
                      "h-8 w-8 transition-transform duration-500 group-hover:scale-110",
                      p.color
                    )}
                  />
                  <span className="text-sm font-medium text-slate-200">
                    {p.name}
                  </span>
                </div>
              </Reveal>
            ))}

            {/* Filler node to complete the 3x2 grid */}
            <Reveal delay={platforms.length * 0.07} className="hidden sm:block">
              <div className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-6 text-center text-slate-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider">
                  {t.influencers.more}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
