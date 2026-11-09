
import {
  Mail,
  ShieldCheck,
  KeyRound,
  Smartphone,
  Camera,
  Users,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react'

const accountServices = [
  {
    title: 'Google Account Support',
    description: 'Help with account recovery, login issues and security settings.',
    icon: Mail,
  },
  {
    title: 'Apple ID Support',
    description: 'Guidance for Apple ID recovery and account settings.',
    icon: Smartphone,
  },
  {
    title: 'Email Setup',
    description: 'Email configuration and troubleshooting on mobile and laptop.',
    icon: KeyRound,
  },
  {
    title: 'Account Security',
    description: 'Two-step verification, password security and recovery options.',
    icon: ShieldCheck,
  },
  {
    title: 'Instagram Support',
    description: 'Guidance with login, account recovery and security settings.',
    icon: Camera,
  },
  {
    title: 'Facebook Support',
    description: 'Help with account access, recovery and privacy settings.',
    icon: Users,
  },
]

function AccountsService() {
  const contactLink = (service) => {
    const message = `Assalamualaikum! I need help with ${service}. Please guide me.`

    return `https://wa.me/923304867243?text=${encodeURIComponent(message)}`
  }

  return (
    <section className="w-full min-w-0 overflow-hidden bg-[#081225] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full min-w-0 max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-9 w-full max-w-2xl text-center sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 sm:text-sm">
            Online Account Services
          </span>

          <h2 className="mt-3 break-words text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Account <span className="text-emerald-400">Support</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Get professional guidance for account access, recovery,
            configuration and security.
          </p>
        </div>

        {/* ACCOUNT SERVICE CARDS */}
        <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {accountServices.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="group flex h-full min-w-0 flex-col rounded-2xl border border-white/10 bg-[#101D32] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 sm:p-6 lg:p-7"
              >
                {/* ICON */}
                <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-white sm:h-14 sm:w-14">
                  <Icon size={26} />
                </div>

                {/* TITLE */}
                <h3 className="break-words text-lg font-bold leading-7 text-white sm:text-xl">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 flex-1 break-words text-sm leading-7 text-gray-400">
                  {service.description}
                </p>

                {/* SUPPORT LINK */}
                <a
                  href={contactLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex min-w-0 items-center justify-between gap-2 border-t border-white/10 pt-4 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
                >
                  <span>Get Support</span>
                  <ArrowUpRight size={18} className="shrink-0" />
                </a>
              </article>
            )
          })}
        </div>

        {/* CONTACT BANNER */}
        <div className="mt-10 flex min-w-0 flex-col gap-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 sm:p-7 md:flex-row md:items-center md:justify-between lg:mt-12">
          <div className="min-w-0">
            <h3 className="break-words text-lg font-bold leading-7 text-white sm:text-xl">
              Need Account Assistance?
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-400">
              Contact us for guidance with accounts you own or are authorized to manage.
            </p>
          </div>

          <a
            href={contactLink('Online Account Support')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:w-auto"
          >
            <MessageCircle size={19} />
            Contact Us
          </a>
        </div>

        {/* ACCOUNT SAFETY NOTICE */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-6 text-gray-500">
          For your security, never share passwords, OTPs or verification codes with anyone.
          Account recovery should follow the official platform procedures.
        </p>

      </div>
    </section>
  )
}

export default AccountsService
