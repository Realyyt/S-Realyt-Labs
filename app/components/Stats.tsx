 'use client';
import { useEffect, useRef } from 'react';

const stats = [
  { number: "50+", label: "Founders" },
  { number: "$10M+", label: "Raised" },
  { number: "100+", label: "Mentors" },
  { number: "24+", label: "Events/Year" }
];

export default function Stats() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </h3>
              <p className="text-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}