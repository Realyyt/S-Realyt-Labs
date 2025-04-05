import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    
    <footer className="bg-[#040423] border-t border-[#EF400A]/10 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:justify-between mb-10">
        <div className="mb-8 md:mb-0">
         <div className="p-4">
         <Link href="/" className="flex items-center">
            <Image 
              src="/colouredlogo.png" 
              alt="Next12 Logo" 
              width={60}
              height={30}
              className="w-16 h-4 md:w-24 md:h-6"
              priority
            />
          </Link>
         </div>
          <p className="text-gray-400 max-w-md">
            Backing exceptional founders building transformative companies at the earliest stages.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', link: '/' },
                { name: 'Ignite', link: '/Ignite' },
                { name: 'Residency', link: '/Residency' },
                { name: 'Hubs', link: '/Hubs' },
                { name: 'Investor', link: '/Investor' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-gray-400 hover:text-[#EF400A] text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <div className="space-y-2">
              <Link href="#" className="text-gray-400 hover:text-[#EF400A] text-sm">For Founders</Link>
              <Link href="/" className="text-gray-400 hover:text-[#EF400A] text-sm">FAQ</Link>
              <Link href="/Investors" className="text-gray-400 hover:text-[#EF400A] text-sm">Investment Process</Link>
              <Link href="/apply" className="text-gray-400 hover:text-[#EF400A] text-sm">Apply</Link>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates and news from our team.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-l-lg border border-[#EF400A]/20 bg-[#0a0a2f] text-white placeholder-gray-400 focus:border-[#EF400A] outline-none text-sm flex-1"
              />
              <button
                type="submit"
                className="bg-[#EF400A] text-white px-4 py-2 rounded-r-lg hover:bg-[#ff5a2b] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-[#EF400A]/10 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          © 2025 Next12 Capital. All rights reserved.
        </div>
        <div className="flex space-x-6">
          {['twitter', 'linkedin', 'instagram', 'github'].map((social) => (
            <Link key={social} href="#" className="text-gray-400 hover:text-[#EF400A]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
  );
} 