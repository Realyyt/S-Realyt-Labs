import type { Metadata } from "next";
import { Playfair_Display } from 'next/font/google';
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';

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
  title: "Next12 | Exclusive Founders Community",
  description: "Elevating Innovation, One Founder at a Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={true}
        >
          <Header />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
