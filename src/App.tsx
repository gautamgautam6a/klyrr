import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChoose from './components/WhyChoose'
import WhatsAtStake from './components/WhatsAtStake'
import HowItWorks from './components/HowItWorks'
import GrowthEngines from './components/GrowthEngines'
import PricingTeaser from './components/PricingTeaser'
import Philosophy from './components/Philosophy'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <WhatsAtStake />
        <HowItWorks />
        <GrowthEngines />
        <PricingTeaser />
        <Philosophy />
      </main>
      <Footer />
    </div>
  )
}

export default App 