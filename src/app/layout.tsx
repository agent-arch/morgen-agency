import type { Metadata } from "next";
import { DM_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "heymorgen.agency — Morgen begint vandaag",
  description:
    "AI-native marketing voor webshops. Meer omzet uit je ads, zonder gedoe. Vanaf €750/maand.",
  openGraph: {
    title: "heymorgen.agency — Morgen begint vandaag",
    description: "AI-native marketing voor webshops. Meer omzet uit je ads, zonder gedoe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${dmSans.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-warm-white text-charcoal font-body antialiased">{children}</body>
    </html>
  );
}
