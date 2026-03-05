import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer"; // <-- Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BricketX UAE | Investment Holding & Business Consultation",
  description: "Premier investment holding and elite business consultation in the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[var(--background)] text-[var(--foreground)] antialiased flex flex-col min-h-screen`}>
        <Navbar />
        
        {/* Wrap children in a flex-grow div so the footer always pushes to the bottom even on short pages */}
        <div className="flex-grow">
          {children}
        </div>
        
        <Footer /> {/* <-- Add Footer here */}
      </body>
    </html>
  );
}