
import { Laptop, Monitor, ShieldCheck, Download, CheckCircle2 } from 'lucide-react'

const packages = [
  {
    title: 'Windows Installation',
    price: 300,
    description: 'Fresh Windows installation for your computer.',
    features: [
      'Windows 7',
      'Windows 8.1 Pro',
      'Windows 10',
      'Windows 11'
    ]
  },
  {
    title: 'Laptop Full Setup',
    price: 800,
    description: 'Complete laptop setup with essential software.',
    features: [
      'Windows Installation',
      'MS Office',
      'Google Chrome',
      'IDM',
      'VLC Media Player',
      'WinRAR',
      'PDF Reader',
      '.NET Framework',
      'Drivers',
      'Antivirus'
    ]
  },
  {
    title: 'CPU Full Setup',
    price: 800,
    description: 'Complete desktop computer software setup.',
    features: [
      'Windows Installation',
      'MS Office',
      'Chrome & IDM',
      'VLC & WinRAR',
      'PDF Reader',
      '.NET Framework',
      'Required Drivers',
      'Antivirus'
    ]
  }
]

function LaptopServices() {
  const whatsapp = (title) =>
    `https://wa.me/923304867243?text=${encodeURIComponent(
      `Assalam-o-Alaikum! I want to book ${title}.`
    )}`

  return (
    <section className="min-h-screen py-20 bg-[#081225]">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <Laptop className="mx-auto text-emerald-400" size={48} />

          <h1 className="text-4xl font-extrabold mt-5">
            Laptop & Computer <span className="text-emerald-400">Services</span>
          </h1>

          <p className="text-gray-400 mt-4">
            Professional Windows installation and complete computer setup.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {packages.map((item) => (
            <div
              key={item.title}
              className="bg-[#111F36] border border-white/10 rounded-2xl p-7 hover:border-emerald-400/50 transition-all"
            >
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                <Monitor className="text-emerald-400" size={28} />
              </div>

              <h2 className="text-xl font-bold mt-5">
                {item.title}
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                {item.description}
              </p>

              <div className="my-6">
                <span className="text-4xl font-extrabold text-emerald-400">
                  Rs. {item.price}
                </span>
                <span className="text-gray-500 text-sm"> PKR</span>
              </div>

              <div className="space-y-3">
                {item.features.map((feature) => (
                  <div key={feature} className="flex gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={17} className="text-emerald-400 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href={whatsapp(item.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-500 p-3 rounded-xl font-bold transition"
              >
                <Download size={18} />
                Book This Service
              </a>
            </div>
          ))}

        </div>

        <div className="mt-12 bg-blue-500/10 border border-blue-400/20 rounded-2xl p-6 flex gap-4 items-center">
          <ShieldCheck className="text-blue-400 shrink-0" size={30} />
          <p className="text-gray-300 text-sm leading-7">
            We provide professional Windows installation and software setup.
            Installation availability depends on device compatibility and
            valid software licensing.
          </p>
        </div>

      </div>
    </section>
  )
}

export default LaptopServices
