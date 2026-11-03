import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Cpu,
  Dices,
  FileText,
  Globe2,
  Handshake,
  Megaphone,
  Mic,
  Monitor,
  MonitorPlay,
  Share2,
} from "lucide-react";

export interface ServiceStat {
  value: number;
  suffix: string;
  label: string;
}

/** A single ad format with its realistic conversion-rate benchmark. */
export interface AdFormat {
  name: string;
  description: string;
  cr: string;
  icon: LucideIcon;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  /** Premium dark tech/abstract image used as the card backdrop. */
  image?: string;
  /** Multiple backdrop images split into equal vertical columns. */
  backgrounds?: string[];
  icon: LucideIcon;
  /** Tailwind text color used for the icon and numeric accents. */
  accent: string;
  /** RGBA glow that follows the cursor inside the card. */
  spotColor: string;
  /** Optional grid span classes for the bento layout. */
  span?: string;
  stat?: ServiceStat;
  tags?: string[];
  /** Detailed list of ad formats with conversion-rate benchmarks. */
  formats?: AdFormat[];
}

export const services: Service[] = [
  {
    id: "direct-admin-deals",
    title: "Direct Admin Deals",
    description:
      "No middlemen. No inflated margins. We handle all payments via local solutions for admin convenience (USDT, bank transfers, local cards), assist with ad code installation, and negotiate exclusive cooperation terms (prepayment, or post-payment based on advertiser statistics). Our team operates 24/7, always online to onboard new admins and advertisers seamlessly.",
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
    description: "Three niches, one standard: Crypto, iGaming, Nutra.",
    backgrounds: [
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=600&q=70",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=70",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=70",
    ],
    icon: Dices,
    accent: "text-neon-violet",
    spotColor: "rgba(168, 85, 247, 0.16)",
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
    description:
      "We operate exclusively on CPM, CPC, and Flat Fee models. While many admins require prepayment, we negotiate exceptions for post-payment based on advertiser statistics.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    icon: BadgeDollarSign,
    accent: "text-neon-fuchsia",
    spotColor: "rgba(217, 70, 239, 0.14)",
    span: "md:col-span-2",
  },
  {
    id: "ad-formats",
    title: "High-Converting Ad Formats",
    description:
      "Five battle-tested formats engineered for conversion — each with a realistic CR benchmark.",
    icon: Megaphone,
    accent: "text-neon-cyan",
    spotColor: "rgba(34, 211, 238, 0.14)",
    span: "md:col-span-3",
    formats: [
      {
        name: "Display & Site Branding",
        description:
          "Premium banners and full-site branding for maximum visibility.",
        cr: "1-4%",
        icon: Monitor,
      },
      {
        name: "Interactive & Video",
        description:
          "Persistent Catfish/Stickers and captive in-player video ads (Pre-roll/Pause-roll).",
        cr: "3-7%",
        icon: MonitorPlay,
      },
      {
        name: "Native PR & SEO",
        description:
          "Custom articles, deep-dive reviews, and linkbuilding on trusted WebSites.",
        cr: "8-15%",
        icon: FileText,
      },
      {
        name: "Viral Social",
        description: "Massive top-of-funnel reach via TikTok Clippers.",
        cr: "2-5%",
        icon: Share2,
      },
      {
        name: "KOL & Streamers",
        description:
          "Direct endorsements and ambassadorships across Twitch, Kick, Telegram, X, and TikTok.",
        cr: "10-25%",
        icon: Mic,
      },
    ],
  },
];
