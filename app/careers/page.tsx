'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Careers() {
  const [activeTab, setActiveTab] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'design', name: 'Design' },
    { id: 'product', name: 'Product' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'operations', name: 'Operations' },
  ];

  const benefits = [
    {
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and your dependents',
      icon: '🏥'
    },
    {
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and professional development',
      icon: '📚'
    },
    {
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible working hours',
      icon: '💻'
    },
    {
      title: 'Team Events',
      description: 'Regular team building and social events',
      icon: '🎉'
    },
    {
      title: 'Competitive Salary',
      description: 'Market-competitive compensation package',
      icon: '💰'
    },
    {
      title: 'Growth Opportunities',
      description: 'Clear career progression paths and growth opportunities',
      icon: '📈'
    }
  ];

  return (
    <main className="min-h-screen bg-[#040423] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 py-16 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040423] via-transparent to-[#040423] z-10" />
        <div className="absolute inset-0 bg-[url('/office.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Join Our <span className="text-[#EF400A]">Team</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#0a0a2f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We push boundaries and embrace new ideas to create groundbreaking solutions.'
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and diverse perspectives.'
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do.'
              },
              {
                title: 'Impact',
                description: 'We\'re driven by the desire to make a meaningful impact.'
              },
              {
                title: 'Growth',
                description: 'We foster continuous learning and personal development.'
              },
              {
                title: 'Integrity',
                description: 'We operate with honesty, transparency, and ethical standards.'
              }
            ].map((value, idx) => (
              <div key={idx} className="p-6 bg-[#121240] rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-[#EF400A]">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#040423]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 bg-[#0a0a2f] rounded-xl">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#040423]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We're Currently Not Hiring</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. If you're interested in joining our team, please send your resume to <a href="mailto:labs@next12.org" className="text-[#EF400A]">labs@next12.org</a> and we'll keep you in mind for future opportunities.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
} 