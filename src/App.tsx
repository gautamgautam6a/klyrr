import { lazy, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LazySection from './components/LazySection'
import { preloadCriticalComponents, preloadOnInteraction } from './utils/preloader'

// Lazy load below-the-fold components
const WhyChoose = lazy(() => import('./components/WhyChoose'))
const WhatsAtStake = lazy(() => import('./components/WhatsAtStake'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const GrowthEngines = lazy(() => import('./components/GrowthEngines'))
const PricingTeaser = lazy(() => import('./components/PricingTeaser'))
const Philosophy = lazy(() => import('./components/Philosophy'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  useEffect(() => {
    // Preload critical components after initial render
    preloadCriticalComponents()
    
    // Setup preloading on user interaction
    preloadOnInteraction()
  }, [])

  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LazySection minHeight="600px">
          <WhyChoose />
        </LazySection>
        <LazySection minHeight="400px">
          <WhatsAtStake />
        </LazySection>
        <LazySection minHeight="500px">
          <HowItWorks />
        </LazySection>
        <LazySection minHeight="800px">
          <GrowthEngines />
        </LazySection>
        <LazySection minHeight="700px">
          <PricingTeaser />
        </LazySection>
        <LazySection minHeight="400px">
          <Philosophy />
        </LazySection>
      </main>
      <LazySection minHeight="300px">
        <Footer />
      </LazySection>
    </div>
>>>>>>> 307b85c2d99ec5550e19d0732b13ee8996e39e4b
  )
}

export default App 