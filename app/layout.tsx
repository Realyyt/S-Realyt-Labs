import type { Metadata } from "next";
import { Playfair_Display } from 'next/font/google';
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Next12 | Luxury Founders Community",
  description: "Elevating African Innovation, One Founder at a Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playfair.variable} antialiased`}>
        <Header />
        <div className="pt-16"> {/* Add padding for fixed header */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
