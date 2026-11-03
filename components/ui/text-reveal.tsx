"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

interface TextRevealProps {
  /** Plain string that will be split word-by-word. */
  text: string;
  className?: string;
  wordClassName?: string;
  /** Exact words (case-sensitive) to render with the accent gradient. */
  accentWords?: string[];
  accentClassName?: string;
  /** Delay before the stagger begins (seconds). */
  delay?: number;
  /** Seconds between each word's reveal. */
  stagger?: number;
  duration?: number;
  once?: boolean;
}

/**
 * Masked, staggered word reveal — each word slides up out of an
 * `overflow-hidden` clip with a subtle rotation, driven by `whileInView`.
 */
export function TextReveal({
  text,
  className,
  wordClassName,
  accentWords = [],
  accentClassName = "text-gradient",
  delay = 0,
  stagger = 0.07,
  duration = 0.9,
  once = true,
}: TextRevealProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word: Variants = {
    hidden: { y: "110%", rotate: 4, opacity: 0 },
    visible: {
      y: "0%",
      rotate: 0,
      opacity: 1,
      transition: { duration, ease: EASE },
    },
  };

  return (
    <motion.span
      className={cn("flex flex-wrap gap-x-[0.28em]", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
    >
      <span className="sr-only">{text}</span>
      {words.map((w, i) => {
        const isAccent = accentWords.includes(w);
        return (
          <span
            key={`${w}-${i}`}
            aria-hidden="true"
            className="-mb-[0.12em] inline-flex overflow-hidden pb-[0.12em]"
          >
            <motion.span
              variants={word}
              className={cn(
                "inline-block will-change-transform",
                wordClassName,
                isAccent && accentClassName
              )}
            >
              {w}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
