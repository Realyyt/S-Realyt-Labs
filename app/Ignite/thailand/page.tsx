'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function ThailandPage() {
  return (
    <main className="min-h-screen p-8 md:p-24 relative overflow-x-hidden bg-slate-900">
      {/* Traditional Thai Background Elements */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/thai-silk-pattern.svg')] bg-repeat opacity-20 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-transparent to-slate-900/80"></div>
      </div>

      {/* Floral Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[url('/thai-floral-corner.png')] bg-contain opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[url('/thai-floral-corner.png')] bg-contain opacity-20 rotate-180"></div>

      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative mb-16 md:mb-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/thailand.jpg')] bg-cover bg-center opacity-90">
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-8 gradient-text">
              NEXT12 IGNITE THAILAND
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--accent)' }}>
              12-Day Founder Acceleration Program · August 1-12, 2025
            </p>
          </div>
        </section>

        {/* Program Schedule */}
        <section className="max-w-7xl mx-auto mb-20 relative px-4 text-stone-200">
          <div className="absolute -top-20 left-0 w-32 h-32 bg-[url('/thai-motif.png')] bg-contain opacity-20"></div>
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            Program Journey
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber-500/80"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { day: 'Day 1', title: 'Founder Onboarding', desc: 'Mindset Workshop & Cohort Matching' },
              { day: 'Day 2-4', title: 'Validation Sprint', desc: 'Market Fit & Unit Economics Deep Dive' },
              { day: 'Day 5-7', title: 'Scale Architecture', desc: 'Growth Engine Design & Tech Stack Optimization' },
              { day: 'Day 8-10', title: 'Leadership Forge', desc: 'Stress Management & Decision Simulations' },
              { day: 'Day 11', title: 'Pitch Perfect', desc: 'Investor Storytelling & Financial Modeling' },
              { day: 'Day 12', title: 'Ignition Day', desc: 'Demo Day & Investor Summit' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-lg border relative group transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ 
                  borderColor: 'var(--accent)', 
                  background: 'linear-gradient(145deg, rgba(113,71,23,0.2) 0%, rgba(15,23,42,0.8) 100%)' 
                }}
              >
                <div className="absolute inset-0 [mask-image:url('/thai-pattern-light.svg')] bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

            {/* Focus Tracks */}
            <section className="p-8 rounded-lg relative overflow-hidden group transition-transform hover:scale-[1.02] mb-20 mx-4"
          style={{ 
            background: 'linear-gradient(160deg, rgb(15 23 42) 0%, rgb(30 27 24) 100%)',
            border: '1px solid rgba(245,158,11,0.3)',
            boxShadow: '0 4px 30px rgba(245,158,11,0.05)'
          }}
        >
          <div className="absolute top-2 right-2 w-12 h-12 bg-[url('/gold-flower.png')] bg-contain opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-100">Core Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Peak Productivity', 
                content: 'Time-blocking strategies · Deep work protocols · Energy management systems',
                partners: ['Chivitr', 'Next12']
              },
              { 
                title: 'Founder Wellness', 
                content: 'Stress resilience training · Sleep optimization · Nutritional programming',
                partners: ['Chivitr']
              },
              { 
                title: 'Global Scaling', 
                content: 'Cross-cultural expansion · Compliance architecture · Localization playbooks',
                partners: ['Next12', 'Realyt', 's8', "karnot"]
              },
              { 
                title: 'Tech Stack Mastery', 
                content: 'AI integration · Infrastructure automation · Security hardening · app chains',
                partners: ['karnot', 'Starknet', ]
              }
            ].map((track, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-lg relative overflow-hidden group transition-all hover:scale-[1.02] hover:shadow-lg" 
                style={{ 
                  background: 'rgb(30 41 59)',
                  border: '1px solid rgba(245,158,11,0.2)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}
              >
                <h3 className="text-2xl font-bold mb-4 text-amber-50">{track.title}</h3>
                <p className="text-lg mb-4 text-amber-200">{track.content}</p>
                <div className="pt-4 border-t relative border-amber-800/50">
                  <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
                  <p className="text-sm font-bold mb-2 text-amber-100">Featured Partners:</p>
                  <div className="flex flex-wrap gap-2">
                    {track.partners.map((partner, pIdx) => (
                      <span 
                        key={pIdx}
                        className="px-3 py-1 text-sm rounded-full bg-amber-900/30 backdrop-blur-sm hover:bg-amber-900/50 transition-colors" 
                        style={{ 
                          color: 'var(--accent)'
                        }}
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Speakers */}
        <section className="max-w-7xl mx-auto mb-20 relative px-4 text-stone-200">
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            Featured Mentors
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber-500/80"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                name: 'Tiago Fote', 
                role: 'Productivity Architect', 
                org: 'Forte Labs', 
                img: '/speakers/tiago.jpg' 
              },
              { 
                name: 'Dr. Andrew Huberman', 
                role: 'Neuroscience Expert', 
                org: 'Stanford University', 
                img: '/speakers/huberman.jpg' 
              },
              { 
                name: 'Claire Hughes Johnson', 
                role: 'Scaling Expert', 
                org: 'Stripe Alumni', 
                img: '/speakers/claire.jpg' 
              },
              { 
                name: 'Nat Friedman', 
                role: 'AI Strategist', 
                org: 'GitHub CEO Emeritus', 
                img: '/speakers/nat.jpg' 
              },
            ].map((speaker, idx) => (
              <div key={idx} className="text-center">
                <div 
                  className="w-full h-48 bg-gray-800 rounded-lg mb-4 bg-cover bg-center border-2 border-amber-500/30 hover:border-amber-500/60 transition-all"
                  style={{ 
                    backgroundImage: `url(${speaker.img})`,
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 5% 100%, 0 85%)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80"></div>
                </div>
                <h3 className="text-xl font-bold">{speaker.name}</h3>
                <p className="text-sm opacity-90">{speaker.role}</p>
                <p className="text-xs opacity-75">{speaker.org}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Registration CTA */}
        <section className="max-w-2xl mx-auto mb-20 relative px-4">
          <div 
            className="p-8 rounded-lg relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)',
              boxShadow: '0 8px 32px rgba(245,158,11,0.3)'
            }}
          >
            <div className="absolute inset-0 bg-[url('/silk-texture.png')] opacity-20 mix-blend-soft-light"></div>
            <h2 className="text-3xl font-bold mb-8 text-center">Secure Your Spot</h2>
            <div 
              className="p-6 rounded-lg"
              style={{ 
                background: 'var(--accent)', 
                color: 'var(--foreground)' 
              }}
            >
              <p className="text-xl mb-4 text-center">Early Founder Cohort: $999</p>
              <p className="text-sm mb-6 text-center">Includes full program access, mentor sessions, and dedicated wellness programs</p>
              <div className="text-center">
                <button 
                  className="px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                  style={{ 
                    background: 'var(--foreground)', 
                    color: 'var(--accent)' 
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Host Partners Section */}
        <section className="max-w-7xl mx-auto mb-20 relative px-4 text-stone-200">
          <div className="relative group">
            <div className="absolute inset-0 bg-[url('/thai-motif-pattern.svg')] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <h2 className="text-3xl font-bold mb-12 text-center relative">
              Host Partners
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber-500/80"></div>
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center p-8 rounded-xl border border-amber-500/30 relative overflow-hidden">
              <div className="absolute inset-0 [mask-image:url('/thai-border-motif.svg')] bg-amber-500/10 opacity-20"></div>
              {['AWS', 'HubSpot', 'Notion', 'BangkokBank', 'TrueDigital'].map((logo, idx) => (
                <div 
                  key={idx}
                  className="h-16 bg-contain bg-center bg-no-repeat opacity-80 hover:opacity-100 transition-opacity hover:scale-110"
                  style={{ 
                    backgroundImage: `url(/logos/${logo.toLowerCase()}.svg)`,
                    filter: 'grayscale(1) brightness(2)',
                    WebkitMaskImage: 'url(/thai-circle-motif.svg)',
                    maskImage: 'url(/thai-circle-motif.svg)',
                    maskSize: 'contain'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Floating Thai Ornaments */}
      <div className="fixed top-1/4 right-4 w-16 h-16 bg-[url('/m1.png')] bg-contain  animate-float"></div>
      <div className="fixed bottom-1/4 left-4 w-16 h-16 bg-[url('/m1.png')] bg-contain  animate-float-delayed"></div>

      {/* Traditional Border Pattern */}
      <div className="fixed inset-0 pointer-events-none border-[16px] border-transparent [border-image:url('/thai-border-pattern.png')_30_repeat] opacity-15"></div>
    </main>
  );
}