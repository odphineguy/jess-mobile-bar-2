import { ChevronDown, Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-purple-gradient overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-8">
          <div className="mx-auto h-48 w-48 mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="text-center">
              <div className="font-display text-4xl font-bold mb-2">Jess</div>
              <div className="text-sm tracking-[3px] font-medium">MOBILE BAR</div>
            </div>
          </div>
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Premium Mobile 
          <span className="block text-accent-gold">Bartending Services</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Elevate your events with professional mobile bar services across Los Angeles, Orange County, and the Inland Empire
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection("contact")}
            className="bg-white text-purple-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Free Quote
          </button>
          <a 
            href="tel:760-718-9157" 
            className="flex items-center text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-primary transition-all duration-200"
          >
            <Phone className="mr-2" size={20} />
            (760) 718-9157
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
