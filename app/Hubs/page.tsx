'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Hubs() {
  const [activeTab, setActiveTab] = useState('features');
  const [selectedPlan, setSelectedPlan] = useState('premium');

  // FAQ toggle state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  

  return (
    <main className="min-h-screen bg-[#040423] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-16 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040423] via-transparent to-[#040423] z-10" />
        <div className="absolute inset-0 bg-[url('/office.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
            <span className="text-[#EF400A]">The Hubs</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Your launchpad for global innovation and growth
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <Link 
              href="/apply?program=hubs"
              className="px-4 py-2 md:px-8 md:py-4 bg-[#EF400A] text-white rounded-full text-sm md:text-lg font-semibold hover:bg-[#ff5a2b] transition-colors"
            >
              Apply Now
            </Link>
            <a
              href="#features"
              className="px-4 py-2 md:px-8 md:py-4 border border-[#EF400A] text-[#EF400A] rounded-full text-sm md:text-lg font-semibold hover:bg-[#EF400A] hover:text-white transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Hub Overview */}
      <section id="features" className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-[#EF400A]">The Hub</span>
              <span className="text-white"> Experience</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A post-Ignite support system offering dedicated office spaces, weekly advisor sessions, and investor pitch opportunities.
            </p>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            <button 
              onClick={() => setActiveTab('features')}
              className={`px-6 py-3 mx-2 mb-2 rounded-full text-sm font-semibold transition-colors ${
                activeTab === 'features' ? 'bg-[#EF400A] text-white' : 'bg-[#0f0f3f] text-gray-300 hover:bg-[#151550]'
              }`}
            >
              Hub Features
            </button>
            <button 
              onClick={() => setActiveTab('workflow')}
              className={`px-6 py-3 mx-2 mb-2 rounded-full text-sm font-semibold transition-colors ${
                activeTab === 'workflow' ? 'bg-[#EF400A] text-white' : 'bg-[#0f0f3f] text-gray-300 hover:bg-[#151550]'
              }`}
            >
              Workflow & Operations
            </button>
            <button 
              onClick={() => setActiveTab('pricing')}
              className={`px-6 py-3 mx-2 mb-2 rounded-full text-sm font-semibold transition-colors ${
                activeTab === 'pricing' ? 'bg-[#EF400A] text-white' : 'bg-[#0f0f3f] text-gray-300 hover:bg-[#151550]'
              }`}
            >
              Membership Plans
            </button>
            <button 
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-3 mx-2 mb-2 rounded-full text-sm font-semibold transition-colors ${
                activeTab === 'faq' ? 'bg-[#EF400A] text-white' : 'bg-[#0f0f3f] text-gray-300 hover:bg-[#151550]'
              }`}
            >
              FAQ
            </button>
          </div>
          
          {/* Features Tab Content */}
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Premium Infrastructure",
                  description: "Modern office spaces with high-quality furniture, conference rooms, and private workstations.",
                  icon: "🏢"
                },
                {
                  title: "Reliable Connectivity",
                  description: "High-speed internet and uninterrupted power supply for seamless operations.",
                  icon: "🌐"
                },
                {
                  title: "Global Advisory Services",
                  description: "Mentoring and strategy sessions with industry experts operating at a global level.",
                  icon: "🧠"
                },
                {
                  title: "Investment Opportunities",
                  description: "Monthly pitch opportunities to investors, providing direct access to funding.",
                  icon: "💰"
                },
                {
                  title: "Networking & Collaboration",
                  description: "Community-building events, networking meetups, and industry-specific panels.",
                  icon: "🤝"
                },
                {
                  title: "Work-Life Balance",
                  description: "Access to relaxation areas, wellness programs, and breakout spaces.",
                  icon: "🧘"
                },
                {
                  title: "Business Support",
                  description: "Legal, financial, and administrative assistance available for startups.",
                  icon: "📊"
                },
                {
                  title: "Educational Workshops",
                  description: "Regular skill-building sessions and knowledge-sharing seminars.",
                  icon: "📚"
                },
                {
                  title: "Global Exposure",
                  description: "Opportunities to showcase your startup to international markets and partners.",
                  icon: "🌍"
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-[#080830] rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] group">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#EF400A] transition-colors">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          )}
          
          {/* Workflow Tab Content */}
          {activeTab === 'workflow' && (
            <div className="bg-[#080830] rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="p-6 border border-[#1a1a4f] rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">Daily Schedule</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="font-mono text-[#EF400A] mr-2">08:00-10:00</span>
                      <span className="text-gray-300">Open workspace access, informal networking, and coffee sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-mono text-[#EF400A] mr-2">10:00-12:00</span>
                      <span className="text-gray-300">Focused work sessions with optional mentorship slots</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-mono text-[#EF400A] mr-2">12:00-13:00</span>
                      <span className="text-gray-300">Lunch break and casual networking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-mono text-[#EF400A] mr-2">13:00-16:00</span>
                      <span className="text-gray-300">Dedicated work hours, scheduled advisory meetings, and expert consultations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-mono text-[#EF400A] mr-2">16:00-18:00</span>
                      <span className="text-gray-300">Specialized workshops, community discussions, and brainstorming sessions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border border-[#1a1a4f] rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">Weekly Schedule</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="font-semibold text-white mr-2">Mondays:</span>
                      <span className="text-gray-300">Goal setting and strategy sessions with mentors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-white mr-2">Tuesdays-Thursdays:</span>
                      <span className="text-gray-300">Focused work, networking events, and skill development workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-white mr-2">Fridays:</span>
                      <span className="text-gray-300">Recap of the week's progress, peer feedback sessions, and preparation for investor pitch days</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border border-[#1a1a4f] rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">Monthly Structure</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="font-semibold text-white mr-2">Week 1:</span>
                      <span className="text-gray-300">Business Model Refinement - Hands-on workshops to optimize business strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-white mr-2">Week 2:</span>
                      <span className="text-gray-300">Market Positioning - Expert-led sessions on branding, marketing, and scaling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-white mr-2">Week 3:</span>
                      <span className="text-gray-300">Pitch Preparation - Guidance on investor pitching, financial modeling, and storytelling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-white mr-2">Week 4:</span>
                      <span className="text-gray-300">Investor Pitch Day - Startups present to investors for potential funding opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 p-6 border border-[#1a1a4f] rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#EF400A]">Support Services Workflow</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-[#EF400A] mr-3"></div>
                    <span>Startups can book advisory sessions via an online platform</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-[#EF400A] mr-3"></div>
                    <span>Legal, financial, and administrative support is available through on-demand consultations</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-[#EF400A] mr-3"></div>
                    <span>Members receive progress tracking reports and feedback on their growth</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {/* Pricing Tab Content */}
          {activeTab === 'pricing' && (
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div 
                  className={`${
                    selectedPlan === 'basic' 
                      ? 'border-[#EF400A] transform scale-105 shadow-lg shadow-[#EF400A]/20' 
                      : 'border-[#1a1a4f]'
                  } border rounded-xl overflow-hidden transition-all duration-300`}
                >
                  <div className="bg-[#080830] p-8">
                    <h3 className="text-2xl font-bold mb-2">Basic</h3>
                    <div className="flex items-end mb-6">
                      <span className="text-4xl font-bold">$650</span>
                      <span className="text-gray-400 ml-1">/month</span>
                    </div>
                    <button 
                      onClick={() => setSelectedPlan('basic')}
                      className={`w-full py-3 px-4 rounded-full font-semibold transition-colors ${
                        selectedPlan === 'basic' 
                          ? 'bg-[#EF400A] text-white' 
                          : 'border border-[#EF400A] text-[#EF400A] hover:bg-[#EF400A] hover:text-white'
                      }`}
                    >
                      {selectedPlan === 'basic' ? 'Selected' : 'Select Plan'}
                    </button>
                    <ul className="mt-8 space-y-4">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">Access to shared, well-furnished office spaces</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">High-speed internet and uninterrupted power</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">Two (2) strategic advisory sessions per month</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">Access to community events and workshops</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">On-demand legal and financial consultations</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div 
                  className={`${
                    selectedPlan === 'premium' 
                      ? 'border-[#EF400A] transform scale-105 shadow-lg shadow-[#EF400A]/20' 
                      : 'border-[#1a1a4f]'
                  } border rounded-xl overflow-hidden transition-all duration-300`}
                >
                  <div className="bg-[#080830] p-8 relative">
                    <div className="absolute top-0 right-0 bg-[#EF400A] text-white text-xs font-bold px-4 py-1">
                      MOST POPULAR
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Premium</h3>
                    <div className="flex items-end mb-6">
                      <span className="text-4xl font-bold">$999</span>
                      <span className="text-gray-400 ml-1">/month</span>
                    </div>
                    <button 
                      onClick={() => setSelectedPlan('premium')}
                      className={`w-full py-3 px-4 rounded-full font-semibold transition-colors ${
                        selectedPlan === 'premium' 
                          ? 'bg-[#EF400A] text-white' 
                          : 'border border-[#EF400A] text-[#EF400A] hover:bg-[#EF400A] hover:text-white'
                      }`}
                    >
                      {selectedPlan === 'premium' ? 'Selected' : 'Select Plan'}
                    </button>
                    <ul className="mt-8 space-y-4">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">All Basic plan features</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">Three (3) strategic advisory sessions per month</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">Exclusive access to monthly investor pitch events</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">Priority access to mentorship slots</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">Enhanced visibility during demo days</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div 
                  className={`${
                    selectedPlan === 'enterprise' 
                      ? 'border-[#EF400A] transform scale-105 shadow-lg shadow-[#EF400A]/20' 
                      : 'border-[#1a1a4f]'
                  } border rounded-xl overflow-hidden transition-all duration-300`}
                >
                  <div className="bg-[#080830] p-8">
                    <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                    <div className="flex items-end mb-6">
                      <span className="text-4xl font-bold">Custom</span>
                      <span className="text-gray-400 ml-1">pricing</span>
                    </div>
                    <button 
                      onClick={() => setSelectedPlan('enterprise')}
                      className={`w-full py-3 px-4 rounded-full font-semibold transition-colors ${
                        selectedPlan === 'enterprise' 
                          ? 'bg-[#EF400A] text-white' 
                          : 'border border-[#EF400A] text-[#EF400A] hover:bg-[#EF400A] hover:text-white'
                      }`}
                    >
                      {selectedPlan === 'enterprise' ? 'Selected' : 'Select Plan'}
                    </button>
                    <ul className="mt-8 space-y-4">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">Dedicated private office spaces</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">Custom investor matchmaking and pitch coaching</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">Personalized growth strategy with senior advisors</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">Global exposure through partnerships and PR support</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#0f0f3f] flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#EF400A]"></div>
                        </div>
                        <span className="text-gray-300">White-glove support services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Virtual Advisory Option */}
              <div className="mt-12 bg-[#080830] rounded-xl p-8 border border-[#1a1a4f]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Virtual Advisory Plan</h3>
                    <p className="text-gray-300 mb-4 md:mb-0">For founders who already have office spaces but want access to top-tier advisory</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">$200</div>
                    <div className="text-sm text-gray-400">per 1-hour session</div>
                    <Link
                      href="/contact"
                      className="mt-3 inline-block px-6 py-2 border border-[#EF400A] text-[#EF400A] rounded-full text-sm font-semibold hover:bg-[#EF400A] hover:text-white transition-colors"
                    >
                      Book a Session
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* FAQ Tab Content */}
          {activeTab === 'faq' && (
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {[
                  {
                    question: "What makes this hub different from a typical coworking space?",
                    answer: "Unlike regular coworking spaces, our hub is purpose-built for startup founders. We combine world-class infrastructure with curated access to global advisors and investor pitch opportunities—designed to accelerate growth, not just provide desks."
                  },
                  {
                    question: "Is the advisory support really worth it?",
                    answer: "Absolutely. These are not just any advisors—they're experts who've scaled companies and navigated global markets. Each session is tailored to your business challenges, helping you avoid costly mistakes and accelerate your strategy."
                  },
                  {
                    question: "Can I upgrade from Basic to Premium anytime?",
                    answer: "Yes, you can upgrade at any time based on your needs. You'll immediately gain access to the additional advisory session and investor pitch opportunities included in the Premium plan."
                  },
                  {
                    question: "What happens during Investor Pitch Day?",
                    answer: "Premium members get to pitch their startup to a panel of real investors—VCs (Venture Capitalists), angel investors, and corporate scouts. It's a polished, high-energy event designed to open funding doors and increase visibility."
                  },
                  {
                    question: "I already have an office—can I still access the advisory sessions?",
                    answer: "Yes! Our Virtual Advisory option is perfect for founders who don't need a physical workspace but want access to top-tier mentorship. Each session is $200 and can be booked as needed."
                  },
                  {
                    question: "What if I need help outside the advisory sessions?",
                    answer: "All members can request legal, financial, and administrative support through our partner network. Premium and Enterprise members get priority and extended access depending on their plan."
                  },
                  {
                    question: "Is there any commitment or long-term contract?",
                    answer: "No long-term commitments are required. We offer flexible month-to-month memberships so you can stay as long as the hub provides value to your growth journey."
                  },
                  {
                    question: "How do I schedule my advisory sessions?",
                    answer: "You'll receive access to our booking portal upon membership confirmation. From there, you can select available times with your preferred advisor, based on your plan tier."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-[#080830] rounded-xl overflow-hidden">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => toggleFaq(idx)}
                    >
                      <span className="font-semibold text-lg">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${openFaq === idx ? 'transform rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <div 
                      className={`px-6 overflow-hidden transition-all duration-300 ${
                        openFaq === idx ? 'max-h-96 pb-4' : 'max-h-0'
                      }`}
                    >
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#040423]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Success</span>
              <span className="text-[#EF400A]"> Stories</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hear from founders who accelerated their growth through our hub program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "FinTech Solutions",
                image: "/testimonial1.jpg",
                quote: "The hub's advisory sessions helped us refine our go-to-market strategy, resulting in 3x user growth within just 4 months."
              },
              {
                name: "Michael Chen",
                company: "GreenTech Innovations",
                image: "/testimonial2.jpg",
                quote: "We secured $1.2M in seed funding after our investor pitch day. The preparation and connections were invaluable to our success."
              },
              {
                name: "Aisha Oladele",
                company: "HealthConnect",
                image: "/testimonial3.jpg",
                quote: "The infrastructure and support services allowed us to focus entirely on product development while scaling our team from 3 to 15."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#080830] rounded-xl p-6 border border-[#1a1a4f]">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-gray-700 overflow-hidden mr-4">
                    <div className="w-full h-full bg-[#0f0f3f] flex items-center justify-center text-2xl">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section 
      <section className="py-16 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#EF400A]">Our</span>
              <span className="text-white"> Partners</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We collaborate with leading organizations to provide the best resources for our startups
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { src: '/het.jpeg', alt: 'Partner 1' },
              { src: '/partners/partner2.png', alt: 'Partner 2' },
              { src: '/partners/partner3.png', alt: 'Partner 3' },
              { src: '/partners/partner4.png', alt: 'Partner 4' },
              { src: '/partners/partner5.png', alt: 'Partner 5' },
              { src: '/partners/partner6.png', alt: 'Partner 6' }
            ].map((partner, idx) => (
              <div key={idx} className="bg-[#080830] h-24 rounded-lg flex items-center justify-center p-4">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Application CTA */}
      <section className="py-20 bg-[#040423] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-pattern.jpg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-[#EF400A]">accelerate</span> your startup's growth?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our community of innovative founders and gain access to the resources, mentorship, and connections that matter.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/apply?program=hubs"
                className="px-8 py-4 bg-[#EF400A] text-white rounded-full text-lg font-semibold hover:bg-[#ff5a2b] transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-[#EF400A] text-[#EF400A] rounded-full text-lg font-semibold hover:bg-[#EF400A] hover:text-white transition-colors"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer 
      <footer className="bg-[#030318] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">The Hubs</h3>
              <p className="text-gray-400 mb-4">
                Your launchpad for global innovation and growth. We provide the infrastructure, advisory, and connections startups need to thrive.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#EF400A]">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#EF400A]">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#EF400A]">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-[#EF400A]">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-[#EF400A]">About Us</Link></li>
                <li><Link href="/programs" className="text-gray-400 hover:text-[#EF400A]">Programs</Link></li>
                <li><Link href="/events" className="text-gray-400 hover:text-[#EF400A]">Events</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-[#EF400A]">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><Link href="/ignite" className="text-gray-400 hover:text-[#EF400A]">Ignite</Link></li>
                <li><Link href="/hubs" className="text-gray-400 hover:text-[#EF400A]">The Hubs</Link></li>
                <li><Link href="/accelerator" className="text-gray-400 hover:text-[#EF400A]">Accelerator</Link></li>
                <li><Link href="/corporate" className="text-gray-400 hover:text-[#EF400A]">Corporate Innovation</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-[#EF400A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Innovation Street, Lagos, Nigeria</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-[#EF400A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@thehubs.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-[#EF400A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+234 123 456 7890</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#1a1a4f] pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} The Hubs. All rights reserved.</p>
          </div>
        </div>
      </footer>*/}
    </main>
  );
}
