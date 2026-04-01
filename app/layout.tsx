import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";

import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BricketX UAE | Investment Holding & Business Consultation",
  description: "Premier investment holding and elite business consultation in the UAE.",
  verification: {
    google: "thers-8NnD-oFJtp1qaHViRtOX-eSJHbmPYJ0NxHIOI",
    // Adding Pinterest domain verify tag here:
    other: {
      "p:domain_verify": ["23c5c9c33cc7559a80c0a41f8a413c5c"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Google Tag Manager handles the script injection automatically */}
      <GoogleTagManager gtmId="GTM-TJZD3BJQ" />
      <body className={`${inter.className} bg-[var(--background)] text-[var(--foreground)] antialiased flex flex-col min-h-screen`}>
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}