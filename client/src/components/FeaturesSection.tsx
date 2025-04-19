import { Search, LineChart, Zap } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Audit Websites in Seconds",
      description: "Run comprehensive audits that analyze 200+ SEO factors in just seconds. Get actionable insights immediately.",
      iconBgClass: "bg-primary-light/10 text-primary"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Track Keyword Rankings",
      description: "Monitor your rankings for hundreds of keywords across multiple search engines with daily updates.",
      iconBgClass: "bg-green-100 text-green-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Get Instant SEO Fixes",
      description: "Our AI analyzes your site and competitors to provide prioritized recommendations for quick wins.",
      iconBgClass: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What RankPro Does</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Powerful SEO tools designed to boost your search rankings and drive more targeted traffic.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-light rounded-xl p-8 shadow-soft transition-all hover:shadow-card">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${feature.iconBgClass} mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
