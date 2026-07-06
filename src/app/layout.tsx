import type { Metadata } from "next";
import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amroot Organics | Premium Single-Origin Ingredients",
  description: "Premium turmeric and natural ingredients sourced from India for global brands, distributors and manufacturers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isComingSoon = process.env.VERCEL === '1' || process.env.NEXT_PUBLIC_SHOW_COMING_SOON === 'true';

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-brand-pink selection:text-white">
        <SmoothScroll />
        {!isComingSoon && <Header />}
        <main className="flex-1 w-full">{children}</main>
        {!isComingSoon && <Footer />}
      </body>
    </html>
  );
}
