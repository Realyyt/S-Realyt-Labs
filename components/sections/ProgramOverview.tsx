export default function ProgramOverview() {
  return (
    <section id="program" className="py-8 sm:py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center">
          Program <span className="text-[var(--accent)]">Overview</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* What You Get Section */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-900">
                What You Get
              </h3>
              <ul className="space-y-4 max-w-md mx-auto">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent)] mr-3 flex-shrink-0" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-900">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Should Apply Section */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-900">
                Who Should Apply
              </h3>
              <ul className="space-y-4 max-w-md mx-auto">
                {criteria.map((criterion, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent)] mr-3 flex-shrink-0" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-900">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  "1:1 mentorship from successful founders",
  "Access to Global network"
];

const criteria = [
  "Technical founders building innovative solutions",
  "Early-stage startups with high growth potential",
]; 