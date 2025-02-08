'use client';

import Navbar from '@/components/navbar';
import Link from 'next/link';

export default function Ignite() {
  return (
    
    <main className="min-h-screen p-8 md:p-24 relative overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16 md:mb-24 text-center">
        <h1 
          className="text-4xl md:text-7xl font-bold mb-8 md:mb-16 gradient-text text-center"
          style={{ letterSpacing: '0.1em' }}
        >
          {"NEXT12 IGNITE".split('').map((char, index) => (
            <span 
              key={index}
              className="font-pixel"
              style={{
                width: '1em',
                height: '1em',
                display: 'inline-block',
                margin: '0 0.05em'
              }}
            >
              {char}
            </span>
          ))}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--accent)' }}>
          12-Day Founder Acceleration Program · Leave Ignited
        </p>
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-base md:text-lg">
            Ignite is a hyper-condensed acceleration program for visionary founders ready to transform their ideas into global impact. Through our battle-tested methodology, participants rapidly validate, prototype, and prepare for scale.
          </p>
        </div>
      </section>

      {/* Program Process */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">The Ignition Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Validation Sprint', desc: 'Stress-test your core hypothesis with real market data' },
            { title: 'Unit Economics Mastery', desc: 'Lock down sustainable business fundamentals' },
            { title: 'Pitch Forge', desc: 'Craft irresistible investor storytelling' },
            { title: 'Architect Scale', desc: 'Design your growth engine and moat' },
            { title: 'Founder Mindset', desc: 'Develop unshakable leadership resilience' },
            { title: 'Demo Day', desc: 'Pitch to our global network of investors' },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-lg border hover:scale-105 transition-transform"
              style={{
                background: 'var(--background)',
                borderColor: 'var(--accent)'
              }}
            >
              <div className="text-2xl mb-2 font-bold" style={{ color: 'var(--accent)' }}>{idx + 1}.</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program Features */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Ignite?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Hyper-condensed', 
              desc: '12 days of intense, focused development. No fluff, only essential scaling tools' 
            },
            { 
              title: 'Global Network', 
              desc: 'Immediate access to our worldwide community of founders and investors' 
            },
            { 
              title: 'Proven Framework', 
              desc: 'Battle-tested scaling methodology from serial unicorn builders' 
            },
          ].map((feature, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-lg relative overflow-hidden"
              style={{
                background: `linear-gradient(45deg, var(--accent), var(--accent-light))`,
                color: 'var(--foreground)'
              }}
            >
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Ignitions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              location: 'Lagos ', 
              date: 'March 15-27, 2025', 
              focus: 'AI & DeFi',
              status: 'Coming Soon'
            },
            { 
              location: 'Dubai', 
              date: 'June 1-13, 2025', 
              focus: 'Web3 & Fintech',
              status: 'Coming Soon'
            },
          ].map((program, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-lg border relative overflow-hidden group"
              style={{
                background: 'var(--background)',
                borderColor: 'var(--accent)'
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{program.location}</h3>
                  <p className="text-sm opacity-90">{program.date}</p>
                </div>
                <span 
                  className="px-4 py-1 rounded-full text-sm"
                  style={{
                    background: `linear-gradient(45deg, var(--accent), var(--accent-light))`,
                    color: 'var(--foreground)'
                  }}
                >
                  {program.status}
                </span>
              </div>
              <p className="text-lg mb-4" style={{ color: 'var(--accent)' }}>Focus: {program.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Success 
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Alumni Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: 'John Doe', 
              company: 'Tech Innovators',
              successStory: 'John successfully launched his startup and raised $10M in Series A funding'
            },
            { 
              name: 'Jane Smith', 
              company: 'HealthTech Solutions',
              successStory: 'Jane expanded her business to 10 countries and became a global leader'
            },
            { 
              name: 'Mike Johnson', 
              company: 'Fintech Solutions',
              successStory: 'Mike successfully integrated blockchain technology into his financial services'
            },
          ].map((alumni, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-lg border relative overflow-hidden group"
              style={{
                background: 'var(--background)',
                borderColor: 'var(--accent)'
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{alumni.name}</h3>
                  <p className="text-sm opacity-90">{alumni.company}</p>
                </div>
              </div>
              <p className="text-lg mb-4" style={{ color: 'var(--accent)' }}>{alumni.successStory}</p>
            </div>
          ))}
        </div>
      </section>*/}

      {/* New Host Application Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Host Next12 Ignite</h2>
        <div className="max-w-3xl mx-auto p-8 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }}>
          <p className="text-lg mb-6 text-center" style={{ color: 'var(--accent)' }}>
            Bring the Ignite program to your city or organization
          </p>
          <form 
            className="space-y-6" 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const body = Array.from(formData.entries())
                .map(([key, value]) => {
                  const labels = {
                    name: 'Full Name',
                    email: 'Email Address',
                    phone: 'Phone Number',
                    linkedin: 'LinkedIn Profile',
                    company: 'Company Name',
                    job_title: 'Job Title & Role',
                    location: 'Location',
                    dates: 'Proposed Dates',
                    event_experience: 'Event Experience',
                    event_details: 'Event Details',
                    budget: 'Budget Allocation',
                    investor_access: 'Investor Access',
                    investor_details: 'Investor Details',
                    attendees: 'Expected Attendees',
                    motivation: 'Motivation',
                    mentorship: 'Mentorship Experience',
                    mentorship_details: 'Mentorship Details'
                  };
                  return `${labels[key as keyof typeof labels] || key}:\n${value}\n\n`;
                })
                .join('');
              
              const emailBody = `Dear Next12 Team,\n\nPlease consider our application to host Next12 Ignite:\n\n${body}\n\nBest regards,\n${formData.get('name')}\n${formData.get('company') || ''}`;

              window.location.href = `mailto:labs@next12.org?subject=Ignite Host Application - ${formData.get('location')}&body=${encodeURIComponent(emailBody)}`;
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Details */}
              <div>
                <label className="block text-sm mb-2">Full Name *</label>
                <input type="text" name="name" required className="w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }} />
              </div>
              <div>
                <label className="block text-sm mb-2">Email *</label>
                <input type="email" name="email" required className="w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }} />
              </div>
              <div>
                <label className="block text-sm mb-2">Phone Number</label>
                <input type="tel" name="phone" className="w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }} />
              </div>
              <div>
                <label className="block text-sm mb-2">LinkedIn Profile *</label>
                <input type="url" name="linkedin" required className="w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }} />
              </div>
              <div>
                <label className="block text-sm mb-2">Company Name</label>
                <input type="text" name="company" className="w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }} />
              </div>
              <div>
                <label className="block text-sm mb-2">Job Title & Role</label>
                <input type="text" name="job_title" className="w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }} />
              </div>
            </div>

            {/* Event & Financial Readiness */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Location (City, Country) *</label>
                <input type="text" name="location" required className="w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }} />
              </div>
              <div>
                <label className="block text-sm mb-2">Proposed Dates *</label>
                <input type="text" name="dates" required className="w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }} />
              </div>
              <div>
                <label className="block text-sm mb-2">Event Experience *</label>
                <select name="event_experience" required className="w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }}>
                  <option value="">Have you organized high-level events before?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <textarea name="event_details" placeholder="Details (optional)" className="mt-2 w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }} />
              </div>
              <div>
                <label className="block text-sm mb-2">Budget Allocation *</label>
                <div className="space-y-2">
                  {['50k-100k', '100k-250k', '250k+', 'other'].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input type="radio" name="budget" value={option} required className="accent-[var(--accent)]" />
                      {option === 'other' ? 'Other (Specify)' : `$${option}`}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Network & Investor Reach */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Investor Access *</label>
                <select name="investor_access" required className="w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }}>
                  <option value="">Do you have access to investors?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <textarea name="investor_details" placeholder="Details (optional)" className="mt-2 w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }} />
              </div>
              <div>
                <label className="block text-sm mb-2">Expected Attendees</label>
                <input type="number" name="attendees" className="w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }} />
              </div>
            </div>

            {/* Motivation & Alignment */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Motivation *</label>
                <textarea name="motivation" required maxLength={1000} className="w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }} />
              </div>
              <div>
                <label className="block text-sm mb-2">Mentorship Experience</label>
                <select name="mentorship" className="w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }}>
                  <option value="">Have you mentored startups?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <textarea name="mentorship_details" placeholder="Details (optional)" className="mt-2 w-full p-3 rounded-lg border" style={{ borderColor: 'var(--accent)', background: 'var(--background)' }} />
              </div>
            </div>

            {/* Authorization */}
            <div className="flex items-center gap-2">
              <input type="checkbox" required className="accent-[var(--accent)]" />
              <span className="text-sm">I confirm financial capability and understanding of commitments *</span>
            </div>

            <button 
              type="submit"
              className="w-full py-3 rounded-full hover:scale-105 transition-transform font-bold"
              style={{ background: 'linear-gradient(45deg, var(--accent), var(--accent-light))', color: 'var(--foreground)' }}
            >
              Submit Host Application
            </button>
          </form>
          <p className="text-xs text-center mt-4 opacity-80">
            Selected hosts will be contacted within 7 business days for next steps
          </p>
        </div>
      </section>

    </main>
  );
}