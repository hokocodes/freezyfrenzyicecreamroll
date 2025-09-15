import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg",
      alt: "Vanilla roll with strawberries",
      category: "Signature Rolls"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg",
      alt: "Chocolate explosion roll",
      category: "Chocolate Series"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg",
      alt: "Berry bliss creation",
      category: "Fruit Specials"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg",
      alt: "Tropical paradise roll",
      category: "Seasonal"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg",
      alt: "Cookies and cream delight",
      category: "Classic Favorites"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg",
      alt: "Matcha green tea roll",
      category: "Premium Collection"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg",
      alt: "Rainbow sprinkle roll",
      category: "Kids Favorites"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg",
      alt: "Caramel swirl creation",
      category: "Specialty"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg",
      alt: "Fresh fruit medley",
      category: "Healthy Options"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sweet <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">Creations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our most popular ice cream roll creations. 
            Each one is crafted with love and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">{image.alt}</h3>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="max-w-4xl max-h-[80vh] relative">
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {galleryImages[selectedImage].alt}
                </h3>
                <p className="text-gray-300">{galleryImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Follow us on social media for daily updates of our latest creations!</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              📸 Instagram
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              📘 Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;