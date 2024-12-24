export default function CTASection() {
  return (
    <section className="min-h-[60vh] py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(var(--accent-rgb),0.05)]"
        style={{ '--accent-rgb': '184, 134, 11' } as any}
      ></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Join <span className="gradient-text">Next12</span>?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          Applications are open for our next cohort. Take the first step towards
          building the next great company.
        </p>
        <a 
          href="/apply" 
          className="px-8 py-3 bg-[var(--accent)] text-white rounded-full 
          hover:bg-[var(--accent-light)] transition-colors text-lg font-medium"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
} 