import React, { useState } from 'react';
import { 
  Bus, 
  Users,
  Ticket,
  TrendingUp,
  TrendingDown,
  Calendar,
  MapPin,
  Clock,
  Settings,
  BarChart3,
  User,
  LogOut,
  Bell,
  Search,
  Filter,
  Eye,
  AlertCircle,
  CheckCircle,
  XCircle,
  CreditCard,
  Star,
  ArrowUp,
  ArrowDown,
  MoreVertical,
  Activity,
  DollarSign
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');

  // Sample data for charts
  const revenueData = [
    { name: 'Jan', revenue: 45000, bookings: 234 },
    { name: 'Feb', revenue: 52000, bookings: 278 },
    { name: 'Mar', revenue: 48000, bookings: 256 },
    { name: 'Apr', revenue: 61000, bookings: 321 },
    { name: 'May', revenue: 55000, bookings: 289 },
    { name: 'Jun', revenue: 67000, bookings: 356 },
    { name: 'Jul', revenue: 72000, bookings: 398 }
  ];

  const dailyBookingsData = [
    { time: '6AM', bookings: 12 },
    { time: '9AM', bookings: 34 },
    { time: '12PM', bookings: 28 },
    { time: '3PM', bookings: 41 },
    { time: '6PM', bookings: 52 },
    { time: '9PM', bookings: 23 }
  ];

  const routeData = [
    { name: 'Colombo-Kandy', value: 35, color: '#3B82F6' },
    { name: 'Galle-Matara', value: 25, color: '#10B981' },
    { name: 'Negombo-Colombo', value: 20, color: '#F59E0B' },
    { name: 'Colombo-Gampaha', value: 20, color: '#EF4444' }
  ];

  const recentBookings = [
    {
      id: 'BK001',
      passenger: 'Amal Perera',
      route: 'Colombo - Kandy',
      time: '2 minutes ago',
      amount: 'LKR 1,200',
      status: 'confirmed'
    },
    {
      id: 'BK002',
      passenger: 'Saman Silva',
      route: 'Galle - Matara',
      time: '5 minutes ago',
      amount: 'LKR 800',
      status: 'pending'
    },
    {
      id: 'BK003',
      passenger: 'Kumari Fernando',
      route: 'Negombo - Colombo',
      time: '8 minutes ago',
      amount: 'LKR 600',
      status: 'confirmed'
    },
    {
      id: 'BK004',
      passenger: 'Nimal Raj',
      route: 'Colombo - Gampaha',
      time: '12 minutes ago',
      amount: 'LKR 450',
      status: 'cancelled'
    }
  ];

  const busStatus = [
    { id: 'NB-1234', route: 'Colombo - Kandy', status: 'active', occupancy: 85 },
    { id: 'NB-5678', route: 'Galle - Matara', status: 'active', occupancy: 67 },
    { id: 'NB-9101', route: 'Negombo - Colombo', status: 'maintenance', occupancy: 0 },
    { id: 'NB-1121', route: 'Colombo - Gampaha', status: 'active', occupancy: 92 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'maintenance': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl border-r border-gray-200 z-40">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Bus className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ProjectSLB</h1>
              <p className="text-sm text-gray-500">Admin Panel</p>
            </div>
          </div>
        </div>
        
        <nav className="p-4 space-y-2">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Navigation
          </div>
          
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg">
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200">
            <Bus className="w-5 h-5" />
            <span className="font-medium">Bus Management</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200">
            <Ticket className="w-5 h-5" />
            <span className="font-medium">Bookings</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200">
            <Users className="w-5 h-5" />
            <span className="font-medium">Passengers</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Schedules</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </a>
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Administrator</p>
              <p className="text-xs text-gray-500">admin@projectslb.com</p>
            </div>
            <LogOut className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors duration-200" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Navigation */}
        <div className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
              <p className="text-gray-600">Welcome back, Administrator</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="p-8">
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center text-green-600 text-sm">
                  <ArrowUp className="w-4 h-4 mr-1" />
                  12.5%
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">LKR 2.4M</p>
                <p className="text-sm text-gray-500 mt-1">+LKR 280K from last month</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Ticket className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center text-green-600 text-sm">
                  <ArrowUp className="w-4 h-4 mr-1" />
                  8.2%
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Bookings</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">1,847</p>
                <p className="text-sm text-gray-500 mt-1">+156 from last month</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center text-green-600 text-sm">
                  <ArrowUp className="w-4 h-4 mr-1" />
                  15.3%
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Passengers</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">1,234</p>
                <p className="text-sm text-gray-500 mt-1">+189 new this month</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Bus className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center text-red-600 text-sm">
                  <ArrowDown className="w-4 h-4 mr-1" />
                  2.1%
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Buses</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">28</p>
                <p className="text-sm text-gray-500 mt-1">2 in maintenance</p>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Revenue Chart */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Trends</h3>
                  <p className="text-sm text-gray-600">Monthly revenue and booking trends</p>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                    <YAxis stroke="#64748b" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: 'none', 
                        borderRadius: '12px', 
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)' 
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#revenueGradient)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Daily Bookings Chart */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Daily Booking Pattern</h3>
                  <p className="text-sm text-gray-600">Bookings by time of day</p>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dailyBookingsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
                    <YAxis stroke="#64748b" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: 'none', 
                        borderRadius: '12px', 
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)' 
                      }} 
                    />
                    <Bar 
                      dataKey="bookings" 
                      fill="#10B981"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Popular Routes */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Popular Routes</h3>
                  <p className="text-sm text-gray-600">Most booked routes</p>
                </div>
              </div>
              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={routeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {routeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {routeData.map((route, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: route.color }}
                      ></div>
                      <span className="text-sm text-gray-700">{route.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{route.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
                  <p className="text-sm text-gray-600">Latest booking activity</p>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentBookings.map((booking, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-all duration-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <Ticket className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{booking.passenger}</p>
                        <p className="text-xs text-gray-600">{booking.route}</p>
                        <p className="text-xs text-gray-500">{booking.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{booking.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bus Status */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Bus Fleet Status</h3>
                  <p className="text-sm text-gray-600">Real-time bus monitoring</p>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {busStatus.map((bus, index) => (
                  <div key={index} className="p-4 border border-gray-100 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Bus className="w-4 h-4 text-gray-600" />
                        <span className="font-medium text-gray-900">{bus.id}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(bus.status)}`}>
                        {bus.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{bus.route}</p>
                    {bus.status === 'active' && (
                      <div>
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Occupancy</span>
                          <span>{bus.occupancy}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500" 
                            style={{ width: `${bus.occupancy}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;