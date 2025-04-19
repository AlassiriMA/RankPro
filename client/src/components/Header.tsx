import { useState } from "react";
import { ChartLine } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2" aria-label="RankPro Logo">
              <span className="text-2xl text-primary-dark">
                <ChartLine className="h-6 w-6" />
              </span>
              <span className="font-bold text-xl tracking-tight text-dark">RankPro</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary font-medium transition-all">Features</a>
            <a href="#dashboard" className="text-gray-600 hover:text-primary font-medium transition-all">Dashboard</a>
            <a href="#benefits" className="text-gray-600 hover:text-primary font-medium transition-all">Benefits</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary font-medium transition-all">Testimonials</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary font-medium transition-all">Pricing</a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#cta" 
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
            >
              Start Free Trial
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-600 hover:text-primary"
              onClick={toggleMobileMenu}
              aria-controls="mobile-menu" 
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div id="mobile-menu" className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden pb-4 animate-fadeIn`}>
          <div className="flex flex-col space-y-4 pt-2 pb-3">
            <a href="#features" className="text-gray-600 hover:text-primary font-medium block px-3 py-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#dashboard" className="text-gray-600 hover:text-primary font-medium block px-3 py-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>Dashboard</a>
            <a href="#benefits" className="text-gray-600 hover:text-primary font-medium block px-3 py-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>Benefits</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary font-medium block px-3 py-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary font-medium block px-3 py-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#cta" className="bg-primary hover:bg-primary-dark text-white font-medium block px-3 py-2 rounded-md text-center" onClick={() => setMobileMenuOpen(false)}>Start Free Trial</a>
          </div>
        </div>
      </div>
    </header>
  );
}
