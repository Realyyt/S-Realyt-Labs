 'use client';
import { useState } from 'react';

const faqs = [
  {
    question: "can i do this online?",
    answer: "The S∞Realyt Labs experience is designed to be in-person. The magic happens through face-to-face interactions, spontaneous conversations, and shared experiences in our physical spaces. However, we do offer virtual growth advisory options for those unable to join in-person."
  },
  {
    question: "can i be in school or have a job?",
    answer: "The program requires your full-time commitment. We believe in deep focus and immersion - you'll need to take a break from school or work to participate fully in the program."
  },
  {
    question: "where do we work?",
    answer: "Each S∞Realyt Labs location features dedicated co-working spaces designed for collaboration and focused work. You'll have 24/7 access to meeting rooms, quiet areas, and community spaces."
  },
  {
    question: "do i have my own room?",
    answer: "Yes, every resident gets their own private bedroom in our luxury accommodations, while sharing common spaces with fellow founders to foster community and collaboration."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b border-foreground/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left"
              >
                <span className="text-2xl font-playfair">{faq.question}</span>
                <span className="text-2xl ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-xl text-foreground/80">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-6xl font-playfair mb-6">
          join Global builders
        </h2>
        <p className="text-xl mb-8 max-w-2xl">
          who have applied so far if you are serious about committing to your
          ambitions & you want to make lifelong friends.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-black/80 transition-colors">
          apply now
        </button>
      </div>
    </section>
  );
}