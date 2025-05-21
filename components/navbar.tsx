"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Ignite", label: "Ignite" },
    { href: "/Residency", label: "residency" },
    { href: "/Hubs", label: "Hubs" },
    { href: "/Investor", label: "Investor" },
    { href: "/the50", label: "The50" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-[#040423]/95 backdrop-blur-sm border-b border-[#EF400A]/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo ]*/}
          <Link href="/" className="flex items-center">
            <Image 
              src="/colouredlogo.png" 
              alt="Next12 Logo" 
              width={60}
              height={30}
              className="w-16 h-4 md:w-24 md:h-6"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-[#EF400A] transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#EF400A] transition-colors text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="px-6 py-2 bg-[#EF400A] text-white text-sm rounded-full hover:bg-[#ff5a2b] transition-all duration-300 tracking-wide"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#EF400A] transition-colors text-sm tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="px-6 py-2 bg-[#EF400A] text-white text-sm rounded-full hover:bg-[#ff5a2b] transition-all duration-300 tracking-wide w-fit"
              onClick={() => setIsMenuOpen(false)}
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