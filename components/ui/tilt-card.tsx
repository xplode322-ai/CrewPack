"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Maximum tilt in degrees. */
  max?: number;
  /** Glare color that follows the cursor. */
  glare?: string;
}

/**
 * Aceternity-style 3D card hover. Tracks the pointer, tilts the card in 3D
 * perspective with spring physics, and casts a glare highlight.
 */
export function TiltCard({
  children,
  className,
  max = 10,
  glare = "rgba(255, 255, 255, 0.08)",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Normalized cursor position, -0.5..0.5 from the card center.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(my, [-0.5, 0.5], [max, -max]),
    { stiffness: 150, damping: 20 }
  );
  const rotateY = useSpring(
    useTransform(mx, [-0.5, 0.5], [-max, max]),
    { stiffness: 150, damping: 20 }
  );

  const glareX = useTransform(mx, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(my, [-0.5, 0.5], [0, 100]);
  const glareBackground = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, ${glare}, transparent 65%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className={cn("group h-full", className)} style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        {children}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: glareBackground }}
        />
      </motion.div>
    </div>
  );
}
