'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-4 sm:py-6 lg:py-8 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between items-center mb-6 sm:mb-8 lg:mb-12">
          
          {/* Logo and tagline */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
              {/* Logo and tagline  <Image 
                src="/logo.png" 
                alt="S∞Realyt Labs Logo" 
                width={32} 
                height={32}
              />*/}
              <span className="text-lg sm:text-xl lg:text-2xl font-playfair">S∞Realyt Labs</span>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-foreground/80">homes for the ambitious</p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6">
            <Link href="https://twitter.com" className="hover:opacity-80 transition-opacity">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link href="https://linkedin.com" className="hover:opacity-80 transition-opacity">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
              </svg>
            </Link>
            <Link href="https://instagram.com" className="hover:opacity-80 transition-opacity">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
              </svg>
            </Link>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-row gap-2 sm:gap-3 lg:gap-4">
            <Link href="/" className="text-xs sm:text-sm lg:text-base hover:opacity-80 transition-opacity">home</Link>
            <Link href="/about" className="text-xs sm:text-sm lg:text-base hover:opacity-80 transition-opacity">about us</Link>
            <Link href="/donate" className="text-xs sm:text-sm lg:text-base hover:opacity-80 transition-opacity">donate</Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm text-foreground/60">
          © 2024 - made with love and care for viewers like you
        </div>
      </div>
    </footer>
  );
}