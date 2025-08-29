import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Clock, ArrowRight, Search, Filter, Bus, Star, Wifi, Power, Coffee, Shield, ChevronDown, Menu, X } from 'lucide-react';

const ProjectSLB = () => {
  const [searchForm, setSearchForm] = useState({
    from: 'Colombo',
    to: 'Kandy',
    date: new Date().toISOString().split('T')[0],
    passengers: 2
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const routes = [
    {
      id: 1,
      from: 'Colombo',
      to: 'Kandy',
      departure: '06:00',
      arrival: '09:30',
      duration: '3h 30m',
      price: 450,
      originalPrice: 500,
      busType: 'Super Luxury',
      seatsAvailable: 28,
      totalSeats: 35,
      operator: 'Express Lanka',
      rating: 4.8,
      reviews: 142,
      amenities: ['wifi', 'ac', 'charging', 'refreshments'],
      busNumber: 'SL-4521',
      route: 'Via Kegalle',
      stops: ['Colombo Fort', 'Kegalle', 'Mawanella', 'Kandy']
    },
    {
      id: 2,
      from: 'Colombo',
      to: 'Kandy',
      departure: '08:15',
      arrival: '11:45',
      duration: '3h 30m',
      price: 380,
      originalPrice: 420,
      busType: 'AC Luxury',
      seatsAvailable: 15,
      totalSeats: 32,
      operator: 'Central Express',
      rating: 4.6,
      reviews: 89,
      amenities: ['wifi', 'ac', 'charging'],
      busNumber: 'CE-7823',
      route: 'Via Kadugannawa',
      stops: ['Colombo Fort', 'Kadugannawa', 'Peradeniya', 'Kandy']
    },
    {
      id: 3,
      from: 'Colombo',
      to: 'Kandy',
      departure: '14:30',
      arrival: '18:00',
      duration: '3h 30m',
      price: 520,
      originalPrice: 580,
      busType: 'Premium',
      seatsAvailable: 32,
      totalSeats: 40,
      operator: 'Royal Transport',
      rating: 4.9,
      reviews: 203,
      amenities: ['wifi', 'ac', 'charging', 'refreshments', 'entertainment'],
      busNumber: 'RT-9156',
      route: 'Express Route',
      stops: ['Colombo Fort', 'Kandy']
    },
    {
      id: 4,
      from: 'Colombo',
      to: 'Kandy',
      departure: '18:45',
      arrival: '22:15',
      duration: '3h 30m',
      price: 420,
      originalPrice: 450,
      busType: 'Semi Luxury',
      seatsAvailable: 8,
      totalSeats: 28,
      operator: 'Night Express',
      rating: 4.4,
      reviews: 67,
      amenities: ['ac', 'charging'],
      busNumber: 'NE-3847',
      route: 'Night Service',
      stops: ['Colombo Fort', 'Kegalle', 'Kandy']
    }
  ];

  const cities = ['Colombo', 'Kandy', 'Galle', 'Matara', 'Anuradhapura', 'Polonnaruwa', 'Negombo', 'Kurunegala', 'Ratnapura', 'Badulla'];

  const handleInputChange = (field, value) => {
    setSearchForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getAmenityIcon = (amenity) => {
    switch(amenity) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'ac': return <div className="w-4 h-4 text-xs">❄️</div>;
      case 'charging': return <Power className="w-4 h-4" />;
      case 'refreshments': return <Coffee className="w-4 h-4" />;
      case 'entertainment': return <div className="w-4 h-4 text-xs">📺</div>;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  const swapLocations = () => {
    setSearchForm(prev => ({
      ...prev,
      from: prev.to,
      to: prev.from
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-900 font-bold text-xl">ProjectSLB</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Home</a>
              <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Routes</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Buy Season</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Help</a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium">
                  Sign In
                </button>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-3">
              <a href="#" className="block text-gray-600 hover:text-blue-600 font-medium">Home</a>
              <a href="#" className="block text-blue-600 font-semibold">Routes</a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 font-medium">Buy Season</a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 font-medium">Help</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} text-center mb-8`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Perfect <span className="text-blue-600">Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Travel across Sri Lanka with comfort and convenience. Book your tickets instantly and get digital passes for hassle-free journeys.
            </p>
          </div>

          {/* Search Section */}
          <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mb-12`}>
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-blue-500" />
                    <select
                      value={searchForm.from}
                      onChange={(e) => handleInputChange('from', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                    >
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-red-500" />
                    <select
                      value={searchForm.to}
                      onChange={(e) => handleInputChange('to', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                    >
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    <button
                      onClick={swapLocations}
                      className="absolute right-3 top-3 text-gray-400 hover:text-blue-500 transition-colors duration-300"
                      title="Swap locations"
                    >
                      🔄
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-blue-500" />
                    <input
                      type="date"
                      value={searchForm.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-5 h-5 text-blue-500" />
                    <select
                      value={searchForm.passengers}
                      onChange={(e) => handleInputChange('passengers', parseInt(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 transform shadow-lg">
                  <Search className="w-5 h-5" />
                  <span>Search Buses</span>
                </button>
                <button className="bg-gray-100 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Filter className="w-5 h-5" />
                  <span>Advanced Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mb-8`}>
            <div className="flex flex-wrap gap-2">
              {['All Buses', 'Premium', 'AC Luxury', 'Semi Luxury', 'Express'].map((filter, index) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter.toLowerCase().replace(' ', '-'))}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.toLowerCase().replace(' ', '-')
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Routes List */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Available Routes ({routes.length} buses found)
              </h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Sort by Price</option>
                <option>Sort by Time</option>
                <option>Sort by Rating</option>
              </select>
            </div>

            {routes.map((route, index) => (
              <div
                key={route.id}
                className={`transition-all duration-700 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transform cursor-pointer overflow-hidden`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                onClick={() => setSelectedRoute(selectedRoute === route.id ? null : route.id)}
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    {/* Route Header */}
                    <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                        <Bus className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{route.operator}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">{route.busNumber}</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                          <span className="text-sm text-gray-500">{route.route}</span>
                        </div>
                      </div>
                      <div className="ml-auto lg:ml-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          route.busType === 'Premium' ? 'bg-purple-100 text-purple-700' :
                          route.busType === 'Super Luxury' ? 'bg-yellow-100 text-yellow-700' :
                          route.busType === 'AC Luxury' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {route.busType}
                        </span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-900">{route.rating}</span>
                        <span className="text-sm text-gray-500">({route.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Route & Time Info */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <div className="font-semibold text-gray-900">{route.departure}</div>
                          <div className="text-sm text-gray-500">{route.from}</div>
                        </div>
                      </div>
                      <div className="ml-6 border-l-2 border-dashed border-gray-300 h-4"></div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div>
                          <div className="font-semibold text-gray-900">{route.arrival}</div>
                          <div className="text-sm text-gray-500">{route.to}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Duration & Amenities */}
                    <div>
                      <div className="flex items-center space-x-2 text-gray-600 mb-3">
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold">{route.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {route.amenities.map((amenity, idx) => (
                          <div key={idx} className="flex items-center space-x-1 text-gray-600 bg-gray-100 px-2 py-1 rounded-full text-xs">
                            {getAmenityIcon(amenity)}
                            <span className="capitalize">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Availability */}
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Seats Available</div>
                      <div className="font-bold text-lg text-green-600">{route.seatsAvailable}/{route.totalSeats}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(route.seatsAvailable / route.totalSeats) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Price & Book */}
                    <div className="text-right">
                      <div className="mb-2">
                        {route.originalPrice > route.price && (
                          <div className="text-sm text-gray-400 line-through">Rs. {route.originalPrice}</div>
                        )}
                        <div className="text-2xl font-bold text-gray-900">Rs. {route.price}</div>
                        <div className="text-sm text-gray-500">per person</div>
                      </div>
                      <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 transform shadow-lg">
                        <span>Book Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Expanded Details */}
                  {selectedRoute === route.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200 transition-all duration-500 transform">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Boarding Points</h4>
                          <div className="space-y-2">
                            {route.stops.map((stop, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span>{stop}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Bus Features</h4>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div>• GPS Tracking</div>
                            <div>• Live Bus Location</div>
                            <div>• 24/7 Customer Support</div>
                            <div>• Insurance Coverage</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Policies</h4>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div>• Free Cancellation up to 2hrs</div>
                            <div>• Partial Refund Available</div>
                            <div>• Reschedule Allowed</div>
                            <div>• COVID-19 Safety Measures</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-white text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-lg">
              Load More Routes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSLB;