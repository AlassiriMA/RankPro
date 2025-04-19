import { ArrowRight, Play, TrendingUp, CheckCircle, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32"
    >
      <div className="animated-bg"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`text-center lg:text-left transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-6 animate-pulse">
              <Sparkles className="h-3 w-3 mr-1" />
              <span>NEW: AI-POWERED SEO PLATFORM</span>
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Your Path to <div className="relative inline-block">
                <span className="relative z-10 text-primary">Page One</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary/10 rounded-full"></span>
              </div> Starts Here
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Analyze, optimize, and dominate search results with RankPro. The smarter way to boost your rankings.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-5">
              <a 
                href="#cta" 
                className="btn-glow w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-gradient hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/60 transition-all duration-300 hover:scale-[1.03]"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="#" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-gray-200 rounded-lg shadow-sm text-base font-medium text-gray-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/60 transition-all duration-300 hover:border-primary/30 group"
              >
                <Play className="mr-2 h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                <span>Watch Demo</span>
              </a>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start">
              <div className="flex -space-x-2 mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="User avatar" 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  loading="lazy"
                />
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="User avatar" 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  loading="lazy"
                />
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="User avatar" 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center mt-4 sm:mt-0 text-center sm:text-left">
                <div className="text-sm text-gray-600 flex items-center sm:mr-4">
                  <span className="font-semibold text-base text-gray-900 mr-1">1,200+</span>
                  <span>businesses</span>
                </div>
                
                <div className="mt-2 sm:mt-0 flex items-center space-x-2 sm:border-l sm:border-gray-200 sm:pl-4">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">Trusted worldwide</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative lg:absolute lg:-right-20 lg:-top-5 z-10 rounded-xl mx-auto">
              {/* Main dashboard image with floating effect */}
              <div className="shadow-2xl rounded-xl bg-white p-2 max-w-lg animate-pulse" style={{animationDuration: '3s'}}>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="RankPro Dashboard Preview" 
                  className="rounded-lg w-full h-auto"
                  loading="lazy"
                />
                
                {/* Floating stats badges */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg px-4 py-3 glass-effect">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span className="font-bold text-lg">+64%</span>
                    <span className="text-gray-700 text-sm">Organic Traffic</span>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg px-4 py-2 glass-effect">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-primary">95/100</span>
                    <span className="text-gray-600 text-sm">SEO Score</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-primary/10 rounded-full"></div>
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-yellow-400/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
