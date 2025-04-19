import { Bot, Smartphone, Bell, FileText } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Bot className="h-5 w-5" />,
      title: "AI-Powered Suggestions",
      description: "Our machine learning algorithms analyze millions of data points to provide you with the most effective optimization strategies.",
      bgColor: "bg-primary"
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "100% Mobile Optimization",
      description: "Ensure your site performs perfectly on all devices with our mobile-first testing and recommendations.",
      bgColor: "bg-green-500"
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Real-Time Alerts",
      description: "Get instant notifications for ranking changes, algorithm updates, or when your competitors make significant moves.",
      bgColor: "bg-purple-500"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "One-click Reports",
      description: "Generate comprehensive, white-labeled reports for clients or stakeholders with just one click.",
      bgColor: "bg-primary"
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose RankPro?</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our platform is designed to give you an edge in the competitive world of search rankings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-light rounded-xl p-8 shadow-soft transition-all hover:shadow-card flex">
              <div className="flex-shrink-0 mr-6">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${benefit.bgColor} text-white`}>
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
