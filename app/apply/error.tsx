"use client"
import React from 'react';

export default function ErrorMessage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a2f] text-white">
      {/* Icon */}
      <div className="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#EF400A"
          className="w-16 h-16"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      </div>

      {/* Message */}
      <h1 className="text-xl font-bold mb-2">Applications Closed</h1>
      <p className="text-sm text-gray-300 mb-4">
        We are not receiving applications at the moment. Please try again later.
      </p>

      {/* Button */}
      <button
        className="mt-6 px-6 py-3 rounded-lg bg-[#EF400A] text-white hover:bg-[#EF400A]/90 transition-all"
        onClick={() => window.location.reload()}
      >
        Refresh Page
      </button>
    </div>
  );
}
