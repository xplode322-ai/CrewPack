"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { useScrollController } from "@/components/providers/scroll-provider";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Sparkles } from "@/components/ui/sparkles";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { InfluencerMarketing } from "@/components/sections/influencer-marketing";
import { Projects } from "@/components/sections/projects";
import { CTA } from "@/components/sections/cta";

/** Full-page transition curve (fast start, soft landing). */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const DURATION = 1;
/** Ignore wheel input for this long after a transition to absorb trackpad inertia. */
const COOLDOWN = 300;
/** Minimum wheel delta / swipe distance to register as a deliberate scroll. */
const WHEEL_THRESHOLD = 6;
const SWIPE_THRESHOLD = 60;

export default function Home() {
  const wrapperRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const animatingRef = useRef(false);
  const lastNavRef = useRef(0);
  const { register, setActiveIndex } = useScrollController();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const sections = Array.from(
      content.querySelectorAll<HTMLElement>("section")
    );
    const total = sections.length;

    let controls: ReturnType<typeof animate> | null = null;

    const clamp = (v: number) =>
      Math.max(0, Math.min(v, wrapper.scrollHeight - wrapper.clientHeight));

    // Offset of a section relative to the content (scroll-invariant).
    const offsetOf = (i: number) => {
      const el = sections[i];
      if (!el) return 0;
      return el.getBoundingClientRect().top - content.getBoundingClientRect().top;
    };

    // Strict 1:1 transition to a specific section index.
    const goTo = (index: number) => {
      const next = Math.max(0, Math.min(index, total - 1));
      if (next === indexRef.current) return;
      indexRef.current = next;
      setActiveIndex(next);
      animatingRef.current = true;

      const from = wrapper.scrollTop;
      const to = clamp(offsetOf(next));
      controls?.stop();
      controls = animate(from, to, {
        duration: DURATION,
        ease: EASE,
        onUpdate: (v) => {
          wrapper.scrollTop = v;
        },
        onComplete: () => {
          animatingRef.current = false;
          lastNavRef.current = performance.now();
        },
      });
    };

    // Public scroll API exposed to nav/footer via context.
    const scrollTo = (target: string | number) => {
      if (typeof target === "number") {
        const from = wrapper.scrollTop;
        animatingRef.current = true;
        controls?.stop();
        controls = animate(from, clamp(target), {
          duration: DURATION,
          ease: EASE,
          onUpdate: (v) => {
            wrapper.scrollTop = v;
          },
          onComplete: () => {
            animatingRef.current = false;
            lastNavRef.current = performance.now();
          },
        });
        return;
      }
      const id = target.replace("#", "");
      const idx = sections.findIndex((s) => s.id === id);
      if (idx !== -1) goTo(idx);
    };

    register({ scrollTo });

    // Wheel — strict next/previous block (desktop).
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (animatingRef.current) return;
      if (performance.now() - lastNavRef.current < COOLDOWN) return;
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;
      lastNavRef.current = performance.now();
      goTo(indexRef.current + (e.deltaY > 0 ? 1 : -1));
    };

    // Touch — swipe up/down (mobile).
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (animatingRef.current) return;
      if (performance.now() - lastNavRef.current < COOLDOWN) return;
      const delta = startY - e.changedTouches[0].clientY;
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;
      lastNavRef.current = performance.now();
      goTo(indexRef.current + (delta > 0 ? 1 : -1));
    };

    // Keyboard — arrows / page keys / home / end.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        goTo(indexRef.current + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goTo(indexRef.current - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(total - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKey);

    return () => {
      controls?.stop();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
      register(null);
    };
  }, [register, setActiveIndex]);

  return (
    <>
      <Navbar />
      {/* Global animated tech background — fixed behind all snap sections. */}
      <div aria-hidden className="fixed inset-0 -z-10 bg-[#09090b]">
        <div className="bg-grid mask-radial-faded absolute inset-0" />
        <DotPattern className="text-white/[0.07]" fade />
        <Sparkles className="opacity-80" count={36} />
      </div>
      <main ref={wrapperRef} className="h-screen overflow-hidden overscroll-none">
        <div ref={contentRef}>
          <Hero />
          <Services />
          <InfluencerMarketing />
          <Projects />
          <CTA />
        </div>
      </main>
    </>
  );
}
