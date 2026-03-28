import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'; // Import the helper
import "./globals.css";

import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BricketX UAE | Investment Holding & Business Consultation",
  description: "Premier investment holding and elite business consultation in the UAE.",
  verification: {
    google: "thers-8NnD-oFJtp1qaHViRtOX-eSJHbmPYJ0NxHIOI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* This component automatically handles the Head script and the Body noscript */}
      <GoogleTagManager gtmId="GTM-TJZD3BJQ" />
      <body className={`${inter.className} bg-[var(--background)] text-[var(--foreground)] antialiased flex flex-col min-h-screen`}>
        <Navbar />
        
        <div className="flex-grow">
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}