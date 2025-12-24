import React from 'react';
import { Users, Award, Clock, Sparkles, Leaf, Zap, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: "Sugar-Free Options",
      description: "Keto-friendly rolls made with natural sweeteners like erythritol and stevia - zero added sugar, maximum taste"
    },
    {
      icon: Heart,
      title: "Traditional Sweet",
      description: "Classic ice cream rolls with premium sugar for those who love the traditional sweet experience"
    },
    {
      icon: Award,
      title: "Premium Ingredients",
      description: "We use only the finest, locally-sourced ingredients for the freshest taste in every roll"
    },
    {
      icon: Users,
      title: "Something for Everyone",
      description: "Whether you're keto, diabetic, or just love great ice cream - we have options for every lifestyle"
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
                At Freezy Frenzy Thai Ice Cream Roll, we believe ice cream should be accessible to everyone. That's why we offer 
                both traditional sweet ice cream rolls and innovative sugar-free, keto-friendly options. 
                Our unique rolling technique transforms premium ingredients into beautiful, delicious works of art.
              </p>
              
              <p className="mb-4">
                Starting with our signature ice cream base (available in both traditional and sugar-free versions), 
                we pour your chosen flavors onto our -18°C cold plate. Watch in amazement as we chop, mix, and 
                spread your ingredients before expertly rolling them into perfect spirals right before your eyes.
              </p>
              
              <p>
                Every roll tells a story, and every visit creates a memory. Whether you're following a strict 
                keto diet or simply want to indulge in a classic sweet treat, we have the perfect ice cream 
                roll for you. Come experience the magic of fresh, made-to-order ice cream rolls.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-1">15</div>
                <div className="text-gray-600 text-sm">Thai Ice Cream Rolls</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-1">22</div>
                <div className="text-gray-600 text-sm">Drinks & Smoothies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-1">37+</div>
                <div className="text-gray-600 text-sm">Total Items</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/rolls/berryblast.png" 
                alt="Ice cream rolling process" 
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="/images/rolls/matchamadness.png" 
                alt="Fresh ingredients" 
                className="rounded-xl shadow-lg h-48 w-full object-cover mt-8"
              />
              <img 
                src="/images/rolls/thaimeup.png" 
                alt="Finished ice cream rolls" 
                className="rounded-xl shadow-lg h-48 w-full object-cover -mt-8"
              />
              <img 
                src="/images/rolls/smoresgalore.png" 
                alt="Happy customers" 
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-500/20 rounded-xl"></div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Why Choose Freezy Frenzy Thai Ice Cream Roll?</h3>
          
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

        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-pink-50 p-8 rounded-2xl border border-yellow-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect for Every Lifestyle</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-4xl mx-auto">
              Whether you're following a strict keto diet, managing diabetes, or simply want to enjoy a classic 
              sweet treat, our diverse menu has something for everyone. We're proud to serve all our customers 
              with the same commitment to quality and freshness.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full font-semibold">Keto-Friendly</span>
              <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-semibold">Diabetic-Friendly</span>
              <span className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full font-semibold">Traditional Sweet</span>
              <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full font-semibold">Family-Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
