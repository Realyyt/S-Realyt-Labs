import { Metadata } from 'next';
import Link from 'next/link';
import ApplicationForm from '@/app/ignite/thailand/components/ApplicationForm';

export const metadata: Metadata = {
  title: 'Ignite Lagos 2025 Application',
  description: 'Apply for the Lagos AI & DeFi Program',
};

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-[#008751] text-white">
      <section className="max-w-4xl mx-auto py-20 px-4">
        <div className="mb-8">
          <Link 
            href="/ignite/lagos" 
            className="text-[#E6BE8A] hover:text-white flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Program Overview
          </Link>
        </div>

        <div className="p-8 rounded-lg relative overflow-hidden bg-gradient-to-br from-[#008751] to-[#E6BE8A]">
          <div className="relative space-y-8">
            <h1 className="text-4xl font-bold text-center">Founder Application</h1>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Program Inclusions:</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'AI infrastructure development',
                  'DeFi protocol workshops',
                  'Nigerian market integration',
                  'Financial inclusion strategies',
                  'Cross-border payment solutions',
                  'Regulatory sandbox access'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#008751]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ApplicationForm />
          </div>
        </div>
      </section>
    </main>
  );
}