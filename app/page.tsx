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
          <source src="/walk.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated grid overlay */}
    
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-8xl font-playfair font-bold text-center mb-16 gradient-text" style={{ letterSpacing: '0.1em' }}>
          <span className="font-pixel" style={{ width: '1em', height: '1em', display: 'inline-block', margin: '0 0.05em' }}>N</span>
          <span className="font-pixel" style={{ width: '1em', height: '1em', display: 'inline-block', margin: '0 0.05em' }}>E</span>
          <span className="font-pixel" style={{ width: '1em', height: '1em', display: 'inline-block', margin: '0 0.05em' }}>X</span>
          <span className="font-pixel" style={{ width: '1em', height: '1em', display: 'inline-block', margin: '0 0.05em' }}>T</span>
          <span className="font-pixel" style={{ width: '1em', height: '1em', display: 'inline-block', margin: '0 0.05em' }}>1</span>
          <span className="font-pixel" style={{ width: '1em', height: '1em', display: 'inline-block', margin: '0 0.05em' }}>2</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Residency Card */}
          <Link 
            href="/residency"
            className="group relative rounded-lg p-8 transition-all hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(45deg, var(--accent), var(--accent-light))',
              color: 'var(--foreground)'
            }}
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-playfair">Residency</h2>
              <p className="opacity-90">12 Weeks . Scale Global as a Founder | Hacker | Capitalit | Creator </p>
            </div>
          </Link>

          {/* Ignite Card */}
          <Link
            href="/ignite"
            className="group relative rounded-lg p-8 transition-all hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(45deg, var(--accent-light), var(--accent))',
              color: 'var(--foreground)'
            }}
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-playfair">Ignite</h2>
              <p className="opacity-90">12 days Founder Program . Leave Ignited. </p>
            </div>
          </Link>

          {/* VC Network Card */}
          <Link
            href="/vc"
            className="group relative rounded-lg p-8 transition-all hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(45deg, var(--accent), var(--accent-light))',
              color: 'var(--foreground)'
            }}
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-playfair">VC Network</h2>
              <p className="opacity-90">Exclusively Invest in high Impact Projects</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
