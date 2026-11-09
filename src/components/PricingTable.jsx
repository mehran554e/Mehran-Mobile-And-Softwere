
import { CheckCircle2, MessageCircle, Tag } from 'lucide-react'
import { prices } from '../data/prices'

function PricingTable() {
  const whatsappLink = (item) => {
    const message = `Assalamualaikum! I want information about ${item.service}. Listed price: PKR ${item.price}.`

    return `https://wa.me/923304867243?text=${encodeURIComponent(message)}`
  }

  return (
    <section className="w-full min-w-0 overflow-hidden bg-[#081225] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full min-w-0 max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-9 w-full max-w-2xl text-center sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 sm:text-sm">
            Affordable Pricing
          </span>

          <h2 className="mt-3 break-words text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Our <span className="text-emerald-400">Service Prices</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Professional services at transparent and affordable prices.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {prices.map((item) => (
            <article
              key={item.id}
              className="group flex h-full min-w-0 flex-col rounded-2xl border border-white/10 bg-[#101D32] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 sm:p-6 lg:p-7"
            >
              {/* CATEGORY */}
              <div className="flex min-w-0 items-center justify-between gap-3">
                <span className="max-w-[75%] break-words rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                  {item.category}
                </span>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Tag size={20} className="text-emerald-400" />
                </div>
              </div>

              {/* SERVICE TITLE */}
              <h3 className="mt-5 break-words text-lg font-bold leading-7 text-white sm:text-xl">
                {item.service}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 flex-1 break-words text-sm leading-7 text-gray-400">
                {item.description}
              </p>

              {/* PRICE */}
              <div className="my-5 border-y border-white/10 py-5 sm:my-6">
                <span className="block text-xs font-medium uppercase tracking-wider text-gray-500">
                  Service Price
                </span>

                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  <span className="break-all text-3xl font-extrabold tabular-nums text-white sm:text-4xl">
                    {Number(item.price).toLocaleString('en-PK')}
                  </span>

                  <span className="text-sm font-semibold text-emerald-400">
                    PKR
                  </span>
                </div>
              </div>

              {/* PRICE NOTICE */}
              <div className="mb-5 flex items-start gap-2 text-xs leading-5 text-gray-400 sm:mb-6 sm:text-sm">
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />

                <span>
                  Final price is subject to service confirmation.
                </span>
              </div>

              {/* WHATSAPP BUTTON */}
              <a
                href={whatsappLink(item)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-center text-sm font-bold text-white transition-all duration-200 hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                <MessageCircle size={18} className="shrink-0" />
                <span>Ask About Service</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PricingTable
