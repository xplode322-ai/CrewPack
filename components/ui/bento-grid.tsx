"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "@/components/ui/spotlight-card";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

/**
 * Magic UI-style bento grid container. Cards control their own spans via
 * `md:col-span-*` / `md:row-span-*` classes.
 */
export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  icon?: ReactNode;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  spotColor?: string;
  delay?: number;
}

/**
 * Standard bento cell: glass card + icon + title + description with an
 * optional free-form `children` block pinned to the bottom.
 */
export function BentoCard({
  icon,
  title,
  description,
  children,
  className,
  spotColor,
  delay = 0,
}: BentoCardProps) {
  return (
    <SpotlightCard
      className={cn("p-6 sm:p-7", className)}
      spotColor={spotColor}
      delay={delay}
    >
      <div className="flex h-full flex-col">
        {icon && (
          <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-white/5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
            {icon}
          </div>
        )}
        <h3 className="font-display text-xl font-bold text-white">{title}</h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {description}
          </p>
        )}
        {children}
      </div>
    </SpotlightCard>
  );
}
