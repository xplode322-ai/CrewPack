export interface ProjectStat {
  value: number;
  suffix: string;
  label: string;
}

export interface Project {
  category: string;
  title: string;
  description: string;
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
    category: "iGaming",
    title: "Sportsbook Scale-Up",
    description:
      "Casino and sportsbook audiences that convert around the clock — fuelled by high-stakes matchday moments. We leverage dynamic odds integration, real-time trigger events, and VIP retention strategies to maximize player LTV and scale first-time deposits.",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1600&q=80",
    accent: "text-neon-violet",
    glow: "bg-neon-violet/25",
    span: "md:col-span-2 md:row-span-2",
    imagePosition: "object-[center_70%]",
    overlayClassName: "from-[#09090b] via-[#09090b]/55 to-[#09090b]/80",
    large: true,
    stats: [
      { value: 100, suffix: "M+", label: "Impressions / mo" },
      { value: 4.2, suffix: "%", label: "Avg. CTR" },
      { value: 25, suffix: "+", label: "Geos" },
    ],
  },
  {
    category: "Crypto",
    title: "Exchange Launch",
    description:
      "High-intent traders and Web3 audiences across tier-1 and emerging markets.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=900&q=80",
    accent: "text-neon-cyan",
    glow: "bg-neon-cyan/25",
    span: "md:col-span-1 md:row-span-1",
    stats: [
      { value: 20, suffix: "M+", label: "Impressions / mo" },
      { value: 3.8, suffix: "%", label: "Avg. CTR" },
      { value: 40, suffix: "+", label: "Geos" },
    ],
  },
  {
    category: "Nutra",
    title: "Direct-Response Nutra",
    description:
      "Health, beauty and wellness buyers ready for direct-response offers.",
    image:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=900&q=80",
    accent: "text-neon-fuchsia",
    glow: "bg-neon-fuchsia/25",
    span: "md:col-span-1 md:row-span-1",
    imagePosition: "object-center",
    stats: [
      { value: 12, suffix: "M+", label: "Impressions / mo" },
      { value: 2.9, suffix: "%", label: "Avg. CTR" },
      { value: 15, suffix: "+", label: "Geos" },
    ],
  },
];
