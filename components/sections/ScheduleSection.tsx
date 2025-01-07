export default function ScheduleSection() {
  const scheduleItems = [
    "Welcome Session",
    "Guest Speaker",
    "Office Hours",
    "Mentor Call",
    "Cohort Networking"
  ];

  return (
    <section id="roles" className="py-16 sm:py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12 sm:mb-16">
          Example <span className="text-[var(--accent)]">Daily Schedule</span>
        </h2>

        <div className="max-w-2xl mx-auto px-4">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 h-full w-px bg-[var(--accent)]"></div>

            {/* Schedule items */}
            {scheduleItems.map((item, index) => (
              <div key={index} className="flex items-center mb-8 relative">
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[var(--accent)] rounded-full"></div>
                
                {/* Text */}
                <div className="w-full text-lg sm:text-2xl font-medium pl-12 sm:pl-[calc(50%+1rem)] leading-relaxed text-gray-900">
                  {item}
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-center mt-12 sm:mt-16 text-base sm:text-lg max-w-3xl mx-auto text-gray-600">
            All sessions are roughly <span className="font-bold">1 hour</span> and we will have no more than two sessions per day. 
            The remaining time is for you to work and meet other <span className="font-bold">Next12 Fellows</span>.
          </p>
        </div>
      </div>
    </section>
  );
} 