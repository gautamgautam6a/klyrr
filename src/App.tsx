import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'




// Lazy load below-the-fold components
const WhyChoose = lazy(() => import('./components/WhyChoose'))
const WhatsAtStake = lazy(() => import('./components/WhatsAtStake'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const PricingTeaser = lazy(() => import('./components/PricingTeaser'))
const Philosophy = lazy(() => import('./components/Philosophy'))
const Footer = lazy(() => import('./components/Footer'))
import GrowthEngines from './components/GrowthEngines'
import ProductPage from './components/ProductPage'
import ZeroToPipeline from './components/engines/ZeroToPipeline'
import ConversionKillshot from './components/engines/ConversionKillshot'
import InboundMagnet from './components/engines/InboundMagnet'
import SalesOnboarding from './components/engines/SalesOnboarding'
import FounderSignal from './components/engines/FounderSignal'
import LandExpand from './components/engines/LandExpand'

function App() {
  return (
    <Router>
      <Navbar />q
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Suspense fallback={<div>Loading...</div>}>
              <WhyChoose />
              <WhatsAtStake />
              <HowItWorks />
            </Suspense>
            <GrowthEngines />
            <Suspense fallback={<div>Loading...</div>}>
              <PricingTeaser />
              <Philosophy />
              <Footer />
            </Suspense>
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
    </Router>
  )
}

export default App 