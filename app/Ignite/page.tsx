'use client';

import Navbar from '@/components/navbar';
import Link from 'next/link';

export default function Ignite() {
  return (
    <main className="min-h-screen bg-[#040423] text-white">
      <Navbar />
      
      {/* Hero Section - improved mobile spacing */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040423] via-transparent to-[#040423] z-10" />
        <div className="absolute inset-0 bg-[url('/ignite-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
            <span className="text-[#EF400A]">NEXT12</span> IGNITE
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            12-Day Founder Acceleration Program · Leave Ignited
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

      {/* Program Process - improved grid layout */}
      <section id="program" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">The Ignition Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Validation Sprint', desc: 'Stress-test your core hypothesis with real market data' },
              { title: 'Unit Economics Mastery', desc: 'Lock down sustainable business fundamentals' },
              { title: 'Pitch Forge', desc: 'Craft irresistible investor storytelling' },
              { title: 'Architect Scale', desc: 'Design your growth engine and moat' },
              { title: 'Founder Mindset', desc: 'Develop unshakable leadership resilience' },
              { title: 'Demo Day', desc: 'Pitch to our global network of investors' },
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

      {/* Program Features */}
      <section className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Ignite?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Hyper-condensed', 
                desc: '12 days of intense, focused development. No fluff, only essential scaling tools' 
              },
              { 
                title: 'Global Network', 
                desc: 'Immediate access to our worldwide community of founders and investors' 
              },
              { 
                title: 'Proven Framework', 
                desc: 'Battle-tested scaling methodology from serial unicorn builders' 
              },
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-xl bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] relative overflow-hidden"
              >
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/90">{feature.desc}</p>
              </div>
            ))}
          </div>
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
                date: 'Q3, 2025', 
                focus: 'Scaling Startup Global, Peak Productivity & Founder Wellness',
                status: 'Coming Soon',
                link: '/ignite/thailand'
              },
              { 
                location: 'Dubai, UAE', 
                date: 'Q4, 2025', 
                focus: 'Web3 & Fintech',
                status: 'Coming Soon',
                link: '/ignite/dubai'
              },
              { 
                location: 'Gujarat, India', 
                date: 'Q3, 2025', 
                focus: 'Web3 & Fintech',
                status: 'Coming Soon',
                link: '/ignite/india'
              },
              { 
                location: 'Lagos, Nigeria', 
                date: 'Q4, 2025', 
                focus: 'AI & DeFi',
                status: 'Coming Soon',
                link: '/ignite/lagos'
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

      {/* Host Application */}
      <section id="apply" className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Host Next12 Ignite</h2>
          <div className="max-w-3xl mx-auto p-8 rounded-xl border border-[#EF400A] bg-[#040423]">
            <p className="text-xl text-[#EF400A] mb-8 text-center">
              Bring the Ignite program to your city or organization
            </p>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const emailBody = `Host Application - ${formData.get('location')}`;
              window.location.href = `mailto:labs@next12.org?subject=${encodeURIComponent(emailBody)}`;
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full p-3 rounded-lg bg-[#0a0a2f] border border-[#EF400A]/20 focus:border-[#EF400A] outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg bg-[#0a0a2f] border border-[#EF400A]/20 focus:border-[#EF400A] outline-none"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="location"
                  placeholder="City, Country"
                  className="w-full p-3 rounded-lg bg-[#0a0a2f] border border-[#EF400A]/20 focus:border-[#EF400A] outline-none"
                  required
                />
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization"
                  className="w-full p-3 rounded-lg bg-[#0a0a2f] border border-[#EF400A]/20 focus:border-[#EF400A] outline-none"
                />
              </div>
              <textarea
                name="message"
                placeholder="Tell us about your vision for hosting Next12 Ignite"
                rows={4}
                className="w-full p-3 rounded-lg bg-[#0a0a2f] border border-[#EF400A]/20 focus:border-[#EF400A] outline-none"
                required
              />
              <button
                type="submit"
                className="w-full py-2 md:py-4 bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white rounded-full text-sm md:text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the next generation of technology leaders and build something extraordinary
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <Link
              href="/apply"
              className="px-4 py-2 md:px-8 md:py-4 bg-[#EF400A] text-white rounded-full text-sm md:text-lg font-semibold hover:bg-[#ff5a2b] transition-colors"
            >
              Apply Now
            </Link>
            
          </div>
        </div>
      </section>
    </main>
  );
}