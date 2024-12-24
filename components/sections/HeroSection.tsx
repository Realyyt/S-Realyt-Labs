'use client';
import { useState } from 'react';
import ZohoFormModal from '../ZohoFormModal';

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="min-h-[80vh] py-32 relative overflow-hidden bg-gradient-to-r from-[rgba(var(--accent-rgb),0.05)] via-white to-[rgba(var(--accent-rgb),0.05)]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              12 weeks. Scale Global.<br />
              <span className="gradient-text">Your Fast-Track to been Global.</span>
            </h1>
            <p className="text-xl mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Join an exclusive community of most promising technical founders, builders and creators.
              Get funded, mentored, and connected to Global Builders.
            </p>
            <button 
              onClick={() => setShowForm(true)}
              className="mt-8 inline-block px-8 py-3 bg-[var(--accent)] text-white rounded-full 
              hover:bg-[var(--accent-light)] transition-colors text-lg font-medium"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>
      
      <ZohoFormModal isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
} 