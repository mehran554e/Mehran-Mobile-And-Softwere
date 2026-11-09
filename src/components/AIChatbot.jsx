
import { useState, useEffect, useRef } from 'react'

import {
  Bot,
  X,
  Send,
  MessageCircle,
  User,
  Sparkles,
} from 'lucide-react'

const quickQuestions = [
  'Where is your shop?',
  'Windows installation price?',
  'Laptop setup price?',
  'Gaming top-up prices?',
  'How can I contact you?',
]

function getBotResponse(message) {
  const text = message.toLowerCase().trim()

  if (
    text.includes('location') ||
    text.includes('address') ||
    text.includes('shop')
  ) {
    return 'Our shop is located at Nemat Mandi, Bannu, Pakistan.'
  }

  if (text.includes('windows')) {
    return 'Windows installation costs PKR 300. Please contact us to confirm compatibility and availability.'
  }

  if (text.includes('laptop')) {
    return 'Our laptop full setup service costs PKR 800.'
  }

  if (text.includes('cpu') || text.includes('computer')) {
    return 'Our CPU full setup service costs PKR 800.'
  }

  if (
    text.includes('pubg') ||
    text.includes('free fire') ||
    text.includes('gaming') ||
    text.includes('topup') ||
    text.includes('top-up')
  ) {
    return 'We offer PUBG Mobile UC and Free Fire diamond packages. Please visit our Gaming Top-Up page for prices.'
  }

  if (
    text.includes('contact') ||
    text.includes('whatsapp') ||
    text.includes('number') ||
    text.includes('phone')
  ) {
    return 'Contact us on 0330 4867243 or 0311 8771399. WhatsApp: https://wa.me/923304867243'
  }

  if (
    text.includes('mobile') ||
    text.includes('software') ||
    text.includes('iphone') ||
    text.includes('android')
  ) {
    return 'We provide mobile software troubleshooting, Android support, iPhone software restore and account recovery guidance.'
  }

  if (
    text.includes('remote') ||
    text.includes('anydesk') ||
    text.includes('teamviewer')
  ) {
    return 'We provide remote technical assistance through AnyDesk or TeamViewer. Visit our Contact page to request support.'
  }

  return 'Thank you for contacting Mehran Mobile & Software! Please WhatsApp us at 0330 4867243 for more information.'
}

function MessageText({ text }) {
  const whatsappUrl = 'https://wa.me/923304867243'
  const parts = text.split(/(https:\/\/wa\.me\/923304867243)/g)

  return (
    <>
      {parts.map((part, index) =>
        part === whatsappUrl ? (
          <a
            key={index}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all font-semibold text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
          >
            Open WhatsApp
          </a>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  )
}

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Assalamualaikum! Welcome to Mehran Mobile & Software. How can I help you today?',
    },
  ])

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }
  }, [messages, isOpen])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const sendMessage = (text = message) => {
    const cleanMessage = text.trim()

    if (!cleanMessage) return

    const reply = getBotResponse(cleanMessage)

    setMessages((previous) => [
      ...previous,
      { sender: 'user', text: cleanMessage },
      { sender: 'bot', text: reply },
    ])

    setMessage('')
  }

  return (
    <>
      {/* FLOATING CHAT BUTTON */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
          aria-label="Open chatbot"
          aria-expanded={isOpen}
        >
          <MessageCircle size={27} />
        </button>
      )}

      {/* CHAT WINDOW */}
      {isOpen && (
        <div
          className="fixed bottom-3 right-3 z-50 flex w-[calc(100%-24px)] min-w-0 max-w-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101D32] shadow-2xl sm:bottom-6 sm:right-6"
          style={{
            height: 'min(560px, calc(100dvh - 24px))',
            maxHeight: 'calc(100dvh - 24px)',
          }}
          role="region"
          aria-label="Mehran customer support chat"
        >
          {/* HEADER */}
          <div className="flex shrink-0 items-center justify-between gap-3 bg-emerald-600 p-3 sm:p-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <Bot size={23} />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold text-white sm:text-base">
                  Mehran Assistant
                </h3>

                <p className="mt-1 flex items-center gap-1 text-xs text-emerald-100">
                  <Sparkles size={12} />
                  Automatic Support
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Close chatbot"
            >
              <X size={22} />
            </button>
          </div>

          {/* MESSAGES */}
          <div className="min-h-0 flex-1 space-y-4 overflow-x-hidden overflow-y-auto overscroll-contain p-3 sm:p-4">
            {messages.map((item, index) => (
              <div
                key={`${index}-${item.sender}`}
                className={`flex min-w-0 items-end gap-2 ${
                  item.sender === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                {item.sender === 'bot' && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Bot size={18} />
                  </div>
                )}

                <div
                  className={`max-w-[82%] min-w-0 break-words [overflow-wrap:anywhere] rounded-2xl px-3 py-3 text-sm leading-6 sm:px-4 ${
                    item.sender === 'user'
                      ? 'rounded-br-sm bg-emerald-600 text-white'
                      : 'rounded-bl-sm bg-[#081225] text-gray-200'
                  }`}
                >
                  <MessageText text={item.text} />
                </div>

                {item.sender === 'user' && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                    <User size={18} />
                  </div>
                )}
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* QUICK QUESTIONS */}
          <div className="shrink-0 border-t border-white/5 px-3 pb-2 pt-2">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              Quick Questions
            </p>

            <div className="flex gap-2 overflow-x-auto overscroll-x-contain pb-2">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  className="shrink-0 whitespace-nowrap rounded-full border border-emerald-500/30 px-3 py-2 text-xs text-emerald-400 transition-colors hover:bg-emerald-500/10 focus-visible:outline-2 focus-visible:outline-emerald-400"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* MESSAGE INPUT */}
          <form
            onSubmit={(event) => {
              event.preventDefault()
              sendMessage()
            }}
            className="flex shrink-0 items-center gap-2 border-t border-white/10 p-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Type your question..."
              aria-label="Type your question"
              className="h-11 min-w-0 flex-1 rounded-xl border border-white/10 bg-[#081225] px-3 py-2 text-base text-white outline-none transition-colors placeholder:text-gray-500 focus:border-emerald-500 sm:px-4"
            />

            <button
              type="submit"
              disabled={!message.trim()}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white transition-colors hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              aria-label="Send message"
            >
              <Send size={19} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default AIChatbot
