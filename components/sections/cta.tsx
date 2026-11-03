"use client";

import { Mail, MessageCircle } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Sparkles } from "@/components/ui/sparkles";
import { GlowOrb } from "@/components/ui/glow-orb";

const ticker = [
  "Crypto",
  "iGaming",
  "Nutra",
  "Organic Traffic",
  "Direct Admins",
  "Lowest Commissions",
  "Worldwide Coverage",
  "300+ Exclusive Sites",
];

function TickerItem({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-8 text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
      <span>{text}</span>
      <span className="text-neon-cyan/60">✦</span>
    </span>
  );
}

export function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent px-6 py-16 text-center sm:px-16 sm:py-20">
            <GlowOrb
              className="inset-0 m-auto h-[320px] w-[560px]"
              color="bg-neon-violet/15"
              duration={11}
            />
            <Sparkles className="opacity-60" count={24} />

            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">
                Contact
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Ready for <span className="text-gradient">exclusive deals?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
                Tell us your niche, geo and volumes — our team will get back to
                you with the best placements and the lowest market commissions.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <MagneticButton>
                  <Button variant="glow" size="lg" asChild>
                    <a
                      href="https://t.me/your_username"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Chat on Telegram
                    </a>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="ghost" size="lg" asChild>
                    <a href="mailto:hello@crewpack.agency">
                      <Mail className="h-5 w-5" />
                      hello@crewpack.agency
                    </a>
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Marquee ticker */}
      <div className="mt-16">
        <Marquee
          speed={32}
          className="[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
          {ticker.map((t) => (
            <TickerItem key={t} text={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
