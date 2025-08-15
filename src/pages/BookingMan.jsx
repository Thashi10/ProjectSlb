import React, { useState } from 'react';
import { 
  Bus, 
  Search, 
  Filter, 
  Eye,
  Calendar,
  MapPin,
  Clock,
  Users,
  Settings,
  BarChart3,
  User,
  LogOut,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  XCircle,
  Ticket,
  CreditCard,
  Phone,
  Mail,
  Download,
  RefreshCw,
  TrendingUp
} from 'lucide-react';

const BookingDashboard = () => {
  const [bookings, setBookings] = useState([
    {
      id: 'BK001',
      passengerName: 'Amal Perera',
      email: 'amal.perera@gmail.com',
      phone: '+94 77 123 4567',
      busNumber: 'NB-1234',
      route: 'Colombo - Kandy',
      departureTime: '2024-08-15 08:00',
      seatNumbers: ['A12', 'A13'],
      totalAmount: 'LKR 1,200',
      status: 'confirmed',
      bookingDate: '2024-08-10',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'BK002',
      passengerName: 'Saman Silva',
      email: 'saman.silva@gmail.com',
      phone: '+94 71 987 6543',
      busNumber: 'NB-5678',
      route: 'Galle - Matara',
      departureTime: '2024-08-16 09:30',
      seatNumbers: ['B05'],
      totalAmount: 'LKR 800',
      status: 'pending',
      bookingDate: '2024-08-12',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 'BK003',
      passengerName: 'Kumari Fernando',
      email: 'kumari.fernando@gmail.com',
      phone: '+94 76 555 8888',
      busNumber: 'NB-9101',
      route: 'Negombo - Colombo',
      departureTime: '2024-08-15 07:15',
      seatNumbers: ['C08'],
      totalAmount: 'LKR 600',
      status: 'confirmed',
      bookingDate: '2024-08-13',
      paymentMethod: 'Digital Wallet'
    },
    {
      id: 'BK004',
      passengerName: 'Nimal Rajapakse',
      email: 'nimal.raj@gmail.com',
      phone: '+94 72 444 9999',
      busNumber: 'NB-1121',
      route: 'Colombo - Gampaha',
      departureTime: '2024-08-17 10:00',
      seatNumbers: ['D15', 'D16'],
      totalAmount: 'LKR 1,000',
      status: 'cancelled',
      bookingDate: '2024-08-11',
      paymentMethod: 'Cash'
    },
    {
      id: 'BK005',
      passengerName: 'Chamari Wickramasinghe',
      email: 'chamari.w@gmail.com',
      phone: '+94 78 222 3333',
      busNumber: 'NB-1234',
      route: 'Colombo - Kandy',
      departureTime: '2024-08-18 08:00',
      seatNumbers: ['A05'],
      totalAmount: 'LKR 600',
      status: 'confirmed',
      bookingDate: '2024-08-14',
      paymentMethod: 'Credit Card'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.passengerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.busNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.route.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || booking.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalBookings = bookings.length;
  const confirmedBookings = bookings.filter(booking => booking.status === 'confirmed').length;
  const pendingBookings = bookings.filter(booking => booking.status === 'pending').length;
  const totalRevenue = bookings
    .filter(booking => booking.status === 'confirmed')
    .reduce((sum, booking) => sum + parseFloat(booking.totalAmount.replace('LKR ', '').replace(',', '')), 0);

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
          
       
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200 hover:text-gray-900">
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">DashBoard</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200 hover:text-gray-900">
            <Bus className="w-5 h-5" />
            <span className="font-medium">Bus Management</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform transition-all duration-200 hover:scale-105">
            <Ticket className="w-5 h-5" />
            <span className="font-medium">Bookings</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200 hover:text-gray-900">
            <Users className="w-5 h-5" />
            <span className="font-medium">Passengers</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200 hover:text-gray-900">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Schedules</span>
          </a>
   

          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200 hover:text-gray-900">
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
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Management</h1>
              <p className="text-gray-600">Monitor and manage all passenger bookings</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-700 rounded-xl shadow-md hover:shadow-lg border border-gray-200 transition-all duration-200">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-700 rounded-xl shadow-md hover:shadow-lg border border-gray-200 transition-all duration-200">
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform transition-all duration-200 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Bookings</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{totalBookings}</p>
                <p className="text-sm text-green-600 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% from last month
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <Ticket className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform transition-all duration-200 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Confirmed</p>
                <p className="text-3xl font-bold text-green-600 mt-1">{confirmedBookings}</p>
                <p className="text-sm text-gray-500 mt-1">Active bookings</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform transition-all duration-200 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pending</p>
                <p className="text-3xl font-bold text-yellow-600 mt-1">{pendingBookings}</p>
                <p className="text-sm text-gray-500 mt-1">Awaiting payment</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform transition-all duration-200 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
                <p className="text-3xl font-bold text-purple-600 mt-1">LKR {totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-green-600 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +8% from last month
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by booking ID, passenger name, email, bus number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bookings List */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
            <p className="text-gray-600 mt-1">Showing {filteredBookings.length} of {totalBookings} bookings</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Booking ID</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Passenger</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Journey Details</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Seats</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Amount</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Status</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking, index) => (
                  <tr 
                    key={booking.id} 
                    className="border-t border-gray-100 hover:bg-gray-50 transition-all duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                          <Ticket className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{booking.id}</p>
                          <p className="text-sm text-gray-600">{booking.bookingDate}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{booking.passengerName}</p>
                        <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                          <Mail className="w-3 h-3" />
                          <span>{booking.email}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Phone className="w-3 h-3" />
                          <span>{booking.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{booking.busNumber}</p>
                        <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                          <MapPin className="w-3 h-3" />
                          <span>{booking.route}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Clock className="w-3 h-3" />
                          <span>{booking.departureTime}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-wrap gap-1">
                        {booking.seatNumbers.map(seat => (
                          <span key={seat} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-md">
                            {seat}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{booking.seatNumbers.length} seat{booking.seatNumbers.length > 1 ? 's' : ''}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-semibold text-gray-900">{booking.totalAmount}</p>
                      <p className="text-xs text-gray-500 mt-1">{booking.paymentMethod}</p>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                        {getStatusIcon(booking.status)}
                        <span className="capitalize">{booking.status}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => setSelectedBooking(booking)}
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Booking Details</h3>
                <button 
                  onClick={() => setSelectedBooking(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Booking Header */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Ticket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{selectedBooking.id}</h4>
                    <p className="text-sm text-gray-600">Booked on {selectedBooking.bookingDate}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedBooking.status)}`}>
                  {getStatusIcon(selectedBooking.status)}
                  <span className="capitalize">{selectedBooking.status}</span>
                </span>
              </div>

              {/* Passenger Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="font-semibold text-gray-900">Passenger Information</h5>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{selectedBooking.passengerName}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{selectedBooking.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{selectedBooking.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold text-gray-900">Journey Details</h5>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Bus className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{selectedBooking.busNumber}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{selectedBooking.route}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{selectedBooking.departureTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seat and Payment Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="font-semibold text-gray-900">Seat Information</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedBooking.seatNumbers.map(seat => (
                      <span key={seat} className="px-3 py-2 bg-blue-100 text-blue-800 font-medium rounded-lg">
                        Seat {seat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold text-gray-900">Payment Information</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Amount:</span>
                      <span className="font-semibold text-gray-900">{selectedBooking.totalAmount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Payment Method:</span>
                      <span className="text-gray-900">{selectedBooking.paymentMethod}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transform transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download Ticket</span>
                </button>
                <button className="px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200">
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingDashboard;