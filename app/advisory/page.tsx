'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  packageInterest: string;
  currentStage: string;
  fundingStatus: string;
  primaryChallenge: string;
  expectedTimeline: string;
  equityInterest: boolean;
  newsletter: boolean;
}

export default function AdvisoryPage() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    packageInterest: '',
    currentStage: '',
    fundingStatus: '',
    primaryChallenge: '',
    expectedTimeline: '',
    equityInterest: false,
    newsletter: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/advisory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const responseText = await response.text();
        const data = responseText ? JSON.parse(responseText) : {};
        throw new Error(data.error || 'Failed to submit interest');
      }

      // Close form and redirect to thank you page
      setShowForm(false);
      router.push('/thank-you?program=advisory');
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit interest');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-[#040423] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040423] via-transparent to-[#040423] z-10" />
        <div className="absolute inset-0 bg-[url('/advisory-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto relative z-20 text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-[#EF400A] text-white text-sm font-semibold rounded-full mb-4">
              The World&apos;s Premier Data-Enhanced Startup Advisory Platform
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Where Unicorn Founders</span>
            <br />
            <span className="text-[#EF400A]">Are Made</span>
          </h1>
          <div className="max-w-5xl mx-auto mb-8">
            <p className="text-lg md:text-xl mb-4 text-gray-300 leading-relaxed">
              <span className="text-red-400 font-semibold">Most founders waste 2-3 years learning what could be taught in 90 days.</span>
            </p>
            <p className="text-lg md:text-xl mb-4 text-gray-300 leading-relaxed">
              <span className="text-red-400 font-semibold">97% of startups fail because they lack proper guidance and network access.</span>
            </p>
            <p className="text-lg md:text-xl text-white font-semibold">
              Join the 3% who succeed with data-enhanced guidance, guaranteed VC access, and billion-dollar founder mentorship.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <button 
              onClick={() => setShowForm(true)}
              className="px-6 py-3 md:px-8 md:py-4 bg-[#EF400A] text-white rounded-full text-sm md:text-lg font-semibold hover:bg-[#ff5a2b] transition-colors shadow-lg"
            >
              Get Your Unicorn Strategy
            </button>
            <Link
              href="#details"
              className="px-6 py-3 md:px-8 md:py-4 border border-[#EF400A] text-[#EF400A] rounded-full text-sm md:text-lg font-semibold hover:bg-[#EF400A] hover:text-white transition-colors"
            >
              See Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="details" className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">Why Next12 Outperforms</span>
              <span className="text-[#EF400A]"> Every Competitor</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-[#080830] rounded-xl p-8 border border-[#EF400A]">
              <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">vs. Y Combinator</h3>
              <p className="text-gray-300 mb-4">While YC uses a mass acceleration model for hundreds of startups:</p>
              <ul className="text-white space-y-2">
                <li>✓ We provide <strong>individualized data-powered guidance</strong></li>
                <li>✓ Direct access to <strong>tier-1 VC partners</strong></li>
                <li>✓ <strong>Guaranteed investor meetings</strong></li>
                <li>✓ <strong>90-day success guarantee</strong></li>
              </ul>
            </div>
            
            <div className="bg-[#080830] rounded-xl p-8 border border-[#EF400A]">
              <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">vs. Traditional Consultants</h3>
              <p className="text-gray-300 mb-4">While consultants offer generic business advice:</p>
              <ul className="text-white space-y-2">
                <li>✓ We connect you with <strong>billion-dollar exit founders</strong></li>
                <li>✓ <strong>Real-time market intelligence</strong> guides every decision</li>
                <li>✓ <strong>Proprietary data models</strong> predict success probability</li>
                <li>✓ <strong>International expansion</strong> with local expertise</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-[#EF400A] rounded-xl p-6 max-w-4xl">
              <h3 className="text-2xl font-bold text-white mb-4">The Next12 Advantage</h3>
              <p className="text-lg text-white leading-relaxed">
                We&apos;re the only platform that combines <strong>AI-powered insights</strong>, <strong>guaranteed VC access</strong>, 
                and <strong>mentorship from unicorn founders</strong> to create a 90%+ Series A success rate for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#040423]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Four Unstoppable</span>
              <span className="text-[#EF400A]"> Competitive Advantages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Why ambitious founders choose Next12 over every alternative
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Data-Enhanced Personalization */}
            <div className="bg-[#080830] rounded-xl p-8 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl border border-[#EF400A]/30">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#EF400A] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">Data-Enhanced Personalization</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white">Proprietary Intelligence Engine:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Real-time market intelligence that adapts to your industry</li>
                    <li>• Predictive models that forecast your startup&apos;s success probability</li>
                    <li>• Personalized strategy recommendations based on comparable exits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white">Unlike Generic Programs:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• No one-size-fits-all approaches</li>
                    <li>• Every decision backed by data from 10,000+ startups</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Guaranteed VC Access */}
            <div className="bg-[#080830] rounded-xl p-8 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl border border-[#EF400A]/30">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#EF400A] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">Guaranteed VC Access</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white">Tier-1 Investor Network:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Direct intros to partners</li>
                    <li>• Guaranteed meetings with 3+ tier-1 VCs per package</li>
                    <li>• Warm introductions, not cold emails</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white">Results Guarantee:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• 90%+ Series A success rate for our clients</li>
                    <li>• Full refund if no VC meetings within 90 days</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Founder-to-Founder Mentorship */}
            <div className="bg-[#080830] rounded-xl p-8 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl border border-[#EF400A]/30">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#EF400A] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">Billion-Dollar Founder Mentorship</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white">Elite Mentor Network:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Direct access to founders with Billion dollar exits</li>
                    <li>• Monthly 1-on-1s with public company CEOs</li>
                    <li>• Learn from those who&apos;ve built generational wealth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white">Not Corporate Consultants:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Real operators who&apos;ve been in your exact position</li>
                    <li>• Strategies that created unicorns, not theories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Global Network Effects */}
            <div className="bg-[#080830] rounded-xl p-8 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl border border-[#EF400A]/30">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#EF400A] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">Global Network Effects</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white">International Expansion:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Local expertise in 15+ countries</li>
                    <li>• Regulatory guidance for global markets</li>
                    <li>• Cross-border partnership opportunities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white">Network Multiplier Effect:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Alumni referrals create viral growth</li>
                    <li>• Cross-portfolio collaboration opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Choose Our</span>
              <span className="text-[#EF400A]"> Advisory Package?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#EF400A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EF400A]">Founder-Focused</h3>
              <p className="text-gray-300">Designed by founders, for founders. We understand your challenges and aspirations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#EF400A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EF400A]">Affordable & Transparent</h3>
              <p className="text-gray-300">No hidden fees. One clear price for comprehensive support.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#EF400A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EF400A]">Flexible & Scalable</h3>
              <p className="text-gray-300">Adapts to your evolving needs as your business grows.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#EF400A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EF400A]">Results-Driven</h3>
              <p className="text-gray-300">Proven track record of helping startups secure funding, build partnerships, and achieve growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Pricing */}
      <section className="py-20 bg-[#040423]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#EF400A]">Choose Your Unicorn Path</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Each package provides 5-15x more value than you&apos;ll pay
            </p>
            <div className="inline-block bg-red-900/20 border border-red-500/20 rounded-lg p-4 max-w-2xl">
              <p className="text-red-400 font-semibold">
                ⚠️ Limited Availability: We only accept 10 new clients per month to maintain quality
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Catalyst Package */}
            <div className="bg-[#080830] rounded-2xl p-6 border border-gray-600 hover:border-[#EF400A] transition-colors relative">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-4 text-white">Catalyst Package</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#EF400A]">$2,995</span>
                </div>
                <p className="text-sm text-gray-300 mb-4">45 days • Data-Enhanced Launch</p>
                <div className="bg-green-900/20 border border-green-500/20 rounded p-2">
                  <p className="text-green-400 text-xs font-semibold">🎯 $15,000+ Value</p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  8 intensive strategy sessions (2hrs each)
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Data-powered pitch deck development
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Y Combinator alumni access
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 Slack workspace support
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom competitive analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  90-day success guarantee
                </li>
              </ul>
              
              <button 
                onClick={() => setShowForm(true)}
                className="w-full px-4 py-3 border border-[#EF400A] text-[#EF400A] rounded-full font-semibold hover:bg-[#EF400A] hover:text-white transition-colors text-sm"
              >
                Start Building
              </button>
            </div>

            {/* Accelerator Package */}
            <div className="bg-[#080830] rounded-2xl p-6 border border-gray-600 hover:border-[#EF400A] transition-colors relative">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-4 text-white">Accelerator Package</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#EF400A]">$7,500</span>
                </div>
                <p className="text-sm text-gray-300 mb-4">90 days • Tier-1 VC Connection</p>
                <div className="bg-green-900/20 border border-green-500/20 rounded p-2">
                  <p className="text-green-400 text-xs font-semibold">🚀 $75,000+ Value</p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  16 coaching sessions with C-suite advisors
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <strong>GUARANTEED:</strong> 3 tier-1 VC meetings
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Legal templates worth $10,000
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Monthly founder mentorship sessions
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Product-market fit validation
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full refund if no VC meetings
                </li>
              </ul>
              
              <button 
                onClick={() => setShowForm(true)}
                className="w-full px-4 py-3 border border-[#EF400A] text-[#EF400A] rounded-full font-semibold hover:bg-[#EF400A] hover:text-white transition-colors text-sm"
              >
                Get VC Access
              </button>
            </div>

            {/* Unicorn Package - Most Popular */}
            <div className="bg-[#080830] rounded-2xl p-6 border-2 border-[#EF400A] relative overflow-hidden transform scale-105">
              <div className="absolute top-0 right-0 bg-[#EF400A] text-white px-3 py-1 rounded-bl-lg font-semibold text-xs">
                Most Popular
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-4 text-[#EF400A]">Unicorn Package</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">$18,500</span>
                </div>
                <p className="text-sm text-gray-300 mb-4">180 days • IPO Preparation</p>
                <div className="bg-green-900/20 border border-green-500/20 rounded p-2">
                  <p className="text-green-400 text-xs font-semibold">💎 $275,000+ Value</p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  32 sessions with public company CEOs
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <strong>GUARANTEED:</strong> Series A preparation
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Family office connections
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Board advisory positioning
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  International expansion (5 markets)
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-[#EF400A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Technical due diligence prep
                </li>
              </ul>
              
              <button 
                onClick={() => setShowForm(true)}
                className="w-full px-4 py-3 bg-[#EF400A] text-white rounded-full font-semibold hover:bg-[#ff5a2b] transition-colors shadow-lg text-sm"
              >
                Build Your Unicorn
              </button>
            </div>

            {/* Legends Package */}
            <div className="bg-gradient-to-b from-[#080830] to-[#0a0a2f] rounded-2xl p-6 border-2 border-amber-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-3 py-1 rounded-bl-lg font-bold text-xs">
                ELITE
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-4 text-amber-400">Legends Package</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">$50,000</span>
                  <p className="text-xs text-amber-400 mt-1">+ 0.5-1% equity</p>
                </div>
                <p className="text-sm text-gray-300 mb-4">365 days • Generational Wealth</p>
                <div className="bg-amber-900/20 border border-amber-500/20 rounded p-2">
                  <p className="text-amber-400 text-xs font-semibold">👑 Unlimited Value</p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Access to Tier-0 investors 
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Weekly sessions with $10B+ exit founders
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  McKinsey-level market research
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personal board of 5 public company execs
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Legacy & generational wealth planning
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  True partnership model (equity aligned)
                </li>
              </ul>
              
              <button 
                onClick={() => setShowForm(true)}
                className="w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black rounded-full font-bold hover:from-amber-600 hover:to-yellow-600 transition-colors shadow-lg text-sm"
              >
                Join the Legends
              </button>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-[#0a0a2f] rounded-xl p-6">
                <h4 className="text-2xl font-bold text-[#EF400A] mb-2">90%+</h4>
                <p className="text-gray-300">Series A Success Rate</p>
              </div>
              <div className="bg-[#0a0a2f] rounded-xl p-6">
                <h4 className="text-2xl font-bold text-[#EF400A] mb-2">$25M+</h4>
                <p className="text-gray-300">Average Client Valuation</p>
              </div>
              <div className="bg-[#0a0a2f] rounded-xl p-6">
                <h4 className="text-2xl font-bold text-[#EF400A] mb-2">75+</h4>
                <p className="text-gray-300">Tier-1 VC Partners</p>
              </div>
            </div>
          </div>

          {/* Money-Back Guarantee */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-[#0a0a2f] rounded-xl p-8 text-center border border-[#EF400A]">
              <h4 className="text-2xl font-bold mb-4 text-[#EF400A]">🛡️ Iron-Clad Guarantee</h4>
              <p className="text-gray-300 mb-4 text-lg">
                We&apos;re so confident in our results that we offer a <strong className="text-white">90-day money-back guarantee</strong>.
              </p>
              <p className="text-white font-semibold">
                If you don&apos;t see measurable progress toward your funding goals within 90 days, we&apos;ll refund every penny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0a0a2f] to-[#040423]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Ready to Accelerate Your</span>
            <span className="text-[#EF400A]"> Success?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join a growing community of founders who are achieving their goals with the support of our expert advisors.
          </p>
          <p className="text-2xl font-bold text-white mb-8">
            Let&apos;s build your future—together.
          </p>
          <button 
            onClick={() => setShowForm(true)}
            className="px-8 py-4 bg-[#EF400A] text-white rounded-full text-lg font-semibold hover:bg-[#ff5a2b] transition-colors shadow-lg"
          >
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Interest Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="relative bg-[#080830] rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#EF400A]">Express Your Interest</h3>
              
              {submitError && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/20 rounded-lg">
                  <p className="text-red-400">{submitError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a0a2f] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#EF400A]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a0a2f] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#EF400A]"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0a2f] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#EF400A]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0a2f] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#EF400A]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Package Interest *</label>
                  <select 
                    value={formData.packageInterest}
                    onChange={(e) => handleInputChange('packageInterest', e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0a2f] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#EF400A]"
                  >
                    <option value="">Select Package</option>
                    <option value="catalyst">Catalyst Package (45 days) - $2,995</option>
                    <option value="accelerator">Accelerator Package (90 days) - $7,500</option>
                    <option value="unicorn">Unicorn Package (180 days) - $18,500</option>
                    <option value="legends">Legends Package (365 days) - $50,000 + equity</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Current Stage</label>
                  <select 
                    value={formData.currentStage}
                    onChange={(e) => handleInputChange('currentStage', e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0a2f] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#EF400A]"
                  >
                    <option value="">Select Stage</option>
                    <option value="idea">Idea Stage</option>
                    <option value="mvp">MVP Development</option>
                    <option value="early">Early Revenue</option>
                    <option value="growth">Growth Stage</option>
                    <option value="scale">Scaling</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Funding Status</label>
                  <select 
                    value={formData.fundingStatus}
                    onChange={(e) => handleInputChange('fundingStatus', e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0a2f] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#EF400A]"
                  >
                    <option value="">Select Funding Status</option>
                    <option value="bootstrapped">Bootstrapped</option>
                    <option value="pre-seed">Pre-Seed</option>
                    <option value="seed">Seed</option>
                    <option value="series-a">Series A</option>
                    <option value="series-b">Series B+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Primary Challenge</label>
                  <textarea
                    rows={4}
                    placeholder="What&apos;s your biggest challenge right now that our advisory package could help with?"
                    value={formData.primaryChallenge}
                    onChange={(e) => handleInputChange('primaryChallenge', e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0a2f] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#EF400A] placeholder-gray-400"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Expected Timeline</label>
                  <select 
                    value={formData.expectedTimeline}
                    onChange={(e) => handleInputChange('expectedTimeline', e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0a2f] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#EF400A]"
                  >
                    <option value="">When would you like to start?</option>
                    <option value="immediate">Immediately</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                  </select>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="equity-interest"
                    checked={formData.equityInterest}
                    onChange={(e) => handleInputChange('equityInterest', e.target.checked)}
                    className="mr-3 w-4 h-4 text-[#EF400A] bg-[#0a0a2f] border-gray-600 focus:ring-[#EF400A]"
                  />
                  <label htmlFor="equity-interest" className="text-sm text-gray-300">
                    I&apos;m interested in the equity option (0.25–1.5% equity vesting over 1–2 years)
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                    className="mr-3 w-4 h-4 text-[#EF400A] bg-[#0a0a2f] border-gray-600 focus:ring-[#EF400A]"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-300">
                    Subscribe to Next12 updates and founder resources
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#EF400A] text-white rounded-lg font-semibold hover:bg-[#ff5a2b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Interest'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
} 