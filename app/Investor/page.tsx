"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Navbar component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#040423]/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-transparent bg-clip-text">Next12</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Portfolio', 'Thesis', 'Team', 'Resources'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-[#EF400A] transition-colors text-sm uppercase tracking-wider font-medium"
              >
                {item}
              </Link>
            ))}
            <Link 
              href="/apply" 
              className="bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white px-5 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#EF400A]/20 transition-all"
            >
              Apply for Funding
            </Link>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#0a0a2f] border-t border-[#EF400A]/10 mt-3"
        >
          <div className="px-4 py-5 space-y-4">
            {['Portfolio', 'Thesis', 'Team', 'Resources'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="block text-white/80 hover:text-[#EF400A] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link 
              href="/apply" 
              className="block bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white px-4 py-2 rounded-full text-sm font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply for Funding
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="bg-[#0a0a2f] border-t border-[#EF400A]/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-transparent bg-clip-text">Next12</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Next12 invests in ambitious entrepreneurs solving meaningful problems with technology. We&apos;re not just investors—we&apos;re partners in your journey.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'instagram'].map((social) => (
                <a key={social} href={`https://${social}.com/next12`} className="text-gray-400 hover:text-[#EF400A] transition-colors">
                  <span className="sr-only">{social}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'twitter' && <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />}
                    {social === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>}
                    {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Portfolio', 'Thesis', 'Team', 'Resources', 'Apply'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-[#EF400A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>San Francisco • New York • Lagos</li>
              <li>hello@next12.vc</li>
              <li className="pt-4">
                <Link href="/contact" className="text-[#EF400A] hover:underline">
                  Get in touch →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#EF400A]/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Next12 Ventures. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-[#EF400A] text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-[#EF400A] text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Home Page
export default function Home() {
  return (
    <main className="min-h-screen bg-[#040423] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0a2f] opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#040423] to-transparent"></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <Image
            src="/investors.jpg" 
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24"
        >
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Fueling the next generation of <span className="bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-transparent bg-clip-text">founders</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Next12 invests in ambitious entrepreneurs solving meaningful problems with technology. We&apos;re not just investors—we&apos;re partners in your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/vc" className="bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-[#EF400A]/20 transition-all text-center">
                Join as an Investor
              </Link>
              <Link href="#portfolio" className="bg-transparent border border-[#EF400A] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#EF400A]/10 transition-colors text-center group">
                View Portfolio
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 md:py-32 bg-[#040423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="md:flex md:items-center md:gap-16">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Why Partner With Next12</h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  We&apos;re not just investors—we&apos;re partners in your journey. With deep operational expertise, technical knowledge, and a global network, we help founders navigate the challenges of building category-defining companies.
                </p>
                <div className="space-y-8">
                  {[
                    {
                      title: "Founder-First Approach",
                      description: "We understand the founder journey because we've been there. Our team has built and scaled multiple ventures across diverse markets."
                    },
                    {
                      title: "Speed & Decisiveness",
                      description: "Our streamlined process gets you from first meeting to term sheet in as little as 3 weeks. We move at founder speed."
                    },
                    {
                      title: "Global Network",
                      description: "Tap into our network of 500+ VCs, industry experts, and potential customers to accelerate your growth."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="mr-5 mt-1">
                        <div className="w-12 h-12 rounded-full bg-[#EF400A]/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#EF400A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-[#0a0a2f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Portfolio</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              We partner with exceptional founders building category-defining companies across various sectors.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Quantum AI",
                description: "AI-powered quantum computing platform for enterprise applications",
                logo: "/company1.svg",
                category: "Artificial Intelligence",
                raised: "$12M Series A"
              },
              {
                name: "GreenTech",
                description: "Carbon capture technology for industrial applications",
                logo: "/company2.svg",
                category: "Climate Tech",
                raised: "$8M Seed"
              },
              {
                name: "HealthSync",
                description: "Remote patient monitoring platform for chronic conditions",
                logo: "/company3.svg",
                category: "Digital Health",
                raised: "$5M Seed"
              },
              {
                name: "FinFlow",
                description: "Next-generation payment infrastructure for emerging markets",
                logo: "/company4.svg",
                category: "Fintech",
                raised: "$15M Series A"
              },
              {
                name: "WorkOS",
                description: "Collaborative workspace platform for distributed teams",
                logo: "/company5.svg",
                category: "Future of Work",
                raised: "$7M Seed"
              },
              {
                name: "DataSphere",
                description: "Privacy-preserving data collaboration platform",
                logo: "/company6.svg",
                category: "Data Infrastructure",
                raised: "$10M Series A"
              }
            ].map((company, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#040423] rounded-xl border border-[#EF400A]/10 overflow-hidden hover:border-[#EF400A]/30 hover:shadow-lg hover:shadow-[#EF400A]/5 transition-all"
              >
                <div className="h-48 bg-[#0a0a2f] flex items-center justify-center p-6 border-b border-[#EF400A]/10">
                  <div className="w-16 h-16 rounded-full bg-[#EF400A]/20 flex items-center justify-center text-[#EF400A] font-bold text-xl">
                    {company.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{company.name}</h3>
                    <span className="text-xs font-medium bg-[#EF400A]/20 text-[#EF400A] px-2 py-1 rounded-full">
                      {company.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{company.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{company.raised}</span>
                    <Link href={`/portfolio/${company.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#EF400A] hover:underline text-sm flex items-center">
                      View Case Study
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/portfolio" className="inline-flex items-center bg-transparent border border-[#EF400A] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#EF400A]/10 transition-colors">
              View All Portfolio Companies
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section id="thesis" className="py-20 md:py-32 bg-[#040423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Investment Thesis</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              We focus on transformative companies at the intersection of deep tech and large markets with significant potential for societal impact.
            </p>
          </motion.div>
          
          <div className="md:grid md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#0a0a2f] rounded-xl border border-[#EF400A]/10 p-8 shadow-xl shadow-[#EF400A]/5 mb-10 md:mb-0"
            >
              <h3 className="text-2xl font-semibold mb-6">Core Investment Pillars</h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Transformative Technologies",
                    description: "Investing in groundbreaking innovations that redefine industries and create new markets."
                  },
                  {
                    title: "Global Scalability",
                    description: "Supporting solutions with the potential to scale across diverse markets and geographies."
                  },
                  {
                    title: "Founder-Led Innovation",
                    description: "Backing visionary entrepreneurs with deep domain expertise and execution capabilities."
                  },
                  {
                    title: "Sustainable Impact",
                    description: "Championing businesses that create long-term value while addressing global challenges."
                  },
                  {
                    title: "Future-Ready Solutions",
                    description: "Focusing on technologies that shape the next decade of digital transformation."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex"
                  >
                    <div className="mr-4 mt-1">
                      <div className="w-8 h-8 rounded-full bg-[#EF400A] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-[#0a0a2f] rounded-xl border border-[#EF400A]/10 p-8 shadow-xl shadow-[#EF400A]/5"
              >
                <h3 className="text-xl font-semibold mb-6">Investment Criteria</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Technical Advantage",
                      description: "Proprietary technology or differentiated approach that creates defensible moats and barriers to entry."
                    },
                    {
                      title: "Market Opportunity",
                      description: "Targeting large TAMs ($1B+) with clear paths to significant market share."
                    },
                    {
                      title: "Team Capabilities",
                      description: "Founders with deep domain expertise, technical backgrounds, and demonstrated execution ability."
                    },
                    {
                      title: "Scalable Economics",
                      description: "Business models with strong unit economics, efficient customer acquisition, and high lifetime value."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="mr-4 mt-1">
                        <svg className="w-6 h-6 text-[#EF400A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#0a0a2f] rounded-xl border border-[#EF400A]/10 p-8 shadow-xl shadow-[#EF400A]/5"
              >
                
                <h3 className="text-xl font-semibold mb-6">Investment Strategy</h3>
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold text-[#EF400A]">Stage Focus</h4>
                    <p className="text-gray-300 mt-2">We invest from pre-seed to Series C companies, with initial checks ranging from $50K to $30M+ and reserves for follow-on investments.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#EF400A]">Geographic Focus</h4>
                    <p className="text-gray-300 mt-2">Global approach with emphasis on North America, Europe, and select emerging markets in Africa and Asia.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#EF400A]">Portfolio Construction</h4>
                    <p className="text-gray-300 mt-2">Balanced portfolio approach with 60% core thesis investments, 30% opportunistic investments, and 10% emerging technology moonshots.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#EF400A]">Value Creation</h4>
                    <p className="text-gray-300 mt-2">Hands-on operational support, strategic guidance, and capital introduction services to drive post-investment growth.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 bg-[#0a0a2f] rounded-xl border border-[#EF400A]/20 p-8 md:p-10 shadow-xl shadow-[#EF400A]/5"
          >
            <div className="md:flex items-center">
              <div className="md:w-2/3 md:pr-10">
                <h3 className="text-2xl font-semibold mb-6">Our Investment Approach</h3>
                <ul className="space-y-4">
                  {[
                    "We invest in pre-seed to series A startups with technical founders",
                    "Typical check size ranges from $50K to $30M+",
                    "We look for global potential with initial traction",
                    "Beyond capital, we provide network access, strategic guidance, and operational support"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <svg className="w-6 h-6 text-[#EF400A] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-[#040423] rounded-xl p-6 border border-[#EF400A]/20 shadow-lg shadow-[#EF400A]/5"
                >
                  <div className="text-sm text-gray-400 mb-4">Investment Stats</div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Portfolio Companies', value: '20+' },
                      { label: 'Investment Range', value: '$50K - $30M+' },
                      { label: 'Success Rate', value: '75%' },
                      { label: 'Global Network', value: '800+ VCs' }
                    ].map((stat, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[#0a0a2f] p-4 rounded-lg border border-[#EF400A]/10 hover:border-[#EF400A]/30 transition-colors"
                      >
                        <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                        <div className="text-xl font-bold text-[#EF400A]">{stat.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 md:py-32 bg-[#040423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Investment Process</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              We&apos;ve streamlined our investment process to be founder-friendly, transparent, and efficient.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                stage: "Initial Screening",
                description: "Submit your deck or intro through our network. We review and respond within 72 hours.",
                icon: (
                  <svg className="w-12 h-12 text-[#EF400A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              {
                stage: "First Meeting",
                description: "30-minute call with one of our Partners to discuss your vision and business model.",
                icon: (
                  <svg className="w-12 h-12 text-[#EF400A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )
              },
              {
                stage: "Deep Dive",
                description: "Technical assessment, market analysis, and follow-up discussions with the entire team.",
                icon: (
                  <svg className="w-12 h-12 text-[#EF400A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                stage: "Term Sheet & Close",
                description: "Clear terms and rapid closing process, usually within 3 weeks from first meeting.",
                icon: (
                  <svg className="w-12 h-12 text-[#EF400A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0a0a2f] rounded-xl border border-[#EF400A]/10 p-8 flex flex-col items-center text-center hover:border-[#EF400A]/30 hover:shadow-lg hover:shadow-[#EF400A]/5 transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <div className="w-10 h-10 rounded-full bg-[#EF400A] flex items-center justify-center text-white font-bold mb-4 text-lg">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-3">{item.stage}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a2f] to-[#0a0a3f] rounded-xl border border-[#EF400A]/20 p-10 text-center shadow-xl shadow-[#EF400A]/5"
          >
            <h3 className="text-2xl font-semibold mb-6">Ready to Start the Conversation?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              We&#39;re always looking for exceptional founders building the future. Submit your deck or schedule an intro call with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/apply" className="bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-[#EF400A]/20 transition-all text-center">
                Submit Your Deck
              </Link>
              <Link href="/contact" className="bg-transparent border border-[#EF400A] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#EF400A]/10 transition-colors text-center group">
                Schedule a Call
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Resources */}
      <section id="resources" className="py-20 md:py-32 bg-[#0a0a2f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Founder Resources</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              We support our founders with more than just capital. Access our exclusive resources and knowledge network.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Next12 Mentor Network",
                description: "Connect with over 100+ industry experts, successful entrepreneurs, and functional specialists for guidance and advice.",
                icon: (
                  <svg className="w-12 h-12 text-[#EF400A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                features: ["1:1 Mentorship", "Monthly Roundtables", "Expert Office Hours"]
              },
              {
                title: "Growth Resources",
                description: "Access our library of templates, playbooks, and tools for everything from fundraising to scaling operations.",
                icon: (
                  <svg className="w-12 h-12 text-[#EF400A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                features: ["Fundraising Toolkit", "Hiring Playbooks", "Growth Marketing Templates"]
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#040423] rounded-xl border border-[#EF400A]/10 p-8 hover:border-[#EF400A]/30 hover:shadow-lg hover:shadow-[#EF400A]/5 transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">{item.icon}</div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 text-lg">{item.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {item.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="bg-[#0a0a2f] p-4 rounded-lg border border-[#EF400A]/10 flex items-center justify-center text-center hover:border-[#EF400A]/30 transition-colors"
                    >
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-[#040423] rounded-xl border border-[#EF400A]/20 p-8 md:p-10 shadow-xl shadow-[#EF400A]/5"
          >
            <div className="md:flex items-center">
              <div className="md:w-2/3 md:pr-10 mb-8 md:mb-0">
                <h3 className="text-2xl font-semibold mb-6">Exclusive Founder Workshops</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Join our monthly workshops covering critical startup topics led by industry experts and successful entrepreneurs.
                </p>
                <ul className="space-y-3">
                  {[
                    "Product-Market Fit Masterclass",
                    "Fundraising Strategy & Execution",
                    "Go-to-Market Playbooks",
                    "Building High-Performance Teams"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <svg className="w-5 h-5 text-[#EF400A] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-white">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link href="/resources" className="inline-flex items-center text-[#EF400A] mt-6 group">
                  Browse all resources
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 md:py-32 bg-[#040423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              A diverse team of operators, investors, and technologists who&apos;ve built and scaled companies across multiple industries.
            </p>
          </motion.div>
          
          <div className="flex justify-center items-center min-h-[600px] mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
              {[
                {
                  name: "Emmanuel Isaac",
                  role: "CEO & Pioneer",
                  bio: "Co-founder, innovation strategist, engineer, startup growth expert, 4x founder, investor with deep expertise in scaling technology ventures.",
                  image: "/GM.jpg",
                  social: {
                    twitter: "https://x.com/Next12Realyt",
                    linkedin: "https://www.linkedin.com/in/realyt/",
                  }
                },
                {
                  name: "Salem Andero",
                  role: "President & Pioneer",
                  bio: "Co-founder, serial entrepreneur, global connector with extensive experience building international networks across tech ecosystems. 3x founder, advisor.",
                  image: "/GM2.jpg",
                  social: {
                    twitter: "https://x.com/SalemAndero",
                    linkedin: "https://www.linkedin.com/in/salemandero/",
                  }
                }
              ].map((person, index) => (
                <motion.div 
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#0a0a2f] rounded-xl border border-[#EF400A]/10 overflow-hidden hover:border-[#EF400A]/30 hover:shadow-lg hover:shadow-[#EF400A]/5 transition-all group"
                >
                  <div className="h-80 bg-[#0a0a2f] relative overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2f] to-transparent opacity-70"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-2">{person.name}</h3>
                    <p className="text-[#EF400A] font-medium mb-4">{person.role}</p>
                    <p className="text-gray-300 mb-6">{person.bio}</p>
                    <div className="flex space-x-4">
                      <a href={person.social.twitter} className="text-gray-400 hover:text-[#EF400A] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href={person.social.linkedin} className="text-gray-400 hover:text-[#EF400A] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#0a0a2f] rounded-xl border border-[#EF400A]/20 p-10 shadow-xl shadow-[#EF400A]/5"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold mb-4">Advisors & Mentors</h3>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Our portfolio companies benefit from the guidance of industry leaders and experts across various domains.
              </p>
            </div>
            
            <div className="flex justify-center gap-6">
              {[
                { name: "Pradesh Raj", role: "", company: "Stratos Trading" },
                { name: "Kayden Borhan", role: "", company: "Blue In" },
              ].map((advisor, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-[#040423] rounded-lg border border-[#EF400A]/10 p-5 hover:border-[#EF400A]/30 hover:shadow-lg hover:shadow-[#EF400A]/5 transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EF400A] to-[#ff5a2b] flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {advisor.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{advisor.name}</h4>
                      <p className="text-gray-400 text-sm">{advisor.role}</p>
                      <p className="text-[#EF400A] text-xs">{advisor.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-20 md:py-32 bg-[#0a0a2f] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2f] to-transparent"></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <Image
            src="/mentor.jpg" 
            alt="Apply background"
            fill
            className="object-cover object-center"
            quality={90}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:flex items-center gap-16"
          >
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Ready to elevate your startup?</h2>
              <p className="text-white text-xl mb-10 leading-relaxed">
                We&apos;re actively investing in ambitious founders with bold ideas and technical expertise. Apply now to join our portfolio of category-defining companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/apply" className="bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-[#EF400A]/20 transition-all text-center">
                  Apply for Funding
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#040423]/90 backdrop-blur-md rounded-xl border border-[#EF400A]/20 p-10 shadow-xl shadow-[#EF400A]/5"
              >
                <h3 className="text-2xl font-semibold mb-8">What We Look For</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Technical Founders",
                      description: "Strong technical backgrounds with deep domain expertise in their respective fields"
                    },
                    {
                      title: "Market Potential",
                      description: "Addressing large and growing markets with global potential and clear path to scale"
                    },
                    {
                      title: "Product Innovation",
                      description: "Unique approach with sustainable competitive advantage and defensible technology"
                    },
                    {
                      title: "Traction & Validation",
                      description: "Early validation with users or customers showing clear demand and product-market fit"
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="mr-5 mt-1">
                        <div className="w-10 h-10 rounded-full bg-[#EF400A]/20 flex items-center justify-center text-[#EF400A]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-[#040423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Founders Say</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Hear directly from the entrepreneurs we&#39;ve partnered with on their journey to building category-defining companies.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Next12 has been instrumental in our growth. Beyond capital, their strategic guidance and network access helped us scale faster than we could have imagined.",
                author: "Maya Johnson",
                role: "CEO, QuantumAI",
                image: "/founder1.jpg"
              },
              {
                quote: "What sets Next12 apart is their founder-first approach. They understand the challenges of building a company and provide support exactly when and where you need it.",
                author: "Raj Patel",
                role: "Founder, GreenTech",
                image: "/founder2.jpg"
              },
              {
                quote: "The Next12 team moved quickly from first meeting to term sheet, and their operational expertise has been invaluable as we've scaled our team and product.",
                author: "Carlos Rodriguez",
                role: "CTO, HealthSync",
                image: "/founder3.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0a0a2f] rounded-xl border border-[#EF400A]/10 p-8 hover:border-[#EF400A]/30 hover:shadow-lg hover:shadow-[#EF400A]/5 transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                   {/*} <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={64}
                      height={64}
                      className="object-cover"
                    />*/}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                    <p className="text-[#EF400A]">{testimonial.role}</p>
                  </div>
                </div>
                <svg className="w-10 h-10 text-[#EF400A]/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 text-lg italic leading-relaxed">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            {/*<Link href="/testimonials" className="inline-flex items-center bg-transparent border border-[#EF400A] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#EF400A]/10 transition-colors">
              Read More Success Stories
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>*/}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-32 bg-[#0a0a2f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#040423] to-[#0a0a3f] rounded-xl border border-[#EF400A]/20 p-10 md:p-16 shadow-xl shadow-[#EF400A]/5 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
              Subscribe to our newsletter for exclusive insights on venture capital, founder resources, and emerging technology trends.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-3 rounded-full bg-[#040423] border border-[#EF400A]/20 text-white focus:outline-none focus:border-[#EF400A] transition-colors"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-[#EF400A]/20 transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-400 text-xs mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
