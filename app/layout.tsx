import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const _dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://lawmarketfirm.com"),
  title: {
    default: "LAW & MARKET FIRM",
    template: "%s | LAW & MARKET FIRM",
  },
  applicationName: "LAW & MARKET FIRM",
  description:
    "Trusted Los Angeles legal team for personal injury, workers' compensation, and disability claims. Free consultations. Zealous, professional representation.",
  keywords: [
    "Law & Market Firm",
    "Los Angeles lawyers",
    "personal injury attorney",
    "workers' compensation",
    "disability claims",
    "free consultation",
    "trusted law firm",
    "professional legal services",
  ],
  authors: [{ name: "LAW & MARKET FIRM" }],
  creator: "LAW & MARKET FIRM",
  publisher: "LAW & MARKET FIRM",
  category: "Law",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://lawmarketfirm.com/",
    title: "LAW & MARKET FIRM",
    siteName: "LAW & MARKET FIRM",
    description:
      "Trusted Los Angeles legal team for personal injury, workers' compensation, and disability claims.",
    images: [
      {
        url: "/elegant-modern-law-office-interior-with-floor-to-c.jpg",
        width: 1200,
        height: 630,
        alt: "LAW & MARKET FIRM Office",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAW & MARKET FIRM",
    description:
      "Los Angeles personal injury & workers' compensation lawyers offering free consultations.",
    images: [
      "/elegant-modern-law-office-interior-with-floor-to-c.jpg",
    ],
    creator: "@lawmarketfirm",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "LAW & MARKET FIRM",
              url: "https://lawmarketfirm.com/",
              logo: "/icon.svg",
              image: "/elegant-modern-law-office-interior-with-floor-to-c.jpg",
              email: "law@cotraders.cfd",
              telephone: "+1 929 598 0910",
              address: {
                "@type": "PostalAddress",
                streetAddress: "777 South Figueroa Street",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                addressCountry: "US",
              },
              openingHours: "Mo-Fr 09:00-18:00",
              areaServed: "Los Angeles",
              sameAs: [],
            }),
          }}
        />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
