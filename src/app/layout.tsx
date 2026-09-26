import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "CareCommerce Solutions | Medical Billing & Revenue Cycle",
    template: "%s | CareCommerce Solutions",
  },
  description:
    "Empowering healthcare providers with innovative revenue cycle management, medical billing, credentialing, A/R recovery, and denial management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="bg-site relative min-h-full flex flex-col font-sans">
        <div className="grain" />
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
