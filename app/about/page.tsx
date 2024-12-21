export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-accent mb-8">About Us</h1>
      <p className="text-lg max-w-2xl text-center text-foreground/80 mb-12">
        At Next12, we are committed to empowering innovators and fostering a community where creativity and collaboration thrive. Our mission is to provide world-class resources and support to help founders achieve their dreams and make a global impact.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-foreground/80">
            We envision a world where innovation knows no bounds, and every founder has the opportunity to succeed. Our vision is to create a global network of innovators who are equipped to tackle the challenges of tomorrow.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <p className="text-foreground/80">
            Integrity, collaboration, and excellence are at the core of everything we do. We believe in fostering a culture of openness and inclusivity, where diverse perspectives are valued and celebrated.
          </p>
        </div>
      </div>
    </div>
  );
} 