import { Check, X } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: "0",
      period: "/month",
      features: [
        { included: true, text: "Basic site audit" },
        { included: true, text: "10 keyword rankings" },
        { included: true, text: "Weekly reports" },
        { included: false, text: "Competitor analysis" }
      ],
      cta: { text: "Start Free", href: "#cta", style: "outlined" },
      popular: false
    },
    {
      name: "Pro",
      description: "For growing businesses",
      price: "49",
      period: "/month",
      features: [
        { included: true, text: "Advanced site audit" },
        { included: true, text: "100 keyword rankings" },
        { included: true, text: "Daily reports" },
        { included: true, text: "3 competitor analysis" }
      ],
      cta: { text: "Start 14-Day Trial", href: "#cta", style: "gradient" },
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "199",
      period: "/month",
      features: [
        { included: true, text: "Premium site audit" },
        { included: true, text: "Unlimited keywords" },
        { included: true, text: "Real-time reports" },
        { included: true, text: "10 competitor analysis" }
      ],
      cta: { text: "Contact Sales", href: "#cta", style: "outlined" },
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Simple, Transparent Pricing</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Choose the plan that works best for your business needs. No hidden fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'bg-white rounded-xl overflow-hidden shadow-card border-2 border-primary relative scale-105 z-10' : 'bg-light rounded-xl overflow-hidden shadow-soft'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1">
                  POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <>
                          <Check className="text-green-500 mt-1 mr-3 h-4 w-4" />
                          <span className="text-gray-600">{feature.text}</span>
                        </>
                      ) : (
                        <>
                          <X className="text-gray-400 mt-1 mr-3 h-4 w-4" />
                          <span className="text-gray-400">{feature.text}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <a 
                  href={plan.cta.href} 
                  className={`block w-full py-3 px-4 ${
                    plan.cta.style === 'gradient' 
                      ? 'bg-gradient hover:opacity-90 text-white' 
                      : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
                  } rounded-lg text-center font-medium transition-all`}
                >
                  {plan.cta.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
