const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white [data-theme='dark']:bg-gray-800 border-b border-gray-200 [data-theme='dark']:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/Next12 logo - orange.png" 
              alt="Next12 Logo" 
              className="w-24 h-24"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className="hover:text-[var(--accent)] transition-colors font-playfair"
            >
              Home
            </Link>
            <Link
              href="/residency"
              className="hover:text-[var(--accent)] transition-colors font-playfair"
            >
              Residency
            </Link>
            <Link
              href="/ignite"
              className="hover:text-[var(--accent)] transition-colors font-playfair"
            >
              Ignite
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};