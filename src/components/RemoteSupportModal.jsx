
import {
  X,
  Monitor,
  ShieldCheck,
  MessageCircle,
  ExternalLink,
} from 'lucide-react'

function RemoteSupportModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const whatsappLink =
    'https://wa.me/923304867243?text=' +
    encodeURIComponent(
      'Assalamualaikum! I need remote technical support.'
    )

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-3 backdrop-blur-sm sm:p-5"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="remote-support-title"
        className="relative my-auto flex w-full max-w-lg min-w-0 flex-col overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-[#101D32] p-5 shadow-2xl sm:rounded-3xl sm:p-7"
        style={{ maxHeight: 'calc(100dvh - 24px)' }}
        onClick={(event) => event.stopPropagation()}
      >
        {/* CLOSE ICON */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close remote support dialog"
          className="absolute right-4 top-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-emerald-400 sm:right-5 sm:top-5"
        >
          <X size={22} />
        </button>

        {/* HEADER ICON */}
        <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 sm:h-16 sm:w-16 sm:rounded-2xl">
          <Monitor size={28} />
        </div>

        {/* TITLE */}
        <h2
          id="remote-support-title"
          className="max-w-[85%] break-words text-xl font-extrabold leading-7 text-white sm:text-2xl"
        >
          Remote Technical Support
        </h2>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          Get assistance with software issues, Windows setup and
          general troubleshooting through a remote support session.
        </p>

        {/* REMOTE SUPPORT TOOLS */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          <div className="flex min-w-0 flex-col items-center rounded-xl border border-white/10 bg-[#081225] p-4 text-center">
            <Monitor className="text-emerald-400" size={27} />

            <h3 className="mt-3 text-sm font-bold text-white sm:text-base">
              AnyDesk
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Remote assistance
            </p>
          </div>

          <div className="flex min-w-0 flex-col items-center rounded-xl border border-white/10 bg-[#081225] p-4 text-center">
            <ExternalLink className="text-emerald-400" size={27} />

            <h3 className="mt-3 text-sm font-bold text-white sm:text-base">
              TeamViewer
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Remote assistance
            </p>
          </div>
        </div>

        {/* SECURITY NOTICE */}
        <div className="mt-5 flex min-w-0 items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4">
          <ShieldCheck
            className="mt-0.5 shrink-0 text-emerald-400"
            size={22}
          />

          <p className="min-w-0 break-words text-xs leading-6 text-gray-300 sm:text-sm">
            Only approve sessions you requested. Never share passwords,
            banking details or verification codes. Close the session
            whenever you want.
          </p>
        </div>

        {/* WHATSAPP BUTTON */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 text-center text-sm font-bold text-white transition-colors hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          <MessageCircle size={19} className="shrink-0" />
          <span>Request Remote Support</span>
        </a>

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="mt-2 w-full rounded-xl py-3 text-sm font-semibold text-gray-400 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-emerald-400"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default RemoteSupportModal
