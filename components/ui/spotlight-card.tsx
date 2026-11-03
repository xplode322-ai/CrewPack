"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** RGBA color of the radial glow that follows the cursor. */
  spotColor?: string;
  spotSize?: number;
  /** Stagger delay for the reveal animation (seconds). */
  delay?: number;
}

/**
 * Glassmorphic card (`bg-white/5` + backdrop blur + 1px border) with a dynamic
 * radial-gradient glow that trails the pointer. Also self-reveals on scroll.
 */
export function SpotlightCard({
  children,
  className,
  spotColor = "rgba(34, 211, 238, 0.14)",
  spotSize = 360,
  delay = 0,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 150, damping: 25, mass: 0.5 });
  const y = useSpring(my, { stiffness: 150, damping: 25, mass: 0.5 });

  const background = useMotionTemplate`radial-gradient(${spotSize}px circle at ${x}px ${y}px, ${spotColor}, transparent 75%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-colors duration-500 hover:border-white/20",
        className
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
