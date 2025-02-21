'use client';

import { useState } from 'react';
import { countries } from '../utils/countries';

export default function CountrySelect({ name }: { name: string }) {
  const [selectedCountry, setSelectedCountry] = useState<typeof countries[number]>(countries[0]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-amber-900/20 border border-amber-800/50 hover:bg-amber-900/30"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl">{selectedCountry.flag}</span>
        <span className="flex-1 text-left">{selectedCountry.name}</span>
        <span className="text-amber-500">{selectedCountry.dialCode}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full max-h-96 overflow-y-auto rounded-lg shadow-lg bg-amber-900 border border-amber-800/50 z-50">
          <div className="grid grid-cols-1">
            {countries.map((country) => (
              <button
                key={country.code}
                type="button"
                className="flex items-center gap-3 px-4 py-2 hover:bg-amber-800/20"
                onClick={() => {
                  setSelectedCountry(country);
                  setIsOpen(false);
                }}
              >
                <span className="text-xl">{country.flag}</span>
                <span className="flex-1 text-left">{country.name}</span>
                <span className="text-amber-500 text-sm">{country.dialCode}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <input type="hidden" name={name} value={selectedCountry.code} />
    </div>
  );
}