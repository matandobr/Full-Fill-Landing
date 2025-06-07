import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/landing/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full-Fill - Stop Dreading RFPs. Start Winning Them.",
  description: "Full-Fill helps sales engineers and presales teams respond to RFPs, RFIs, and technical questionnaires 5x faster with AI-powered draft responses based on your existing content.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <CookieConsent />
      </body>
    </html>
  );
} 