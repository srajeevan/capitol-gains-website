import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capitol Gains — Congress Stock Trade Tracker",
  description:
    "Track every stock trade made by members of Congress. AI-powered notable trade detection, lobbying context, and real-time alerts. Available on the App Store.",
  keywords: [
    "congress",
    "stock trades",
    "STOCK Act",
    "politician trading",
    "government transparency",
    "congressional disclosure",
    "senate trades",
    "house trades",
  ],
  openGraph: {
    title: "Capitol Gains — Congress Stock Trade Tracker",
    description:
      "Track every stock trade made by members of Congress. AI-powered insights, lobbying context, and real-time alerts.",
    type: "website",
    siteName: "Capitol Gains",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capitol Gains — Congress Stock Trade Tracker",
    description:
      "Track every stock trade made by members of Congress. AI-powered insights, lobbying context, and real-time alerts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
