import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kara Store",
  description: "Toko online bertema kaca, hitam dan navy.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="scene" aria-hidden>
          <span className="orb" />
          <span className="orb" />
          <span className="orb" />
        </div>
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-28 sm:px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
