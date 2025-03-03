import Link from 'next/link';
import Image from 'next/image';

export default function TechnoPage() {
  return (
    <main className="min-h-screen bg-[#040423] overflow-hidden relative">
      {/* Image background */}
      <div className="fixed inset-0 z-0 h-[100dvh]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040423] via-transparent to-[#040423] z-10" />
        <Image 
          src="/next12.png"
          alt="background"
          fill
          className="object-cover opacity-20"
          style={{ 
            mixBlendMode: 'normal',
            transition: 'opacity 0.3s ease',
          }}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        {/* Auto-sliding panel */}
        <div 
          className="fixed left-0 top-1/2 -translate-y-1/2 bg-[#0a0a2f] p-3 md:p-4 rounded-r-lg shadow-lg z-20 
                   transition-all duration-500 translate-x-0 w-3/4 md:w-auto hidden md:block
                   border border-[#EF400A]/20">
          <div className="text-lg font-bold text-white">
            The New Way to Change the World
          </div>
        </div>

        {/* Bottom-aligned card container */}
        <div className="fixed bottom-0 left-0 right-0 pb-6 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 md:px-8 pt-4">
            {/* Residency Card */}
            <Link 
              href="/residency"
              className="group relative rounded-xl p-4 md:p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-full 
                       overflow-hidden transform-gpu hover:-translate-y-1 hover:rotate-[1.5deg] perspective-[1000px]
                       bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="space-y-1 md:space-y-4 h-full flex flex-col relative z-10">
                <h2 className="text-xl md:text-2xl font-bold">Residency</h2>
                <p className="text-white/90 text-sm md:text-base flex-1">
                  12 Weeks · Scale Global as a Founder | Hacker | Capitalist | Creator
                </p>
              </div>
            </Link>

            {/* Ignite Card */}
            <Link
              href="/ignite"
              className="group relative rounded-xl p-4 md:p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-full 
                       overflow-hidden transform-gpu hover:-translate-y-1 hover:rotate-[1.5deg] perspective-[1000px]
                       bg-[#0a0a2f] border border-[#EF400A] text-white"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="space-y-1 md:space-y-4 h-full flex flex-col pb-3 relative z-10">
                <h2 className="text-lg md:text-2xl font-bold text-[#EF400A]">Ignite</h2>
                <p className="text-white/90 text-xs md:text-base flex-1">
                  12 days Founder Program · Leave Ignited
                </p>
              </div>
            </Link>

            {/* VC Network Card */}
            <Link
              href="/vc"
              className="group relative rounded-xl p-4 md:p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-full 
                       overflow-hidden transform-gpu hover:-translate-y-1 hover:rotate-[1.5deg] perspective-[1000px]
                       bg-gradient-to-r from-[#ff5a2b] to-[#EF400A] text-white"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="space-y-1 md:space-y-4 h-full flex flex-col pb-3 relative z-10">
                <h2 className="text-lg md:text-2xl font-bold">VC Network</h2>
                <p className="text-white/90 text-xs md:text-base flex-1">
                  Exclusively Invest in High Impact Projects
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
