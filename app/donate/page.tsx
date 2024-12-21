export default function Donate() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-accent mb-8">Support Our Mission</h1>
      <p className="text-lg max-w-2xl text-center text-foreground/80 mb-12">
        Your generous contributions help us continue to support and empower the next generation of innovators. Join us in making a difference by donating to Next12.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
        <p className="text-foreground/80 mb-6">
          Every donation, big or small, helps us provide resources and opportunities to aspiring founders. Thank you for your support!
        </p>
        <a href="mailto:labs@next12.org" className="bg-orange-500 text-white px-6 py-3 rounded-full transition-colors hover:bg-orange-600">
          Donate Now
        </a>
      </div>
    </div>
  )
} 