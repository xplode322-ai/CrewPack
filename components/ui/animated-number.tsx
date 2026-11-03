"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { EASE } from "@/lib/motion";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  className?: string;
}

/**
 * Counts from 0 to `value` when scrolled into view. Non-integer targets are
 * rendered with one decimal place.
 */
export function AnimatedNumber({
  value,
  suffix = "",
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const decimals = Number.isInteger(value) ? 0 : 1;
  const display = useTransform(count, (latest) =>
    `${latest.toFixed(decimals)}${suffix}`
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.6, ease: EASE });
    return () => controls.stop();
  }, [inView, value, count]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
