"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Translate (px) when the element enters the viewport. */
  from?: number;
  /** Translate (px) when the element exits the viewport. */
  to?: number;
}

/**
 * Scroll-linked vertical parallax. Tracks its own element via `useScroll`
 * and maps scroll progress to a translate range.
 */
export function Parallax({
  children,
  className,
  from = 60,
  to = -60,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
