import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Bus, 
  Eye, 
  EyeOff, 
  Phone, 
  Mail, 
  User, 
  Calendar, 
  MapPin, 
  Camera,
  Upload,
  Check,
  Globe,
  CreditCard,
  Flag
} from 'lucide-react';

const SignupForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [nationality, setNationality] = useState('sri-lankan');
  const [idType, setIdType] = useState('nic');
  const [contactMethod, setContactMethod] = useState('phone');
  const [gender, setGender] = useState('');
  const [formData, setFormData] = useState({
    nicNumber: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    email: '',
    title: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    country: 'Sri Lanka'
  });

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  const stepTitles = [
    'Sign Up',
    'Setup Password',
    'Contact Information',
    'Personal Details',
    'Add Personal Details',
    'Add Identification Details'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const ProgressBar = () => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">Step {currentStep} of {totalSteps}</span>
        <span className="text-sm font-medium text-blue-600">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );

  const FormContainer = ({ children }) => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bus className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ProjectSlb
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">Home</button>
              <button className="text-gray-600 hover:text-gray-900">Buy Tickets</button>
              <button className="text-gray-600 hover:text-gray-900">Contact Us</button>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </button>
              <button className="text-blue-600 hover:text-blue-700">Sign in</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md mt-20">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4">
            <div className="flex items-center space-x-3 text-white">
              <button onClick={prevStep} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-semibold">{stepTitles[currentStep - 1]}</h2>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <ProgressBar />
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  // Step 1: NIC/Passport
  const Step1 = () => (
    <FormContainer>
      <div className="space-y-6">
        <p className="text-gray-600">
          Please enter your NIC or Passport number that will be used to sign in to your profile.
        </p>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Nationality:</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setNationality('sri-lankan')}
              className={`flex items-center justify-center space-x-2 p-3 rounded-xl border-2 transition-all ${
                nationality === 'sri-lankan'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Flag className="w-4 h-4" />
              <span>Sri Lankan</span>
              {nationality === 'sri-lankan' && <Check className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setNationality('foreign')}
              className={`flex items-center justify-center space-x-2 p-3 rounded-xl border-2 transition-all ${
                nationality === 'foreign'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Foreign</span>
              {nationality === 'foreign' && <Check className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">ID Type:</label>
          <button
            onClick={() => setIdType('nic')}
            className="w-full flex items-center justify-center space-x-2 p-3 rounded-xl border-2 border-blue-500 bg-blue-50 text-blue-700"
          >
            <CreditCard className="w-4 h-4" />
            <span>NIC</span>
            <Check className="w-4 h-4" />
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            NIC Number* :
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Eg: 990811711V or 200019806512"
              value={formData.nicNumber}
              onChange={(e) => handleInputChange('nicNumber', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
            <User className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-xl">
          <input type="checkbox" className="rounded" />
          <span className="text-sm text-gray-700">
            I confirm that I have read, understood and agree to the{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
          </span>
        </div>

        <p className="text-center text-sm text-gray-600">
          Have a profile?{' '}
          <a href="#" className="text-blue-600 hover:underline">Click here to Sign In</a>
        </p>

        <button
          onClick={nextStep}
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-xl transition-colors font-medium"
        >
          Next
        </button>
      </div>
    </FormContainer>
  );

  // Step 2: Password Setup
  const Step2 = () => (
    <FormContainer>
      <div className="space-y-6">
        <p className="text-gray-600">
          Please create a password containing a minimum of 6 characters, including both letters and numbers.
        </p>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password* :
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password* :
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Re-enter Password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pr-12"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <button
          onClick={nextStep}
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-xl transition-colors font-medium"
        >
          Next
        </button>
      </div>
    </FormContainer>
  );

  // Step 3: Contact Information
  const Step3 = () => (
    <FormContainer>
      <div className="space-y-6">
        <p className="text-gray-600">
          Add your contact details which will be used to send notifications on your transactions.
        </p>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Contact Information:</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setContactMethod('phone')}
              className={`flex items-center justify-center space-x-2 p-3 rounded-xl border-2 transition-all ${
                contactMethod === 'phone'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Phone</span>
              {contactMethod === 'phone' && <Check className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setContactMethod('email')}
              className={`flex items-center justify-center space-x-2 p-3 rounded-xl border-2 transition-all ${
                contactMethod === 'email'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
              {contactMethod === 'email' && <Check className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Phone* :
          </label>
          <div className="flex space-x-2">
            <select className="px-3 py-3 border border-gray-300 rounded-xl bg-gray-50">
              <option>+94</option>
            </select>
            <input
              type="text"
              placeholder="Eg: 7123123"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <button
          onClick={nextStep}
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-xl transition-colors font-medium"
        >
          Next
        </button>
      </div>
    </FormContainer>
  );

  // Step 4: Personal Details (Title/Name)
  const Step4 = () => (
    <FormContainer>
      <div className="space-y-6">
        <p className="text-gray-600">
          Please add your name, gender and date of birth.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title* :
            </label>
            <select 
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="">Select</option>
              <option value="mr">Mr.</option>
              <option value="mrs">Mrs.</option>
              <option value="ms">Ms.</option>
              <option value="dr">Dr.</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name* :
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Add First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
              <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name* :
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Add Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
            <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender:
          </label>
          <div className="relative">
            <select 
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth:
          </label>
          <div className="relative">
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
            <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
          </div>
          <p className="text-xs text-gray-500 mt-1">Minimum age limit is 16 years</p>
        </div>

        <button
          onClick={nextStep}
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-xl transition-colors font-medium"
        >
          Next
        </button>
      </div>
    </FormContainer>
  );

  // Step 5: Identification Details
  const Step5 = () => (
    <FormContainer>
      <div className="space-y-6">
        <p className="text-gray-600">
          Please upload your identification details. This option can be skipped and filled out later.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Address Section */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Address:</label>
            
            <input
              type="text"
              placeholder="Address Line 1"
              value={formData.addressLine1}
              onChange={(e) => handleInputChange('addressLine1', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
            
            <input
              type="text"
              placeholder="Address Line 2"
              value={formData.addressLine2}
              onChange={(e) => handleInputChange('addressLine2', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
            
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Type City"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
              <input
                type="text"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={(e) => handleInputChange('postalCode', e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            
            <select 
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-100"
            >
              <option>Sri Lanka</option>
            </select>
          </div>

          {/* Upload Section */}
          <div className="space-y-4">
            {/* Profile Picture */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture* :</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-blue-600 font-medium">Tap to upload a Photo</p>
                <p className="text-xs text-gray-500 mt-1">Use your camera or upload from your gallery.</p>
              </div>
            </div>

            {/* NIC Front */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">NIC Picture* : (Front)</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-blue-600 font-medium">Tap to upload a Photo</p>
                <p className="text-xs text-gray-500 mt-1">Use your camera or upload from your gallery.</p>
              </div>
            </div>

            {/* NIC Back */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">NIC Picture* : (Back)</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-blue-600 font-medium">Tap to upload a Photo</p>
                <p className="text-xs text-gray-500 mt-1">Use your camera or upload from your gallery.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={nextStep}
            className="flex-1 bg-white hover:bg-gray-50 text-gray-700 py-3 rounded-xl transition-colors font-medium border-2 border-gray-300"
          >
            Skip Step
          </button>
          <button
            onClick={nextStep}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-xl transition-colors font-medium"
          >
            Next
          </button>
        </div>
      </div>
    </FormContainer>
  );

  // Step 6: Completion
  const Step6 = () => (
    <FormContainer>
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Complete!</h3>
          <p className="text-gray-600">
            Welcome to ProjectSlb! Your account has been successfully created.
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-4">
          <p className="text-blue-800 text-sm">
            You can now start booking bus tickets and managing your season passes.
          </p>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl transition-all font-medium transform hover:scale-105">
          Go to Dashboard
        </button>
      </div>
    </FormContainer>
  );

  const steps = [Step1, Step2, Step3, Step4, Step5, Step6];
  const CurrentStepComponent = steps[currentStep - 1];

  return <CurrentStepComponent />;
};

export default SignupForm;