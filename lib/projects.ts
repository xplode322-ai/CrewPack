/**
 * Presentation metadata for the Projects (Verticals & Results) grid.
 *
 * All translatable copy (category, title, description, stat labels) lives in
 * `lib/dictionaries.ts` and is resolved at render time via `useLanguage()`.
 * This file only holds visual/layout concerns. The `id` on each entry is the
 * key used to look up its localized copy.
 */

export interface ProjectStat {
  value: number;
  suffix: string;
}

export interface Project {
  id: string;
  /** Premium dark tech/abstract image used as the card backdrop. */
  image: string;
  /** Tailwind text color for accents. */
  accent: string;
  /** Tailwind background color for the ambient glow. */
  glow: string;
  /** Grid placement classes for the asymmetrical bento layout. */
  span: string;
  /** Tailwind `object-position` classes to focus the image (e.g. `object-[center_70%]`). */
  imagePosition?: string;
  /** Tailwind gradient stops for the dark overlay (stronger at top for readability). */
  overlayClassName?: string;
  /** Marks the large feature card for scaled typography. */
  large?: boolean;
  stats: ProjectStat[];
}

export const projects: Project[] = [
  {
    id: "sportsbook",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1600&q=80",
    accent: "text-neon-violet",
    glow: "bg-neon-violet/25",
    span: "md:col-span-2 md:row-span-2",
    imagePosition: "object-[center_70%]",
    overlayClassName: "from-[#09090b] via-[#09090b]/55 to-[#09090b]/80",
    large: true,
    stats: [
      { value: 100, suffix: "M+" },
      { value: 4.2, suffix: "%" },
      { value: 25, suffix: "+" },
    ],
  },
  {
    id: "exchange",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=900&q=80",
    accent: "text-neon-cyan",
    glow: "bg-neon-cyan/25",
    span: "md:col-span-1 md:row-span-1",
    stats: [
      { value: 20, suffix: "M+" },
      { value: 3.8, suffix: "%" },
      { value: 40, suffix: "+" },
    ],
  },
  {
    id: "nutra",
    image:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=900&q=80",
    accent: "text-neon-fuchsia",
    glow: "bg-neon-fuchsia/25",
    span: "md:col-span-1 md:row-span-1",
    imagePosition: "object-center",
    stats: [
      { value: 12, suffix: "M+" },
      { value: 2.9, suffix: "%" },
      { value: 15, suffix: "+" },
    ],
  },
];
