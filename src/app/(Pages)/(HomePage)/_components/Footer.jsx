import Link from 'next/link';
import React from 'react';

// A simple SVG icon component for social media links
const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition-colors duration-300 hover:text-green-500">
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-6 py-12">
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Services */}
          <div>
            <h6 className="font-bold uppercase tracking-wider text-white">Our Services</h6>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="/services/branding" className="hover:text-white">Browse Company</Link>
              <Link href="/services/design" className="hover:text-white">Buy Share</Link>
              <Link href="/services/marketing" className="hover:text-white">Raise a Query</Link>
              <Link href="/services/advertisement" className="hover:text-white">Read News</Link>
            </nav>
          </div>

          {/* Column 2: Company */}
          <div>
            <h6 className="font-bold uppercase tracking-wider text-white">Company</h6>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="/about" className="hover:text-white">About us</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <Link href="/jobs" className="hover:text-white">FAQs</Link>
              <Link href="/press-kit" className="hover:text-white">BLog</Link>
            </nav>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h6 className="font-bold uppercase tracking-wider text-white">Legal</h6>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="/legal/terms-of-use" className="hover:text-white">Terms of use</Link>
              <Link href="/legal/privacy-policy" className="hover:text-white">Privacy policy</Link>
              <Link href="/legal/cookie-policy" className="hover:text-white">Cookie policy</Link>
            </nav>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h6 className="font-bold uppercase tracking-wider text-white text-lg">
              Stay Updated
            </h6>
            <p className="mt-4 text-sm text-gray-400">
              Subscribe to get the latest updates on company shares.
            </p>
            <form className="mt-4">
              <div className="flex items-center overflow-hidden rounded-lg bg-white/80 backdrop-blur-md border border-gray-200/50">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border-0 bg-transparent px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-3 font-semibold text-white transition-colors duration-300 hover:from-purple-700 hover:to-purple-800"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom section with copyright and social links */}
        <hr className="my-10 border-slate-700" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Share Market. All Rights Reserved.
          </p>
          <div className="mt-4 flex items-center space-x-4 sm:mt-0">
            <SocialIcon href="https://twitter.com">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </SocialIcon>
            <SocialIcon href="https://facebook.com/vehiclemarketplace">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://instagram.com">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 4.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm0 1.623c-2.403 0-2.742.01-3.71.058-.943.048-1.503.207-1.928.372a3.287 3.287 0 00-1.177.81 3.287 3.287 0 00-.81 1.177c-.165.425-.324.985-.372 1.928-.048.967-.058 1.306-.058 3.71s.01 2.742.058 3.71c.048.943.207 1.503.372 1.928a3.287 3.287 0 00.81 1.177 3.287 3.287 0 001.177.81c.425.165.985.324 1.928.372.967.048 1.306.058 3.71.058s2.742-.01 3.71-.058c.943-.048 1.503-.207 1.928-.372a3.287 3.287 0 001.177-.81 3.287 3.287 0 00.81-1.177c.165-.425.324-.985.372-1.928.048-.967.058-1.306.058-3.71s-.01-2.742-.058-3.71c-.048-.943-.207-1.503-.372-1.928a3.287 3.287 0 00-.81-1.177 3.287 3.287 0 00-1.177-.81c-.425-.165-.985-.324-1.928-.372C15.057 3.633 14.717 3.623 12.315 3.623zM12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm0 6a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5zM17.25 6.75a.75.75 0 100 1.5.75.75 0 000-1.5z" clipRule="evenodd" /></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;