"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  /** Seconds for one full loop. */
  speed?: number;
}

/**
 * Magic UI-style infinite marquee. Content is rendered twice with a trailing
 * `--gap` padding so `translateX(-50%)` loops seamlessly; pauses on hover.
 */
export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [--gap:1.5rem]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max shrink-0 items-center",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` } as CSSProperties}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className="flex shrink-0 items-center gap-[--gap] pr-[--gap]"
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
