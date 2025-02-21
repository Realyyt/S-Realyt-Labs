'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function LagosPage() {
  // Updated color theme: Gold and Deep Blue
  const lagosTheme = {
    '--accent': '#f59e0b',      // Amber-500
    '--secondary': '#0ea5e9',   // Sky-500
    '--background': '#0f172a',  // Slate-900
    '--foreground': '#f8fafc'   // Slate-50
  } as React.CSSProperties;

  return (
    <main className="min-h-screen p-8 md:p-24 relative overflow-x-hidden bg-slate-900" style={lagosTheme}>
      {/* Traditional Mosaic Pattern (unchanged) */}
      <div className="fixed inset-0 z-0 opacity-100 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-1 p-4">
          {Array.from({ length: 48 }).map((_, i) => {
            const baseColor = [
              '#008751', // Nigerian Green
              '#FFD700', // Sunshine Yellow
              '#0A1E23', // Dark Teal
              '#9C3B2E', // African Terracotta
              '#4B0082', // Indigo
              '#D4AF37', // Gold
              '#005738', // Deep Forest
              '#CD7F32', // Bronze
              '#1A4B2A', // African Earth
              '#2C3E50'  // Deep Blue
            ][i % 10];
            
            const colorFamilies = {
              '#008751': ['#006A40', '#008751', '#00A86B', '#005738'],
              '#FFD700': ['#FFDF00', '#FFD700', '#E5C100', '#FFE55C'],
              '#9C3B2E': ['#8B2E22', '#9C3B2E', '#AD483A', '#7A2418'],
              '#4B0082': ['#3A006B', '#4B0082', '#5C0099', '#2A0052'],
              '#D4AF37': ['#C5A030', '#D4AF37', '#E3BE44', '#B59028'],
              '#CD7F32': ['#BE7023', '#CD7F32', '#DC8E41', '#AD6014']
            };

            return (
              <div 
                key={i}
                className="grid grid-cols-4 grid-rows-4 gap-0.5"
                style={{
                  transform: `rotate(${Math.random() * 4 - 2}deg)`
                }}
              >
                {Array.from({ length: 16 }).map((_, j) => (
                  <div
                    key={j}
                    className="w-full h-full"
                    style={{
                      backgroundColor: colorFamilies[baseColor as keyof typeof colorFamilies]
                        ? colorFamilies[baseColor as keyof typeof colorFamilies][Math.floor(Math.random() * 4)]
                        : baseColor,
                      clipPath: [
                        'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                        'polygon(25% 0, 75% 0, 100% 100%, 0 100%)',
                        'polygon(0 25%, 100% 0, 75% 100%, 0 75%)',
                        'polygon(20% 0, 80% 0, 100% 100%, 0 100%)',
                        'polygon(0 0, 100% 0, 50% 100%)',
                        'polygon(0 0, 100% 100%, 0 100%)'
                      ][Math.floor(Math.random() * 6)],
                      opacity: Math.random() * 0.2 + 0.8,
                      transform: `scale(${Math.random() * 0.2 + 0.9})`
                    }}
                  />
                ))}
              </div>
            );
          })}
        </div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#0002_0px,#0002_2px,#0000_2px,#0000_4px)] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E23] via-transparent to-[#0A1E23] opacity-30" />
      </div>

      {/* Adinkra Symbols */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[url('/adinkra.png')] bg-contain opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[url('/adinkra.png')] bg-contain opacity-20 rotate-180"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative mb-16 md:mb-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/lagos.jpg')] bg-cover bg-center opacity-90">
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4">
            <h1 
              className="text-4xl md:text-7xl font-bold mb-8 gradient-text"
              style={{ 
                backgroundImage: 'linear-gradient(45deg, #f59e0b, #fde047)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              NEXT12 IGNITE LAGOS
            </h1>
            <p 
              className="text-lg md:text-xl max-w-3xl mx-auto mb-8 bg-slate-900/80 p-4 rounded-lg text-amber-100"
            >
              12-Day African Scale Program · March 10-21, 2026
            </p>
          </div>
        </section>

        {/* Program Schedule */}
        <section className="max-w-7xl mx-auto mb-20 relative px-4 text-amber-100">
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            Program Journey
            <div 
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber-500/80"
            ></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { day: 'Day 1', title: 'AfCFTA Strategy', desc: 'Pan-African Trade Integration' },
              { day: 'Day 2-4', title: 'Mobile First Economy', desc: 'USSD Tech & Agent Networks' },
              { day: 'Day 5-7', title: 'Energy Innovation', desc: 'Solar Tech & Mini-Grid Systems' },
              { day: 'Day 8-10', title: 'Cultural Commerce', desc: 'Nollywood & Afrobeats Synergies' },
              { day: 'Day 11', title: 'Fintech Frontier', desc: 'Cross-Border Payment Solutions' },
              { day: 'Day 12', title: 'Lion\'s Den Summit', desc: 'Demo Day with African VCs' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-lg border relative group transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ 
                  borderColor: 'var(--accent)',
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.8) 0%, rgba(30,27,24,0.8) 100%)'
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
            background: 'linear-gradient(160deg, rgb(15 23 42) 0%, rgb(30 27 24) 100%)',
            border: '1px solid rgba(245,158,11,0.3)',
            boxShadow: '0 4px 30px rgba(245,158,11,0.05)'
          }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-100">Core Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'AgriTech Revolution', 
                content: 'Supply chain optimization · FarmTech solutions · Commodity trading',
                partners: ['Flutterwave', 'Paystack']
              },
              { 
                title: 'Creative Economy', 
                content: 'Content distribution · Royalty management · IP protection',
                partners: ['Boomplay', 'Filmhouse']
              },
              { 
                title: 'HealthTech Leap', 
                content: 'Telemedicine networks · Drug distribution · Diagnostic AI',
                partners:['mPharma', 'Helium Health']
              },
              { 
                title: 'Logistics Network', 
                content: 'Last-mile solutions · Cross-border tracking · Drone delivery',
                partners: ['Kobo360', 'Gokada']
              }
            ].map((track, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-lg relative overflow-hidden group" 
                style={{ 
                  background: 'rgb(30 41 59)',
                  border: '1px solid rgba(245,158,11,0.2)'
                }}
              >
                <h3 className="text-2xl font-bold mb-4 text-amber-200">{track.title}</h3>
                <p className="text-lg mb-4 text-amber-300">{track.content}</p>
                <div className="pt-4 border-t border-amber-800/50">
                  <p className="text-sm font-bold mb-2 text-amber-200">Featured Partners:</p>
                  <div className="flex flex-wrap gap-2">
                    {track.partners.map((partner, pIdx) => (
                      <span 
                        key={pIdx}
                        className="px-3 py-1 text-sm rounded-full bg-amber-900/30 hover:bg-amber-900/50 transition-colors text-amber-100"
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

        {/* Registration CTA - Lagos */}
        <section className="max-w-2xl mx-auto mb-20 relative px-4">
          <div 
            className="p-8 rounded-lg relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)',
              boxShadow: '0 8px 32px rgba(245,158,11,0.3)'
            }}
          >
            <div className="absolute inset-0 bg-[url('/silk-texture.png')] opacity-20 mix-blend-soft-light"></div>
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Join the African Scale</h2>
            <div 
              className="p-6 rounded-lg bg-slate-900/90 text-amber-100"
            >
              <p className="text-xl mb-4 text-center">Early Bird: ₦499,999</p>
              <p className="text-sm mb-6 text-center">Includes AfCFTA compliance toolkit and partner network</p>
              <div className="text-center">
                <Link
                  href="/ignite/lagos/registration"
                  className="inline-block px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform bg-amber-500 text-slate-900 hover:bg-amber-400"
                >
                  Apply for Lagos Program
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}