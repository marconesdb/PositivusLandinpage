import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/Logo.png'
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white fixed h-28 left-0 right-0 z-50 font-SpaceGrotesk">
      <div className="max-w-7xl mx-auto  mt-8 sm:px-6 lg:px-1">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center ">
            <a href="/" className="flex items-center">
              <img 
                src={logo}
                alt="Logo" 
                className="h-8 w-auto sm:h-10 xs:px-2"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center px-2">
            <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-black px-1 py-2 text-sm md:text-base lg:text-lg xl:text-xl font-medium transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
              <button className=" ml-2 md:ml-4 px-3 md:px-1 lg:px-6 py-2 lg:py-3 text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-700 border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors whitespace-nowrap">
                Request a quote
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={` md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2  pb-3 space-y-2 bg-white shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 text-base sm:text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="px-3 py-2">
            <button className="w-full px-4 py-2 text-base sm:text-lg font-medium text-gray-700 border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
              Request a quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;