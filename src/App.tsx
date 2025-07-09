import React, { useState, createContext, useContext } from 'react';
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
import ReactPlugin from '@stagewise-plugins/react'
import Footer from './components/Footer'
import CTA from './components/CTA'

import WhyChoose from './components/WhyChoose'
import Philosophy from './components/Philosophy'
import HowItWorks from './components/HowItWorks'
import PricingTeaser from './components/PricingTeaser'
import FunnelFormModal from './components/FunnelFormModal'
import AboutUsPage from './components/AboutUsPage'
import ScrollToTop from './components/ScrollToTop';
import PricingPage from './components/PricingPage';

// Create a context to allow any component to open the modal
export const FunnelModalContext = createContext({ openModal: () => {} });
export const useFunnelModal = () => useContext(FunnelModalContext);

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <FunnelModalContext.Provider value={{ openModal }}>
      <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <GrowthEngines />
              <WhyChoose />
              <HowItWorks />
              <PricingTeaser />
              <CTA />
            </>
          } />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/engine/zero-to-pipeline" element={<ZeroToPipeline />} />
          <Route path="/engine/conversion-killshot" element={<ConversionKillshot />} />
          <Route path="/engine/inbound-magnet" element={<InboundMagnet />} />
          <Route path="/engine/abm-fastlane" element={<SalesOnboarding />} />
          <Route path="/engine/founder-signal" element={<FounderSignal />} />
          <Route path="/engine/land-expand" element={<LandExpand />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Footer />
      </Router>
      <FunnelFormModal isOpen={modalOpen} onClose={closeModal} />
    </FunnelModalContext.Provider>
  )
}

export default App 