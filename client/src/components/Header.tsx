import { useState, useEffect } from "react";
import { ChartLine, X, Menu } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event for header styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-effect shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 group" aria-label="RankPro Logo">
              <div className="relative">
                <span className="text-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                  <ChartLine className="h-6 w-6" />
                </span>
                <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 group-hover:text-primary transition-colors duration-300">RankPro</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Features', 'Dashboard', 'Benefits', 'Testimonials', 'Pricing'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 hover:text-primary font-medium relative group transition-all duration-300"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#cta" 
              className="btn-glow inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/60 transition-all duration-300"
            >
              Start Free Trial
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className={`p-2 rounded-md ${mobileMenuOpen ? 'bg-gray-100' : ''} text-gray-600 hover:text-primary transition-colors duration-300`}
              onClick={toggleMobileMenu}
              aria-controls="mobile-menu" 
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Toggle main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          id="mobile-menu" 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen 
              ? 'max-h-[400px] opacity-100 mt-4 pb-4' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pt-2 pb-3 animate-fadeIn">
            {['Features', 'Dashboard', 'Benefits', 'Testimonials', 'Pricing'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 hover:text-primary font-medium block px-4 py-2.5 rounded-md hover:bg-gray-50 transition-all duration-300" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-2">
              <a 
                href="#cta" 
                className="bg-primary hover:bg-primary/90 text-white font-medium block px-4 py-3 rounded-md text-center shadow-sm" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
