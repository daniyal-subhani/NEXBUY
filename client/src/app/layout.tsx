import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // avoids FOIT (flash of invisible text)
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXBUY",
  description: "Your one-stop e-commerce store",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",

  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Navbar />

        <main className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
