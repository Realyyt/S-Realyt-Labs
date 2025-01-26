export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold mb-2">$10K</h3>
            <p className="text-gray-600 dark:text-gray-400">Initial Investment</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">1 Week</h3>
            <p className="text-gray-600 dark:text-gray-400">Intensive Program</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">100+</h3>
            <p className="text-gray-600 dark:text-gray-400">Mentor Network</p>
          </div>
        </div>
      </div>
    </section>
  );
} 