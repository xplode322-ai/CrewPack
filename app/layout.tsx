import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ScrollProvider } from "@/components/providers/scroll-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CrewPack Agency — Global Web Traffic Buying Agency",
  description:
    "Exclusive organic traffic direct from admins. Crypto, iGaming and Nutra. Worldwide coverage, lowest market commissions.",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body`}>
        <ScrollProvider>{children}</ScrollProvider>
        <div
          aria-hidden
          className="noise pointer-events-none fixed inset-0 z-[100] opacity-[0.035]"
        />
      </body>
    </html>
  );
}
