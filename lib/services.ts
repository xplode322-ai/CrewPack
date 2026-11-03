import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Cpu,
  Dices,
  Globe2,
  Handshake,
} from "lucide-react";

/**
 * Presentation metadata for the Services bento grid.
 *
 * All translatable copy (title, description, stat label, tags) lives in
 * `lib/dictionaries.ts` and is resolved at render time via `useLanguage()`.
 * This file only holds layout/visual concerns: icons, accents, spot colors,
 * spans and backdrop images. The `id` on each entry is the key used to look up
 * its localized copy.
 */

export interface ServiceStat {
  value: number;
  suffix: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  /** Tailwind text color used for the icon and numeric accents. */
  accent: string;
  /** RGBA glow that follows the cursor inside the card. */
  spotColor: string;
  /** Optional grid span classes for the bento layout. */
  span?: string;
  /** Premium dark tech/abstract image used as the card backdrop. */
  image?: string;
  /** Multiple backdrop images split into equal vertical columns. */
  backgrounds?: string[];
  stat?: ServiceStat;
}

export const services: Service[] = [
  {
    id: "direct-admin-deals",
    icon: Handshake,
    accent: "text-neon-cyan",
    spotColor: "rgba(34, 211, 238, 0.14)",
    span: "md:col-span-2 md:row-span-2",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    stat: { value: 2500, suffix: "+" },
  },
  {
    id: "verticals",
    icon: Dices,
    accent: "text-neon-violet",
    spotColor: "rgba(168, 85, 247, 0.16)",
    backgrounds: [
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=600&q=70",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=70",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=70",
    ],
  },
  {
    id: "global-coverage",
    icon: Globe2,
    accent: "text-neon-blue",
    spotColor: "rgba(59, 130, 246, 0.16)",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    stat: { value: 100, suffix: "+" },
  },
  {
    id: "scraping",
    icon: Cpu,
    accent: "text-neon-cyan",
    spotColor: "rgba(34, 211, 238, 0.16)",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "pricing",
    icon: BadgeDollarSign,
    accent: "text-neon-fuchsia",
    spotColor: "rgba(217, 70, 239, 0.14)",
    span: "md:col-span-2",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
  },
];
