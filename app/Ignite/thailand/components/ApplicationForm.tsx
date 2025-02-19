'use client';

import React from 'react';
import CountrySelect from './CountrySelect';
import { countries } from '../utils/countries';

export default function ApplicationForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const body = Array.from(formData.entries())
    .map(([key, value]) => {
        const labels = {
        fullName: 'Founder Full Name',
        email: 'Professional Email',
        companyLegal: 'Legal Entity Name',
        countryCode: 'Country',
        phone: 'Phone Number',
        companyStage: 'Funding Stage',
        companyDescription: 'Company Overview',
        pitchDeck: 'Pitch Deck'
        };
        
        const country = countries.find(c => c.code === value);
        if (key === 'countryCode') {
        return `${labels[key]}: ${country?.flag} ${country?.name} (${country?.dialCode})`;
        }
        
        return `${labels[key as keyof typeof labels] || key}: ${value}\n\n`;
    })
    .join('');

    const subject = `Ignite Thailand Application - ${formData.get('fullName')}`;
    const emailBody = `New founder application:\n\n${body}`;

    window.location.href = `mailto:labs@next12.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold mb-2">Founder Full Name *</label>
          <input
            name="fullName"
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Professional Email *</label>
          <input
            name="email"
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Legal Entity Name *</label>
          <input
            name="companyLegal"
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
            required
          />
        </div>
        <div className="md:col-span-2">
        <label className="block text-sm font-bold mb-2">Contact Information *</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
            <CountrySelect name="countryCode" />
            </div>
            <div className="md:col-span-2">
            <input
                name="phone"
                type="tel"
                className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
                placeholder="Phone number without country code"
                required
            />
            </div>
        </div>
        <p className="text-xs mt-2 opacity-75">We'll contact you via WhatsApp</p>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-bold mb-2">Founding / Executive Team Applying</label>
          <select
            name="companyStage"
            className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
            required
          >
            <option value="">How many founding Team members are coming</option>
            <option value="pre-seed">One</option>
            <option value="seed">Two</option>
            <option value="series-a">Three</option>
            <option value="series-a">Four</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-bold mb-2">Company Overview *</label>
          <textarea
            name="companyDescription"
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 focus:ring-2 focus:ring-amber-300"
            placeholder="Describe your core technology, market opportunity, and competitive advantage"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-bold mb-2">Investor Deck (PDF) *</label>
          <input
            name="pitchDeck"
            type="file"
            accept=".pdf"
            className="w-full px-4 py-2 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-500/20 file:text-amber-300 hover:file:bg-amber-500/30 cursor-pointer"
            required
          />
        </div>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          className="w-full py-3 rounded-full font-bold hover:scale-105 transition-transform"
          style={{
            background: 'var(--foreground)',
            color: 'var(--accent)'
          }}
        >
          Submit Application
        </button>
        <p className="text-xs text-center mt-4 opacity-75">
          All information will be kept strictly confidential
        </p>
      </div>
    </form>
  );
}