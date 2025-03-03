import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#040423] border-b border-[#EF400A]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo1.png" 
              alt="Next12 Logo" 
              width={96}
              height={96}
              className="w-24 h-24"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-[#EF400A] transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/ignite" 
              className="text-white hover:text-[#EF400A] transition-colors"
            >
              Ignite
            </Link>
            <Link 
              href="/residency" 
              className="text-white hover:text-[#EF400A] transition-colors"
            >
              Residency
            </Link>
            <Link 
              href="/apply" 
              className="px-6 py-2 bg-[#EF400A] text-white rounded-full hover:bg-[#ff5a2b] transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;