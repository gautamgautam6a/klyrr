import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GrowthEngines from './components/GrowthEngines'
import ProductPage from './components/ProductPage'
import ZeroToPipeline from './components/engines/ZeroToPipeline'
import ConversionKillshot from './components/engines/ConversionKillshot'
import InboundMagnet from './components/engines/InboundMagnet'
import SalesOnboarding from './components/engines/SalesOnboarding'
import FounderSignal from './components/engines/FounderSignal'
import LandExpand from './components/engines/LandExpand'
import { StagewiseToolbar } from '@stagewise/toolbar-react'
import { ReactPlugin } from '@stagewise-plugins/react'
import Footer from './components/Footer'
import WhatsAtStake from './components/WhatsAtStake'
import WhyChoose from './components/WhyChoose'
import Philosophy from './components/Philosophy'
import HowItWorks from './components/HowItWorks'
import PricingTeaser from './components/PricingTeaser'

function App() {
  return (
    <>
      <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <GrowthEngines />
              <WhatsAtStake />
              <WhyChoose />
              <Philosophy />
              <HowItWorks />
              <PricingTeaser />
            </>
          } />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/engine/zero-to-pipeline" element={<ZeroToPipeline />} />
          <Route path="/engine/conversion-killshot" element={<ConversionKillshot />} />
          <Route path="/engine/inbound-magnet" element={<InboundMagnet />} />
          <Route path="/engine/abm-fastlane" element={<SalesOnboarding />} />
          <Route path="/engine/founder-signal" element={<FounderSignal />} />
          <Route path="/engine/land-expand" element={<LandExpand />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App 