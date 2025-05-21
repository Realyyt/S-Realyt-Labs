'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Impact50Event() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-gold to-purple-400 bg-clip-text text-transparent">
              The 50
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              The Elite Gathering of Asia&apos;s Most Influential Minds
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                href="/the50/interest"
                className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white px-12 py-5 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/20"
              >
                Express Interest
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-gold bg-clip-text text-transparent">
              An Exclusive Summit
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Join the 50 most impactful leaders in Thailand for an unprecedented gathering in Phuket. 
              This exclusive event brings together visionaries, entrepreneurs, and thought leaders to 
              shape the future of Asia and beyond.
            </p>
            <ul className="space-y-6">
              {[
                "Economic Development & Innovation",
                "Startup Ecosystem & Investment",
                "Global Challenges & Solutions"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center text-lg"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-gold rounded-full mr-4" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] bg-gradient-to-br from-purple-900/20 to-black rounded-2xl border border-purple-500/20 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent">
              <Image 
                src="/50.jpg" 
                alt="The 50 Event" 
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-gold bg-clip-text text-transparent">
            Why Attend The 50
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Elite Networking",
                description: "Connect with Thailands most influential leaders and decision-makers in an intimate setting."
              },
              {
                title: "Strategic Insights",
                description: "Gain exclusive access to forward-thinking discussions about Asias economic future."
              },
              {
                title: "Luxury Experience",
                description: "Enjoy world-class hospitality and curated experiences in Phukets finest venues."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-purple-900/20 to-black p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-gold bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-gold bg-clip-text text-transparent">
            Join the Elite Circle
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Be part of this exclusive gathering of visionaries and leaders shaping the future of Asia.
          </p>
          <Link 
            href="/the50/interest"
            className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white px-12 py-5 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/20"
          >
            Express Your Interest
          </Link>
        </motion.div>
      </section>
    </div>
  );
} 