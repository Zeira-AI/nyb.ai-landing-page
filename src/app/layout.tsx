import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Using Geist as it's very "Scale AI" (Vercel)
import LenisProvider from "@/components/providers/LenisProvider";
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
  title: "NYB.AI - Democratizing AI for Life Science",
  description: "Advanced AI accessible across every layer of life science R&D.",
  metadataBase: new URL("https://nyb.ai"),
  openGraph: {
    title: "NYB.AI - Democratizing AI for Life Science",
    description:
      "Advanced AI accessible across every layer of life science R&D.",
    url: "https://nyb.ai",
    siteName: "NYB.AI",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "NYB.AI - Democratizing AI for Life Science",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYB.AI - Democratizing AI for Life Science",
    description:
      "Advanced AI accessible across every layer of life science R&D.",
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/20 selection:text-primary`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
