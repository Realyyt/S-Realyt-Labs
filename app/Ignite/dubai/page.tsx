'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function DubaiPage() {
  // Dubai colors: Gold (#C5B358) and Desert Sand (#EDC9AF)
  const dubaiTheme = {
    '--accent': '#C5B358',
    '--secondary': '#EDC9AF',
    '--background': 'linear-gradient(to bottom right, #0D0D0D 0%, #1A1A1A 100%)'
  } as React.CSSProperties;
  

  return (
    <main className="min-h-screen p-8 md:p-24 relative overflow-x-hidden"  style={{ 
      background: 'linear-gradient(160deg, #0D0D0D 0%, #2D2419 100%)',
      border: '1px solid var(--accent)'
    }}>
      {/* Arabian Pattern Background */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/p1.jpg')] bg-repeat opacity-20 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#C5B358]/20 via-transparent to-[#1A1A1A]/80"></div>
      </div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-[url('/p.jpg')] bg-contain animate-float-thai-1"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[url('/p.jpg')] bg-contain rotate-90 animate-float-thai-2"></div>


      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative mb-16 md:mb-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/dubai.jpg')] bg-cover bg-center opacity-90">
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-8" style={{ color: 'var(--accent)' }}>
              NEXT12 IGNITE DUBAI
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--secondary)' }}>
              12-Day MENA Expansion Program · November 5-16, 2025
            </p>
          </div>
        </section>

        {/* Program Schedule */}
        <section className="max-w-7xl mx-auto mb-20 relative px-4" style={{ color: 'var(--secondary)' }}>
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            Program Journey
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1" style={{ backgroundColor: 'var(--accent)' }}></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { day: 'Day 1', title: 'MENA Market Entry', desc: 'Regulatory Landscape & Local Partnerships' },
              { day: 'Day 2-4', title: 'Fintech Deep Dive', desc: 'Payment Systems & Islamic Finance' },
              { day: 'Day 5-7', title: 'Scale Infrastructure', desc: 'Logistics Networks & Free Zone Setup' },
              { day: 'Day 8-10', title: 'Global Funding', desc: 'Sovereign Wealth Fund Strategies' },
              { day: 'Day 11', title: 'Cultural Integration', desc: 'Arab Business Protocol Training' },
              { day: 'Day 12', title: 'Future Cities Summit', desc: 'GovTech Showcase & Investor Forum' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-lg border relative group transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ 
                  borderColor: 'var(--accent)', 
                  background: 'linear-gradient(145deg, rgba(197,179,88,0.2) 0%, rgba(26,26,26,0.8) 100%)' 
                }}
              >
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Focus Tracks */}
        <section className="p-8 rounded-lg relative overflow-hidden group mb-20 mx-4"
          style={{ 
            background: 'linear-gradient(160deg, #1A1A1A 0%, #2D2419 100%)',
            border: '1px solid var(--accent)'
          }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--accent)' }}>Core Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Sovereign Tech', 
                content: 'Smart City integration · GovTech compliance · Blockchain infrastructure',
                partners: ['DP World', 'Emirates NBD']
              },
              { 
                title: 'Islamic Finance', 
                content: 'Sharia-compliant models · Sukuk financing · Ethical investing',
                partners: ['Mashreq Bank', 'Dubai Islamic Bank']
              },
              { 
                title: 'Luxury Tech', 
                content: 'High-end retail tech · Experience economy · Luxury logistics',
                partners: ['Chalhoub Group', 'EMAAR']
              },
              { 
                title: 'Future Mobility', 
                content: 'EV infrastructure · Autonomous transport · Hyperloop networks',
                partners: ['Careem', 'Dubai RTA']
              }
            ].map((track, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-lg relative overflow-hidden group" 
                style={{ 
                  background: 'rgba(26,26,26,0.9)',
                  border: '1px solid rgba(197,179,88,0.2)'
                }}
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--accent)' }}>{track.title}</h3>
                <p className="text-lg mb-4" style={{ color: 'var(--secondary)' }}>{track.content}</p>
                <div className="pt-4 border-t relative" style={{ borderColor: 'var(--accent)' }}>
                  <p className="text-sm font-bold mb-2">Featured Partners:</p>
                  <div className="flex flex-wrap gap-2">
                    {track.partners.map((partner, pIdx) => (
                      <span 
                        key={pIdx}
                        className="px-3 py-1 text-sm rounded-full"
                        style={{ 
                          backgroundColor: 'rgba(197,179,88,0.2)',
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

{/* Registration CTA - Dubai */}
<section className="max-w-2xl mx-auto mb-20 relative px-4">
  <div 
    className="p-8 rounded-lg relative overflow-hidden"
    style={{ 
      background: 'linear-gradient(135deg, #C5B358 0%, #9E7C3D 100%)',
      boxShadow: '0 8px 32px rgba(197,179,88,0.3)'
    }}
  >
    <div className="absolute inset-0 bg-[url('/gold-texture.png')] opacity-20 mix-blend-soft-light"></div>
    <h2 className="text-3xl font-bold mb-8 text-center">Secure Your Emirates Spot</h2>
    <div 
      className="p-6 rounded-lg"
      style={{ 
        background: 'rgba(26,26,26,0.9)', 
        color: 'var(--secondary)' 
      }}
    >
      <p className="text-xl mb-4 text-center">Founder Cohort: AED 3,999</p>
      <p className="text-sm mb-6 text-center">Includes free zone consultation and sovereign fund access</p>
      <div className="text-center">
        <Link
          href="/ignite/dubai/registration"
          className="inline-block px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
          style={{ 
            background: 'var(--accent)', 
            color: '#1A1A1A',
          }}
        >
          Apply for Dubai Program
        </Link>
      </div>
    </div>
  </div>
</section>
      </div>
        {/* Floating Thai Ornaments */}
        <div className="fixed top-1/4 right-4 w-16 h-16 bg-[url('/p2.png')] bg-contain  animate-float"></div>
      <div className="fixed bottom-1/4 left-4 w-16 h-16 bg-[url('/p2.png')] bg-contain  animate-float-delayed"></div>

      {/* Traditional Border Pattern */}
      <div className="fixed inset-0 pointer-events-none border-[16px] border-transparent [border-image:url('/thai-border-pattern.png')_30_repeat] opacity-15"></div>
    </main>
  );
}