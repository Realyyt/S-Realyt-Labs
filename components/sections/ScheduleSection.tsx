export default function ScheduleSection() {
  const scheduleItems = [
    "Welcome Session",
    "Guest Speaker",
    "Office Hours",
    "Mentor Call",
    "Cohort Networking"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(var(--accent-rgb),0.05)]"
        style={{ '--accent-rgb': '184, 134, 11' } as any}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
          Example <span className="gradient-text">Daily Schedule</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[var(--accent)]"></div>

            {/* Schedule items */}
            {scheduleItems.map((item, index) => (
              <div key={index} className="flex items-center mb-8 relative">
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--accent)] rounded-full"></div>
                
                {/* Text */}
                <div className="w-full text-2xl font-medium pl-[calc(50%+1rem)] leading-relaxed">
                  {item}
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-center mt-16 text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            All sessions are roughly <span className="font-bold">1 hour</span> and we will have no more than two sessions per day. 
            The remaining time is for you to work and meet other <span className="font-bold">Next12 Fellows</span>.
          </p>
        </div>
      </div>
    </section>
  );
} 