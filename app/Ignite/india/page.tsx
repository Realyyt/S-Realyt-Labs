'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function IndiaPage() {
  // India colors: Saffron Orange (#FF9933) and India Green (#138808)
  const indiaTheme = {
    '--accent': '#FF9933',
    '--secondary': '#138808',
    '--background': '#0F172A'
  } as React.CSSProperties;

  return (
    <main className="min-h-screen p-8 md:p-24 relative overflow-x-hidden" style={indiaTheme}>
                  <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <source src="/hey.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      {/* Mandala Pattern */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/mandala-pattern.svg')] bg-repeat opacity-20 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF9933]/20 via-transparent to-[#0F172A]/80"></div>
      </div>

      {/* Henna Border Designs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[url('/henna-design.png')] bg-contain opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[url('/henna-design.png')] bg-contain opacity-20 rotate-180"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative mb-16 md:mb-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/taj2.jpg')] bg-contain bg-no-repeat bg-top opacity-90">
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-8" style={{ color: 'var(--accent)' }}>
              NEXT12 IGNITE INDIA
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--secondary)' }}>
              12-Day Bharat Market Program · January 15-26, 2026
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
              { day: 'Day 1', title: 'Bharat Market Entry', desc: 'Regionalization Strategies' },
              { day: 'Day 2-4', title: 'Digital Public Goods', desc: 'UPI & Aadhaar Integration' },
              { day: 'Day 5-7', title: 'Localization Playbook', desc: 'Language & Payment Stack' },
              { day: 'Day 8-10', title: 'Manufacturing Scale', desc: 'PLI Schemes & Export Tech' },
              { day: 'Day 11', title: 'Social Commerce', desc: 'WhatsApp Commerce & Vernacular UX' },
              { day: 'Day 12', title: 'Bharat Demo Day', desc: 'Tier 2-3 City Investor Summit' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-lg border relative group transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ 
                  borderColor: 'var(--accent)', 
                  background: 'linear-gradient(145deg, rgba(255,153,51,0.2) 0%, rgba(15,23,42,0.8) 100%)' 
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
            background: 'linear-gradient(160deg, #0F172A 0%, #2D1B00 100%)',
            border: '1px solid var(--accent)'
          }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--accent)' }}>Core Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'India Stack Mastery', 
                content: 'UPI integrations · ONDC protocols · Aadhaar compliance',
                partners: ['Paytm', 'PhonePe']
              },
              { 
                title: 'Vernacular Tech', 
                content: 'Regional language NLP · Voice interfaces · Indic fonts',
                partners: ['Jio', 'ShareChat']
              },
              { 
                title: 'Agri Supply Chain', 
                content: 'Mandi digitization · Cold chain tech · FPO networks',
                partners: ['Ninjacart', 'DeHaat']
              },
              { 
                title: 'Social Commerce', 
                content: 'WhatsApp storefronts · Video commerce · Group buying',
                partners: ['Meesho', 'DealShare']
              }
            ].map((track, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-lg relative overflow-hidden group" 
                style={{ 
                  background: 'rgba(15,23,42,0.9)',
                  border: '1px solid rgba(255,153,51,0.2)'
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
                          backgroundColor: 'rgba(255,153,51,0.2)',
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

        {/* Registration CTA - India */}
<section className="max-w-2xl mx-auto mb-20 relative px-4">
  <div 
    className="p-8 rounded-lg relative overflow-hidden"
    style={{ 
      background: 'linear-gradient(135deg, #FF9933 0%, #CC6600 100%)',
      boxShadow: '0 8px 32px rgba(255,153,51,0.3)'
    }}
  >
    <div className="absolute inset-0 bg-[url('/saffron-texture.png')] opacity-20 mix-blend-soft-light"></div>
    <h2 className="text-3xl font-bold mb-8 text-center">Claim Your Bharat Access</h2>
    <div 
      className="p-6 rounded-lg"
      style={{ 
        background: 'rgba(15,23,42,0.9)', 
        color: 'var(--secondary)' 
      }}
    >
      <p className="text-xl mb-4 text-center">Founder Price: ₹79,999</p>
      <p className="text-sm mb-6 text-center">Includes India Stack integration support and regional network</p>
      <div className="text-center">
        <Link
          href="/ignite/india/registration"
          className="inline-block px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
          style={{ 
            background: 'var(--secondary)', 
            color: '#0F172A',
          }}
        >
          Apply for India Program
        </Link>
      </div>
    </div>
  </div>
</section>
   
      </div>
    </main>
  );
}