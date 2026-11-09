
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AIChatbot from './components/AIChatbot'

import Home from './pages/Home'
import MobileServices from './pages/MobileServices'
import LaptopServices from './pages/LaptopServices'
import GamingTopUpPage from './pages/GamingTopUpPage'
import OnlineAccountsPage from './pages/OnlineAccountsPage'
import ContactPage from './pages/ContactPage'

function NotFound() {
  return (
    <section className="flex min-h-[70vh] w-full items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-6xl font-extrabold text-emerald-400 sm:text-7xl lg:text-8xl">
          404
        </h1>

        <p className="mt-4 text-lg text-gray-400 sm:text-xl">
          Page Not Found
        </p>

        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          The page you are looking for does not exist.
        </p>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-clip bg-[#081225] text-white">

      {/* Website Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="w-full min-w-0 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/mobile-services"
            element={<MobileServices />}
          />

          <Route
            path="/laptop-services"
            element={<LaptopServices />}
          />

          <Route
            path="/gaming-topup"
            element={<GamingTopUpPage />}
          />

          <Route
            path="/online-accounts"
            element={<OnlineAccountsPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Website Footer */}
      <Footer />

      {/* Floating Chatbot */}
      <AIChatbot />

    </div>
  )
}

export default App
