
import { Gamepad2, Zap, ShoppingCart, Crown } from 'lucide-react'

const games = [
  {
    name: 'Free Fire',
    subtitle: 'Diamonds Packages',
    icon: Zap,
    color: 'from-orange-500 to-red-600',
    packages: [
      { name: '35 Diamonds', price: 70 },
      { name: '70 Diamonds', price: 120 },
      { name: '140 Diamonds', price: 240 },
      { name: '355 Diamonds', price: 600 },
      { name: '713 Diamonds', price: 1200 },
    ],
  },
  {
    name: 'PUBG Mobile',
    subtitle: 'UC Packages',
    icon: Gamepad2,
    color: 'from-yellow-500 to-orange-600',
    packages: [
      { name: '60 UC', price: 300 },
      { name: '385 UC', price: 1500 },
      { name: '660 UC', price: 2800 },
      { name: 'Royale Pass', price: 1700 },
    ],
  },
]

function GamingTopUp() {
  const createOrderLink = (game, pack) => {
    const message = `Assalamualaikum! I want to order ${pack.name} for ${game}. Price: PKR ${pack.price}.`

    return `https://wa.me/923304867243?text=${encodeURIComponent(message)}`
  }

  return (
    <section className="w-full min-w-0 overflow-hidden bg-[#081225] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full min-w-0 max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-9 w-full max-w-2xl text-center sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 sm:text-sm">
            Gaming Store
          </span>

          <h2 className="mt-3 break-words text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Gaming <span className="text-emerald-400">Top-Up</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Choose your preferred package and contact us to place an order.
          </p>
        </div>

        {/* GAME CARDS */}
        <div className="grid w-full min-w-0 grid-cols-1 items-stretch gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {games.map((game) => {
            const Icon = game.icon

            return (
              <article
                key={game.name}
                className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101D32] sm:rounded-3xl"
              >
                {/* GAME HEADER */}
                <div className={`bg-gradient-to-r ${game.color} p-5 sm:p-7`}>
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 sm:h-16 sm:w-16 sm:rounded-2xl">
                      <Icon size={26} className="text-white sm:h-9 sm:w-9" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="break-words text-xl font-extrabold text-white sm:text-2xl">
                        {game.name}
                      </h3>

                      <p className="mt-1 text-xs text-white/80 sm:text-sm">
                        {game.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* PACKAGES */}
                <div className="flex flex-1 flex-col gap-3 p-4 sm:gap-4 sm:p-6">
                  {game.packages.map((pack) => (
                    <div
                      key={pack.name}
                      className="flex min-w-0 items-center justify-between gap-2 rounded-xl border border-white/10 bg-[#081225] p-3 transition-colors hover:border-emerald-400/40 sm:gap-3 sm:p-4"
                    >
                      <div className="min-w-0">
                        <h4 className="break-words text-sm font-bold text-white sm:text-base">
                          {pack.name}
                        </h4>

                        <p className="mt-1 text-xs font-bold text-emerald-400 sm:text-sm">
                          PKR {pack.price.toLocaleString('en-PK')}
                        </p>
                      </div>

                      <a
                        href={createOrderLink(game.name, pack)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Order ${pack.name} for ${game.name}`}
                        className="flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-2.5 text-xs font-bold text-white transition-colors hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:gap-2 sm:px-4 sm:text-sm"
                      >
                        <ShoppingCart size={16} />
                        <span>Order</span>
                      </a>
                    </div>
                  ))}

                  {/* PRICE NOTICE */}
                  <div className="mt-auto flex items-start gap-2 border-t border-white/10 pt-5 text-xs leading-5 text-gray-400 sm:text-sm">
                    <Crown
                      size={17}
                      className="mt-0.5 shrink-0 text-yellow-400"
                    />

                    <span>
                      Please confirm package availability and final price before payment.
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default GamingTopUp
