import Link from 'next/link';

export default function TechnoPage() {
  return (
    <main className="min-h-screen p-8 md:p-24 overflow-hidden relative">
      {/* Video background with overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ 
            mixBlendMode: 'normal',
            transition: 'opacity 0.3s ease' // Smooth fade between loops
          }}
        >
          <source src="/h.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated grid overlay */}
    
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-7xl font-playfair font-bold text-center mb-8 md:mb-16 gradient-text" style={{ letterSpacing: '0.1em' }}>
          <span className="font-pixel" style={{ width: '1em', height: '1em', display: 'inline-block', margin: '0 0.05em' }}>N</span>
          <span className="font-pixel" style={{ width: '1em', height: '1em', display: 'inline-block', margin: '0 0.05em' }}>E</span>
          <span className="font-pixel" style={{ width: '1em', height: '1em', display: 'inline-block', margin: '0 0.05em' }}>X</span>
          <span className="font-pixel" style={{ width: '1em', height: '1em', display: 'inline-block', margin: '0 0.05em' }}>T</span>
          <span className="font-pixel" style={{ width: '1em', height: '1em', display: 'inline-block', margin: '0 0.05em' }}>1</span>
          <span className="font-pixel" style={{ width: '1em', height: '1em', display: 'inline-block', margin: '0 0.05em' }}>2</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {/* Residency Card */}
          <Link 
            href="/residency"
            className="group relative rounded-lg p-3 md:p-8 transition-all hover:scale-105 shadow-lg h-full"
            style={{
              background: 'linear-gradient(45deg, var(--accent), var(--accent-light))',
              color: 'var(--foreground)'
            }}
          >
            <div className="space-y-1 md:space-y-4 h-full flex flex-col">
              <h2 className="text-lg md:text-2xl font-bold font-playfair">Residency</h2>
              <p className="opacity-90 text-xs md:text-base flex-1">12 Weeks . Scale Global as a Founder | Hacker | Capitalit | Creator </p>
            </div>
          </Link>

          {/* Ignite Card */}
          <Link
            href="/ignite"
            className="group relative rounded-lg p-3 md:p-8 transition-all hover:scale-105 shadow-lg h-full"
            style={{
              background: 'linear-gradient(45deg, var(--accent-light), var(--accent))',
              color: 'var(--foreground)'
            }}
          >
            <div className="space-y-1 md:space-y-4 h-full flex flex-col pb-3">
              <h2 className="text-lg md:text-2xl font-bold font-playfair">Ignite</h2>
              <p className="opacity-90 text-xs md:text-base flex-1">12 days Founder Program . Leave Ignited. </p>
            </div>
          </Link>

          {/* VC Network Card */}
          <Link
            href="/vc"
            className="group relative rounded-lg p-3 md:p-8 transition-all hover:scale-105 shadow-lg h-full"
            style={{
              background: 'linear-gradient(45deg, var(--accent), var(--accent-light))',
              color: 'var(--foreground)'
            }}
          >
            <div className="space-y-1 md:space-y-4 h-full flex flex-col pb-3">
              <h2 className="text-lg md:text-2xl font-bold font-playfair">VC Network</h2>
              <p className="opacity-90 text-xs md:text-base flex-1">Exclusively Invest in high Impact Projects</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
