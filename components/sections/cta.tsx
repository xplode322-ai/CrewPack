"use client";

import { Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SNAP_SECTION } from "@/lib/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Sparkles } from "@/components/ui/sparkles";
import { GlowOrb } from "@/components/ui/glow-orb";
import { Footer } from "@/components/sections/footer";

export function CTA() {
  return (
    <section id="contact" className={cn(SNAP_SECTION, "overflow-hidden")}>
      <div className="flex w-full flex-1 flex-col items-center justify-center px-5 py-24 sm:px-8">
        <Reveal className="w-full max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent px-6 py-14 text-center sm:px-16 sm:py-16">
            <GlowOrb
              className="inset-0 m-auto h-[300px] w-[520px]"
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
                      href="https://t.me/AlexRank"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5" />
                      @AlexRank
                    </a>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="ghost" size="lg" asChild>
                    <a href="mailto:ceo@crewpack.agency">
                      <Mail className="h-5 w-5" />
                      ceo@crewpack.agency
                    </a>
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Footer />
    </section>
  );
}
