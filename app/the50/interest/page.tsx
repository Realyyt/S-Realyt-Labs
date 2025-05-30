'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function InterestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/the50-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const responseText = await response.text();
        const data = responseText ? JSON.parse(responseText) : {};
        throw new Error(data.error || 'Failed to submit interest');
      }

      setIsSubmitted(true);
      // Optional: redirect to thank you page after a delay
      setTimeout(() => {
        router.push('/thank-you?program=the50');
      }, 2000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit interest');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-gold to-purple-400 bg-clip-text text-transparent">
            Thank You!
          </h2>
          <p className="text-gray-300 mb-6">
            Your interest in The50 has been submitted successfully. We&apos;ll be in touch soon!
          </p>
          <Link 
            href="/the50"
            className="text-purple-400 hover:text-purple-300"
          >
            ← Back to Event
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Link 
            href="/the50"
            className="text-purple-400 hover:text-purple-300 mb-8 inline-block"
          >
            ← Back to Event
          </Link>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-gold to-purple-400 bg-clip-text text-transparent">
            Express Your Interest
          </h1>
          <p className="text-xl text-gray-300">
            Join the exclusive gathering of Asia&apos;s most influential minds
          </p>
        </motion.div>

        {submitError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 p-4 bg-red-900/20 border border-red-500/20 rounded-lg max-w-2xl mx-auto"
          >
            <p className="text-red-400">{submitError}</p>
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="Enter your company name"
              />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">
                Position
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="Enter your position"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Why are you interested in attending?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-black/50 border border-purple-500/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
              placeholder="Tell us why you want to join The 50"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white px-12 py-5 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Interest'}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
} 