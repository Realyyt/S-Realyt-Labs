'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 64;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white [data-theme='dark']:bg-gray-800 border-b border-gray-200 [data-theme='dark']:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - adjusted size for mobile */}
          <Link href="/">
            <img src="/Next12 logo - orange.png" alt="Next12 Logo" className="w-24 h-24 sm:w-32 sm:h-32"/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-gray-900">
            <button onClick={() => scrollToSection('program')} className="hover:text-[var(--accent)]">Program</button>
            <button onClick={() => scrollToSection('roles')} className="hover:text-[var(--accent)]">Schedule</button>
            <button onClick={() => scrollToSection('mentors')} className="hover:text-[var(--accent)]">Who We Look For</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-[var(--accent)]">FAQ</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu - improved styling */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white absolute top-16 left-0 right-0 border-b border-gray-200 shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('program')} className="py-2 text-left text-gray-900 hover:text-[var(--accent)]">Program</button>
              <button onClick={() => scrollToSection('roles')} className="py-2 text-left text-gray-900 hover:text-[var(--accent)]">Schedule</button>
              <button onClick={() => scrollToSection('mentors')} className="py-2 text-left text-gray-900 hover:text-[var(--accent)]">Who We Look For</button>
              <button onClick={() => scrollToSection('faq')} className="py-2 text-left text-gray-900 hover:text-[var(--accent)]">FAQ</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 