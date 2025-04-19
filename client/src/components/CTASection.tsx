import { ArrowRight, CalendarDays } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="py-16 bg-gradient-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Ready to Boost Your Rankings?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Start your free trial today and see why thousands of businesses trust RankPro for their SEO needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
            >
              <span>Get Started Free</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-dark bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
            >
              <CalendarDays className="mr-2 h-4 w-4 text-primary" />
              <span>Schedule a Demo</span>
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
}
