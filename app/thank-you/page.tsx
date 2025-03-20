'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/components/navbar';
import Link from 'next/link';

function ThankYouContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const program = searchParams.get('program');

  useEffect(() => {
    // Redirect to home if accessed directly without program parameter
    if (!program) {
      router.push('/');
    }
  }, [program, router]);

  const getProgramTitle = () => {
    switch (program) {
      case 'residency':
        return 'NEXT12 RESIDENCY';
      case 'ignite':
        return 'NEXT12 IGNITE';
      case 'vc':
        return 'VC NETWORK';
      default:
        return 'NEXT12';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#040423] via-transparent to-[#040423] z-10" />
      <div className="absolute inset-0 bg-[url('/thank-you-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto relative z-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Thank You for Applying to <span className="text-[#EF400A]">{getProgramTitle()}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            We&apos;ve received your application and will review it shortly. Our team will contact you within 2-3 business days.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <Link
              href="/"
              className="px-4 py-2 md:px-8 md:py-4 bg-[#EF400A] text-white rounded-full text-sm md:text-lg font-semibold hover:bg-[#ff5a2b] transition-colors"
            >
              Return Home
            </Link>
            <Link
              href="/apply"
              className="px-4 py-2 md:px-8 md:py-4 border border-[#EF400A] text-[#EF400A] rounded-full text-sm md:text-lg font-semibold hover:bg-[#EF400A] hover:text-white transition-colors"
            >
              Apply to another program
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#040423] text-white">
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl text-gray-300">Loading...</div>
        </div>
      }>
        <ThankYouContent />
      </Suspense>
    </main>
  );
} 