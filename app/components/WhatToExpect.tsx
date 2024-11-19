'use client';
import Image from 'next/image';

const expectations = [
  {
    title: "deepen new friendships",
    description: "during orientation and on \"field trips\"."
  },
  {
    title: "use demo days", 
    description: "to prove your skills to potential collaborators, employees, and investors from our network."
  },
  {
    title: "stay clear minded",
    description: "and accountable with weekly demos and regular coaching sessions."
  },
  {
    title: "connect with leaders",
    description: "who will 10x your trajectory through intros and fireside chats."
  }
];

export default function WhatToExpect() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background relative">
      {/* Top left image */}
      <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48">
        <Image
          src="/india2.jpg"
          alt="Community gathering"
          fill
          className="object-cover rounded-br-3xl shadow-lg"
        />
      </div>

      {/* Top right image */}
      <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48">
        
        <Image
          src="/ng.jpg"
          alt="Demo day presentation"
          fill
          className="object-cover rounded-bl-3xl shadow-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl mt-24 lg:text-6xl font-serif mb-8 sm:mb-12 lg:mb-16">what to expect</h2>
        
        <div className="space-y-8 sm:space-y-10 lg:space-y-12 flex flex-col items-center">
          {expectations.map((item) => (
            <div key={item.title} className="max-w-3xl">
              <p className="text-base sm:text-lg lg:text-xl">
                <span className="italic font-medium">{item.title}</span> {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <p className="mt-8 sm:mt-10 lg:mt-12 mb-24 sm:mb-32 lg:mb-40 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
          most of all, expect spontaneous adventures and late night conversations 
          with your fellow residents... living the <span className="italic">joy of human connection</span> is 
          what really makes S∞Realyt Labs ♥
        </p>
      </div>

      {/* Bottom left image */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48">
        <Image
          src="/india3.jpg"
          alt="Coaching session"
          fill
          className="object-cover rounded-tr-3xl shadow-lg"
        />
      </div>

      {/* Bottom right image */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48">
        <Image
          src="/india.jpg"
          alt="Networking event"
          fill
          className="object-cover rounded-tl-3xl shadow-lg"
        />
      </div>
    </section>
  );
}