import React, { useState } from 'react';
import { Heart, Clock, Thermometer } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  popular?: boolean;
  prepTime: string;
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('signature');

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Classic Vanilla Dream",
      description: "Premium vanilla ice cream rolled with fresh strawberries and chocolate chips",
      price: "$8.99",
      image: "https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg",
      category: "signature",
      popular: true,
      prepTime: "3-5 min"
    },
    {
      id: 2,
      name: "Chocolate Explosion",
      description: "Rich chocolate ice cream with brownie pieces and hot fudge drizzle",
      price: "$9.99",
      image: "https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg",
      category: "signature",
      prepTime: "4-6 min"
    },
    {
      id: 3,
      name: "Berry Bliss Roll",
      description: "Mixed berry ice cream with fresh blueberries and raspberry sauce",
      price: "$9.49",
      image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg",
      category: "signature",
      prepTime: "3-5 min"
    },
    {
      id: 4,
      name: "Tropical Paradise",
      description: "Coconut ice cream with mango chunks and toasted coconut flakes",
      price: "$10.49",
      image: "https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg",
      category: "seasonal",
      prepTime: "4-6 min"
    },
    {
      id: 5,
      name: "Cookies & Cream Delight",
      description: "Oreo ice cream rolled with cookie pieces and whipped cream",
      price: "$9.79",
      image: "https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg",
      category: "classic",
      popular: true,
      prepTime: "3-4 min"
    },
    {
      id: 6,
      name: "Matcha Green Tea",
      description: "Authentic matcha ice cream with red bean and mochi pieces",
      price: "$11.99",
      image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg",
      category: "premium",
      prepTime: "5-7 min"
    }
  ];

  const categories = [
    { id: 'signature', name: 'Signature Rolls', count: 3 },
    { id: 'classic', name: 'Classic Flavors', count: 1 },
    { id: 'seasonal', name: 'Seasonal Special', count: 1 },
    { id: 'premium', name: 'Premium Collection', count: 1 }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Delicious <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every ice cream roll is made fresh to order using premium ingredients. 
            Watch our skilled artisans create your perfect roll right before your eyes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg border-2 border-black'
                  : 'bg-white text-gray-600 hover:text-yellow-500 border border-gray-200 hover:border-yellow-300'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    🔥 Popular
                  </div>
                )}
                <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.prepTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Thermometer className="w-4 h-4" />
                      <span>Made Fresh</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-500">{item.price}</span>
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-black">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Can't find what you're looking for? We can create custom rolls!</p>
          <button className="bg-white text-pink-500 border-2 border-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300">
            Create Custom Roll
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;