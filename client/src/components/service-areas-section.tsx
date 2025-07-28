import { MapPin, Phone } from "lucide-react";

const serviceAreas = [
  {
    title: "Los Angeles",
    description: "Comprehensive mobile bar services throughout Los Angeles County including downtown LA, Hollywood, Beverly Hills, Santa Monica, and surrounding areas.",
    areas: [
      "Downtown Los Angeles",
      "Hollywood & West Hollywood", 
      "Beverly Hills & Santa Monica",
      "Pasadena & Glendale",
      "Manhattan Beach & Redondo Beach"
    ]
  },
  {
    title: "Orange County", 
    description: "Professional bartending services across Orange County including Anaheim, Irvine, Newport Beach, Laguna Beach, and all surrounding communities.",
    areas: [
      "Anaheim & Fullerton",
      "Irvine & Costa Mesa",
      "Newport Beach & Huntington Beach", 
      "Laguna Beach & Dana Point",
      "Orange & Garden Grove"
    ]
  },
  {
    title: "Inland Empire",
    description: "Mobile bar rental and bartending services throughout the Inland Empire including Riverside, San Bernardino, Palm Springs, and nearby areas.",
    areas: [
      "Riverside & Moreno Valley",
      "San Bernardino & Fontana", 
      "Palm Springs & Desert Cities",
      "Temecula & Murrieta",
      "Chino Hills & Rancho Cucamonga"
    ]
  }
];

export default function ServiceAreasSection() {
  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve the greater Los Angeles area and surrounding regions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-purple-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                {area.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {area.description}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                {area.areas.map((location, locationIndex) => (
                  <li key={locationIndex}>{location}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
          <div className="text-center">
            <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
              Don't See Your Area?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always expanding our service areas. Contact us to discuss your event location and we'll do our best to accommodate your needs.
            </p>
            <a 
              href="tel:760-718-9157" 
              className="inline-flex items-center bg-purple-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
            >
              <Phone className="mr-2" size={20} />
              Call (760) 718-9157
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
