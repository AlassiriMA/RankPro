import { Search, LineChart, Zap, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function FeaturesSection() {
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

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Audit Websites in Seconds",
      description: "Run comprehensive audits that analyze 200+ SEO factors in just seconds. Get actionable insights immediately.",
      iconBgClass: "bg-primary/10 text-primary",
      iconRingClass: "ring-primary/20",
      delay: "delay-100"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Track Keyword Rankings",
      description: "Monitor your rankings for hundreds of keywords across multiple search engines with daily updates.",
      iconBgClass: "bg-green-500/10 text-green-600",
      iconRingClass: "ring-green-500/20",
      delay: "delay-200"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Get Instant SEO Fixes",
      description: "Our AI analyzes your site and competitors to provide prioritized recommendations for quick wins.",
      iconBgClass: "bg-purple-500/10 text-purple-600",
      iconRingClass: "ring-purple-500/20",
      delay: "delay-300"
    }
  ];

  return (
    <section ref={sectionRef} id="features" className="py-20 bg-white relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-3">POWERFUL FEATURES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What RankPro Does</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Powerful SEO tools designed to boost your search rankings and drive more targeted traffic.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`card-hover bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-700 hover:border-primary/20 ${feature.delay} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${feature.iconBgClass} mb-6 ring-4 ${feature.iconRingClass}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              <a href="#" className="inline-flex items-center text-primary hover:text-primary-dark font-medium group relative pb-0.5">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/20 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          ))}
        </div>
        
        {/* Additional feature highlight */}
        <div className={`mt-20 bg-gradient-light rounded-2xl overflow-hidden shadow-sm border border-primary/10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-4">HIGHLIGHTED FEATURE</span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">AI-Powered Content Suggestions</h3>
              <p className="text-gray-600 mb-6">
                Our advanced machine learning algorithms analyze top-performing content in your niche to suggest optimization strategies that will boost your rankings.
              </p>
              <ul className="space-y-3 mb-8">
                {['Content gap analysis', 'Keyword density optimization', 'Semantic relevance scoring'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#cta" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                <span>Try this feature</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="hidden lg:block relative min-h-[300px]">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-64 h-64 bg-primary/10 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
                  <div className="w-80 h-80 border-2 border-dashed border-primary/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
