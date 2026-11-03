"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
  color?: string;
  delay?: number;
  duration?: number;
}

/**
 * Soft, blurred neon orb that drifts on an infinite float loop.
 * Position it with `left-* / top-* / inset-0 m-auto` etc.
 */
export function GlowOrb({
  className,
  color = "bg-neon-cyan/20",
  delay = 0,
  duration = 9,
}: GlowOrbProps) {
  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-[90px]",
        color,
        className
      )}
      animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.06, 1] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
