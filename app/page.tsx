"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Snap from "lenis/snap";
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

    const snap = new Snap(lenis, {
      type: "mandatory",
      duration: 1.1,
      easing: easeOutExpo,
    });

    const sections = Array.from(content.querySelectorAll<HTMLElement>("section"));
    snap.addElements(sections);

    setLenis(lenis);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      snap.destroy();
      lenis.destroy();
      setLenis(null);
    };
  }, [setLenis]);

  return (
    <>
      <Navbar />
      <main
        ref={wrapperRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
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
