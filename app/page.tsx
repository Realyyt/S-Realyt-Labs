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
        <div className="fixed left-0 top-8 md:top-1/2 md:-translate-y-1/2 bg-[#0a0a2f] p-3 md:p-4 
                     rounded-r-lg shadow-lg z-20 transition-all duration-500 translate-x-0 
                     w-[90%] md:w-auto border border-[#EF400A]/20">
          <div className="text-base md:text-lg font-bold text-white">
            The New Way to Change the World
          </div>
        </div>

        {/* Bottom-aligned card container */}
        <div className="fixed bottom-0 left-0 right-0 pb-4 md:pb-16 px-3 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
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
              <div className="space-y-2 md:space-y-4 h-full flex flex-col relative z-10">
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
              <div className="space-y-2 md:space-y-4 h-full flex flex-col pb-3 relative z-10">
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
              <div className="space-y-2 md:space-y-4 h-full flex flex-col pb-3 relative z-10">
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
