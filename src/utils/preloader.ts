// Preload critical components when the page loads
export const preloadCriticalComponents = () => {
  // Preload the most important below-the-fold component (WhyChoose)
  // This will be ready when user scrolls down
  import('../components/WhyChoose')
    .then(() => console.log('WhyChoose preloaded'))
    .catch(err => console.warn('Failed to preload WhyChoose:', err))

  // Preload other critical components with a slight delay
  setTimeout(() => {
    import('../components/GrowthEngines')
      .then(() => console.log('GrowthEngines preloaded'))
      .catch(err => console.warn('Failed to preload GrowthEngines:', err))
    
    import('../components/PricingTeaser')
      .then(() => console.log('PricingTeaser preloaded'))
      .catch(err => console.warn('Failed to preload PricingTeaser:', err))
  }, 2000) // Preload after 2 seconds when initial load is complete
}

// Preload on user interaction (hover, focus, etc.)
export const preloadOnInteraction = () => {
  let hasPreloaded = false
  
  const preloadHandler = () => {
    if (hasPreloaded) return
    hasPreloaded = true
    
    // Preload remaining components
    Promise.all([
      import('../components/WhatsAtStake'),
      import('../components/HowItWorks'),
      import('../components/Philosophy'),
      import('../components/Footer')
    ]).then(() => console.log('Remaining components preloaded'))
      .catch(err => console.warn('Failed to preload remaining components:', err))
  }
  
  // Add event listeners for user interactions
  document.addEventListener('mousemove', preloadHandler, { once: true })
  document.addEventListener('scroll', preloadHandler, { once: true })
  document.addEventListener('touchstart', preloadHandler, { once: true })
  document.addEventListener('keydown', preloadHandler, { once: true })
}