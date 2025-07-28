import { Expand } from "lucide-react";
import { Instagram } from "lucide-react";
import drink1 from "@assets/drink_1753664259691.jpg";
import drink2 from "@assets/drink1_1753664259699.jpg";
import drink3 from "@assets/drink2_1753664259700.jpg";
import drink4 from "@assets/drink3_1753664259700.jpg";
import drink5 from "@assets/drink5_1753664259700.jpg";
import drink6 from "@assets/drink6_1753664259700.jpg";

const galleryImages = [
  {
    src: drink1,
    alt: "Signature strawberry cocktails with elegant garnish"
  },
  {
    src: drink2,
    alt: "Craft cocktails with fresh fruit garnishes"
  },
  {
    src: drink3,
    alt: "Spicy rim cocktail with jalapeño and lime garnish"
  },
  {
    src: drink4,
    alt: "Hand-crafted cocktail with orange slice garnish"
  },
  {
    src: drink5,
    alt: "Grapefruit cocktail with spiced rim"
  },
  {
    src: drink6,
    alt: "Artisan cocktail with rosemary and lime garnish"
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
