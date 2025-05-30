'use client';

import React, { useState } from 'react';
import CountrySelect from './CountrySelect';
import { countries } from '../utils/countries';

interface FormData {
  fullName: string;
  email: string;
  companyLegal: string;
  countryCode: string;
  phone: string;
  companyStage: string;
  companyDescription: string;
  pitchDeck: string;
  location: string;
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyLegal: '',
    countryCode: '',
    phone: '',
    companyStage: '',
    companyDescription: '',
    pitchDeck: '',
    location: 'Lagos'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Add country information to form data
      const country = countries.find(c => c.code === formData.countryCode);
      const formDataWithCountry = {
        ...formData,
        country: country ? `${country.flag} ${country.name} (${country.dialCode})` : formData.countryCode
      };

      const response = await fetch('/api/ignite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formDataWithCountry),
      });

      if (!response.ok) {
        const responseText = await response.text();
        const data = responseText ? JSON.parse(responseText) : {};
        throw new Error(data.error || 'Failed to submit application');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
          Application Submitted!
        </h3>
        <p className="text-lg opacity-75 mb-6">
          Thank you for applying to Ignite Lagos. We&apos;ll review your application and get back to you soon.
        </p>
        <p className="text-sm opacity-60">
          We&apos;ll contact you via WhatsApp at the number you provided.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {submitError && (
        <div className="p-4 bg-red-900/20 border border-red-500/20 rounded-lg">
          <p className="text-red-400">{submitError}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold mb-2">Founder Full Name *</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Professional Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Legal Entity Name *</label>
          <input
            type="text"
            value={formData.companyLegal}
            onChange={(e) => handleInputChange('companyLegal', e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-bold mb-2">Contact Information *</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <CountrySelect 
                name="countryCode"
                value={formData.countryCode}
                onChange={(value) => handleInputChange('countryCode', value)}
              />
            </div>
            <div className="md:col-span-2">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
                placeholder="Phone number without country code"
                required
              />
            </div>
          </div>
          <p className="text-xs mt-2 opacity-75">We&apos;ll contact you via WhatsApp</p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold mb-2">Current Funding Stage *</label>
        <select
          value={formData.companyStage}
          onChange={(e) => handleInputChange('companyStage', e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
          required
        >
          <option value="">Select funding stage</option>
          <option value="idea">Idea Stage</option>
          <option value="mvp">MVP/Beta</option>
          <option value="pre-seed">Pre-Seed</option>
          <option value="seed">Seed</option>
          <option value="series-a">Series A</option>
          <option value="series-b">Series B+</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold mb-2">Company Overview *</label>
        <textarea
          value={formData.companyDescription}
          onChange={(e) => handleInputChange('companyDescription', e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
          rows={4}
          placeholder="Brief description of your company, product, and market"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-bold mb-2">Pitch Deck URL (optional)</label>
        <input
          type="url"
          value={formData.pitchDeck}
          onChange={(e) => handleInputChange('pitchDeck', e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
          placeholder="Link to your pitch deck (Google Drive, Dropbox, etc.)"
        />
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-full font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{
            background: 'var(--foreground)',
            color: 'var(--accent)'
          }}
        >
          {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
        </button>
        <p className="text-xs text-center mt-4 opacity-75">
          All information will be kept strictly confidential
        </p>
      </div>
    </form>
  );
}