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
  stats: ProjectStat[];
}

export const projects: Project[] = [
  {
    category: "Crypto",
    title: "Exchange Launch",
    description:
      "High-intent traders and Web3 audiences across tier-1 and emerging markets.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=80",
    accent: "text-neon-cyan",
    glow: "bg-neon-cyan/25",
    stats: [
      { value: 2.4, suffix: "M", label: "Impressions / mo" },
      { value: 3.8, suffix: "%", label: "Avg. CTR" },
      { value: 40, suffix: "+", label: "Geos" },
    ],
  },
  {
    category: "iGaming",
    title: "Sportsbook Scale-Up",
    description:
      "Casino and sportsbook audiences that convert around the clock.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    accent: "text-neon-violet",
    glow: "bg-neon-violet/25",
    stats: [
      { value: 5.1, suffix: "M", label: "Impressions / mo" },
      { value: 4.2, suffix: "%", label: "Avg. CTR" },
      { value: 25, suffix: "+", label: "Geos" },
    ],
  },
  {
    category: "Nutra",
    title: "Direct-Response Nutra",
    description:
      "Health, beauty and wellness buyers ready for direct-response offers.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    accent: "text-neon-fuchsia",
    glow: "bg-neon-fuchsia/25",
    stats: [
      { value: 1.8, suffix: "M", label: "Impressions / mo" },
      { value: 2.9, suffix: "%", label: "Avg. CTR" },
      { value: 15, suffix: "+", label: "Geos" },
    ],
  },
];
