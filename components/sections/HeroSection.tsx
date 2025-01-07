'use client';
import { useState } from 'react';
import ZohoFormModal from '../ZohoFormModal';
import Button from '../Button';

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="min-h-[80vh] py-16 sm:py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900">
              12 weeks. Scale Global.<br />
              <span className="text-[var(--accent)]">Your Fast-Track to been Global.</span>
            </h1>
            <p className="text-base sm:text-xl mt-6 max-w-2xl mx-auto text-gray-600">
              Join an exclusive community of most promising technical founders, builders and creators.
              Get funded, mentored, and connected to Global Builders.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg">Apply Now</Button>
            </div>
          </div>
        </div>
      </section>
      
      <ZohoFormModal isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
} 