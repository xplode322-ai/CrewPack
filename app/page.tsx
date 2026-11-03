"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useSetLenis } from "@/components/providers/LenisProvider";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { InfluencerMarketing } from "@/components/sections/influencer-marketing";
import { Projects } from "@/components/sections/projects";
import { CTA } from "@/components/sections/cta";

const easeOutExpo = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export default function Home() {
  const wrapperRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const setLenis = useSetLenis();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const lenis = new Lenis({
      wrapper,
      content,
      duration: 1.15,
      easing: easeOutExpo,
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    setLenis(lenis);

    // ------------------------------------------------------------------
    // Self-contained scroll snap (safe with a custom scroll wrapper).
    //
    // The stock `lenis/snap` plugin and CSS `scroll-snap-type` both assume
    // the window is the scroll container, which conflicts with this custom
    // `h-screen overflow-y-scroll` wrapper and freezes the page. Instead we
    // debounce the end of any scroll and animate to the nearest section.
    // ------------------------------------------------------------------
    let snapTimer: ReturnType<typeof setTimeout> | null = null;

    const getSnapPoints = () => {
      const wrapperTop = wrapper.getBoundingClientRect().top;
      const currentScroll = wrapper.scrollTop;
      return Array.from(content.querySelectorAll<HTMLElement>("section"))
        .map((section) =>
          Math.round(
            section.getBoundingClientRect().top - wrapperTop + currentScroll
          )
        )
        .sort((a, b) => a - b);
    };

    const snapToNearest = () => {
      const points = getSnapPoints();
      if (points.length === 0) return;
      const current = lenis.scroll;
      const nearest = points.reduce((best, p) =>
        Math.abs(p - current) < Math.abs(best - current) ? p : best
      );
      if (Math.abs(nearest - current) < 2) return;
      lenis.scrollTo(nearest, { duration: 1, easing: easeOutExpo });
    };

    const scheduleSnap = () => {
      if (snapTimer) clearTimeout(snapTimer);
      snapTimer = setTimeout(snapToNearest, 140);
    };

    lenis.on("scroll", scheduleSnap);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      if (snapTimer) clearTimeout(snapTimer);
      lenis.off("scroll", scheduleSnap);
      lenis.destroy();
      setLenis(null);
    };
  }, [setLenis]);

  return (
    <>
      <Navbar />
      <main
        ref={wrapperRef}
        className="h-screen overflow-y-scroll"
      >
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
