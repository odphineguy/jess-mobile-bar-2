import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Jess's Mobile Bar made our wedding absolutely perfect! The cocktails were incredible and the service was top-notch. Our guests are still talking about the amazing drinks.",
    author: "Sarah M.",
    event: "Wedding - Malibu",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    text: "Professional, punctual, and absolutely fantastic! Jess and her team elevated our corporate event to the next level. Highly recommend for any occasion.",
    author: "Michael R.",
    event: "Corporate Event - Beverly Hills", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    text: "Best decision we made for our anniversary party! The mobile bar setup was stunning and the custom cocktails were a huge hit with all our guests.",
    author: "Jennifer L.",
    event: "Private Party - Orange County",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b372?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our clients say about their experience with Jess's Mobile Bar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-accent-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
