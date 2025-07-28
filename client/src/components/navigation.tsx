import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/Jess_1753662801075.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
      scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src={logoPath} 
              alt="Jess's Mobile Bar"
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-purple-primary transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-purple-primary transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-purple-primary transition-colors duration-200 font-medium"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection("areas")}
                className="text-gray-700 hover:text-purple-primary transition-colors duration-200 font-medium"
              >
                Service Areas
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-purple-gradient text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 font-medium"
              >
                Get Quote
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-primary"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-primary"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-primary"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection("areas")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-primary"
              >
                Service Areas
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-purple-primary font-medium"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
