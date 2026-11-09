
import { Link } from 'react-router-dom'
import {
  MapPin,
  Phone,
  MessageCircle,
  Smartphone,
  ArrowUpRight,
} from 'lucide-react'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Mobile Services', path: '/mobile-services' },
  { name: 'Laptop & Windows', path: '/laptop-services' },
  { name: 'Gaming Top-Up', path: '/gaming-topup' },
  { name: 'Online Accounts', path: '/online-accounts' },
  { name: 'Contact Us', path: '/contact' },
]

const services = [
  'Mobile Software Solutions',
  'Android & iPhone Support',
  'Windows Installation',
  'Laptop & Computer Setup',
  'PUBG & Free Fire Top-Up',
  'Remote Technical Support',
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full overflow-hidden border-t border-white/10 bg-[#050C19] pt-12 sm:pt-14 lg:pt-16">

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* FOOTER MAIN GRID */}
        <div className="grid min-w-0 grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* SHOP INFORMATION */}
          <div className="min-w-0">

            <h2 className="text-2xl font-extrabold tracking-tight text-white">
              MEHRAN <span className="text-emerald-400">MOBILE</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Mehran Mobile & Software provides mobile software,
              laptop setup, gaming top-ups and online support
              services in Bannu.
            </p>

            <div className="mt-5 flex items-start gap-3 text-emerald-400">

              <Smartphone size={21} className="mt-0.5 shrink-0" />

              <span className="text-sm font-semibold leading-6">
                Your Mobile, Our Responsibility
              </span>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div className="min-w-0">

            <h3 className="mb-5 text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-3">

              {quickLinks.map((link) => (
                <li key={link.path}>

                  <Link
                    to={link.path}
                    className="inline-flex items-center text-sm text-gray-400 transition-colors hover:text-emerald-400"
                  >
                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* OUR SERVICES */}
          <div className="min-w-0">

            <h3 className="mb-5 text-lg font-bold text-white">
              Our Services
            </h3>

            <ul className="flex flex-col gap-3">

              {services.map((service) => (
                <li
                  key={service}
                  className="break-words text-sm leading-6 text-gray-400"
                >
                  {service}
                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT INFORMATION */}
          <div className="min-w-0">

            <h3 className="mb-5 text-lg font-bold text-white">
              Contact Information
            </h3>

            {/* ADDRESS */}
            <div className="mb-5 flex items-start gap-3 text-sm leading-6 text-gray-400">

              <MapPin size={20} className="mt-0.5 shrink-0 text-emerald-400" />

              <span>
                Nemat Mandi, Bannu, Pakistan
              </span>

            </div>

            {/* PHONE 1 */}
            <a
              href="tel:+923304867243"
              className="mb-4 flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-emerald-400"
            >

              <Phone size={19} className="shrink-0 text-emerald-400" />

              <span>0330 4867243</span>

            </a>

            {/* PHONE 2 */}
            <a
              href="tel:+923118771399"
              className="mb-5 flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-emerald-400"
            >

              <Phone size={19} className="shrink-0 text-emerald-400" />

              <span>0311 8771399</span>

            </a>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/923304867243"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-600 sm:w-auto"
            >

              <MessageCircle size={19} />

              WhatsApp Us

              <ArrowUpRight size={17} />

            </a>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center sm:mt-12 md:flex-row md:text-left">

          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {currentYear} Mehran Mobile & Software. All rights reserved.
          </p>

          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            Designed with care in Bannu, Pakistan.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer
