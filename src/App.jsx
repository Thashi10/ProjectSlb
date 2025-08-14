import './App.css'
import Home from './pages/Home'
import BuyTicketsPage from './pages/BuyTickets'
import SignUp from './pages/SignUp'
import SignInPage from './pages/SignIn'

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
