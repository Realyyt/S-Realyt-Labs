'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbar';
import Link from 'next/link';

export default function NewsletterThankYou() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if accessed directly
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000); // Redirect after 10 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-[#040423] text-white">
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040423] via-transparent to-[#040423] z-10" />
        <div className="absolute inset-0 bg-[url('/thank-you-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto relative z-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Thank You for <span className="text-[#EF400A]">Subscribing!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              You&apos;ve successfully subscribed to our newsletter. We&apos;ll keep you updated with the latest insights on venture capital, founder resources, and emerging technology trends.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
              <Link
                href="/"
                className="px-4 py-2 md:px-8 md:py-4 bg-[#EF400A] text-white rounded-full text-sm md:text-lg font-semibold hover:bg-[#ff5a2b] transition-colors"
              >
                Return Home
              </Link>
            </div>
            <p className="text-gray-400 mt-8 text-sm">
              You&apos;ll be redirected to the homepage in 10 seconds...
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}