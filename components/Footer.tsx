import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white [data-theme='dark']:bg-gray-800 border-t border-gray-100">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/">
              <Image 
                src="/Next12 logo - orange.png" 
                alt="Next12 Logo" 
                width={96}
                height={96}
                className="w-24 h-24 sm:w-32 sm:h-32"
              />
            </Link>
            <p className="text-gray-900 [data-theme='dark']:text-gray-100 text-center sm:text-left">
              Elevating Innovation, One Founder at a Time
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-bold mb-4 text-gray-900 [data-theme='dark']:text-gray-100">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-6">
              <a 
                href="https://twitter.com/next12labs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 [data-theme='dark']:text-gray-100 hover:text-[var(--accent)]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/next12labs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 [data-theme='dark']:text-gray-100 hover:text-[var(--accent)]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-900 [data-theme='dark']:text-gray-100">
          <p>&copy; {new Date().getFullYear()} Next12. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 