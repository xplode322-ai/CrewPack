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
      className={cn("grid grid-cols-1 gap-4 md:grid-cols-3", className)}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  icon?: ReactNode;
  iconClassName?: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  spotColor?: string;
  delay?: number;
  /** Optional dark background image with a heavy gradient overlay. */
  image?: string;
  /** Multiple backdrop images split into equal vertical columns. */
  backgrounds?: string[];
}

/**
 * Standard bento cell: glass card + background image + icon + title +
 * description with an optional free-form `children` block pinned to the bottom.
 */
export function BentoCard({
  icon,
  iconClassName,
  title,
  description,
  children,
  className,
  spotColor,
  delay = 0,
  image,
  backgrounds,
}: BentoCardProps) {
  return (
    <SpotlightCard
      className={cn("p-6 sm:p-7", className)}
      spotColor={spotColor}
      delay={delay}
      image={image}
      backgrounds={backgrounds}
      imageClassName="opacity-40 mix-blend-multiply"
      overlayClassName="bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent"
    >
      <div className="flex h-full flex-col">
        {icon && (
          <div
            className={cn(
              "mb-4 grid h-12 w-12 place-items-center rounded-xl bg-white/5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105",
              iconClassName
            )}
          >
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
