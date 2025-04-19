import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="animated-bg"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-light/10 text-primary rounded-full mb-4">NEW: AI-POWERED SEO PLATFORM</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-dark mb-6">
              Your Path to <span className="text-primary">Page One</span> Starts Here
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Analyze, optimize, and dominate search results with RankPro. The smarter way to boost your rankings.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#cta" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-dark bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
              >
                <Play className="mr-2 h-4 w-4 text-primary" />
                <span>Watch Demo</span>
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="User avatar" 
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="User avatar" 
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="User avatar" 
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <div className="ml-3 text-sm text-gray-600">
                <span className="font-medium">1,200+ </span>
                <span>businesses already ranking higher</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative lg:absolute lg:-right-20 lg:-top-10 z-10 shadow-2xl rounded-xl bg-white p-2 max-w-lg mx-auto animate-fadeIn">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="RankPro Dashboard Preview" 
                className="rounded-lg w-full h-auto"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg px-4 py-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500"><i className="fas fa-arrow-up"></i></span>
                  <span className="font-semibold">+64%</span>
                  <span className="text-gray-600 text-sm">Organic Traffic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
