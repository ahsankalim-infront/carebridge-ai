import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CustomCursor } from "@/components/ui/CustomCursor";
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
    default: "CareBridge Solutions | Medical Billing & Revenue Cycle",
    template: "%s | CareBridge Solutions",
  },
  description:
    "Medical billing and coding for clinics, labs, and specialty groups. CareBridge submits clean claims, works denials, and collects what your practice has already earned.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="bg-site relative flex min-h-full flex-col overflow-x-hidden font-sans">
        <div className="grain" />
        <CustomCursor />
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
