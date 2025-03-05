'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const programType = searchParams.get('program');

  const programDetails = {
    residency: {
      title: 'Residency Program',
      nextSteps: 'You will receive an email with program details and next steps within 24 hours.'
    },
    ignite: {
      title: 'Ignite Program',
      nextSteps: 'You will receive an email with program details and next steps within 24 hours.'
    },
    vc: {
      title: 'VC Network',
      nextSteps: 'You will receive an email with network access details within 24 hours.'
    }
  };

  const details = programDetails[programType as keyof typeof programDetails];

  return (
    <div className="min-h-screen bg-[#040423] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-[#0a0a2f] rounded-xl border border-[#EF400A]/20 p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-300 mb-6">
          Thank you for applying to the {details.title}. {details.nextSteps}
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white rounded-full py-3 px-8 text-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 