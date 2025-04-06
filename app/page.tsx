'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Residency() {

  const [selectedTrack, setSelectedTrack] = useState('All Tracks');
  

  return (
    <main className="min-h-screen bg-[#040423] text-white">
      <Navbar />
      
      {/* Hero Section - improved mobile spacing */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040423] via-transparent to-[#040423] z-10" />
        <div className="absolute inset-0 bg-[url('/residency-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 z-5">
    {/* Insert the SVG code here or reference it as a file */}
    <img src="/a.svg" className="w-full h-full object-cover" alt="" />
  </div>
        <div className="container mx-auto relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
            <span className="text-[#EF400A]">NEXT12</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Restructing global innovation and growth
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


      <section className="py-20 bg-[#0a0a2f]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">
        <span className="text-[#EF400A]">Next12</span>
        <span className="text-white"> Programs</span>
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        We offer a comprehensive suite of programs designed to support founders at every stage of their journey, from idea validation to market expansion.
      </p>
    </div>
    
    {/* Programs Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Ignite Program Card */}
      <div className="bg-[#080830] rounded-xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl">
        <div className="relative h-48">
          <Image
            src="/ignite.jpg"
            alt="Ignite Program"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080830] to-transparent"></div>
          <div className="absolute top-4 left-4 bg-[#EF400A] text-white text-xs font-bold px-3 py-1 rounded-full">
            12 Days
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">Ignite Program</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            An intensive residency program providing unique mentorship for founders to rapidly validate and refine their business models.
          </p>
          <div className="flex justify-between items-center">
            <Link 
              href="/Ignite"
              className="text-[#EF400A] font-semibold text-sm flex items-center hover:underline"
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="flex space-x-1">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#EF400A]"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* The Hubs Card */}
      <div className="bg-[#080830] rounded-xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl">
        <div className="relative h-48">
          <Image
            src="/office.jpg"
            alt="The Hubs"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080830] to-transparent"></div>
          <div className="absolute top-4 left-4 bg-[#EF400A] text-white text-xs font-bold px-3 py-1 rounded-full">
            Post-Ignite
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">The Hubs</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            A post-Ignite support system offering dedicated office spaces, weekly advisor sessions, and investor pitch opportunities.
          </p>
          <div className="flex justify-between items-center">
            <Link 
              href="/Hubs"
              className="text-[#EF400A] font-semibold text-sm flex items-center hover:underline"
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="flex space-x-1">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#EF400A]"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Extended Ignite Card */}
      <div className="bg-[#080830] rounded-xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl">
        <div className="relative h-48">
          <Image
            src="/residency.jpeg"
            alt="Extended Ignite"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080830] to-transparent"></div>
          <div className="absolute top-4 left-4 bg-[#EF400A] text-white text-xs font-bold px-3 py-1 rounded-full">
            12 Weeks
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">Extended Ignite</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            A comprehensive residency program for startups requiring deeper technical and business development support.
          </p>
          <div className="flex justify-between items-center">
            <Link 
              href="/residency"
              className="text-[#EF400A] font-semibold text-sm flex items-center hover:underline"
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="flex space-x-1">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#EF400A]"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Investor Cabal Card */}
      <div className="bg-[#080830] rounded-xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl">
        <div className="relative h-48">
          <Image
            src="investors.jpg"
            alt="Investor Cabal"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080830] to-transparent"></div>
          <div className="absolute top-4 left-4 bg-[#EF400A] text-white text-xs font-bold px-3 py-1 rounded-full">
            Ongoing
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">Investor Cabal</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            An exclusive network of investors aligned with our mission to fund and support the most promising startups from our programs.
          </p>
          <div className="flex justify-between items-center">
            <Link 
              href="/Investor"
              className="text-[#EF400A] font-semibold text-sm flex items-center hover:underline"
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="flex space-x-1">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#EF400A]"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* View All Programs CTA
    <div className="text-center mt-12">
      <Link
        href="/apply"
        className="inline-block px-6 py-3 border border-[#EF400A] text-[#EF400A] rounded-full font-semibold hover:bg-[#EF400A] hover:text-white transition-colors"
      >
        Apply
      </Link>
    </div> */}
  </div>
