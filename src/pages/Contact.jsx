import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Bus, 
  Users, 
  Calendar,
  MessageSquare,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      info: "+94 11 234 5678",
      subInfo: "Mon-Fri 8:00 AM - 8:00 PM",
      bgColor: "bg-blue-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: "support@projectslb.lk",
      subInfo: "We'll respond within 24 hours",
      bgColor: "bg-green-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      info: "123 Main Street, Colombo 01",
      subInfo: "Sri Lanka",
      bgColor: "bg-purple-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      info: "Monday - Sunday",
      subInfo: "6:00 AM - 10:00 PM",
      bgColor: "bg-orange-500"
    }
  ];

  const services = [
    { icon: <Bus className="w-8 h-8" />, desc: "Easy online seat reservation" },
    { icon: <Calendar className="w-8 h-8" />, desc: "Convenient season passes" },
    { icon: <Users className="w-8 h-8" />,  desc: "Special rates for groups" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center transform transition-all duration-1000 ease-out">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm border border-white/30">
                <Bus className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Contact <span className="text-yellow-300">GoRide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Your trusted partner for bus booking and monthly season passes across Sri Lanka
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-400">
              {services.map((service, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 flex items-center space-x-2 transform hover:scale-105 transition-all duration-300">
                  <div className="text-white">{service.icon}</div>
                  <span className="text-white font-medium">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100">
                <div className={`${item.bgColor} h-2`}></div>
                <div className="p-6">
                  <div className={`${item.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-800 font-medium mb-1">{item.info}</p>
                  <p className="text-gray-600 text-sm">{item.subInfo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
              <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
              <p className="text-blue-100">We're here to help with your travel needs</p>
            </div>
            
            <div className="p-8">
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-fade-in">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <div>
                      <h3 className="text-green-800 font-semibold">Message Sent Successfully!</h3>
                      <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="transform transition-all duration-300 focus-within:scale-105">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="transform transition-all duration-300 focus-within:scale-105">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="+94 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="transform transition-all duration-300 focus-within:scale-105">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="transform transition-all duration-300 focus-within:scale-105">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Bus Booking Inquiry</option>
                    <option value="season">Monthly Season Pass</option>
                    <option value="support">Technical Support</option>
                    <option value="complaint">Complaint</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="transform transition-all duration-300 focus-within:scale-105">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                    placeholder="Please describe your inquiry in detail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-2xl'
                  }`}
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Info Panel */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Why Choose ProjectSLB?</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bus className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reliable Service</h4>
                    <p className="text-gray-600 text-sm">Over 500+ daily routes across Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                  <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Booking</h4>
                    <p className="text-gray-600 text-sm">Book seats and season passes online</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                  <div className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">Always here to help you travel better</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Numbers Speak</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
                  <div className="text-sm text-blue-100">Daily Routes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">50K+</div>
                  <div className="text-sm text-blue-100">Happy Passengers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
                  <div className="text-sm text-blue-100">Customer Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">99%</div>
                  <div className="text-sm text-blue-100">On-Time Performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
              <h4 className="font-semibold text-gray-900 mb-3">How do I book a bus seat?</h4>
              <p className="text-gray-600 text-sm">Simply select your route, choose your preferred time, pick your seat, and complete the payment online.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
              <h4 className="font-semibold text-gray-900 mb-3">What is a monthly season pass?</h4>
              <p className="text-gray-600 text-sm">A cost-effective option for regular travelers, offering unlimited travel on selected routes for a month.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
              <h4 className="font-semibold text-gray-900 mb-3">Can I cancel or modify my booking?</h4>
              <p className="text-gray-600 text-sm">Yes, you can cancel or modify your booking up to 2 hours before departure through our platform.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
              <h4 className="font-semibold text-gray-900 mb-3">Is customer support available 24/7?</h4>
              <p className="text-gray-600 text-sm">Yes, our customer support team is available round the clock to assist you with any queries.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default ContactUs;