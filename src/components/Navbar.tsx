import React, { useState, useEffect } from 'react'
import { StagewiseToolbar } from '@stagewise/toolbar-react';
import { ReactPlugin } from '@stagewise-plugins/react';


import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass-nav shadow-lg" : "bg-transparent"
    )}>
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative">
                <svg width="140" height="50" viewBox="0 0 235 118" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-105">
                  <path d="M74.5 81.5L107.379 114.379C108.058 115.058 109.212 114.482 109.076 113.53L108.985 112.897" stroke="hsl(var(--blue-500))" strokeWidth="4.8"/>
                  <path d="M142 82L109.202 114.798C108.663 115.337 107.743 115.099 107.533 114.366L107 112.5" stroke="hsl(var(--blue-500))" strokeWidth="4.8"/>
                  <path d="M81 35L52 6L52 35" stroke="hsl(var(--blue-500))" strokeWidth="4.8"/>
                  <path d="M135 35L162.293 7.70711C162.923 7.07714 164 7.52331 164 8.41421L164 35" stroke="hsl(var(--blue-500))" strokeWidth="4.8"/>
                  <rect x="106" y="81" width="5" height="32" fill="hsl(var(--blue-500))"/>
                  <path d="M3.22 78V38.302H8.096V62.682C10.672 61.072 13.064 59.416 15.64 57.806C25.576 51.32 35.42 44.926 45.402 38.44L45.632 38.302H53.728L51.336 39.866C42.734 45.386 34.454 50.814 25.852 56.38C30.084 59.738 34.27 63.096 38.502 66.454C42.688 69.812 46.782 73.17 51.014 76.482L52.9 78H45.54L45.31 77.816C41.262 74.642 37.26 71.468 33.212 68.202C29.348 65.074 25.576 62.176 21.758 59.048C18.814 60.888 15.962 62.774 13.156 64.66C11.684 65.626 10.258 66.546 8.786 67.512C8.602 67.65 8.326 67.742 8.096 67.926V78H3.22ZM57.3958 38.302H62.2718V73.63H99.8538V78H57.3958V38.302ZM137.626 78V38.302H171.344C177.738 38.302 182.384 43.454 182.384 49.112C182.384 54.77 177.738 59.922 171.344 59.922H162.19C170.516 63.372 178.152 68.708 182.2 76.804L182.798 78H177.784L177.554 77.54C170.884 66.316 155.888 60.658 142.502 59.922V78H137.626ZM142.502 42.672V55.552H171.344C174.978 55.552 177.83 52.516 177.83 49.112C177.83 45.662 174.978 42.626 171.344 42.626C171.206 42.626 171.16 42.672 171.022 42.672H142.502ZM187.849 78V38.302H221.567C227.961 38.302 232.607 43.454 232.607 49.112C232.607 54.77 227.961 59.922 221.567 59.922H212.413C220.739 63.372 228.375 68.708 232.423 76.804L233.021 78H228.007L227.777 77.54C221.107 66.316 206.111 60.658 192.725 59.922V78H187.849ZM192.725 42.672V55.552H221.567C225.201 55.552 228.053 52.516 228.053 49.112C228.053 45.662 225.201 42.626 221.567 42.626C221.429 42.626 221.383 42.672 221.245 42.672H192.725Z" fill="hsl(var(--foreground))"/>
                  <path d="M81.9483 38.302H88.5263L88.7563 38.624C89.6303 39.498 90.4123 40.372 91.1943 41.292L108.26 59.968C109.318 58.91 110.238 57.806 111.204 56.702C114.608 52.93 117.966 49.25 121.324 45.616C122.658 44.144 124.038 42.718 125.326 41.292C126.108 40.372 126.844 39.452 127.718 38.578L127.994 38.302H133.974L132.732 39.682C131.95 40.602 131.168 41.476 130.294 42.396L110.56 63.786V78H105.684V63.878L85.6743 42.396C84.8003 41.476 84.0183 40.602 83.1443 39.682L81.9483 38.302Z" fill="hsl(var(--blue-600))"/>
                </svg>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 blur-xl"></div>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('engines')}
              className="text-foreground/80 hover:text-foreground font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Engines
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-foreground/80 hover:text-foreground font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-foreground font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Button className="btn-hero text-white ml-4">
              <span className="relative z-10">Fix My Funnel</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg transition-all duration-300"
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-6 relative">
                <span className={cn(
                  "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                  isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                )}></span>
                <span className={cn(
                  "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                  isOpen ? "opacity-0" : "opacity-100"
                )}></span>
                <span className={cn(
                  "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                  isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                )}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="glass-card m-4 p-6 space-y-4 border-2">
            <button
              onClick={() => scrollToSection('engines')}
              className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-blue-50 rounded-lg font-medium transition-all duration-300"
            >
              Engines
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-blue-50 rounded-lg font-medium transition-all duration-300"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-blue-50 rounded-lg font-medium transition-all duration-300"
            >
              About
            </button>
            <Button className="btn-hero text-white w-full mt-4">
              <span className="relative z-10">Fix My Funnel</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar