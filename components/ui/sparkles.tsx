"use client";

import { useId, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Sparkle {
  id: number;
  x: number; // percent 0–100
  y: number; // percent 0–100
  size: number; // px
  color: string;
  duration: number;
  delay: number;
}

interface SparklesProps {
  className?: string;
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  speed?: number;
}

const DEFAULT_COLORS = ["#22d3ee", "#818cf8", "#a855f7", "#e879f9", "#ffffff"];

/**
 * Aceternity-style "Sparkles" — a field of glowing particles that twinkle
 * in and out on randomized, looping Framer Motion timelines.
 */
export function Sparkles({
  className,
  count = 40,
  colors = DEFAULT_COLORS,
  minSize = 1.5,
  maxSize = 3.5,
  speed = 1,
}: SparklesProps) {
  const id = useId();

  const sparkles = useMemo<Sparkle[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: minSize + Math.random() * (maxSize - minSize),
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: 1.5 + Math.random() * 3,
        delay: Math.random() * 3,
      })),
    [count, colors, minSize, maxSize]
  );

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {sparkles.map((s) => (
        <motion.span
          key={`${id}-${s.id}`}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
          }}
          transition={{
            duration: s.duration / speed,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
