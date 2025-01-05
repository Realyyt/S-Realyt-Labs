'use client';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who can apply?",
    answer: "Technical founders , Builders , Creators building and contributing to innovative solutions around the globe."
  },
  {
    question: "What's the timeline?",
    answer: "The program runs for 12 weeks, with rolling admissions. Once accepted, you'll join the next available cohort."
  },
  {
    question: "When should I apply?",
    answer: "Applications are reviewed on a rolling basis. We recommend applying as soon as you're ready, as spots are limited for each cohort."
  },
  {
    question: "Do I need to drop out or quit my job?",
    answer: "The program is designed to be flexible, but it's a 12-week intense period devoid of distraction. We recommend dedicating significant time to your startup, but you can maintain other commitments."
  },
  {
    question: "Do I need a team to apply?",
    answer: "No, solo founders are welcome to apply."
  },
  {
    question: "Do you take equity in my company?",
    answer: "No, we do not take equity in your company."
  },
  {
    question: "Do I need to have a company?",
    answer: "No, having an incorporated company is not required to apply."
  },
  {
    question: "Where do I have to be based?",
    answer: "You must be building a company . Physical participation is now in Dubai ,Thailand , Austria and Nigeria"
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-[80vh] py-32 relative overflow-hidden bg-gradient-to-r from-[rgba(var(--accent-rgb),0.05)] via-white to-[rgba(var(--accent-rgb),0.05)]">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16">FAQs</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-medium">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 