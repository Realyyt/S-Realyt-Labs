'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InterestForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    reason: '',
    achievements: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="py-8 px-4 md:px-8">
          <Link href="/50impact" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2">
            <span className="text-xl">←</span> Back to Event
          </Link>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-900/20 to-black p-8 md:p-12 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
          >
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-gold bg-clip-text text-transparent">Express Your Interest</h1>
            <p className="text-gray-400 mb-12">
              Join the exclusive circle of Thailand&apos;s most influential leaders at 50IMPACT
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Why do you want to attend 50IMPACT?
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Key Achievements & Impact
                </label>
                <textarea
                  name="achievements"
                  value={formData.achievements}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="Please describe your key achievements and impact in your field"
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/20"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 