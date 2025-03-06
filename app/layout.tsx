import type { Metadata } from "next";
import { Space_Grotesk, Press_Start_2P } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";

// Configure fonts with fallbacks
const pixelFont = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
  fallback: ['monospace'] // Fallback to monospace if loading fails
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '700'],
  display: 'swap',
  fallback: ['system-ui', 'arial'], // Fallback fonts if loading fails
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
      <head>
        <link
          rel="preload"
          href="/fonts/PressStart2P-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SpaceGrotesk-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SpaceGrotesk-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${spaceGrotesk.variable} ${pixelFont.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
