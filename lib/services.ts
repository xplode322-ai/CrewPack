import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Cpu,
  Dices,
  Globe2,
  Handshake,
} from "lucide-react";

export interface ServiceStat {
  value: number;
  suffix: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  /** Premium dark tech/abstract image used as the card backdrop. */
  image: string;
  icon: LucideIcon;
  /** Tailwind text color used for the icon and numeric accents. */
  accent: string;
  /** RGBA glow that follows the cursor inside the card. */
  spotColor: string;
  /** Optional grid span classes for the bento layout. */
  span?: string;
  stat?: ServiceStat;
  tags?: string[];
}

export const services: Service[] = [
  {
    id: "direct-admin-deals",
    title: "Direct Admin Deals",
    description:
      "No middlemen. No inflated margins. We handle all payments via local solutions for admin convenience (USDT, bank transfers, local cards), assist with ad code installation, and negotiate exclusive cooperation terms (prepayment, or post-payment based on advertiser statistics).",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    icon: Handshake,
    accent: "text-neon-cyan",
    spotColor: "rgba(34, 211, 238, 0.14)",
    span: "md:col-span-2 md:row-span-2",
    stat: {
      value: 2500,
      suffix: "+",
      label: "exclusive sites negotiated directly with admins",
    },
    tags: [
      "Sports News",
      "Global News",
      "Crypto Sites",
      "Adult",
      "File Sharing",
      "Forums",
      "Rating Sites",
      "Linkbuilding",
      "Social Media",
      "TikTok Clippers",
    ],
  },
  {
    id: "verticals",
    title: "High-Intent Verticals",
    description: "Three niches, one standard.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80",
    icon: Dices,
    accent: "text-neon-violet",
    spotColor: "rgba(168, 85, 247, 0.16)",
    tags: ["Crypto", "iGaming", "Nutra"],
  },
  {
    id: "global-coverage",
    title: "Global Coverage",
    description: "Worldwide reach, localized execution.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    icon: Globe2,
    accent: "text-neon-blue",
    spotColor: "rgba(59, 130, 246, 0.16)",
    stat: { value: 100, suffix: "+", label: "countries covered" },
  },
  {
    id: "scraping",
    title: "Proprietary Scraping",
    description: "Custom-built scrapers find the exact sites you need, anywhere.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    icon: Cpu,
    accent: "text-neon-cyan",
    spotColor: "rgba(34, 211, 238, 0.16)",
  },
  {
    id: "pricing",
    title: "Flexible Pricing",
    description: "Pick the model that fits your goals.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    icon: BadgeDollarSign,
    accent: "text-neon-fuchsia",
    spotColor: "rgba(217, 70, 239, 0.14)",
    span: "md:col-span-2",
    tags: ["CPM", "CPC", "Flat fee"],
  },
];
