import React, { useState } from 'react';
import { 
  Bus, 
  Users, 
  Calendar, 
  BarChart3, 
  Settings, 
  Search, 
  Download, 
  RefreshCw, 
  Eye,
  Edit,
  Trash2,
  Plus,
  Filter,
  Mail,
  Phone,
  MapPin,
  Star,

  CreditCard,
  TrendingUp,
  UserPlus,
  Menu,
  X,
  ChevronDown,
  Shield,
  MoreHorizontal
} from 'lucide-react';

const PassengersPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All Passengers');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const stats = [
    {
      title: 'Total Passengers',
      value: '1,247',
      change: '+15% from last month',
      positive: true,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active This Month',
      value: '324',
      subtitle: 'Regular travelers',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'New Registrations',
      value: '89',
      subtitle: 'This month',
      icon: UserPlus,
      color: 'purple'
    },
    {
      title: 'VIP Members',
      value: '156',
      change: '+8% from last month',
      positive: true,
      icon: Star,
      color: 'orange'
    }
  ];

  const passengers = [
    {
      id: 'P001',
      name: 'Amal Perera',
      email: 'amal.perera@gmail.com',
      phone: '+94 77 123 4567',
      address: 'Colombo 03, Western Province',
      joinDate: '2024-01-15',
      totalBookings: 24,
      totalSpent: 28800,
      lastBooking: '2024-08-10',
      status: 'Active',
      membershipLevel: 'Gold',
      avatar: null,
      rating: 4.8
    },
    {
      id: 'P002',
      name: 'Kumari Fernando',
      email: 'kumari.fernando@gmail.com',
      phone: '+94 76 555 8888',
      address: 'Negombo, Western Province',
      joinDate: '2023-11-20',
      totalBookings: 45,
      totalSpent: 54000,
      lastBooking: '2024-08-13',
      status: 'Active',
      membershipLevel: 'Platinum',
      avatar: null,
      rating: 4.9
    },
    {
      id: 'P003',
      name: 'Saman Silva',
      email: 'saman.silva@gmail.com',
      phone: '+94 71 987 6543',
      address: 'Galle, Southern Province',
      joinDate: '2024-03-08',
      totalBookings: 12,
      totalSpent: 9600,
      lastBooking: '2024-08-12',
      status: 'Active',
      membershipLevel: 'Silver',
      avatar: null,
      rating: 4.5
    },
    {
      id: 'P004',
      name: 'Nimal Rajapakse',
      email: 'nimal.raj@gmail.com',
      phone: '+94 72 444 9999',
      address: 'Gampaha, Western Province',
      joinDate: '2023-09-12',
      totalBookings: 8,
      totalSpent: 8000,
      lastBooking: '2024-07-25',
      status: 'Inactive',
      membershipLevel: 'Bronze',
      avatar: null,
      rating: 4.2
    },
    {
      id: 'P005',
      name: 'Chamari Wickramasinghe',
      email: 'chamari.w@gmail.com',
      phone: '+94 78 222 3333',
      address: 'Kandy, Central Province',
      joinDate: '2024-02-28',
      totalBookings: 18,
      totalSpent: 21600,
      lastBooking: '2024-08-14',
      status: 'Active',
      membershipLevel: 'Gold',
      avatar: null,
      rating: 4.7
    },
    {
      id: 'P006',
      name: 'Pradeep Rathnayake',
      email: 'pradeep.r@gmail.com',
      phone: '+94 75 111 2222',
      address: 'Matara, Southern Province',
      joinDate: '2024-04-05',
      totalBookings: 6,
      totalSpent: 4800,
      lastBooking: '2024-08-08',
      status: 'Active',
      membershipLevel: 'Bronze',
      avatar: null,
      rating: 4.3
    }
  ];

  const navItems = [
    { name: 'Bus Management', icon: Bus, active: false },
    { name: 'Bookings', icon: Calendar, active: false },
    { name: 'Passengers', icon: Users, active: true },
    { name: 'Schedules', icon: Calendar, active: false },
    { name: 'Analytics', icon: BarChart3, active: false },
    { name: 'Settings', icon: Settings, active: false }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMembershipColor = (level) => {
    switch (level) {
      case 'Platinum': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Gold': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Silver': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Bronze': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatColor = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      purple: 'from-purple-500 to-purple-600'
    };
    return colors[color] || colors.blue;
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatCurrency = (amount) => {
    return `LKR ${amount.toLocaleString()}`;
  };

  const filteredPassengers = passengers.filter(passenger => 
    passenger.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    passenger.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    passenger.phone.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed  inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-69 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Bus className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">ProjectSLB</h1>
              <p className="text-xs text-gray-500">Admin Panel</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="mt-6 px-3">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className={`flex items-center space-x-3 px-3 py-3 rounded-lg mb-1 transition-all duration-200 cursor-pointer group ${
                  item.active
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Icon className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${
                  item.active ? 'text-blue-600' : ''
                }`} />
                <span className="font-medium">{item.name}</span>
              </div>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Administrator</h3>
                <p className="text-xs text-gray-500">admin@projectslb.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 flex-1">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                >
                  <Menu className="w-5 h-5" />
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">Passenger Management</h1>
                  <p className="text-gray-600">Manage and monitor passenger information and activities</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Passenger</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getStatColor(stat.color)} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{stat.value}</h3>
                    <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
                    {stat.subtitle && (
                      <p className="text-xs text-gray-500">{stat.subtitle}</p>
                    )}
                    {stat.change && (
                      <p className={`text-xs ${stat.positive ? 'text-green-600' : 'text-red-600'} flex items-center mt-2`}>
                        {stat.change}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by name, email, or phone number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <select 
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option>All Passengers</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>VIP Members</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Passengers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPassengers.map((passenger, index) => (
              <div
                key={passenger.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {getInitials(passenger.name)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{passenger.name}</h3>
                      <p className="text-xs text-gray-500">{passenger.id}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <button className="p-1 hover:bg-gray-100 rounded-md transition-colors duration-200">
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Status and Membership */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(passenger.status)}`}>
                    {passenger.status}
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getMembershipColor(passenger.membershipLevel)}`}>
                    {passenger.membershipLevel}
                  </span>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{passenger.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{passenger.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="truncate">{passenger.address}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">{passenger.totalBookings}</div>
                    <div className="text-xs text-gray-500">Total Bookings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">{formatCurrency(passenger.totalSpent)}</div>
                    <div className="text-xs text-gray-500">Total Spent</div>
                  </div>
                </div>

                {/* Rating and Join Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{passenger.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>Joined {passenger.joinDate}</span>
                  </div>
                </div>

                {/* Last Booking */}
                <div className="text-xs text-gray-500 mb-4">
                  Last booking: {passenger.lastBooking}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">View</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105">
                    <Edit className="w-4 h-4" />
                    <span className="text-sm">Edit</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-8">
            <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105">
              <RefreshCw className="w-4 h-4" />
              <span>Load More Passengers</span>
            </button>
          </div>
        </div>
      </div>

      {/* Add Passenger Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6 transform transition-all duration-300 scale-95 hover:scale-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Add New Passenger</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-1 hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <textarea
                placeholder="Address"
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              ></textarea>
              <div className="flex items-center space-x-3 pt-4">
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105">
                  Add Passenger
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengersPage;