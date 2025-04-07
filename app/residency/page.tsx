'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Residency() {
  return (
    <main className="min-h-screen bg-[#040423] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 md:py-0" style={{backgroundImage: "url('/residency.jpeg')"}}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#040423] via-transparent to-[#040423] z-10" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" />
        <div className="container mx-auto relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
            <span className="text-[#EF400A]">NEXT12</span> RESIDENCY
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            A world-class 12-week innovation laboratory for exceptional founders building breakthrough technologies 
            that will shape our future
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <Link 
              href="/apply?program=residency"
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

      {/* Program Overview */}
      <section id="program" className="py-12 md:py-20 bg-[#040423]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
                Accelerate Your Vision Into Reality
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                Next12 Residency is a world-class innovation and investment laboratory designed to accelerate the success of exceptional founders. Over 12 intensive weeks, you&apos;ll work alongside industry experts, receive personalized mentorship, and access state-of-the-art resources in a high-impact environment specifically engineered to bridge innovation and investment.
              </p>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                Our program brings together visionary founders, top-tier investors, and global business leaders to unlock game-changing opportunities and create the ultimate ecosystem for startup success.
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
                    'Intensive product development and go-to-market support',
                    'Global network of founders, investors, and partners',
                    'Hands-on workshops focused on product development and growth',
                    'One-on-one mentorship from successful entrepreneurs'
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

      {/* Who It's For */}
      <section className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Who It&apos;s For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Founders & Startup Teams',
                description: 'Early-stage startups ready to scale and established companies seeking innovation',
                icon: '🚀'
              },
              {
                title: 'Tech & Product Builders',
                description: 'Technical innovators aiming to develop and scale breakthrough solutions',
                icon: '💻'
              },
              {
                title: 'Visionary Creators',
                description: 'Entrepreneurs with bold visions looking to make a significant global impact',
                icon: '💡'
              }
            ].map((persona, idx) => (
              <div 
                key={idx}
                className="p-8 bg-[#040423] rounded-xl border border-[#EF400A] hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-4">{persona.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{persona.title}</h3>
                <p className="text-gray-300">{persona.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Tracks - Updated to be agnostic */}
      <section className="py-20 bg-[#040423]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Innovation Without Boundaries</h2>
          <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Next12 Residency is technology and industry agnostic. We welcome groundbreaking ideas across all sectors and domains. Our focus is on the quality of your vision and its potential for impact, not the specific field you&apos;re innovating in.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Technology Agnostic',
                description: 'Whether you\'re building with AI, blockchain, biotech, cleantech, or any other technology stack, our program is designed to support your specific needs',
                icon: '🔄'
              },
              {
                title: 'Industry Agnostic',
                description: 'From healthcare to finance, education to entertainment, agriculture to infrastructure – innovation can happen anywhere, and we\'re here to nurture it',
                icon: '🌐'
              },
              {
                title: 'Impact Focused',
                description: 'What matters most is your solution\'s potential to create meaningful change and your team\'s ability to execute on that vision',
                icon: '✨'
              }
            ].map((track, idx) => (
              <div 
                key={idx}
                className="p-8 bg-[#0a0a2f] rounded-xl border border-[#EF400A] hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-4">{track.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{track.title}</h3>
                <p className="text-gray-300">{track.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Experience */}
      <section className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">The Residency Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#EF400A]">Program Structure</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Intensive Building Sprints',
                    description: 'Focused product development cycles with dedicated mentorship and support'
                  },
                  {
                    title: 'Expert Workshops',
                    description: 'Deep dive sessions on product development, business strategy, and growth hacking'
                  },
                  {
                    title: 'Mentorship Sessions',
                    description: 'One-on-one guidance from industry experts and successful entrepreneurs'
                  },
                  {
                    title: 'Investor Panels',
                    description: 'Direct access to potential funding opportunities through curated investor sessions'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-[#040423] rounded-xl">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#EF400A]">Program Outcomes</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Demo Day',
                    description: 'Showcase your progress to a curated audience of investors and partners'
                  },
                  {
                    title: 'Global Exposure',
                    description: 'Expand your reach beyond your local market with international connections'
                  },
                  {
                    title: 'Investment Readiness',
                    description: 'Fine-tune your pitch and prepare your venture for funding opportunities'
                  },
                  {
                    title: 'Market Expansion',
                    description: 'Develop strategies to scale and expand into high-growth regions'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-[#040423] rounded-xl">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-[#040423]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#EF400A]">For Founders</h3>
              <div className="bg-[#0a0a2f] p-8 rounded-xl h-full">
                <ul className="space-y-4">
                  {[
                    'Direct funding opportunities from VCs and angel investors',
                    'Global exposure beyond your local market',
                    'Personalized mentorship from experienced founders',
                    'Execution-focused environment for deep work and collaboration',
                    'Access to exclusive frameworks, tools, and strategies',
                    'Market expansion support for scaling into high-growth regions'
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-[#EF400A] text-xl">•</span>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#EF400A]">For Investors & Partners</h3>
              <div className="bg-[#0a0a2f] p-8 rounded-xl h-full">
                <ul className="space-y-4">
                  {[
                    'Exclusive access to high-potential, investment-ready startups',
                    'Early investment advantages on promising ventures',
                    'High-value global network expansion with founders and investors',
                    'Co-hosting opportunities to bring Next12 to your city',
                    'Speaking engagements to share insights on global innovation',
                    'Position your brand at the forefront of innovation'
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

      {/* Global Vision */}
      <section className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Global Vision</h2>
          <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Next12 is expanding globally with a mission to launch in 150+ countries over the next decade, impacting thousands of startups worldwide.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              'Thailand', 'Singapore', 'Indonesia', 'Nigeria', 'Lithuania', 'India', 'Malaysia', 'United States', 'Brazil', 'Germany', 'Australia', 'Kenya'
            ].map((country, idx) => (
              <div key={idx} className="p-4 bg-[#040423] rounded-xl text-center">
                <p className="font-semibold">{country}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-[#EF400A] font-semibold">Join us as we expand Next12 to every continent, one city at a time.</p>
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
                href="/apply?program=residency"
                className="inline-block px-6 py-3 md:px-12 md:py-6 bg-[#EF400A] text-white rounded-full text-base md:text-xl font-semibold hover:bg-[#ff5a2b] transition-colors"
              >
                Start Your Application
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-[#040423]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                type: 'Investment Firms & VCs',
                description: 'Providing direct funding opportunities for our startups'
              },
              {
                type: 'Tech & Innovation Hubs',
                description: 'Offering access to workspaces and talent pools'
              },
              {
                type: 'Corporate Partners',
                description: 'Supporting startups through funding and mentorship'
              },
              {
                type: 'Government & Policy Makers',
                description: 'Creating enabling environments for startups to thrive'
              }
            ].map((partner, idx) => (
              <div key={idx} className="p-6 bg-[#0a0a2f] rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-[#EF400A]">{partner.type}</h3>
                <p className="text-gray-300">{partner.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 md:px-10 md:py-4 border border-[#EF400A] text-[#EF400A] rounded-full text-base md:text-lg font-semibold hover:bg-[#EF400A] hover:text-white transition-colors"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
            Join the next generation of technology leaders and build something extraordinary
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <Link
              href="/apply?program=residency"
              className="px-4 py-2 md:px-8 md:py-4 bg-[#EF400A] text-white rounded-full text-sm md:text-lg font-semibold hover:bg-[#ff5a2b] transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}