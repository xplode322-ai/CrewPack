import type { Variants } from "framer-motion";

/**
 * Signature "expressive" cubic-bezier used across the whole site.
 * Slow start, fast middle, gentle landing — the Awwwards curve.
 */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};
