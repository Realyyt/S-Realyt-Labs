import Image from "next/image";
import Stats from "./components/Stats";
import Locations from "./components/Locations";
import WhatToExpect from "./components/WhatToExpect";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Luxury office space"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            S∞Realyt Labs
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Unleashing  Founders to Rule the Global Innovation Landscape
          </p>
          <div className="flex gap-6 justify-center">
            <button className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-full transition-colors border border-accent">
              Apply Now
            </button>
          </div>
        </div>
      </header>
      {/* About S∞Realyt Labs */}
      <section className="py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-7xl md:text-8xl font-playfair mb-16 leading-tight">
            S∞Realyt Labs exists to <span className="italic">empower and unite</span> innovators
          </h2>
          
          <div className="max-w-4xl space-y-12 text-xl md:text-2xl">
            <p>
              For too long, brilliant minds have been disconnected from each other and the global innovation ecosystem.
            </p>
            
            <p>
              Through our comprehensive  programs, we provide world-class advisory services and strategic mentorship to  most ambitious builders. Our offering includes <span className="italic">luxury housing</span> and <span className="italic">collaborative workspaces</span>, creating an environment where innovation thrives.
            </p>
            
            <p>
              We help founders refine their vision, think globally, and connect with international opportunities. Through our extensive network, we create a global stage where innovators can showcase their brilliance, attract investment, and scale their impact.
            </p>
            
            <p>
              Together, we&lsquo;re not just building technology - we&lsquo;re architecting a future where excellence leads global innovation.
            </p>
          </div>
        </div>
      </section>

      
      
      <Locations />
      <WhatToExpect />
      <Stats />
      <FAQ />
      <Footer />
    </div>
  );
}
