import Link from 'next/link';

export default function TechnoPage() {
  return (
    <main className="min-h-screen p-8 md:p-24 overflow-hidden relative">
      {/* Image background */}
      <div className="fixed inset-0 z-0 h-[100dvh]">
        <img 
          src="/next12.png"
          alt="background"
          className="w-full h-full object-cover"
          style={{ 
            mixBlendMode: 'normal',
            transition: 'opacity 0.3s ease',
            height: '100dvh'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        {/* Auto-sliding panel */}
        <div 
          className="fixed left-0 top-1/2 -translate-y-1/2 bg-white p-3 md:p-4 rounded-r-lg shadow-lg z-20 
                   transition-all duration-500 translate-x-0 w-3/4 md:w-auto hidden md:block">
          <div className="text-lg font-bold font-playfair text-gray-800">
          The New Way to Change the World
          </div>
        </div>

        {/* Bottom-aligned card container */}
        <div className="fixed bottom-0 left-0 right-0 pb-6 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 md:px-8 pt-4">
            {/* Residency Card */}
            <Link 
              href="/residency"
              className="group relative rounded-lg p-4 md:p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-full 
                       overflow-hidden transform-gpu hover:-translate-y-1 hover:rotate-[1.5deg] perspective-[1000px]
                       before:absolute before:inset-0 before:border-2 before:border-transparent before:bg-gradient-to-br 
                       before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500
                       hover:before:opacity-100"
              style={{
                background: 'linear-gradient(45deg, var(--accent), var(--accent-light))',
                color: 'var(--foreground)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="space-y-1 md:space-y-4 h-full flex flex-col relative z-10">
                <h2 className="text-xl md:text-2xl font-bold font-playfair">Residency</h2>
                <p className="opacity-90 text-sm md:text-base flex-1">12 Weeks . Scale Global as a Founder | Hacker | Capitalit | Creator </p>
              </div>
            </Link>

            {/* Ignite Card */}
            <Link
              href="/ignite"
              className="group relative rounded-lg p-4 md:p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-full 
                       overflow-hidden transform-gpu hover:-translate-y-1 hover:rotate-[1.5deg] perspective-[1000px]
                       before:absolute before:inset-0 before:border-2 before:border-transparent before:bg-gradient-to-br 
                       before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500
                       hover:before:opacity-100"
              style={{
                background: 'linear-gradient(45deg, var(--accent-light), var(--accent))',
                color: 'var(--foreground)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="space-y-1 md:space-y-4 h-full flex flex-col pb-3 relative z-10">
                <h2 className="text-lg md:text-2xl font-bold font-playfair">Ignite</h2>
                <p className="opacity-90 text-xs md:text-base flex-1">12 days Founder Program . Leave Ignited. </p>
              </div>
            </Link>

            {/* VC Network Card */}
            <Link
              href="/vc"
              className="group relative rounded-lg p-4 md:p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-full 
                       overflow-hidden transform-gpu hover:-translate-y-1 hover:rotate-[1.5deg] perspective-[1000px]
                       before:absolute before:inset-0 before:border-2 before:border-transparent before:bg-gradient-to-br 
                       before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500
                       hover:before:opacity-100"
              style={{
                background: 'linear-gradient(45deg, var(--accent), var(--accent-light))',
                color: 'var(--foreground)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="space-y-1 md:space-y-4 h-full flex flex-col pb-3 relative z-10">
                <h2 className="text-lg md:text-2xl font-bold font-playfair">VC Network</h2>
                <p className="opacity-90 text-xs md:text-base flex-1">Exclusively Invest in high Impact Projects</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
