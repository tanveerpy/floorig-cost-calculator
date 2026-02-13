import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flooringestimators.com'),
  title: {
    template: "%s | Professional Flooring Estimates",
    default: "Professional Flooring Cost Calculator | 2026 Data-Driven Price Index",
  },
  description: "Get accurate, market-aligned estimates for laminate, hardwood, vinyl, and tile flooring. 2026 data-driven budgeting for homeowners and contractors with E-E-A-T verified insights.",
  keywords: ["flooring cost calculator", "hardwood floor cost calculator", "vinyl plank installation cost", "laminate flooring prices 2026", "flooring labor rates", "epoxy garage floor cost"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Professional Flooring Cost Calculator | 2026 Index",
    description: "Accurate, real-time flooring estimates based on 2026 market data.",
    url: 'https://flooringestimators.com',
    siteName: 'FloorCalc 2026',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased bg-background text-text min-h-screen selection:bg-primary/30 selection:text-primary-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "FloorCalc 2026",
              "url": "https://flooringcosts.ai",
              "author": {
                "@type": "Person",
                "name": "Marcus Sterling",
                "jobTitle": "Lead Flooring Data Analyst",
                "description": "Expert in flooring logistics and market data modeling with 15+ years experience."
              },
              "publisher": {
                "@type": "Organization",
                "name": "FloorCalc 2026 Index",
                "logo": "https://flooringcosts.ai/logo.png"
              }
            })
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
