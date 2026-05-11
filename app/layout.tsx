import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NicheBoost — Reverse-Engineer Viral Content",
  description: "Paste any TikTok or YouTube URL and get a full breakdown of exactly what made their content go viral. Trending audio, caption formulas, hashtag strategy, optimal posting time, and engagement prediction.",
  keywords: ["viral content analyzer", "TikTok analytics", "YouTube growth", "content strategy", "trending audio", "hashtag strategy"],
  openGraph: {
    title: "NicheBoost — Reverse-Engineer Viral Content",
    description: "Paste any TikTok or YouTube URL and get a full breakdown of exactly what made their content go viral.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}