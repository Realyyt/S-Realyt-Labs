export default function ProgramOverview() {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-100">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(var(--accent-rgb),0.05)]"
        style={{ '--accent-rgb': '184, 134, 11' } as any}
      ></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-16">
          Program <span className="gradient-text">Overview</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">What You Get</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start justify-center">
                  <svg className="w-6 h-6 text-[var(--accent)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Who Should Apply</h3>
            <ul className="space-y-4">
              {criteria.map((criterion, index) => (
                <li key={index} className="flex items-start justify-center">
                  <svg className="w-6 h-6 text-[var(--accent)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
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