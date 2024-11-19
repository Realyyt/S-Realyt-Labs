'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const locations = [
  {
    city: "lagos",
    name: "victoria island", 
    image: "/lg.jpg",
    date: "est may 2024",
    by: "by S∞Realyt Labs",
    color: "bg-purple-400"
  },
  {
    city: "abuja",
    name: "maitama hub",
    image: "/abj.jpeg", 
    date: "est sept 2024",
    by: "by S∞Realyt Labs",
    color: "bg-olive-400"
  },
  {
    city: "thailand",
    name: "bangkok",
    image: "/th.jpg",
    date: "est aug 2024",
    by: "by S∞Realyt Labs",
    color: "bg-amber-400"
  },
  {
    city: "bangalore", 
    name: "koramangala",
    image: "/bg.jpg",
    date: "est oct 2024",
    by: "by S∞Realyt Labs",
    color: "bg-emerald-400"
  }
];

export default function Locations() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scroll = () => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-6xl font-playfair mb-4">live around the world</h2>
        <p className="text-xl mb-16 max-w-3xl">
          with homes in <span className="italic">major tech hubs around Africa and beyond</span>, 
          you get to experience new cultures with likeminded peers. guest rooms are available 
          to hop between during the program :)
        </p>
        
        <div 
          ref={sliderRef}
          className="flex gap-8 overflow-x-hidden whitespace-nowrap"
        >
          {[...locations, ...locations].map((location, index) => (
            <div 
              key={`${location.city}-${index}`}
              className={`${location.color} rounded-lg p-4 inline-block w-[200px] shrink-0 cursor-pointer transition-transform hover:scale-[1.02] duration-300`}
            >
              <div className="flex flex-col h-[250px]">
                <h3 className="text-2xl text-white font-playfair mb-1 whitespace-normal">{location.city}</h3>
                <p className="text-white/90 text-base font-light whitespace-normal">{location.name}</p>
                
                <div className="relative flex-1 mt-2 overflow-hidden rounded-lg">
                  <Image
                    src={location.image}
                    alt={location.city}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="mt-2 text-white/80 text-xs">
                  <p>{location.date}</p>
                  <p>{location.by}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}