</section>


      {/* Our Programs Section - NEW SECTION */}
      <section className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
        
          

        
          
          {/* Program Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            <div className="text-center p-6 bg-[#080830] rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-[#EF400A] mb-2">800+</div>
              <div className="text-sm md:text-base text-gray-300">Investors</div>
            </div>
            <div className="text-center p-6 bg-[#080830] rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-[#EF400A] mb-2">$100M+</div>
              <div className="text-sm md:text-base text-gray-300">Funding </div>
            </div>
            <div className="text-center p-6 bg-[#080830] rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-[#EF400A] mb-2">50+</div>
              <div className="text-sm md:text-base text-gray-300">Mentors</div>
            </div>
            <div className="text-center p-6 bg-[#080830] rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-[#EF400A] mb-2">20+</div>
              <div className="text-sm md:text-base text-gray-300">Countries</div>
            </div>
          </div>
        </div>
      </section>



      {/* Program Overview - improved layout */}
      <section id="program" className="py-12 md:py-20 bg-[#040423]">
        <div className="container mx-auto px-4">
          {/* First Section - Image Left */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-20">
            <div className="flex-1">
              <video
                src="/h.mp4"
                autoPlay
                loop
                muted
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
                Scale Globally
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                Transform your business model to achieve global scalability. Our program provides the framework and expertise to help you expand into international markets with confidence.
              </p>
            </div>
          </div>

          {/* Second Section - Image Right */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-20">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
                World-Class Mentorship
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                Gain access to mentors who have built and scaled global products. Learn from their experiences, avoid common pitfalls, and accelerate your path to success.
              </p>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <Image
                src="/mentor2.jpg"
                alt="Mentorship"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Third Section - Image Left */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-20">
            <div className="flex-1">
              <Image
                src="/wellness.jpg"
                alt="Wellness Program"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
                Holistic Wellness
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                Our curated wellness, nutrition, and family health program ensures peak productivity and work-life balance. We believe in supporting the whole entrepreneur.
              </p>
            </div>
          </div>

          {/* Fourth Section - Image Right */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
                Investor Access
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                Gain direct access to our network of investors at the end of the program. Present your refined business model and secure the funding you need to scale.
              </p>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <Image
                src="mentor.jpg"
                alt="Investor Access"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs Section - Card-based layout */}


{/* Innovation Tracks - Agnostic Approach */}
<section className="py-20 bg-[#040423] relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Innovation Tracks</h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        We support founders across all industries and technologies. Our agnostic approach ensures that innovation thrives regardless of the field.
      </p>
    </div>
    
    {/* Track Categories - Horizontal Scrolling */}
    <div className="flex justify-center mb-12 relative z-10">
      <div className="inline-flex flex-nowrap overflow-x-auto pb-4 hide-scrollbar max-w-full">
        {['All Tracks', 'AI & ML', 'Web3', 'Fintech', 'Creator Economy', 'Climate Tech', 'Health Tech', 'Enterprise'].map((category, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedTrack(category)}
            className={`whitespace-nowrap px-6 py-3 mx-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
              category === selectedTrack
                ? 'bg-[#EF400A] text-white' 
                : 'bg-[#0f0f3f] text-gray-300 hover:bg-[#151550]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
    
    {/* Tracks Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
      {[
        {
          title: 'Artificial Intelligence',
          icon: '/icons/ai-icon.svg',
          description: 'From generative AI to machine learning models that transform industries.',
          examples: 'LLMs, Computer Vision, Predictive Analytics',
          color: 'from-[#3b82f6] to-[#1e40af]',
          category: 'AI & ML'
        },
        {
          title: 'Web3 & Blockchain',
          icon: '/icons/blockchain-icon.svg',
          description: 'Decentralized applications and blockchain innovations reshaping digital ownership.',
          examples: 'DeFi, DAOs, Smart Contracts',
          color: 'from-[#8b5cf6] to-[#6d28d9]',
          category: 'Web3'
        },
        {
          title: 'Fintech',
          icon: '/icons/fintech-icon.svg',
          description: 'Revolutionizing financial services through technology and accessibility.',
          examples: 'Payments, WealthTech, InsurTech',
          color: 'from-[#10b981] to-[#047857]',
          category: 'Fintech'
        },
        {
          title: 'Creator Economy',
          icon: '/icons/creator-icon.svg',
          description: 'Empowering creators with tools to monetize their content and build communities.',
          examples: 'Content Platforms, NFTs, Social Tokens',
          color: 'from-[#f59e0b] to-[#b45309]',
          category: 'Creator Economy'
        },
        {
          title: 'Climate Tech',
          icon: '/icons/climate-icon.svg',
          description: 'Innovative solutions addressing climate change and environmental challenges.',
          examples: 'Clean Energy, Carbon Capture, Sustainable Materials',
          color: 'from-[#34d399] to-[#059669]',
          category: 'Climate Tech'
        },
        {
          title: 'Health Tech',
          icon: '/icons/health-icon.svg',
          description: 'Transforming healthcare delivery, diagnostics, and patient experiences.',
          examples: 'Digital Therapeutics, Telemedicine, Diagnostics',
          color: 'from-[#ec4899] to-[#be185d]',
          category: 'Health Tech'
        },
        {
          title: 'Enterprise SaaS',
          icon: '/icons/enterprise-icon.svg',
          description: 'B2B solutions that streamline operations and drive business efficiency.',
          examples: 'Productivity Tools, Data Analytics, Automation',
          color: 'from-[#6366f1] to-[#4338ca]',
          category: 'Enterprise'
        },
        {
          title: 'Hardware & IoT',
          icon: '/icons/hardware-icon.svg',
          description: 'Physical products and connected devices creating new possibilities.',
          examples: 'Robotics, Wearables, Smart Devices',
          color: 'from-[#f43f5e] to-[#be123c]',
          category: 'Enterprise'
        },
        {
          title: 'Emerging Technologies',
          icon: '/icons/emerging-icon.svg',
          description: 'Cutting-edge innovations that defy traditional categorization.',
          examples: 'Quantum Computing, Spatial Computing, Biotech',
          color: 'from-[#8b5cf6] to-[#4c1d95]',
          category: 'AI & ML'
        }
      ]
      .filter(track => selectedTrack === 'All Tracks' || track.category === selectedTrack)
      .map((track, idx) => (
        <div 
          key={idx}
          className="bg-[#080830] rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl group"
        >
          <div className={`h-2 bg-gradient-to-r ${track.color}`}></div>
          <div className="p-8">
            <div className="flex items-start mb-4">
              
              <h3 className="text-xl font-bold">{track.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">
              {track.description}
            </p>
            <div className="bg-[#0f0f3f] rounded-lg p-3 text-sm text-gray-300">
              <span className="text-white font-semibold">Examples:</span> {track.examples}
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {/* Custom Track CTA */}
    <div className="mt-16 text-center">
      <p className="text-gray-300 mb-6">
        Don&lsquo;t see your specific field? We support innovation across all sectors.
      </p>
      <Link
        href="/apply"
        className="relative inline-flex  px-6 py-3 border border-[#EF400A] text-[#EF400A] rounded-full font-semibold hover:bg-[#EF400A] hover:text-white transition-colors"
      >
        Apply With Your Unique Innovation
      </Link>
    </div>
  </div>
</section>

<section id="apply" className="py-24 bg-gradient-to-b from-[#0a0a2f] to-[#070720] relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#EF400A]/5 blur-3xl"></div>
    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#3a3af1]/5 blur-3xl"></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <div className="max-w-2xl mx-auto text-center mb-16">
      <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
        Application Process
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] mx-auto mb-6"></div>
      <p className="text-gray-300 text-lg">Four simple steps to join our exclusive program</p>
    </div>
    
    {/* Process Timeline */}
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        {/* Vertical line for desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-[#EF400A]/80 to-[#EF400A]/20 transform -translate-x-1/2 rounded-full"></div>
        
        <div className="space-y-12 lg:space-y-0">
          {[
            {
              step: '01',
              title: 'Submit Application',
              description: 'Tell us about your vision, team, and technology',
              icon: '📝'
            },
            {
              step: '02',
              title: 'Initial Review',
              description: 'Our team evaluates your application and potential',
              icon: '🔍'
            },
            {
              step: '03',
              title: 'Technical Interview',
              description: 'Deep dive into your technology and roadmap',
              icon: '💻'
            },
            {
              step: '04',
              title: 'Final Selection',
              description: 'Selected teams receive offers to join the program',
              icon: '🚀'
            }
          ].map((step, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''} items-center`}>
              {/* Timeline Circle */}
             
              {/* Content Card */}
              <div className={`w-full lg:w-5/12 mt-4 lg:mt-0 ${idx % 2 === 0 ? 'lg:text-right' : ''}`}>
                <div className="transform transition-all duration-300 hover:translate-y-1 hover:-translate-x-1 group">
                  <div className="bg-gradient-to-br from-[#0c0c3d] to-[#151560] p-8 rounded-2xl shadow-xl border border-[#ffffff10] backdrop-blur-sm group-hover:border-[#EF400A]/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="text-[#EF400A] text-4xl font-bold font-mono">{step.step}</div>
                      <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Spacer for timeline layout */}
              <div className="hidden lg:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Button */}
      
    </div>
  </div>
</section>

      {/* Footer CTA */}
      <section className="py-20 bg-[#040423]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
            Join the next generation of technology leaders
          </p>
          <div className="mt-20 text-center">
        <div className="inline-block relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-200"></div>
          <Link
            href="/apply?program=residency"
            className="relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-[#EF400A]/50 transition-all duration-300"
          >
            Start Your Application
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
