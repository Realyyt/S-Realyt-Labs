"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

// Navbar component

// Home Page
export default function Home() {
  return (
    <main className="min-h-screen bg-[#040423] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0a2f] opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#040423] to-transparent"></div>
          <Image
            src="/hero-bg.jpg" 
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fueling the next generation of <span className="text-[#EF400A]">founders</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Next12 invests in ambitious entrepreneurs solving meaningful problems with technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/vc" className="bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity text-center">
                Join as an Investor
              </Link>
              <Link href="#portfolio" className="bg-transparent border border-[#EF400A] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#EF400A]/10 transition-colors text-center">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <svg className="animate-bounce w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 bg-[#040423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We&apos;ve invested in over 20 companies across various sectors, helping them scale and achieve their potential.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-[#0a0a2f] rounded-xl border border-[#EF400A]/10 p-4 transition-transform hover:scale-105 hover:border-[#EF400A]/30">
                <div className="h-20 w-20 bg-[#0a0a2f] rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-2xl font-bold text-[#EF400A]">C{item}</div>
                </div>
                <h3 className="text-lg font-semibold mb-1">Company {item}</h3>
                <p className="text-sm text-gray-400">AI-powered productivity</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="#" className="text-[#EF400A] hover:text-[#ff5a2b] font-medium inline-flex items-center">
              See all portfolio companies
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section id="thesis" className="py-16 md:py-24 bg-[#0a0a2f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Investment Thesis</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We focus on these key sectors where technology can drive significant impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Artificial Intelligence",
                description: "Tools and platforms that harness AI to solve complex problems and enhance human capabilities.",
                icon: (
                  <svg className="w-10 h-10 text-[#EF400A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Future of Work",
                description: "Solutions that transform how we work, collaborate, and manage remote and distributed teams.",
                icon: (
                  <svg className="w-10 h-10 text-[#EF400A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Climate Tech",
                description: "Technologies that combat climate change and promote sustainability across industries.",
                icon: (
                  <svg className="w-10 h-10 text-[#EF400A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#040423] rounded-xl border border-[#EF400A]/10 p-6 flex flex-col items-center text-center hover:border-[#EF400A]/30 transition-colors">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-[#040423] rounded-xl border border-[#EF400A]/20 p-6 md:p-8">
            <div className="md:flex items-center">
              <div className="md:w-2/3 md:pr-8">
                <h3 className="text-2xl font-semibold mb-4">Our Investment Approach</h3>
                <ul className="space-y-3">
                  {[
                    "We invest in pre-seed to series A startups with technical founders",
                    "Typical check size ranges from $50K to $500K",
                    "We look for global potential with initial traction",
                    "Beyond capital, we provide network access, strategic guidance, and operational support"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#EF400A] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <div className="bg-[#0a0a2f] rounded-xl p-4 border border-[#EF400A]/20">
                  <div className="text-sm text-gray-400 mb-2">Investment Stats</div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Portfolio Companies', value: '20+' },
                      { label: 'Investment Range', value: '$10K - $500K' },
                      { label: 'Success Rate', value: '85%' },
                      { label: 'Global Network', value: '500+ VCs' }
                    ].map((stat, idx) => (
                      <div key={idx} className="bg-[#040423]/50 p-3 rounded-lg border border-[#EF400A]/10">
                        <div className="text-xs text-gray-400">{stat.label}</div>
                        <div className="text-lg font-bold text-[#EF400A]">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 bg-[#040423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A diverse team of operators, investors, and technologists who have built and scaled companies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((person) => (
              <div key={person} className="bg-[#0a0a2f] rounded-xl border border-[#EF400A]/10 overflow-hidden hover:border-[#EF400A]/30 transition-colors">
                <div className="h-64 bg-[#0a0a2f] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#040423] flex items-center justify-center">
                      <span className="text-[#EF400A] font-bold text-xl">P{person}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Partner {person}</h3>
                  <p className="text-[#EF400A] text-sm mb-3">Founding Partner</p>
                  <p className="text-gray-300 text-sm mb-4">
                    Former founder with 15+ years of experience in building and scaling technology companies.
                  </p>
                  <div className="flex space-x-3">
                    {['twitter', 'linkedin', 'github'].map((social) => (
                      <a key={social} href="#" className="text-gray-400 hover:text-[#EF400A]">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-[#0a0a2f] rounded-xl border border-[#EF400A]/20 p-6 md:p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">Advisors & Mentors</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Our portfolio companies benefit from the guidance of industry leaders and experts.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((advisor) => (
                  <div key={advisor} className="bg-[#040423] rounded-lg border border-[#EF400A]/10 p-4 flex items-center space-x-3 hover:border-[#EF400A]/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#0a0a2f] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#EF400A] font-bold text-sm">A{advisor}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Advisor {advisor}</h4>
                      <p className="text-gray-400 text-xs">CEO, Company {advisor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-16 md:py-24 bg-[#0a0a2f] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#040423] opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2f] to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to elevate your startup?</h2>
              <p className="text-gray-300 mb-6">
                We&apos;re actively investing in ambitious founders with bold ideas. Apply now to join our portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#" className="bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity text-center">
                  Apply for Funding
                </Link>
                <Link href="#" className="bg-transparent border border-[#EF400A] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#EF400A]/10 transition-colors text-center">
                  Schedule a Call
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-[#040423] rounded-xl border border-[#EF400A]/20 p-6">
                <h3 className="text-xl font-semibold mb-6">What We Look For</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Technical Founders",
                      description: "Strong technical backgrounds with deep domain expertise"
                    },
                    {
                      title: "Market Potential",
                      description: "Addressing large and growing markets with global potential"
                    },
                    {
                      title: "Product Innovation",
                      description: "Unique approach with sustainable competitive advantage"
                    },
                    {
                      title: "Traction",
                      description: "Early validation with users or customers showing demand"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#EF400A] flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </main>
  );
}