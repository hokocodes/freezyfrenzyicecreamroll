import React from 'react';
import { Users, Award, Clock, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Artisan Crafted",
      description: "Each roll is hand-crafted by our skilled ice cream artists using traditional techniques"
    },
    {
      icon: Award,
      title: "Premium Ingredients",
      description: "We use only the finest, locally-sourced ingredients for the freshest taste"
    },
    {
      icon: Clock,
      title: "Made Fresh Daily",
      description: "Our ice cream base is made fresh every morning to ensure optimal flavor and quality"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Proudly serving our local community with a commitment to excellence since 2020"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">Ice Cream Rolling</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                At Freezy Frenzy, we believe ice cream should be more than just a treat—it should be an experience. 
                Our unique ice cream rolling technique transforms premium ingredients into beautiful, delicious works of art.
              </p>
              
              <p className="mb-4">
                Starting with our signature ice cream base made fresh daily, we pour your chosen flavors onto our -18°C 
                cold plate. Watch in amazement as we chop, mix, and spread your ingredients before expertly rolling them 
                into perfect spirals right before your eyes.
              </p>
              
              <p>
                Every roll tells a story, and every visit creates a memory. Come experience the magic of fresh, 
                made-to-order ice cream rolls that taste as incredible as they look.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-1">4+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-1">10K+</div>
                <div className="text-gray-600 text-sm">Rolls Made</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-1">50+</div>
                <div className="text-gray-600 text-sm">Flavor Options</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg" 
                alt="Ice cream rolling process" 
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg" 
                alt="Fresh ingredients" 
                className="rounded-xl shadow-lg h-48 w-full object-cover mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg" 
                alt="Finished ice cream rolls" 
                className="rounded-xl shadow-lg h-48 w-full object-cover -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg" 
                alt="Happy customers" 
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-500/20 rounded-xl"></div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Why Choose Freezy Frenzy?</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-yellow-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border-2 border-gray-200">
                  <feature.icon className="w-8 h-8 text-pink-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;