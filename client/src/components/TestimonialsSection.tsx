import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "\"RankPro saved us weeks of manual SEO work. The insights are actionable, and the UI is beautifully designed. We've seen a 215% increase in organic traffic within just 3 months.\"",
      rating: 5
    },
    {
      name: "David Chen",
      role: "CEO, GrowthLabs",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "\"The UI is clean, fast, and beautifully designed. We've implemented all of RankPro's suggestions and saw our keywords jump to the first page within weeks.\"",
      rating: 5
    },
    {
      name: "Emily Martinez",
      role: "SEO Specialist, Digit Agency",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "\"As an agency managing multiple clients, RankPro has streamlined our workflow tremendously. The reports are client-ready and the keyword suggestions are spot on.\"",
      rating: 4.5
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.hasFocus()) {
        setActiveSlide((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="text-yellow-400 fill-current" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="text-yellow-400 fill-current" />);
    }
    
    return stars;
  };

  return (
    <section id="testimonials" className="py-16 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Our Users Say</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Don't just take our word for it. See what our customers have achieved with RankPro.
          </p>
        </div>
        
        <div className="testimonial-container relative">
          <div id="testimonial-slider" className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial-slide ${index === activeSlide ? 'active' : ''}`}>
                <div className="bg-white rounded-xl shadow-card p-8 max-w-2xl mx-auto">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-dark">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-600 italic mb-6">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{testimonial.rating} rating</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            <button 
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-white shadow-sm text-gray-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center" 
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-primary' : 'bg-gray-300'}`} 
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-sm text-gray-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center" 
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
