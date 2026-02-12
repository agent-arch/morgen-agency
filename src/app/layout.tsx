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
  metadataBase: new URL('https://heymorgen.agency'),
  title: {
    default: "Morgen — AI-native marketing voor webshops",
    template: "%s | Morgen",
  },
  description:
    "AI-native marketing voor e-commerce. Meer omzet uit je ads, zonder gedoe. Meta, Google & TikTok Ads beheer vanaf €750/maand. Resultaat binnen 14 dagen.",
  keywords: [
    "marketing bureau",
    "e-commerce marketing",
    "webshop marketing",
    "Google Ads",
    "Meta Ads",
    "Facebook Ads",
    "TikTok Ads",
    "AI marketing",
    "performance marketing",
    "Nederland",
  ],
  authors: [{ name: "Morgen", url: "https://heymorgen.agency" }],
  creator: "Morgen",
  publisher: "Morgen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://heymorgen.agency",
    siteName: "Morgen",
    title: "Morgen — AI-native marketing voor webshops",
    description: "AI-native marketing voor e-commerce. Meer omzet uit je ads, zonder gedoe. Vanaf €750/maand.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Morgen - AI-native marketing voor webshops",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morgen — AI-native marketing voor webshops",
    description: "AI-native marketing voor e-commerce. Meer omzet uit je ads, zonder gedoe.",
    images: ["/og-image.png"],
  },
  verification: {
    // google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://heymorgen.agency",
  },
  category: "marketing",
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Morgen',
  alternateName: 'heymorgen.agency',
  url: 'https://heymorgen.agency',
  logo: 'https://heymorgen.agency/icon.svg',
  description: 'AI-native marketing voor e-commerce webshops. Meta, Google & TikTok Ads beheer.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NL',
  },
  priceRange: '€750 - €1750',
  serviceType: ['Digital Marketing', 'Performance Marketing', 'E-commerce Marketing'],
  areaServed: {
    '@type': 'Country',
    name: 'Netherlands',
  },
  sameAs: [],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: 750,
    highPrice: 1750,
    offerCount: 3,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${dmSans.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D9488" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-warm-white text-charcoal font-body antialiased">{children}</body>
    </html>
  );
}
