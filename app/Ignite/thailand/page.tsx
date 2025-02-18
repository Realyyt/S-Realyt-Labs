'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function ThailandPage() {
  return (
    <main className="min-h-screen p-8 md:p-24 relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative mb-16 md:mb-24 text-center">
        <div className="absolute inset-0 bg-[url('/phuket-bg.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 gradient-text">
            NEXT12 IGNITE THAILAND
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--accent)' }}>
            12-Day Founder Acceleration Program · December 1-12, 2025
          </p>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Program Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { day: 'Day 1', title: 'Founder Onboarding', desc: 'Mindset Workshop & Cohort Matching' },
            { day: 'Day 2-4', title: 'Validation Sprint', desc: 'Market Fit & Unit Economics Deep Dive' },
            { day: 'Day 5-7', title: 'Scale Architecture', desc: 'Growth Engine Design & Tech Stack Optimization' },
            { day: 'Day 8-10', title: 'Leadership Forge', desc: 'Stress Management & Decision Simulations' },
            { day: 'Day 11', title: 'Pitch Perfect', desc: 'Investor Storytelling & Financial Modeling' },
            { day: 'Day 12', title: 'Ignition Day', desc: 'Demo Day & Investor Summit' },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-lg border" style={{ borderColor: 'var(--accent)' }}>
              <div className="text-xl mb-2 font-bold" style={{ color: 'var(--accent)' }}>{item.day}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Focus Tracks */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Core Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: 'Peak Productivity', 
              content: 'Time-blocking strategies · Deep work protocols · Energy management systems',
              partners: ['Todoist', 'Sunsama', 'Centered']
            },
            { 
              title: 'Founder Wellness', 
              content: 'Stress resilience training · Sleep optimization · Nutritional programming',
              partners: ['Whoop', 'Oura', 'Eight Sleep']
            },
            { 
              title: 'Global Scaling', 
              content: 'Cross-cultural expansion · Compliance architecture · Localization playbooks',
              partners: ['Deel', 'Remote', 'Pilot']
            },
            { 
              title: 'Tech Stack Mastery', 
              content: 'AI integration · Infrastructure automation · Security hardening',
              partners: ['Vercel', 'Supabase', 'Sentry']
            }
          ].map((track, idx) => (
            <div key={idx} className="p-8 rounded-lg relative overflow-hidden group" 
                 style={{ background: 'var(--background)', border: '1px solid var(--accent)' }}>
              <h3 className="text-2xl font-bold mb-4">{track.title}</h3>
              <p className="text-lg mb-4" style={{ color: 'var(--accent)' }}>{track.content}</p>
              <div className="pt-4 border-t" style={{ borderColor: 'var(--accent)' }}>
                <p className="text-sm font-bold mb-2">Featured Partners:</p>
                <div className="flex flex-wrap gap-2">
                  {track.partners.map((partner, pIdx) => (
                    <span key={pIdx} className="px-3 py-1 text-sm rounded-full" 
                          style={{ background: 'var(--accent)', color: 'var(--foreground)' }}>
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
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Mentors & Speakers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: 'Tiago Forte', role: 'Productivity Architect', org: 'Forte Labs', img: '/speakers/tiago.jpg' },
            { name: 'Dr. Andrew Huberman', role: 'Neuroscience Expert', org: 'Stanford University', img: '/speakers/huberman.jpg' },
            { name: 'Claire Hughes Johnson', role: 'Scaling Expert', org: 'Stripe Alumni', img: '/speakers/claire.jpg' },
            { name: 'Nat Friedman', role: 'AI Strategist', org: 'GitHub CEO Emeritus', img: '/speakers/nat.jpg' },
          ].map((speaker, idx) => (
            <div key={idx} className="text-center">
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 bg-cover bg-center" 
                   style={{ backgroundImage: `url(${speaker.img})` }}></div>
              <h3 className="text-xl font-bold">{speaker.name}</h3>
              <p className="text-sm opacity-90">{speaker.role}</p>
              <p className="text-xs opacity-75">{speaker.org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Registration CTA */}
      <section className="max-w-7xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Secure Your Spot</h2>
        <div className="max-w-2xl mx-auto p-8 rounded-lg" style={{ background: 'var(--accent)', color: 'var(--foreground)' }}>
          <p className="text-xl mb-4">Early Founder Cohort: $9,999</p>
          <p className="text-sm mb-6">Includes full program access, mentor sessions, and lifetime community membership</p>
          <button className="px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                  style={{ background: 'var(--foreground)', color: 'var(--accent)' }}>
            Apply Now
          </button>
        </div>
      </section>

      {/* Host Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Host Partners</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {['AWS', 'HubSpot', 'Notion', 'BangkokBank', 'TrueDigital'].map((logo, idx) => (
            <div key={idx} className="h-16 bg-gray-800 bg-contain bg-center bg-no-repeat opacity-80 hover:opacity-100 transition-opacity"
                 style={{ backgroundImage: `url(/logos/${logo.toLowerCase()}.svg)` }}></div>
          ))}
        </div>
      </section>
    </main>
  );
}