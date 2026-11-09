
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react'
import RemoteSupportModal from '../components/RemoteSupportModal'
import { useState } from 'react'

function ContactPage() {
  const [remoteOpen, setRemoteOpen] = useState(false)

  return (
    <section className="min-h-screen py-20 bg-[#081225]">

      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold">
            Contact <span className="text-emerald-400">Mehran</span>
          </h1>
          <p className="text-gray-400 mt-4">
            Get in touch for mobile, computer and software services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#111F36] border border-white/10 p-7 rounded-2xl space-y-6">

            <div className="flex gap-4 items-center">
              <MapPin className="text-emerald-400" />
              <div>
                <h3 className="font-bold">Shop Location</h3>
                <p className="text-gray-400 text-sm">Nemat Mandi, Bannu</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <Phone className="text-emerald-400" />
              <div>
                <h3 className="font-bold">Phone Numbers</h3>
                <p className="text-gray-400 text-sm">0330 4867243</p>
                <p className="text-gray-400 text-sm">0311 8771399</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <Clock className="text-emerald-400" />
              <div>
                <h3 className="font-bold">Working Hours</h3>
                <p className="text-gray-400 text-sm">Contact us for availability.</p>
              </div>
            </div>

            <a
              href="https://wa.me/923304867243"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 p-4 rounded-xl font-bold"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>

          </div>

          <div className="bg-[#111F36] border border-white/10 p-7 rounded-2xl flex flex-col justify-center">

            <h2 className="text-2xl font-bold">
              Remote Technical Support
            </h2>

            <p className="text-gray-400 leading-7 mt-4">
              Need assistance from home? Request an online support
              session through AnyDesk or TeamViewer.
            </p>

            <button
              onClick={() => setRemoteOpen(true)}
              className="mt-7 bg-blue-600 hover:bg-blue-500 p-4 rounded-xl font-bold transition"
            >
              Book Remote Support
            </button>

          </div>

        </div>

        {remoteOpen && (
          <RemoteSupportModal
            onClose={() => setRemoteOpen(false)}
          />
        )}

      </div>

    </section>
  )
}

export default ContactPage