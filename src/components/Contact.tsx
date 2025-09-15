import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">Freezy Frenzy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Come experience the magic of fresh ice cream rolls. We're located in the heart of downtown, 
            ready to create your perfect sweet treat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-200">
                  <MapPin className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">123 Sweet Street<br />Downtown District<br />City, State 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-lg border border-pink-200">
                  <Phone className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">(555) 123-ROLL</p>
                  <p className="text-gray-600">(555) 123-7655</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg border border-gray-200">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">hello@freezyfrenzy.com</p>
                  <p className="text-gray-600">orders@freezyfrenzy.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Thursday: 12pm - 10pm</p>
                    <p>Friday - Saturday: 12pm - 11pm</p>
                    <p>Sunday: 1pm - 9pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
            <div className="bg-gradient-to-r from-yellow-50 to-pink-50 p-6 rounded-xl border border-yellow-200">
              <h4 className="font-semibold text-gray-900 mb-2">Special Note</h4>
              <p className="text-gray-600 mb-4">
                We recommend calling ahead during peak hours (7-9pm) to avoid wait times. 
                Large group orders (6+ rolls) should be placed 30 minutes in advance.
              </p>

              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 border-2 border-black">
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                    placeholder="Tell us about your inquiry, special requests, or feedback..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-black"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
  )
}