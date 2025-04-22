'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon, UsersIcon, LightbulbIcon, TrendingUpIcon, GlobeIcon } from 'lucide-react';

export default function Ignite() {
  return (
    <main className="min-h-screen bg-[#040423] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 md:py-0 bg-[url('/ignite.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040423] via-transparent to-[#040423] z-10" />
        <div className="container mx-auto relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
            <span className="text-[#EF400A]">NEXT12</span> IGNITE
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 text-gray-100 max-w-3xl mx-auto">
            12-Day Immersive Founder Acceleration Program
          </p>
          <p className="text-base md:text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            An intensive builders lab for founders to ideate, scale, connect, and raise capital
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <Link 
              href="/apply?program=ignite"
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

      {/* What is Ignite */}
      <section className="py-12 md:py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Next12 Ignite?</h2>
              <p className="text-gray-300 mb-6">
                Next12 Ignite is a 12-day immersive lab designed to accelerate the success of exceptional founders and innovators. It&apos;s more than just a program—it&apos;s an environment carefully crafted to transform visionary ideas into scalable ventures.
              </p>
              <p className="text-gray-300 mb-6">
                Through hands-on workshops, personalized mentorship, investor panels, and a culminating Demo Day, participants leave with refined business models, expanded networks, and clear paths to funding.
              </p>
              <div className="bg-[#121240] p-6 rounded-xl border border-[#EF400A]/30">
                <h3 className="text-xl font-bold mb-4">Proposed Date</h3>
                <p className="text-gray-300">Our Thailand program is planned for <span className="text-[#EF400A] font-semibold">August 2025</span></p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-[#121240] p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-[#EF400A]">Who is it for?</h3>
                <ul className="space-y-4">
                  {[
                    { title: 'Founders & Startup Teams', desc: 'Early-stage startups ready to scale' },
                    { title: 'Tech & Product Builders', desc: 'Innovators aiming to create scalable solutions' },
                    { title: 'Creators & Visionaries', desc: 'Those looking to make a significant impact' },
                    { title: 'Business Leaders', desc: 'Executives interested in staying ahead of industry trends' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mt-1 mr-3 text-[#EF400A]">
                        <UsersIcon size={16} />
                      </div>
                      <div>
                        <span className="font-semibold">{item.title}: </span>
                        <span className="text-gray-300">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ignite Experience */}
      <section id="program" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">The Ignite Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                title: 'Hands-on Workshops', 
                desc: 'Product development, business strategy, and growth hacking' 
              },
              { 
                title: 'Mentorship Sessions', 
                desc: 'One-on-one guidance from industry experts' 
              },
              { 
                title: 'Investor Panels', 
                desc: 'Direct access to potential funding opportunities' 
              },
              { 
                title: 'Validation Sprint', 
                desc: 'Stress-test your core hypothesis with real market data' 
              },
              { 
                title: 'Pitch Forge', 
                desc: 'Craft irresistible investor storytelling' 
              },
              { 
                title: 'Demo Day', 
                desc: 'Showcase your progress to a curated audience of investors and partners' 
              },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl border border-[#EF400A] bg-[#0a0a2f] hover:scale-105 transition-transform"
              >
                <div className="text-[#EF400A] text-2xl mb-2 font-bold">{idx + 1}.</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Benefits</h2>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#EF400A]">For Startups & Entrepreneurs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { 
                  title: 'Funding Opportunities', 
                  desc: 'Meet VCs, angel investors, and institutional funders' 
                },
                { 
                  title: 'Global Exposure', 
                  desc: 'Expand your reach beyond your local market' 
                },
                { 
                  title: 'Tailored Mentorship', 
                  desc: 'Gain insights from experienced founders and industry experts' 
                },
                { 
                  title: 'Execution-Focused Environment', 
                  desc: 'Progress in a setting designed for deep work and collaboration' 
                },
                { 
                  title: 'Exclusive Resources', 
                  desc: 'Access frameworks, tools, and strategies to accelerate your business' 
                },
                { 
                  title: 'Market Expansion Support', 
                  desc: 'Learn how to scale and expand into high-growth regions' 
                },
              ].map((benefit, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-xl bg-[#121240] hover:bg-[#181860] transition-colors"
                >
                  <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-[#EF400A]">For Investors & Ecosystem Leaders</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { 
                  title: 'Exclusive Access', 
                  desc: 'Engage with top-tier, investment-ready ventures' 
                },
                { 
                  title: 'Co-Hosting Opportunities', 
                  desc: 'Partner with us to bring Next12 Ignite to your city' 
                },
                { 
                  title: 'Speaking Engagements', 
                  desc: 'Share insights on global innovation' 
                },
                { 
                  title: 'Early Investment Access', 
                  desc: 'Get first-mover advantage on promising startups' 
                },
                { 
                  title: 'Network Expansion', 
                  desc: 'Connect with a high-value global network of founders and investors' 
                },
                { 
                  title: 'Market Intelligence', 
                  desc: 'Gain insights into emerging trends and technologies' 
                },
              ].map((benefit, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-xl bg-[#121240] hover:bg-[#181860] transition-colors"
                >
                  <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Ignite/Program Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Ignite?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <LightbulbIcon className="w-12 h-12 mb-4" />,
                title: 'Hyper-condensed', 
                desc: '12 days of intense, focused development. No fluff, only essential scaling tools and frameworks to accelerate your growth.' 
              },
              { 
                icon: <GlobeIcon className="w-12 h-12 mb-4" />,
                title: 'Global Network', 
                desc: 'Immediate access to our worldwide community of founders and investors across more than 150 target countries.' 
              },
              { 
                icon: <TrendingUpIcon className="w-12 h-12 mb-4" />,
                title: 'Proven Framework', 
                desc: 'Battle-tested scaling methodology from serial unicorn builders designed to unlock game-changing opportunities.' 
              },
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-xl bg-gradient-to-br from-[#EF400A] to-[#ff5a2b]/70 relative overflow-hidden text-center"
              >
                <div className="mb-2 flex justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/90">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Expansion */}
      <section className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Global Vision & Expansion</h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            We aim to launch Next12 Ignite in at least 150 countries over the next decade, impacting thousands of startups worldwide.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {['Thailand', 'Singapore', 'Indonesia', 'Nigeria', 'Lithuania', 'India', 'Malaysia'].map((country, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-lg border border-[#EF400A]/30 bg-[#121240] text-center"
              >
                <MapPinIcon className="w-5 h-5 mb-2 text-[#EF400A] mx-auto"/>
                <p className="font-medium">{country}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-300">
            Beyond 2025: We will expand Next12 Ignite to every continent, one city at a time.
          </p>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Ignitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                location: 'Phuket, Thailand', 
                date: 'August 2025', 
                focus: 'Scaling Startup Global, Peak Productivity & Founder Wellness',
                status: 'Coming Soon',
                link: '/Ignite/thailand'
              },
              { 
                location: 'Dubai, UAE', 
                date: 'Q4, 2025', 
                focus: 'Web3 & Fintech',
                status: 'Coming Soon',
                link: '/Ignite/dubai'
              },
              { 
                location: 'Gujarat, India', 
                date: 'Q3, 2025', 
                focus: 'Web3 & Fintech',
                status: 'Coming Soon',
                link: '/Ignite/india'
              },
              { 
                location: 'Lagos, Nigeria', 
                date: 'Q4, 2025', 
                focus: 'AI & DeFi',
                status: 'Coming Soon',
                link: '/Ignite/lagos'
              },
            ].map((program, idx) => (
              <Link 
                key={idx}
                href={program.link}
                className="p-6 md:p-8 rounded-xl border border-[#EF400A] bg-[#0a0a2f] hover:scale-[1.02] transition-transform"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">{program.location}</h3>
                    <p className="text-gray-300 text-sm md:text-base">{program.date}</p>
                  </div>
                  <span className="px-2 py-0.5 md:px-4 md:py-1 rounded-full text-xs md:text-sm bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white whitespace-nowrap">
                    {program.status}
                  </span>
                </div>
                <p className="text-[#EF400A] text-sm md:text-base">Focus: {program.focus}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Partnerships & Collaborations</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Next12 is building a strong network of partners to create the ultimate ecosystem for startup success.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                title: 'Investment Firms & VCs', 
                desc: 'Providing direct funding opportunities for innovative startups' 
              },
              { 
                title: 'Tech & Innovation Hubs', 
                desc: 'Offering access to workspaces and talent pools' 
              },
              { 
                title: 'Corporate Partners', 
                desc: 'Supporting startups through funding and mentorship programs' 
              },
              { 
                title: 'Government & Policy Makers', 
                desc: 'Creating enabling environments for startups to thrive' 
              },
              { 
                title: 'Startup Ecosystem Builders', 
                desc: 'Co-hosting and supporting impactful startup programs' 
              },
              { 
                title: 'Educational Institutions', 
                desc: 'Bridging academia and entrepreneurship for sustainable innovation' 
              },
            ].map((partner, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl border border-[#EF400A]/30 bg-[#121240]"
              >
                <h3 className="text-lg font-bold mb-2">{partner.title}</h3>
                <p className="text-gray-300 text-sm">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">How to Get Involved</h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Let&apos;s build the future, together! Want to be a part of the movement?
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: 'Investor Partnerships', desc: 'Invest in high-growth startups through Next12 Ignite' },
              { title: 'Co-Hosting in Your City', desc: 'Bring Next12 Ignite to your startup ecosystem' },
              { title: 'Startup Referrals', desc: 'Introduce high-potential founders to join our program' },
              { title: 'Speaking Invitations', desc: 'Invite us to your events to share insights' },
              { title: 'Community Introductions', desc: 'Connect us with networks of investors or founders' },
              { title: 'Corporate Sponsorship', desc: 'Position your brand at the forefront of global innovation' },
              { title: 'Mentorship & Advisory', desc: 'Guide the next generation of world-changing founders' },
              { title: 'Resource Sharing', desc: 'Provide tools, technologies or platforms to help startups' },
            ].map((option, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl border border-[#EF400A] bg-[#0a0a2f] hover:bg-[#121240] transition-colors"
              >
                <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                <p className="text-gray-300 text-sm">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#0a0a2f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact & Next Steps</h2>
          <p className="text-xl mb-8 text-gray-300">
            We&apos;re pumped for what&apos;s ahead. Let&apos;s create something extraordinary!
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <div className="p-6 rounded-xl bg-[#121240] text-center">
              <p className="font-bold mb-2">Salem Andero</p>
              <p className="text-gray-300 text-sm">Co-pioneer, Next12</p>
            </div>
            <div className="p-6 rounded-xl bg-[#121240] text-center">
              <p className="font-bold mb-2">Emmanuel Isaac</p>
              <p className="text-gray-300 text-sm">Co-pioneer, Next12</p>
            </div>
          </div>
          <div className="text-gray-300">
            <p className="mb-1">Email: <a href="mailto:labs@next12.org" className="text-[#EF400A] hover:underline">labs@next12.org</a></p>
            <p className="mb-1">Website: <a href="https://www.next12.org" target="_blank" rel="noopener noreferrer" className="text-[#EF400A] hover:underline">www.next12.org</a></p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-br from-[#121240] to-[#0a0a2f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the next generation of technology leaders and build something extraordinary
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <Link
              href="/apply?program=ignite"
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