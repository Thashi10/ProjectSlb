import './App.css'
import Home from './pages/Home'
import BuyTicketsPage from './pages/BuyTickets'
import SignUp from './pages/SignUp'
import SignInPage from './pages/SignIn'
import SignupForm from './pages/SignUp'
import BusManagement from './pages/BusMang'
import BookingDashboard from './pages/BookingMan'
import AdminDashboard from './pages/admineman'
import { AmpersandIcon, BookDashed } from 'lucide-react'
import Dashboard from './pages/Adashboard'
import PassengersPage from './pages/Passengers'
import ContactUs from './pages/Contact'


function App() {

  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-tickets" element={<BuyTicketsPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignInPage />} />     
        </Routes>
      </BrowserRouter> */}

      <SignInPage/>
    </>
  )
}

export default App
