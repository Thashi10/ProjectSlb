import React, { useState, useEffect } from 'react';
import { Search, Calendar, MapPin, Users, Clock, Star, ChevronDown, Menu, X, Bus, Shield, CreditCard, Phone, Play, CheckCircle, ArrowRight, Smartphone, QrCode, CreditCard as PaymentIcon } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      icon: Search,
      title: 'Search Routes',
      description: 'Find your perfect bus route from hundreds of available options across Sri Lanka'
    },
    {
      icon: Calendar,
      title: 'Book & Pay',
      description: 'Select your preferred time and complete secure payment in just a few clicks'
    },
    {
      icon: Smartphone,
      title: 'Digital Ticket',
      description: 'Get instant QR code tickets on your phone - no printing required'
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Real-time tracking',
      description: 'Track your bus location live and get arrival updates'
    },
    {
      icon: CheckCircle,
      title: 'Instant refunds',
      description: 'Cancel anytime and get instant refunds to your account'
    },
    {
      icon: CheckCircle,
      title: 'Digital tickets only',
      description: 'Eco-friendly paperless tickets with QR code scanning'
    }
  ];

  const guidelines = [
    {
      icon: Bus,
      title: 'Easy Booking',
      description: 'Book your bus tickets in just 3 simple steps with our user-friendly platform'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: 'Your payment information is protected with bank-level security encryption'
    },
    {
      icon: Clock,
      title: 'Trip Availability',
      description: 'Real-time availability updates ensure you never miss your preferred departure'
    },
    {
      icon: Phone,
      title: 'Mobile Support',
      description: 'Access all features on mobile with our responsive design and mobile app'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/10 backdrop-blur-lg shadow-lg' : 'bg-white/5 backdrop-blur-sm'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ProjectSlb</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors font-medium">Routes</a>
              <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors font-medium">Booking</a>
              <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors font-medium">Contact Us</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Sign In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://kootook.com/wp-content/uploads/2021/06/bus-ticket.jpg?auto=format&fit=crop&w=1200&q=80")`,
              transform: "scaleX(-1)",
            }}
          >


            {/* Floating Bus Illustration */}
            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 opacity-20">
              <div className="w-32 h-20 bg-blue-600 rounded-lg relative">
                <div className="absolute -top-2 left-4 right-4 h-8 bg-blue-700 rounded-t-lg"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-gray-800 rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Buy your bus
                <br />
                tickets online.
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                Travel across Sri Lanka with comfort and convenience. Book your tickets instantly and get digital passes for hassle-free journeys.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl">
                Book tickets now
              </button>
            </div>

            {/* Right Content - Mobile Mockups */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Phone */}
                <div className="relative z-20 bg-white rounded-3xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-blue-50 rounded-2xl p-6 w-72 h-96 relative overflow-hidden">
                    {/* Phone Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                          <Bus className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-gray-900">ProjectSlb</span>
                      </div>
                      <div className="text-sm text-gray-600">9:41 AM</div>
                    </div>

                    {/* Booking Form */}
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-sm text-gray-600 mb-2">From</div>
                        <div className="font-semibold text-gray-900">Colombo</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-sm text-gray-600 mb-2">To</div>
                        <div className="font-semibold text-gray-900">Kandy</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-sm text-gray-600 mb-2">Date</div>
                          <div className="font-semibold text-gray-900">Today</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-sm text-gray-600 mb-2">Passengers</div>
                          <div className="font-semibold text-gray-900">2</div>
                        </div>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
                        Search Buses
                      </button>
                    </div>

                    {/* QR Code */}
                    <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-lg">
                      <QrCode className="w-12 h-12 text-gray-800" />
                    </div>
                  </div>
                </div>

                {/* Secondary Phone */}
                <div className="absolute -left-16 top-12 z-10 bg-white rounded-3xl p-2 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-green-50 rounded-2xl p-4 w-48 h-64 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900 mb-2">Booking Confirmed!</div>
                      <div className="text-sm text-gray-600 mb-4">Your digital ticket is ready</div>
                      <div className="bg-white p-3 rounded-lg">
                        <QrCode className="w-8 h-8 text-gray-800 mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-gray-700 hover:text-blue-600">
                📍 Route from Colombo
              </button>
              <button className="px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-gray-700 hover:text-blue-600">
                🎫 Season Passes
              </button>
              <button className="px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-gray-700 hover:text-blue-600">
                🚌 Route Planner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Introducing the all new e-ticket platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the future of bus travel in Sri Lanka with our digital-first platform. Book, pay, and travel with just your smartphone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features with Phone Mockup */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Add your trip details.
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Simply enter your departure and destination cities, select your travel date, and choose the number of passengers to find the perfect bus for your journey.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <feature.icon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-white rounded-3xl p-3 shadow-2xl">
                  <div className="bg-gray-900 rounded-2xl p-6 w-80 h-96 relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-white text-sm mb-6">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                        <div className="w-4 h-2 bg-white rounded-sm opacity-30"></div>
                      </div>
                    </div>

                    {/* App Interface */}
                    <div className="bg-white rounded-lg p-4 h-80">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-900">Search Routes</h3>
                        <div className="w-6 h-6 bg-blue-600 rounded"></div>
                      </div>

                      <div className="space-y-4">
                        <div className="border-2 border-blue-200 rounded-lg p-3 bg-blue-50">
                          <div className="text-sm text-gray-600 mb-1">From</div>
                          <div className="font-semibold">Colombo Fort</div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-3">
                          <div className="text-sm text-gray-600 mb-1">To</div>
                          <div className="font-semibold text-gray-400">Where to?</div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="border border-gray-200 rounded-lg p-3">
                            <div className="text-sm text-gray-600 mb-1">Date</div>
                            <div className="font-semibold text-gray-400">Select</div>
                          </div>
                          <div className="border border-gray-200 rounded-lg p-3">
                            <div className="text-sm text-gray-600 mb-1">Passengers</div>
                            <div className="font-semibold">1</div>
                          </div>
                        </div>

                        <button className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-semibold mt-6">
                          Search Routes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Phone Mockups */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Main Payment Phone */}
                <div className="bg-white rounded-3xl p-3 shadow-2xl">
                  <div className="bg-blue-600 rounded-2xl p-6 w-80 h-96 relative overflow-hidden">
                    <div className="text-white">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-sm">9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                          <div className="w-4 h-2 bg-white rounded-sm opacity-30"></div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2">Payment</h3>
                      <p className="text-blue-100 mb-6">Complete your booking</p>

                      <div className="bg-white/10 rounded-lg p-4 mb-6">
                        <div className="flex justify-between items-center">
                          <span>Colombo → Kandy</span>
                          <span className="font-bold">LKR 450</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3 flex items-center space-x-3">
                          <CreditCard className="w-5 h-5" />
                          <span>Credit Card</span>
                        </div>
                        <div className="bg-white rounded-lg p-3 text-gray-900 flex items-center space-x-3">
                          <PaymentIcon className="w-5 h-5 text-blue-600" />
                          <span>Mobile Payment</span>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 flex items-center space-x-3">
                          <Phone className="w-5 h-5" />
                          <span>Bank Transfer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Make your payment
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Secure and fast payment options designed for Sri Lankan travelers. Pay with your preferred method and get instant confirmation.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Pay with card or mobile payment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Instant booking confirmation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Ticket Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Use your e-ticket
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Your digital ticket with QR code is ready instantly after payment. No need for printing - just show your phone to board the bus.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Instant QR code generation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Offline ticket access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Easy boarding process</span>
                </div>
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-white rounded-3xl p-3 shadow-2xl">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 w-80 h-96 relative overflow-hidden">
                    <div className="text-white">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-sm">9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                          <div className="w-4 h-2 bg-white rounded-sm opacity-30"></div>
                        </div>
                      </div>

                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold mb-2">Your E-Ticket</h3>
                        <p className="text-green-100">Ready to board</p>
                      </div>

                      <div className="bg-white rounded-lg p-6 text-gray-900 text-center">
                        <div className="mb-4">
                          <div className="text-sm text-gray-600 mb-1">Route</div>
                          <div className="font-bold">Colombo → Kandy</div>
                        </div>

                        <div className="flex justify-between text-sm mb-4">
                          <div>
                            <div className="text-gray-600">Date</div>
                            <div className="font-semibold">Today</div>
                          </div>
                          <div>
                            <div className="text-gray-600">Time</div>
                            <div className="font-semibold">10:30 AM</div>
                          </div>
                          <div>
                            <div className="text-gray-600">Seat</div>
                            <div className="font-semibold">15A</div>
                          </div>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-4">
                          <QrCode className="w-20 h-20 text-gray-800 mx-auto mb-2" />
                          <p className="text-xs text-gray-600">Show this QR code to board</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Guidelines */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Guidelines</h2>
            <p className="text-xl text-gray-300">Everything you need to know about using ProjectSlb</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guidelines.map((guideline, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <guideline.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{guideline.title}</h3>
                <p className="text-gray-300 text-sm">{guideline.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact Us</h2>
          <p className="text-xl text-blue-100 mb-8">
            Have questions? We're here to help you with your journey across Sri Lanka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
              Get Help Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              Call Support
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-blue-100">+94 11 234 5678</p>
              <p className="text-blue-100 text-sm">Available 24/7</p>
            </div>
            <div>
              <Clock className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-blue-100">chat@projectslb.lk</p>
              <p className="text-blue-100 text-sm">Response within 5 mins</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-blue-100">Colombo 07, Sri Lanka</p>
              <p className="text-blue-100 text-sm">Mon-Fri 9AM-6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Bus className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">ProjectSlb</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Sri Lanka's premier digital bus booking platform. Travel smart, travel comfortable, travel with ProjectSlb.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Book Tickets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Route Planner</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Season Passes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Your Bus</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cancel Booking</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ProjectSlb. All rights reserved. Made with ❤️ for Sri Lankan travelers.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>English</span>
              <span>සිංහල</span>
              <span>தமிழ்</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }

        /* Enhanced button hover effects */
        button {
          position: relative;
          overflow: hidden;
        }

        button:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        button:hover:before {
          left: 100%;
        }

        /* Glass morphism effect */
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Gradient text effect */
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}