
import { useState } from 'react'

import {
  Smartphone,
  ShieldCheck,
  Lock,
  KeyRound,
  Cpu,
  Settings,
  Apple,
  RefreshCw,
  Search,
  Database,
  ArrowUpRight,
} from 'lucide-react'

import { mobileServices } from '../data/services'
import { brands } from '../data/brands'

const icons = {
  Smartphone,
  ShieldCheck,
  Lock,
  KeyRound,
  Cpu,
  Settings,
  Apple,
  RefreshCw,
  Search,
  Database,
}

const filters = ['All', 'Android', 'iPhone', 'All Devices']

function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredServices = mobileServices.filter((service) => {
    if (activeFilter === 'All' || activeFilter === 'All Devices') {
      return true
    }

    return service.category === activeFilter
  })

  const whatsappLink = (service) => {
    const message = `Assalam-o-Alaikum! I need information about ${service.title}.`

    return `https://wa.me/923304867243?text=${encodeURIComponent(message)}`
  }

  return (
    <section className="relative w-full min-w-0 overflow-hidden bg-[#0B172B]">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-8 w-full max-w-2xl text-center sm:mb-10 lg:mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 sm:text-sm">
            Our Expertise
          </span>

          <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
            Mobile Software{' '}
            <span className="text-emerald-400">
              Solutions
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Professional Android and iPhone software support,
            troubleshooting and device recovery services.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="mb-8 flex w-full flex-wrap items-center justify-center gap-2 sm:mb-10 sm:gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`inline-flex min-h-10 items-center justify-center rounded-xl border px-4 py-2.5 text-xs font-semibold transition-colors sm:px-5 sm:text-sm ${
                activeFilter === filter
                  ? 'border-emerald-500 bg-emerald-500 text-white'
                  : 'border-white/10 bg-white/5 text-gray-300 hover:border-emerald-400/50 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* SERVICE CARDS */}
        <div className="grid w-full min-w-0 grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredServices.map((service) => {
            const Icon = icons[service.icon] || Smartphone

            return (
              <article
                key={service.id}
                className="flex h-full min-w-0 flex-col rounded-2xl border border-white/10 bg-[#111F36] p-5 transition-colors duration-300 hover:border-emerald-400/40 sm:p-6"
              >
                {/* ICON AND CATEGORY */}
                <div className="flex w-full min-w-0 items-center justify-between gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Icon
                      size={23}
                      strokeWidth={2}
                      className="shrink-0 text-emerald-400"
                    />
                  </div>

                  <span className="max-w-[65%] rounded-full bg-emerald-500/10 px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    {service.category}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-5 w-full break-words text-base font-bold leading-6 text-white sm:text-lg">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 w-full flex-1 break-words text-sm leading-7 text-gray-400">
                  {service.description}
                </p>

                {/* SERVICE LINK */}
                <a
                  href={whatsappLink(service)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex min-h-11 w-full min-w-0 items-center justify-between gap-3 border-t border-white/10 pt-4 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  <span className="min-w-0 break-words">
                    Ask for Service
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0"
                  />
                </a>
              </article>
            )
          })}
        </div>

        {/* SUPPORTED BRANDS */}
        <div className="mt-16 w-full min-w-0 sm:mt-20 lg:mt-24">

          {/* BRAND HEADER */}
          <div className="mx-auto mb-8 w-full max-w-2xl text-center sm:mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 sm:text-sm">
              Device Compatibility
            </span>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
              Supported{' '}
              <span className="text-emerald-400">
                Brands
              </span>
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
              Software support for popular smartphone brands.
            </p>
          </div>

          {/* BRAND GRID */}
          <div className="grid w-full min-w-0 grid-cols-2 items-stretch gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex min-h-[64px] min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-[#111F36] p-3 transition-colors duration-300 hover:border-emerald-400/50 sm:min-h-[72px] sm:p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-sm font-extrabold text-emerald-400 sm:h-10 sm:w-10">
                  {brand.charAt(0)}
                </div>

                <h3 className="min-w-0 break-words text-xs font-semibold leading-5 text-gray-200 sm:text-sm">
                  {brand}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesSection
