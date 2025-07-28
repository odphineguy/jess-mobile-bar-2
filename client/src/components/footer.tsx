import { Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="font-display text-2xl font-bold text-white mb-4">
              Jess's Mobile Bar
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Premium mobile bartending services for weddings, corporate events, and private parties across Los Angeles, Orange County, and the Inland Empire.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mobile_bar_jess" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-light transition-colors duration-200">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-purple-light transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-300 hover:text-purple-light transition-colors duration-200"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("areas")}
                  className="text-gray-300 hover:text-purple-light transition-colors duration-200"
                >
                  Service Areas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-purple-light transition-colors duration-200"
                >
                  Get Quote
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="tel:760-718-9157" className="flex items-center hover:text-purple-light transition-colors duration-200">
                  <Phone className="mr-2" size={16} />
                  (760) 718-9157
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2" size={16} />
                Los Angeles, CA
              </li>
              <li>
                <a href="https://www.instagram.com/mobile_bar_jess" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-purple-light transition-colors duration-200">
                  <Instagram className="mr-2" size={16} />
                  @mobile_bar_jess
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Jess's Mobile Bar. All rights reserved. | Professional mobile bartending services in Los Angeles, Orange County, and Inland Empire.</p>
        </div>
      </div>
    </footer>
  );
}
