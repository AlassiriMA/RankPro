import { ArrowRight, Play, Check } from "lucide-react";

export default function DashboardPreview() {
  const features = [
    "Real-time SERP position tracking",
    "Competitor analysis with one click",
    "Content optimization suggestions",
    "Backlink opportunity finder"
  ];

  return (
    <section id="dashboard" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Powerful Insights at Your Fingertips
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              The RankPro dashboard gives you a complete overview of your SEO performance in one place, with intuitive visualization and easy navigation.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="#cta" className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
                <span>See the dashboard in action</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="lg:order-1 mx-auto">
            <div className="relative bg-white rounded-xl shadow-2xl p-3 max-w-lg animate-fadeIn">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="RankPro Dashboard Demo" 
                className="rounded-lg w-full"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button className="w-16 h-16 rounded-full bg-primary bg-opacity-80 text-white flex items-center justify-center hover:bg-opacity-100 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" aria-label="Play dashboard demo">
                  <Play className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
