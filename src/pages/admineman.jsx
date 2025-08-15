import React, { useState } from 'react';
import { 
  Bus, 
  Plus,
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
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
  Shield,
  UserCheck,
  UserX,
  Mail,
  Phone,
  Key,
  Globe,
  Lock,
  Unlock,
  Crown,
  Star,
  Activity,
  Database,
  Server,
  Wifi,
  HardDrive,
  Monitor,
  Bell,
  Download
} from 'lucide-react';

const AdminDashboard = () => {
  const [admins, setAdmins] = useState([
    {
      id: 'AD001',
      name: 'John Silva',
      email: 'john.silva@projectslb.com',
      phone: '+94 77 123 4567',
      role: 'Super Admin',
      status: 'active',
      lastLogin: '2024-08-15 09:30',
      joinDate: '2024-01-15',
      permissions: ['all'],
      profileImage: null
    },
    {
      id: 'AD002',
      name: 'Sarah Perera',
      email: 'sarah.perera@projectslb.com',
      phone: '+94 71 987 6543',
      role: 'Admin',
      status: 'active',
      lastLogin: '2024-08-14 16:45',
      joinDate: '2024-03-20',
      permissions: ['bus_management', 'booking_management', 'user_management'],
      profileImage: null
    },
    {
      id: 'AD003',
      name: 'Kamal Fernando',
      email: 'kamal.fernando@projectslb.com',
      phone: '+94 76 555 8888',
      role: 'Moderator',
      status: 'active',
      lastLogin: '2024-08-15 08:15',
      joinDate: '2024-05-10',
      permissions: ['booking_management', 'customer_support'],
      profileImage: null
    },
    {
      id: 'AD004',
      name: 'Priya Wickramasinghe',
      email: 'priya.w@projectslb.com',
      phone: '+94 78 222 3333',
      role: 'Support Agent',
      status: 'inactive',
      lastLogin: '2024-08-10 14:20',
      joinDate: '2024-07-01',
      permissions: ['customer_support'],
      profileImage: null
    }
  ]);

  const [systemStats] = useState({
    totalUsers: 1245,
    activeAdmins: 3,
    totalBuses: 8,
    systemUptime: '99.9%',
    serverLoad: 45,
    databaseSize: '2.3 GB',
    dailyBookings: 127
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const getRoleColor = (role) => {
    switch (role) {
      case 'Super Admin': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Admin': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Moderator': return 'bg-green-100 text-green-800 border-green-200';
      case 'Support Agent': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Super Admin': return <Crown className="w-4 h-4" />;
      case 'Admin': return <Shield className="w-4 h-4" />;
      case 'Moderator': return <UserCheck className="w-4 h-4" />;
      case 'Support Agent': return <User className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'inactive': return 'bg-red-100 text-red-800 border-red-200';
      case 'suspended': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4" />;
      case 'inactive': return <XCircle className="w-4 h-4" />;
      case 'suspended': return <AlertCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const filteredAdmins = admins.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterRole === 'all' || admin.role === filterRole;
    return matchesSearch && matchesFilter;
  });

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl border-r border-gray-200 z-40">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
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
            <span className="font-medium">Dashboard</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform transition-all duration-200 hover:scale-105">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Admin Management</span>
          </a>

          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200 hover:text-gray-900">
            <Bus className="w-5 h-5" />
            <span className="font-medium">Bus Management</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200 hover:text-gray-900">
            <Ticket className="w-5 h-5" />
            <span className="font-medium">Bookings</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200 hover:text-gray-900">
            <Users className="w-5 h-5" />
            <span className="font-medium">Passengers</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200 hover:text-gray-900">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </a>
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-indigo-500 rounded-full flex items-center justify-center">
              <Crown className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Super Admin</p>
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Management</h1>
              <p className="text-gray-600">Manage system administrators and their permissions</p>
            </div>
            <button 
              onClick={() => setShowAddModal(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">Add New Admin</span>
            </button>
          </div>
        </div>

        {/* System Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform transition-all duration-200 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{systemStats.totalUsers}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform transition-all duration-200 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Admins</p>
                <p className="text-3xl font-bold text-green-600 mt-1">{systemStats.activeAdmins}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform transition-all duration-200 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">System Uptime</p>
                <p className="text-3xl font-bold text-purple-600 mt-1">{systemStats.systemUptime}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform transition-all duration-200 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Daily Bookings</p>
                <p className="text-3xl font-bold text-orange-600 mt-1">{systemStats.dailyBookings}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Ticket className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* System Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Server Status</h3>
              <Server className="w-6 h-6 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">CPU Usage</span>
                <span className="font-medium text-gray-900">{systemStats.serverLoad}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: `${systemStats.serverLoad}%` }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Database</h3>
              <Database className="w-6 h-6 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Storage Used</span>
                <span className="font-medium text-gray-900">{systemStats.databaseSize}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Connected</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Network Status</h3>
              <Wifi className="w-6 h-6 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Uptime</span>
                <span className="font-medium text-gray-900">{systemStats.systemUptime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Online</span>
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
                placeholder="Search admins by name, email, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div className="relative">
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              >
                <option value="all">All Roles</option>
                <option value="Super Admin">Super Admin</option>
                <option value="Admin">Admin</option>
                <option value="Moderator">Moderator</option>
                <option value="Support Agent">Support Agent</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Admin List */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">System Administrators</h3>
            <p className="text-gray-600 mt-1">Showing {filteredAdmins.length} of {admins.length} administrators</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Admin Details</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Role</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Contact</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Status</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Last Login</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAdmins.map((admin, index) => (
                  <tr 
                    key={admin.id} 
                    className="border-t border-gray-100 hover:bg-gray-50 transition-all duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-300 rounded-xl flex items-center justify-center">
                          <span className="text-white font-semibold">{getInitials(admin.name)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{admin.name}</p>
                          <p className="text-sm text-gray-600">{admin.id}</p>
                          <p className="text-xs text-gray-500">Joined {admin.joinDate}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getRoleColor(admin.role)}`}>
                        {getRoleIcon(admin.role)}
                        <span>{admin.role}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-900">{admin.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-900">{admin.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(admin.status)}`}>
                        {getStatusIcon(admin.status)}
                        <span className="capitalize">{admin.status}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900">{admin.lastLogin}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => setSelectedAdmin(admin)}
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200">
                          {admin.status === 'active' ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                        </button>
                        <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200">
                          <Trash2 className="w-4 h-4" />
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

      {/* Add Admin Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300 scale-100">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Add New Admin</h3>
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="admin@projectslb.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+94 77 123 4567"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200">
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Moderator">Moderator</option>
                  <option value="Support Agent">Support Agent</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Temporary Password</label>
                <input
                  type="password"
                  placeholder="Enter temporary password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:shadow-lg transform transition-all duration-200 hover:scale-105"
                >
                  Add Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admin Details Modal */}
      {selectedAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Admin Details</h3>
                <button 
                  onClick={() => setSelectedAdmin(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Admin Header */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{getInitials(selectedAdmin.name)}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{selectedAdmin.name}</h4>
                    <p className="text-sm text-gray-600">{selectedAdmin.id}</p>
                    <p className="text-sm text-gray-500">Member since {selectedAdmin.joinDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium border ${getRoleColor(selectedAdmin.role)}`}>
                    {getRoleIcon(selectedAdmin.role)}
                    <span>{selectedAdmin.role}</span>
                  </span>
                  <div className="mt-2">
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedAdmin.status)}`}>
                      {getStatusIcon(selectedAdmin.status)}
                      <span className="capitalize">{selectedAdmin.status}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="font-semibold text-gray-900">Contact Information</h5>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{selectedAdmin.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{selectedAdmin.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">Last login: {selectedAdmin.lastLogin}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold text-gray-900">Permissions</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedAdmin.permissions.map(permission => (
                      <span key={permission} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {permission.replace('_', ' ').toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transform transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2">
                  <Edit3 className="w-4 h-4" />
                  <span>Edit Admin</span>
                </button>
                <button className="px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2">
                  <Key className="w-4 h-4" />
                  <span>Reset Password</span>
                </button>
                <button className="px-4 py-3 border border-orange-200 text-orange-700 rounded-xl hover:bg-orange-50 transition-all duration-200 flex items-center space-x-2">
                  {selectedAdmin.status === 'active' ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                  <span>{selectedAdmin.status === 'active' ? 'Suspend' : 'Activate'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;