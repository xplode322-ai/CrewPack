"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
  className?: string;
  /** Horizontal spacing between dots (px). */
  width?: number;
  /** Vertical spacing between dots (px). */
  height?: number;
  /** Dot radius (px). */
  radius?: number;
  dotColor?: string;
  /** Fade the dot field toward the edges with a radial gradient mask. */
  fade?: boolean;
}

/**
 * Magic UI-style dot pattern rendered as an SVG `<pattern>` with an optional
 * radial fade mask so it dissolves gracefully into the background.
 */
export function DotPattern({
  className,
  width = 20,
  height = 20,
  radius = 1,
  dotColor = "currentColor",
  fade = true,
}: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={width / 2} cy={height / 2} r={radius} fill={dotColor} />
        </pattern>
        {fade && (
          <radialGradient id={`${id}-grad`} cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="55%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        )}
      </defs>

      {fade ? (
        <>
          <mask id={`${id}-mask`}>
            <rect width="100%" height="100%" fill={`url(#${id}-grad)`} />
          </mask>
          <rect
            width="100%"
            height="100%"
            fill={`url(#${id})`}
            mask={`url(#${id}-mask)`}
          />
        </>
      ) : (
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      )}
    </svg>
  );
}
