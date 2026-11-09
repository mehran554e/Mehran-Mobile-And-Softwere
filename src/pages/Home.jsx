
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import PricingTable from '../components/PricingTable'

function Home() {
  return (
    <div className="w-full min-w-0">

      {/* Hero Section */}
      <section className="w-full min-w-0">
        <Hero />
      </section>

      {/* Pricing Section */}
      <section className="w-full min-w-0">
        <PricingTable />
      </section>

      {/* Services Section */}
      <section className="w-full min-w-0">
        <ServicesSection />
      </section>

    </div>
  )
}

export default Home
