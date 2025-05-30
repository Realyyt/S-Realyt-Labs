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
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">The Founder&apos;s</span>
            <br />
            <span className="text-[#EF400A]">Advantage</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Unlock Your Growth Potential with Expert Guidance, Powerful Collateral, and an Unrivaled Network
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <button 
              onClick={() => setShowForm(true)}
              className="px-6 py-3 md:px-8 md:py-4 bg-[#EF400A] text-white rounded-full text-sm md:text-lg font-semibold hover:bg-[#ff5a2b] transition-colors shadow-lg"
            >
              Express Interest
            </button>
            <Link
              href="#details"
              className="px-6 py-3 md:px-8 md:py-4 border border-[#EF400A] text-[#EF400A] rounded-full text-sm md:text-lg font-semibold hover:bg-[#EF400A] hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="details" className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Are you ready to take your startup to the next level? Our Next 12 Advisory Package is designed to give you the 
              <span className="text-[#EF400A] font-semibold"> clarity, confidence, and connections</span> you need to accelerate your journey—all at a founder-friendly price.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#040423]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">What&apos;s</span>
              <span className="text-[#EF400A]"> Included?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Professional Collateral Deck */}
            <div className="bg-[#080830] rounded-xl p-8 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#EF400A] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">Professional Collateral Deck</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Investor-Ready Materials:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• A visually stunning, data-driven pitch deck tailored to your business</li>
                    <li>• Easy-to-understand collateral for clients, partners, and investors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Brand Consistency:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Aligned with your brand identity, ensuring you always make a powerful impression</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Strategic Advisory */}
            <div className="bg-[#080830] rounded-xl p-8 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#EF400A] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">Strategic Advisory & Mentorship</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Regular Strategy Sessions:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Weekly check-ins to review progress, set goals, and tackle challenges</li>
                    <li>• Actionable advice from seasoned professionals with startup and scale-up expertise</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">On-Demand Support:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Quick access to your advisor for urgent questions, feedback, or introductions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Investor & Partner Introductions */}
            <div className="bg-[#080830] rounded-xl p-8 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#EF400A] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">Investor & Partner Introductions</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Access to a Curated Network:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Introductions to active investors and strategic partners</li>
                    <li>• Warm introductions—not just cold emails—to help you build meaningful relationships</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pitch Refinement */}
            <div className="bg-[#080830] rounded-xl p-8 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#EF400A] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-10 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M8 10h8m-8 4h3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">Pitch Refinement & Practice</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Pitch Coaching:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Personalized feedback to help you refine your pitch and delivery</li>
                    <li>• Practice sessions to boost your confidence and effectiveness</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Growth Roadmap */}
            <div className="bg-[#080830] rounded-xl p-8 lg:col-span-2 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#EF400A] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">Growth Roadmap</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Customized Plan:</h4>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• A tailored 120-day roadmap to guide your business growth</li>
                    <li>• Clear milestones and KPIs to keep you on track</li>
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
              <span className="text-[#EF400A]">Investment Packages</span>
            </h2>
            <p className="text-xl text-gray-300">Choose the support package that fits your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* 30 Days Package */}
            <div className="bg-[#080830] rounded-2xl p-6 md:p-8 border border-gray-600 hover:border-[#EF400A] transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4 text-white">Starter Package</h3>
                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-[#EF400A]">$1,450</span>
                  <span className="text-lg text-gray-300 ml-2">(net)</span>
                </div>
                <p className="text-lg text-gray-300 mb-6">30 days of focused support</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic collateral deck
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  4 advisory sessions
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  30-day growth plan
                </li>
              </ul>
              
              <button 
                onClick={() => setShowForm(true)}
                className="w-full px-6 py-3 border border-[#EF400A] text-[#EF400A] rounded-full font-semibold hover:bg-[#EF400A] hover:text-white transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* 60 Days Package */}
            <div className="bg-[#080830] rounded-2xl p-6 md:p-8 border border-gray-600 hover:border-[#EF400A] transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4 text-white">Growth Package</h3>
                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-[#EF400A]">$2,900</span>
                  <span className="text-lg text-gray-300 ml-2">(net)</span>
                </div>
                <p className="text-lg text-gray-300 mb-6">60 days of comprehensive support</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional collateral deck
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  8 advisory sessions
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pitch refinement session
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  60-day growth roadmap
                </li>
              </ul>
              
              <button 
                onClick={() => setShowForm(true)}
                className="w-full px-6 py-3 border border-[#EF400A] text-[#EF400A] rounded-full font-semibold hover:bg-[#EF400A] hover:text-white transition-colors"
              >
                Choose Growth
              </button>
            </div>

            {/* 120 Days Package - Most Popular */}
            <div className="bg-[#080830] rounded-2xl p-6 md:p-8 border-2 border-[#EF400A] relative overflow-hidden transform scale-105">
              <div className="absolute top-0 right-0 bg-[#EF400A] text-white px-4 py-1 rounded-bl-lg font-semibold text-sm">
                Most Popular
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">Complete Package</h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-white">$5,800</span>
                  <span className="text-lg text-gray-300 ml-2">(net)</span>
                </div>
                <p className="text-lg text-gray-300 mb-6">120 days of complete support</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Premium collateral deck
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  17 advisory sessions
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Investor introductions
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multiple pitch coaching sessions
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#EF400A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Complete 120-day growth roadmap
                </li>
              </ul>
              
              <button 
                onClick={() => setShowForm(true)}
                className="w-full px-6 py-3 bg-[#EF400A] text-white rounded-full font-semibold hover:bg-[#ff5a2b] transition-colors shadow-lg"
              >
                Get Complete Package
              </button>
            </div>
          </div>

          {/* Equity Option */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-[#0a0a2f] rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold mb-4 text-[#EF400A]">Bonus: Equity Option</h4>
              <p className="text-gray-300 mb-4">
                For founders who want to further align our interests, we offer an optional equity component:
              </p>
              <p className="text-white font-semibold">
                0.25–1.5% equity vesting over 1–2 years (subject to agreement)
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
                    <option value="30-days">Starter Package (30 days) - $1,450</option>
                    <option value="60-days">Growth Package (60 days) - $2,900</option>
                    <option value="120-days">Complete Package (120 days) - $5,800</option>
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