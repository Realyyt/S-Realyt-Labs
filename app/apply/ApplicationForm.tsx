'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

type ProgramType = 'residency' | 'ignite' | 'vc';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin: string;
  programType: ProgramType;
  projectDescription: string;
  experience: string;
  goals: string;
  timeline: string;
  referral: string;
}

export default function ApplicationForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    programType: (searchParams.get('program') as ProgramType) || 'residency',
    projectDescription: '',
    experience: '',
    goals: '',
    timeline: '',
    referral: ''
  });

  const programDetails = {
    residency: {
      title: '12-Week Residency Program',
      description: 'Scale globally as a Founder, Hacker, Capitalist, or Creator',
      requirements: [
        'Commitment to 12-week in-person program',
        'MVP or proof of concept',
        'Full-time dedication',
        'Growth-oriented mindset'
      ]
    },
    ignite: {
      title: '12-Day Ignite Program',
      description: 'Intensive acceleration for visionary founders',
      requirements: [
        'Clear project vision',
        'Basic prototype or concept',
        'Full-time availability for 12 days',
        'Ready to scale globally'
      ]
    },
    vc: {
      title: 'VC Network',
      description: 'Join our exclusive network of high-impact investors',
      requirements: [
        'Minimum investment capacity of $10k',
        'Industry expertise or network',
        'Long-term investment perspective',
        'Value-add beyond capital'
      ]
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // For now, we'll simulate submission with an email
    const emailSubject = `Next12 ${formData.programType.toUpperCase()} Application - ${formData.firstName} ${formData.lastName}`;
    const emailBody = Object.entries(formData)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n\n');
    
    window.location.href = `mailto:labs@next12.org?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040423] via-transparent to-[#040423] z-10" />
        <Image
          src="/apply-bg.jpg"
          alt="Apply background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Apply to <span className="text-[#EF400A]">Next12</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            {programDetails[formData.programType].description}
          </p>

          {/* Program Requirements */}
          <div className="bg-[#0a0a2f] rounded-xl border border-[#EF400A]/20 p-6 mb-12">
            <h2 className="text-xl font-bold mb-4">Program Requirements</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programDetails[formData.programType].requirements.map((req, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-[#EF400A]">•</span>
                  <span className="text-gray-300">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Program Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(['residency', 'ignite', 'vc'] as const).map((program) => (
                <button
                  key={program}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, programType: program }))}
                  className={`p-4 rounded-xl border transition-all ${
                    formData.programType === program
                      ? 'bg-[#EF400A] border-transparent text-white'
                      : 'border-[#EF400A]/20 text-gray-300 hover:border-[#EF400A]'
                  }`}
                >
                  {programDetails[program].title}
                </button>
              ))}
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                className="bg-[#0a0a2f] border border-[#EF400A]/20 rounded-lg px-4 py-3 focus:border-[#EF400A] outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                className="bg-[#0a0a2f] border border-[#EF400A]/20 rounded-lg px-4 py-3 focus:border-[#EF400A] outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="bg-[#0a0a2f] border border-[#EF400A]/20 rounded-lg px-4 py-3 focus:border-[#EF400A] outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="bg-[#0a0a2f] border border-[#EF400A]/20 rounded-lg px-4 py-3 focus:border-[#EF400A] outline-none"
              />
              <input
                type="url"
                placeholder="LinkedIn Profile"
                required
                value={formData.linkedin}
                onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                className="bg-[#0a0a2f] border border-[#EF400A]/20 rounded-lg px-4 py-3 focus:border-[#EF400A] outline-none md:col-span-2"
              />
            </div>

            {/* Program Specific Questions */}
            <div className="space-y-6">
              <textarea
                placeholder={formData.programType === 'vc' 
                  ? "Describe your investment thesis and experience"
                  : "Describe your project or startup"}
                required
                value={formData.projectDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, projectDescription: e.target.value }))}
                className="w-full bg-[#0a0a2f] border border-[#EF400A]/20 rounded-lg px-4 py-3 focus:border-[#EF400A] outline-none h-32"
              />
              <textarea
                placeholder="Relevant experience and achievements"
                required
                value={formData.experience}
                onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                className="w-full bg-[#0a0a2f] border border-[#EF400A]/20 rounded-lg px-4 py-3 focus:border-[#EF400A] outline-none h-32"
              />
              <textarea
                placeholder="What are your goals for this program?"
                required
                value={formData.goals}
                onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                className="w-full bg-[#0a0a2f] border border-[#EF400A]/20 rounded-lg px-4 py-3 focus:border-[#EF400A] outline-none h-32"
              />
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Preferred timeline"
                value={formData.timeline}
                onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                className="bg-[#0a0a2f] border border-[#EF400A]/20 rounded-lg px-4 py-3 focus:border-[#EF400A] outline-none"
              />
              <input
                type="text"
                placeholder="How did you hear about us?"
                value={formData.referral}
                onChange={(e) => setFormData(prev => ({ ...prev, referral: e.target.value }))}
                className="bg-[#0a0a2f] border border-[#EF400A]/20 rounded-lg px-4 py-3 focus:border-[#EF400A] outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white rounded-full py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 