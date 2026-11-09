
import { Link } from 'react-router-dom'

import {
  Smartphone,
  Laptop,
  ShieldCheck,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Cpu,
} from 'lucide-react'

function Hero() {
  const phoneNumbers = ['0330 4867243', '0311 8771399']

  const whatsappLink =
    'https://wa.me/923304867243?text=' +
    encodeURIComponent('Assalam-o-Alaikum! I want to book a service.')

  return (
    <section className="relative isolate w-full min-w-0 overflow-hidden bg-[#081225]">

      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px] sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px] sm:h-80 sm:w-80" />

      {/* Main container */}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:py-24">

        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-14">

          {/* Left content */}
          <div className="w-full min-w-0">

            {/* Location */}
            <div className="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-400 sm:px-4 sm:text-sm">
              <MapPin size={16} className="shrink-0" />
              <span>Nemat Mandi, Bannu</span>
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />
            </div>

            {/* Main heading */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              MEHRAN MOBILE

              <span className="mt-2 block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                & SOFTWARE
              </span>
            </h1>

            {/* Tagline */}
            <h2 className="mt-5 text-lg font-bold leading-relaxed sm:mt-6 sm:text-2xl">
              Your Mobile Our Responsibility

              <span className="mt-2 block text-base text-emerald-400 sm:text-xl">
                ہر مسئلے کا حل — ایک ہی جگہ
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 w-full max-w-xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
              Professional mobile software solutions, laptop and
              Windows installation, gaming top-ups, digital account
              assistance and remote technical support.
            </p>

            {/* Service badges */}
            <div className="mt-6 flex w-full flex-wrap gap-2 sm:mt-7 sm:gap-2.5">
              {[
                'Mobile Software',
                'Windows Setup',
                'Gaming Top-Up',
                'Online Support',
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex max-w-full items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 sm:text-sm"
                >
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-emerald-400"
                  />
                  {item}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-500 sm:w-auto sm:px-6"
              >
                <MessageCircle size={19} />
                Book Service
                <ArrowRight size={18} />
              </a>

              <Link
                to="/gaming-topup"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 px-5 py-3 font-bold text-blue-300 transition hover:bg-blue-500/20 sm:w-auto sm:px-6"
              >
                <Cpu size={19} />
                Explore Game Top-Ups
              </Link>

            </div>

            {/* Contact numbers */}
            <div className="mt-7 grid w-full grid-cols-1 gap-2 border-t border-white/10 pt-5 sm:mt-8 sm:grid-cols-2 sm:gap-3 sm:pt-6">

              {phoneNumbers.map((number) => (
                <a
                  key={number}
                  href={`tel:${number.replace(/\s/g, '')}`}
                  className="flex min-w-0 items-center gap-3 rounded-xl p-2 text-gray-300 transition hover:bg-white/5 hover:text-emerald-400"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                    <Phone size={17} className="text-emerald-400" />
                  </span>

                  <span className="min-w-0 text-sm font-semibold">
                    {number}
                  </span>
                </a>
              ))}

            </div>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto w-full min-w-0 max-w-2xl lg:max-w-none">

            <div className="pointer-events-none absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 blur-3xl" />

            <div className="relative w-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#14233F] to-[#0B162B] p-4 shadow-2xl sm:p-6 md:p-7 lg:p-6 xl:p-8">

              {/* Card heading */}
              <div className="mb-6 flex items-center justify-between gap-3 sm:mb-8">

                <div className="min-w-0">
                  <p className="text-xs tracking-widest text-gray-400">
                    MEHRAN TECHNOLOGY
                  </p>

                  <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                    Smart Solutions
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 sm:h-12 sm:w-12">
                  <ShieldCheck size={26} className="text-emerald-400" />
                </div>

              </div>

              {/* Device cards */}
              <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">

                <div className="flex min-w-0 flex-col rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-400/40 sm:p-5">

                  <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 sm:mb-5 sm:h-14 sm:w-14">
                    <Smartphone size={28} className="text-emerald-400" />
                  </div>

                  <h4 className="font-bold text-white">
                    Mobile Services
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-gray-400">
                    Software & device support
                  </p>

                </div>

                <div className="flex min-w-0 flex-col rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-blue-400/40 sm:p-5">

                  <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 sm:mb-5 sm:h-14 sm:w-14">
                    <Laptop size={28} className="text-blue-400" />
                  </div>

                  <h4 className="font-bold text-white">
                    Computer Setup
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-gray-400">
                    Windows & applications
                  </p>

                </div>

              </div>

              {/* Bottom status */}
              <div className="mt-4 flex min-w-0 items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 sm:mt-5 sm:gap-4 sm:p-5">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500">
                  <ShieldCheck size={23} className="text-white" />
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm font-bold leading-6 text-emerald-400 sm:text-base">
                    Professional Technical Support
                  </h4>

                  <p className="mt-1 text-xs text-gray-400">
                    Local & remote assistance
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
