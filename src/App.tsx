import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChoose from './components/WhyChoose'
import WhatsAtStake from './components/WhatsAtStake'
import HowItWorks from './components/HowItWorks'
import GrowthEngines from './components/GrowthEngines'
import PricingTeaser from './components/PricingTeaser'
import Philosophy from './components/Philosophy'
import Footer from './components/Footer'
import { StagewiseToolbar } from '@stagewise/toolbar-react';
import { ReactPlugin } from '@stagewise-plugins/react';

function App() {
  return (
    <>
      <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
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
    </>
  )
}

export default App 