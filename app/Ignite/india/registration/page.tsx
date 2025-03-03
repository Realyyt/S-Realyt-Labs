import { Metadata } from 'next';
import Link from 'next/link';
import ApplicationForm from '../components/ApplicationForm';
import Navbar from '../../../../components/navbar';
import HeroSection from '../../../../components/sections/HeroSection';
import ProgramOverview from '../../../../components/sections/ProgramOverview';

export const metadata: Metadata = {
  title: 'Ignite Gujarat 2025 Application',
  description: 'Apply for the Gujarat Web3 Summit Program',
};

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-[#040423] text-white">
      <Navbar />
      <HeroSection 
        brandColor="#EF400A"
        backgroundColor="#040423"
      />
      <div id="program">
        <ProgramOverview 
          accentColor="#EF400A"
          secondaryColor="#898989"
        />
      </div>
      <section className="max-w-4xl mx-auto py-20 px-4">
        <div className="mb-8">
          <Link 
            href="/ignite/india" 
            className="text-[#138808] hover:text-[#000080] flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Program Overview
          </Link>
        </div>

        <div className="p-8 rounded-lg relative overflow-hidden bg-gradient-to-br from-[#FF9933] to-[#138808]">
          <div className="relative space-y-8">
            <h1 className="text-4xl font-bold text-center">Founder Application</h1>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Program Inclusions:</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Web3 infrastructure development',
                  'Traditional industry integration',
                  'Smart contract workshops',
                  'Decentralized finance modules',
                  'Local manufacturing networks',
                  'Cross-chain interoperability'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#000080]" fill="currentColor" viewBox="0 0 20 20">
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