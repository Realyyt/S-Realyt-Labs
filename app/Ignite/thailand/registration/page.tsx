import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ignite Thailand 2024 Registration',
  description: 'Secure your spot in the Thailand founder retreat',
};

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-amber-50">
      <section className="max-w-4xl mx-auto py-20 px-4">
        <div className="mb-8">
          <Link 
            href="/ignite/thailand" 
            className="text-amber-500 hover:text-amber-400 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Program Details
          </Link>
        </div>

        <div 
          className="p-8 rounded-lg relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)',
            boxShadow: '0 8px 32px rgba(245,158,11,0.3)'
          }}
        >
          <div className="absolute inset-0 bg-[url('/silk-texture.png')] opacity-20 mix-blend-soft-light"></div>
          
          <div className="relative space-y-8">
            <h1 className="text-4xl font-bold text-center">Program Registration</h1>
            
            {/* Program Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Included in Your Experience:</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  '7-day luxury accommodation',
                  'Daily mentorship sessions',
                  'Networking events',
                  'Wellness activities',
                  'Investor pitch workshops',
                  'community access'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Registration Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
                  />
                </div>

              {/* New Company Description Field */}
              <div>
                <label className="block text-sm font-bold mb-2">Tell us about your company *</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
                  required
                />
              </div>

              {/* New Document Upload Field */}
              <div>
                <label className="block text-sm font-bold mb-2">Company Deck (PDF/DOC) *</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-2 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-500/20 file:text-amber-300 hover:file:bg-amber-500/30 cursor-pointer"
                  required
                />
              </div>

              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full font-bold hover:scale-105 transition-transform"
                  style={{
                    background: 'var(--foreground)',
                    color: 'var(--accent)'
                  }}
                >
                  Complete Registration
                </button>
                <p className="text-xs text-center mt-4 opacity-75">
                  Secure checkout · 256-bit SSL encryption
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}