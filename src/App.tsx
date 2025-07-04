import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GrowthEngines from './components/GrowthEngines'
import ProductPage from './components/ProductPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <GrowthEngines />
            {/* Add other home page sections here if needed */}
          </>
        } />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  )
}

export default App 