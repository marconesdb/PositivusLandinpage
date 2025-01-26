import React, { useState } from 'react';
import { Facebook, Linkedin } from 'lucide-react';
import LogoFooter from '../../assets/Logo-Footer.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="text-white   sm:px-4 mt-36  mx-auto   max-w-7xl">
      <div className='bg-black  sm:py-8 sm:px-8 rounded-t-[40px]'>
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8 sm:mb-12">
          <div className="flex items-center space-x-2 w-full sm:w-auto justify-center sm:justify-start">
            <img src={LogoFooter} alt="Logo Footer" className="h-5 sm:h-6"/>
          </div>
          
          {/* Navigation - Stack on mobile */}
          <nav className="flex flex-col sm:flex-row gap-6 sm:gap-6 items-center w-full sm:w-auto justify-center">
            <a href="/about-us" className="hover:text-lime-400 xs:no-underline sm:underline">About us</a>
            <a href="/services" className="hover:text-lime-400 xs:no-underline sm:underline">Services</a>
            <a href="/use-cases" className="hover:text-lime-400 xs:no-underline sm:underline">Use Cases</a>
            <a href="/pricing" className="hover:text-lime-400 xs:no-underline sm:underline">Pricing</a>
            <a href="/blog" className="hover:text-lime-400 xs:no-underline sm:underline sm:block xs:hidden">Blog</a>
          </nav>

          {/* Social Links - Hidden on XS, visible on SM+ */}
          <div className="hidden sm:flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
            <a href="https://linkedin.com" className="hover:text-lime-400">
              <Linkedin size={24} />
            </a>
            <a href="https://facebook.com" className="hover:text-lime-400">
              <Facebook size={24} />
            </a>
            <a href="https://x.com" className="hover:text-lime-400 text-[12px]">
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-2 mb-8 sm:mb-12">
          {/* Contact Information */}
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="xs:inline-block sm:block">
              <span className="bg-lime-400 text-black px-2 rounded-lg">Contact us:</span>
            </h3>
            <div className="mt-4 sm:mt-0">
              <p className="mt-4 sm:mt-8">Email: info@positivus.com</p>
              <p className="mt-4 sm:mt-8">Phone: 555-567-8901</p>
              <p className="mt-4">Address: 1234 Main St</p>
              <p>Moonstone City, Stardust State 12345</p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-gray-800 sm:bg-grayCustom p-4 sm:p-16 rounded-xl">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-4 lg:gap-8">
              <div className="flex-grow w-full sm:w-auto md:w-full lg:flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="bg-transparent border border-white rounded-xl px-4 py-3 sm:py-2 w-full h-12 sm:h-16 placeholder-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-lime-400 text-black w-full sm:w-auto lg:w-auto px-2 sm:px-4 py-3 sm:py-2 h-12 sm:h-16 rounded-xl font-SpaceGrotesk hover:bg-lime-500 transition-colors whitespace-nowrap text-base sm:text-[18px]"
              >
                Subscribe to news
              </button>
            </form>
          </div>
           
          {/* Social Links - Only visible on XS screens */}
          <div className="flex sm:hidden items-center gap-4 w-full justify-center mt-4">
            <a href="https://linkedin.com" className="hover:text-lime-400">
              <Linkedin size={24} />
            </a>
            <a href="https://facebook.com" className="hover:text-lime-400">
              <Facebook size={24} />
            </a>
            <a href="https://x.com" className="hover:text-lime-400 text-[12px]">
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white pt-4 sm:pt-8 gap-4 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-sm sm:text-base text-center">© 2023 Positivus. All Rights Reserved.</p>
            <a href="/privacy-policy" className="text-sm sm:text-base hover:text-lime-400 underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;