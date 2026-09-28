import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "Web Design Studio | Websites & Landing Pages | Designs Haven",
description:
  "Designs Haven is a web design studio creating modern websites, high-converting landing pages, and strategic website redesigns for brands and service businesses.",

keywords: [
 "web design studio",
  "website design",
  "website designer",
  "professional web design",
  "landing page design",
  "website redesign",
  "responsive web design",
  "business website design",
  "service business web design",
  "Designs Haven",
],
metadataBase: new URL("https://designs-haven-portfolio.vercel.app"),

alternates: {
  canonical: "/",
},

robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
  },
},
  openGraph: {
  title: "Web Design Studio | Websites & Landing Pages | Designs Haven",
description:
  "Modern websites, high-converting landing pages, and strategic website redesigns for brands and service businesses.",
    images: [
      {
        url: "/designs-haven-hero.web",
        width: 1200,
        height: 630,
        alt: "Designs Haven Web Design Studio",
      },
    ],
    type: "website",
  },
twitter: {
  card: "summary_large_image",
  title: "Web Design Studio | Websites & Landing Pages | Designs Haven",
  description:
    "Modern websites, high-converting landing pages, and strategic website redesigns for brands and service businesses.",
  images: ["/designs-haven-hero.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <body className="min-h-full flex flex-col">
  {children}
  <Analytics />
</body>
    </html>
  );
}
