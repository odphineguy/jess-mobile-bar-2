import { Expand } from "lucide-react";
import { Instagram } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Mobile bar setup"
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Cocktail preparation"
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Event party atmosphere"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Luxury bartending service"
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Premium cocktail service"
  },
  {
    src: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    alt: "Outdoor mobile bar"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our mobile bar setups and professional bartending services in action
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-purple-gradient opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <button className="text-white text-2xl bg-white/20 p-3 rounded-full backdrop-blur-sm">
                  <Expand size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/mobile_bar_jess" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-purple-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
          >
            <Instagram className="mr-2" size={20} />
            Follow @mobile_bar_jess
          </a>
        </div>
      </div>
    </section>
  );
}
