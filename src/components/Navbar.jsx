
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import {
  Smartphone,
  Menu,
  X,
  Laptop,
  Gamepad2,
  Globe,
  Home,
  Phone,
  MessageCircle,
  Monitor,
  Headphones,
} from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Mobile Software', path: '/mobile-services', icon: Smartphone },
  { name: 'Laptop / Windows', path: '/laptop-services', icon: Laptop },
  { name: 'Gaming Top-Up', path: '/gaming-topup', icon: Gamepad2 },
  { name: 'Online Accounts', path: '/online-accounts', icon: Globe },
  { name: 'Contact', path: '/contact', icon: Phone },
]

const WHATSAPP_NUMBER = '923304867243'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Assalam-o-Alaikum! I need your mobile/software services.'
  )}`

  const closeMenu = () => setMenuOpen(false)

  const linkStyle = ({ isActive }) =>
    `flex w-full min-w-0 items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 xl:w-auto xl:shrink-0 ${
      isActive
        ? 'bg-emerald-500/15 text-emerald-400'
        : 'text-gray-300 hover:bg-white/5 hover:text-emerald-400'
    }`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#081225]/95 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 xl:px-8">

        {/* MAIN NAVBAR ROW */}
        <div className="flex min-h-[76px] w-full items-center justify-between gap-4">

          {/* LOGO */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2 sm:gap-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 shadow-lg shadow-emerald-500/20 sm:h-11 sm:w-11">
              <Smartphone size={24} className="text-white" />
            </div>

            <div className="min-w-0">
              <h1 className="whitespace-nowrap text-sm font-extrabold leading-tight text-white sm:text-base lg:text-lg">
                MEHRAN
                <span className="text-emerald-400"> MOBILE</span>
              </h1>

              <p className="mt-1 whitespace-nowrap text-[9px] tracking-[1.5px] text-gray-400 sm:text-[10px] sm:tracking-[2px]">
                SOFTWARE • BANNU
              </p>
            </div>
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-x-3 gap-y-2 2xl:flex 2xl:gap-x-4">
            {navLinks.map((link) => {
              const Icon = link.icon

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={linkStyle}
                >
                  <Icon size={16} className="shrink-0" />
                  <span className="whitespace-nowrap">
                    {link.name}
                  </span>
                </NavLink>
              )
            })}
          </nav>

          {/* DESKTOP ACTION BUTTONS */}
          <div className="hidden shrink-0 items-center gap-3 2xl:flex">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-emerald-600 px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-emerald-500"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>

            <NavLink
              to="/contact"
              className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-blue-400/30 bg-blue-500/10 px-3 py-2.5 text-sm font-semibold text-blue-300 transition-colors hover:bg-blue-500/20"
            >
              <Monitor size={16} />
              Remote Support
            </NavLink>
          </div>

          {/* MOBILE / TABLET MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10 2xl:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* MOBILE / TABLET NAVIGATION */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/10 py-4 2xl:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={linkStyle}
                  >
                    <Icon size={18} className="shrink-0" />
                    <span>{link.name}</span>
                  </NavLink>
                )
              })}
            </nav>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 p-3 text-sm font-semibold transition-colors hover:bg-emerald-500"
              >
                <MessageCircle size={18} />
                WhatsApp Chat
              </a>

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 p-3 text-sm font-semibold text-blue-300 transition-colors hover:bg-blue-500/20"
              >
                <Headphones size={18} />
                Remote Support
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
