import { ChartLine } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-6" aria-label="RankPro Logo">
              <span className="text-2xl text-primary-light">
                <ChartLine className="h-6 w-6" />
              </span>
              <span className="font-bold text-xl tracking-tight">RankPro</span>
            </a>
            <p className="text-gray-400 mb-6">
              AI-Powered SEO insights that rank you higher — faster.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-all">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-all">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all">Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-all">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all">SEO Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-all">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all">Partners</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} RankPro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-all">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
