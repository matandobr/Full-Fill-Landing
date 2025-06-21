import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/landing/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full-Fill - Questionnaires, RFPs, and RFIs, AI-Powered Answers",
  description: "Full-Fill helps sales engineers and presales teams respond to Technical questionnaires, RFPs and RFIs, 5x faster with AI-powered draft responses based on your existing content.",
  keywords: "Questionnaire automation, Customer Questionnaire, RFP response, RFI automation, technical questionnaire, AI-powered responses, sales engineering, presales, proposal automation, response management, bid management, AI sales tools",
  authors: [{ name: "Full-Fill" }],
  creator: "Full-Fill",
  publisher: "Full-Fill",
  applicationName: "Full-Fill",
  category: "Business Software",
  classification: "SaaS",
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
    locale: "en_US",
    url: "https://full-fill.ai",
    siteName: "Full-Fill",
    title: "Full-Fill - Questionnaires, RFPs, and RFIs, AI-Powered Answers",
    description: "Full-Fill helps sales engineers and presales teams respond to Technical questionnaires, RFPs and RFIs, 5x faster with AI-powered draft responses based on your existing content.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Full-Fill - AI-Powered Customer Questionnaire Response Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FullFillAI",
    creator: "@FullFillAI",
    title: "Full-Fill - Questionnaires, RFPs, and RFIs, AI-Powered Answers",
    description: "Full-Fill helps sales engineers and presales teams respond to Technical questionnaires, RFPs and RFIs, 5x faster with AI-powered draft responses based on your existing content.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://full-fill.ai",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      "msvalidate.01": "bing-verification-code",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#5E5ADB" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Full-Fill",
              "url": "https://full-fill.ai",
              "description": "AI-powered platform for responding to Customer Questionnaires, RFPs and RFIs, 5x faster",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31",
                "description": "Free trial available"
              },
              "provider": {
                "@type": "Organization",
                "name": "Full-Fill",
                "url": "https://full-fill.ai"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
        <CookieConsent />
      </body>
    </html>
  );
} 