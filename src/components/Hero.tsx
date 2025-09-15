import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-pink-50 to-gray-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-600 ml-2">5.0 (150+ reviews)</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Fresh Ice Cream
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500"> Rolls</span>
              <br />Made to Order
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Watch as we transform premium ice cream into beautiful, delicious rolls right before your eyes. 
              Made fresh with the finest ingredients and endless flavor possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToMenu}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-black"
              >
                <span>View Menu</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-black text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-pink-500 hover:text-pink-500 transition-all duration-300">
                Call to Order
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">50+</div>
                <div className="text-gray-600">Flavors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">5★</div>
                <div className="text-gray-600">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">1000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg" 
                alt="Delicious ice cream rolls" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-gray-800">Fresh Daily</div>
                <div className="text-gray-600">Made to Order</div>
              </div>
            </div>
            
            <div className="absolute top-4 -left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg z-20">
              🔥 Most Popular
            </div>
            
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;