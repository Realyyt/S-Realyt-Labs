import type { Metadata } from "next";
import { Playfair_Display } from 'next/font/google';
import Navbar from "@/components/navbar";
import { ThemeProvider } from '@/components/ThemeProvider';


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
    <ThemeProvider
    attribute="data-theme"
    defaultTheme="light"
    enableSystem={true}
  >
  <div>
      <Navbar/>
      {children}
  </div>
  </ThemeProvider>
   
  );
}
