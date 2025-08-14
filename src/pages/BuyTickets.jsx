import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Users, User, UserPlus, Phone, Globe, Plus, Minus, ChevronDown, Bus } from 'lucide-react';

export default function BuyTicketsPage() {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [travelDate, setTravelDate] = useState('2025-08-14');
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [selectedClass, setSelectedClass] = useState('third');
  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false);
  const [addReturnTrip, setAddReturnTrip] = useState(false);
  const [returnDate, setReturnDate] = useState('');

  const stations = [
    'Colombo Fort',
    'Colombo Central',
    'Kandy',
    'Galle',
    'Matara',
    'Anuradhapura',
    'Jaffna',
    'Negombo',
    'Kurunegala',
    'Ratnapura',
    'Badulla',
    'Trincomalee'
  ];

  const handleAdultChange = (operation) => {
    if (operation === 'increase') {
      setAdultCount(prev => Math.min(prev + 1, 8));
    } else {
      setAdultCount(prev => Math.max(prev - 1, 1));
    }
  };

  const handleChildChange = (operation) => {
    if (operation === 'increase') {
      setChildCount(prev => Math.min(prev + 1, 8));
    } else {
      setChildCount(prev => Math.max(prev - 1, 0));
    }
  };

  const calculateTotal = () => {
    const basePrice = selectedClass === 'second' ? 150 : 100;
    const adultTotal = adultCount * basePrice;
    const childTotal = childCount * (basePrice * 0.5);
    return adultTotal + childTotal;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100">
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
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Buy Tickets</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact Us</a>
            </div>

            {/* Right Menu */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">Call Us</span>
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Sign in
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Sign up
              </button>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-600" />
                <select className="bg-transparent text-gray-600 border-none focus:outline-none font-medium">
                  <option>English</option>
                  <option>සිංහල</option>
                  <option>தமிழ்</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-8 py-6">
            <div className="flex items-center space-x-4 text-white">
              <button className="hover:bg-white/10 p-2 rounded-lg transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold">Buy Bus Tickets</h1>
            </div>

            {/* Route Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* From Station */}
              <div className="relative">
                <button
                  onClick={() => setIsFromDropdownOpen(!isFromDropdownOpen)}
                  className="w-full bg-blue-800/50 backdrop-blur-sm border border-blue-700 rounded-lg px-4 py-4 text-left text-white hover:bg-blue-700/50 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-300" />
                    <div>
                      <div className="text-sm text-blue-300">From:</div>
                      <div className="font-medium">
                        {fromStation || 'Select Station'}
                      </div>
                    </div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-blue-300" />
                </button>

                {isFromDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-10 max-h-60 overflow-y-auto">
                    {stations.map((station, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setFromStation(station);
                          setIsFromDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {station}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* To Station */}
              <div className="relative">
                <button
                  onClick={() => setIsToDropdownOpen(!isToDropdownOpen)}
                  className="w-full bg-blue-800/50 backdrop-blur-sm border border-blue-700 rounded-lg px-4 py-4 text-left text-white hover:bg-blue-700/50 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-300" />
                    <div>
                      <div className="text-sm text-blue-300">To:</div>
                      <div className="font-medium">
                        {toStation || 'Select Station'}
                      </div>
                    </div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-blue-300" />
                </button>

                {isToDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-10 max-h-60 overflow-y-auto">
                    {stations.map((station, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setToStation(station);
                          setIsToDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {station}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8 space-y-8">
            {/* Service Class */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Class:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedClass('second')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedClass === 'second'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300'
                  } flex items-center justify-between`}
                >
                  <span className="font-medium">Second Class</span>
                  <div className={`w-5 h-5 rounded-full border-2 ${
                    selectedClass === 'second'
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedClass === 'second' && (
                      <div className="w-3 h-3 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                </button>

                <button
                  onClick={() => setSelectedClass('third')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedClass === 'third'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300'
                  } flex items-center justify-between`}
                >
                  <span className="font-medium">Third Class</span>
                  <div className={`w-5 h-5 rounded-full border-2 ${
                    selectedClass === 'third'
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedClass === 'third' && (
                      <div className="w-3 h-3 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3 italic">
                Please note that e-tickets issued for bus services are not valid for use on intercity buses.
              </p>
            </div>

            {/* Travel Date */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Travel Date:</h3>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Passengers */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Passengers:</h3>
              <div className="space-y-4">
                {/* Adults */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <User className="w-6 h-6 text-gray-600" />
                    <span className="font-medium text-gray-900">{adultCount} Adult{adultCount !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleAdultChange('decrease')}
                      disabled={adultCount <= 1}
                      className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-semibold">{adultCount}</span>
                    <button
                      onClick={() => handleAdultChange('increase')}
                      disabled={adultCount >= 8}
                      className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <UserPlus className="w-6 h-6 text-gray-600" />
                    <span className="font-medium text-gray-900">{childCount} Child{childCount !== 1 ? 'ren' : ''}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleChildChange('decrease')}
                      disabled={childCount <= 0}
                      className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-semibold">{childCount}</span>
                    <button
                      onClick={() => handleChildChange('increase')}
                      disabled={childCount >= 8}
                      className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Return Trip */}
            <div className="border-t border-gray-200 pt-6">
              <button
                onClick={() => setAddReturnTrip(!addReturnTrip)}
                className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span className="font-medium">Add Return Trip</span>
              </button>

              {addReturnTrip && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Return Journey:</h4>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      min={travelDate}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Return Date"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Pay Button */}
            <div className="border-t border-gray-200 pt-6">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold text-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                Pay | LKR {calculateTotal().toFixed(2)}
              </button>
              <p className="text-center text-sm text-gray-500 mt-3">
                Secure payment • Instant confirmation • Digital tickets
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">
            Need help? <a href="#" className="text-blue-600 hover:underline font-medium">Contact our support team</a>
          </p>
          <p className="text-sm text-gray-500">
            Available 24/7 • +94 11 234 5678 • support@projectslb.lk
          </p>
        </div>
      </div>
    </div>
  );
}