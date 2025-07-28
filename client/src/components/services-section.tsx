import { Check } from "lucide-react";

const services = [
  {
    title: "Mobile Bar Rental",
    description: "Complete mobile bar setup with professional equipment, premium glassware, and elegant presentation for any venue.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: ["Professional bar equipment", "Premium glassware", "Setup & breakdown included"]
  },
  {
    title: "Professional Bartending",
    description: "Skilled bartenders who craft exceptional cocktails and provide outstanding service for your guests.",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: ["Licensed bartenders", "Custom cocktail menus", "Professional presentation"]
  },
  {
    title: "Event Consultation",
    description: "Personalized consultation to design the perfect bar experience for your specific event and guest preferences.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: ["Menu customization", "Beverage planning", "Event coordination"]
  },
  {
    title: "Corporate Events",
    description: "Professional bar services for corporate functions, networking events, and business celebrations.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: ["Professional service", "Corporate packages", "Liability coverage"]
  },
  {
    title: "Wedding Services",
    description: "Create unforgettable memories with signature cocktails and elegant bar service for your special day.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: ["Signature cocktails", "Elegant presentation", "Wedding planning coordination"]
  },
  {
    title: "Private Parties",
    description: "Intimate gatherings deserve exceptional service. We cater to all private celebrations and social events.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: ["Flexible packages", "Customized service", "Personal attention"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we bring professional bartending services directly to your venue
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-purple-primary mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
