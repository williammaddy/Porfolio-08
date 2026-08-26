import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/animations/SmoothScrollProvider";
import CustomCursor from "@/components/animations/CustomCursor";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const displayFont = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const handFont = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manikandan L | Software Developer & Data Engineer",
  description: "Illustrated Developer Magazine Portfolio of Manikandan L — Full Stack Web Development and Data Engineering.",
  keywords: [
    "Manikandan L",
    "Software Developer",
    "Data Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Apache Spark",
    "Kafka",
    "AWS",
    "Portfolio"
  ],
  authors: [{ name: "Manikandan L" }],
  openGraph: {
    title: "Manikandan L | Software Developer & Data Engineer",
    description: "Illustrated Developer Magazine Portfolio — Full Stack Web Development & Data Engineering",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${displayFont.variable} ${handFont.variable} ${monoFont.variable}`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-slate-900 font-sans antialiased selection:bg-amber-300 selection:text-slate-950">
        <SmoothScrollProvider>
          <CustomCursor />
          <div className="flex min-h-screen flex-col relative overflow-x-hidden">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
