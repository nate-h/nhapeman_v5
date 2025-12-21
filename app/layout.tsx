import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import ParallaxSpace from "@/components/space/ParallaxSpace";
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
  title: "Nathanial Hapeman Portfolio",
  description: "Portfolio of Nathanial Hapeman - Software Generalist",
  openGraph: {
    title: "Nathanial Hapeman Portfolio",
    description: "Portfolio of Nathanial Hapeman - Software Generalist",
    url: "https://nhapeman.com",
    siteName: "Nathanial Hapeman Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/space-bg-banner.jpg",
        width: 1200,
        height: 600,
        alt: "Nathanial Hapeman Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathanial Hapeman Portfolio",
    description: "Portfolio of Nathanial Hapeman - Software Generalist",
    images: ["/space-bg-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ParallaxSpace />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}
