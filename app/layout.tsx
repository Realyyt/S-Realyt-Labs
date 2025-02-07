import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";
import { Press_Start_2P } from 'next/font/google'
import Navbar from "@/components/navbar";

const pixelFont = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel'
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '700']
});

export const metadata: Metadata = {
  title: "Next12 | The new way to change the world",
  description: "Elevating Innovation, One Founder at a Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
       
            {children}
      </body>
    </html>
  );
}
