import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Designs Haven | Web Design Studio",
  description:
    "Designs Haven is an independent web design studio creating modern websites, landing pages, and website redesigns for brands and businesses.",

keywords: [
  "web designer",
  "website designer",
  "web designer near me",
  "website designer near me",
  "web designer in my location",
  "professional web designer",
  "web design services",
  "website redesign",
  "landing page design",
  "web designer USA",
  "website designer USA",
  "web design services USA",
  "web designer UK",
  "website designer UK",
  "web design services UK",
  "Designs Haven",
],

  openGraph: {
    title: "Designs Haven | Web Design Studio",
    description:
      "Modern websites, landing pages, and website redesigns built to help brands show up better online.",
    images: [
      {
        url: "/designs-haven-hero.png",
        width: 1200,
        height: 630,
        alt: "Designs Haven Web Design Studio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Designs Haven | Web Design Studio",
    description:
      "Modern websites, landing pages, and website redesigns built to help brands show up better online.",
    images: ["/designs-haven-hero.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
