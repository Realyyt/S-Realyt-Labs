'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Residency() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <main className="min-h-screen bg-[#040423] text-white">
      <Navbar />
      
      {/* Hero Section - improved mobile spacing */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040423] via-transparent to-[#040423] z-10" />
        <div className="absolute inset-0 bg-[url('/residency-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
            <span className="text-[#EF400A]">NEXT12</span> RESIDENCY
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            A 12-week intensive program for exceptional founders building the next generation of breakthrough technologies
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <Link 
              href="#apply"
              className="px-4 py-2 md:px-8 md:py-4 bg-[#EF400A] text-white rounded-full text-sm md:text-lg font-semibold hover:bg-[#ff5a2b] transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="#program"
              className="px-4 py-2 md:px-8 md:py-4 border border-[#EF400A] text-[#EF400A] rounded-full text-sm md:text-lg font-semibold hover:bg-[#EF400A] hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Program Overview - improved layout */}
      <section id="program" className="py-12 md:py-20 bg-[#040423]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
                Transform Your Vision Into Reality
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                The Next12 Residency program is designed for ambitious founders who are ready to take their breakthrough ideas to the next level. Over 12 intensive weeks, you&apos;ll work alongside industry experts, receive personalized mentorship, and access state-of-the-art resources to accelerate your journey.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
                {[
                  { title: 'Funding', value: 'Up to $500K' },
                  { title: 'Duration', value: '12 Weeks' },
                  { title: 'Mentorship', value: '50+ Experts' },
                  { title: 'Network', value: 'Global Access' }
                ].map((stat, idx) => (
                  <div key={idx} className="p-6 bg-[#0a0a2f] rounded-xl">
                    <h3 className="text-[#EF400A] text-lg font-semibold mb-2">{stat.title}</h3>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-[#0a0a2f] p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">What You&apos;ll Get</h3>
                <ul className="space-y-4">
                  {[
                    'Dedicated workspace in our state-of-the-art facility',
                    'Direct access to industry-leading mentors and experts',
                    'Technical resources and infrastructure support',
                    'Investment opportunities and investor network access',
                    'Product development and go-to-market support',
                    'Global network of founders and partners'
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-[#EF400A] text-xl">•</span>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Tracks */}
      <section className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Innovation Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI & Machine Learning',
                description: 'Build the next generation of intelligent systems and applications',
                icon: '🤖'
              },
              {
                title: 'Web3 & Blockchain',
                description: 'Develop decentralized solutions for the future of finance and technology',
                icon: '⛓️'
              },
              {
                title: 'Deep Tech',
                description: 'Push the boundaries of what is possible with cutting-edge technology',
                icon: '🔬'
              }
            ].map((track, idx) => (
              <div 
                key={idx}
                className="p-8 bg-[#040423] rounded-xl border border-[#EF400A] hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-4">{track.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{track.title}</h3>
                <p className="text-gray-300">{track.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="apply" className="py-20 bg-[#040423]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Submit Application',
                  description: 'Tell us about your vision, team, and technology'
                },
                {
                  step: '02',
                  title: 'Initial Review',
                  description: 'Our team evaluates your application and potential'
                },
                {
                  step: '03',
                  title: 'Technical Interview',
                  description: 'Deep dive into your technology and roadmap'
                },
                {
                  step: '04',
                  title: 'Final Selection',
                  description: 'Selected teams receive offers to join the program'
                }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-8 items-start p-6 bg-[#0a0a2f] rounded-xl">
                  <div className="text-[#EF400A] text-4xl font-bold">{step.step}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/apply"
                className="inline-block px-6 py-3 md:px-12 md:py-6 bg-[#EF400A] text-white rounded-full text-base md:text-xl font-semibold hover:bg-[#ff5a2b] transition-colors"
              >
                Start Your Application
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
            Join the next generation of technology leaders
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <Link
              href="/apply"
              className="px-4 py-2 md:px-8 md:py-4 bg-[#EF400A] text-white rounded-full text-sm md:text-lg font-semibold hover:bg-[#ff5a2b] transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 md:px-8 md:py-4 border border-[#EF400A] text-[#EF400A] rounded-full text-sm md:text-lg font-semibold hover:bg-[#EF400A] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}