import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/newsletter-thanks');
  };

  return (
    <>
    {/* Newsletter */}
    <section className="py-20 md:py-32 bg-[#0a0a2f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#040423] to-[#0a0a3f] rounded-xl border border-[#EF400A]/20 p-10 md:p-16 shadow-xl shadow-[#EF400A]/5 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
              Subscribe to our newsletter for exclusive insights on venture capital, founder resources, and emerging technology trends.
            </p>
            <div className="max-w-md mx-auto">
              <form 
                className="flex flex-col sm:flex-row gap-4"
                onSubmit={handleSubmit}
              >
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-3 rounded-full bg-[#040423] border border-[#EF400A]/20 text-white focus:outline-none focus:border-[#EF400A] transition-colors"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-[#EF400A]/20 transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-400 text-xs mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    <footer className="bg-[#0a0a2f] border-t border-[#EF400A]/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-transparent bg-clip-text">Next12</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Next12 invests in ambitious entrepreneurs solving meaningful problems with technology. We&apos;re not just investors—we&apos;re partners in your journey.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/Next12Labs" className="text-gray-400 hover:text-[#EF400A] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/next12labs/" className="text-gray-400 hover:text-[#EF400A] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Ignite', href: '/Ignite' },
                { name: 'Residency', href: '/residency' },
                { name: 'Hubs', href: '/Hubs' },
                { name: 'Investor', href: '/Investor' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-[#EF400A] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Dubai • New York • Lagos</li>
              <li>labs@next12.org</li>
              <li className="pt-4">
                <Link href="/apply" className="text-[#EF400A] hover:underline">
                  Get in touch →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#EF400A]/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Next12 Ventures. All rights reserved.</p>
          {/*<div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/" className="text-gray-500 hover:text-[#EF400A] text-sm">Privacy Policy</Link>
            <Link href="/" className="text-gray-500 hover:text-[#EF400A] text-sm">Terms of Service</Link>
          </div>*/}
        </div>
      </div>
    </footer></>
  );
};

export default Footer;