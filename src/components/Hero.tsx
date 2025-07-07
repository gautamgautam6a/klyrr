import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  
  const rotatingWords = ['Flatlined', 'Stalling', 'Broken', 'Bleeding']
  
  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex]
    let currentIndex = 0
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= currentWord.length) {
        setTypedText(currentWord.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
        }, 2000)
      }
    }, 150)
    
    return () => clearInterval(typeInterval)
  }, [currentWordIndex])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero animate-fade-in-up">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-blue-600/10 to-blue-700/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full" 
            style={{
              backgroundColor: '#E6F0FF'
            }}
          ></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center min-h-[80vh] mt-[100px] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex animate-fade-in-up">
              <Badge className="inline-flex items-center rounded-md text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 bg-blue-600 text-white shadow-lg glow-badge px-4 py-2">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  Modular GTM Systems for SaaS Growth
                </span>
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h1 className="hero-text text-balance">
                What If Your Growth Has Already{' '}
                <span className="inline-block min-w-[160px] md:min-w-[200px] text-left">
                  <span className="gradient-text">{typedText}</span>
                  <span className="w-0.5 h-[0.8em] bg-blue-600 ml-1 inline-block animate-pulse"></span>
                </span>
              </h1>
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-600 text-balance">
                — And You're the Last to Know?
              </h2>
            </div>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl text-balance animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Leads look fine. Metrics look "okay." But deals keep slipping, buyers ghost, and your CAC quietly climbs.
            </p>

            {/* Value Props */}
            <div className="glass-card p-6 lg:p-8 animate-scale-in rounded-2xl border-2 border-blue-200 shadow-md" style={{ animationDelay: '0.8s' }}>
              <p className="text-lg md:text-xl text-foreground/80 mb-6 font-semibold">
                <span className="gradient-text">KLYRR installs modular GTM systems</span> that replace duct-taped growth with predictable pipeline, conversion, and expansion — in days, not quarters.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 text-sm md:text-base">
                <div className="flex items-center space-x-3 group">
                  <div className="icon-modern group-hover:scale-110">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-foreground/80">Built for SaaS Founders</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="icon-modern group-hover:scale-110">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="font-medium text-foreground/80">Installs in days — no hires, no retainers</span>
                </div>
                <div className="flex items-center space-x-3 group md:col-span-1">
                  <div className="icon-modern group-hover:scale-110">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <span className="font-medium text-foreground/80">Powered by Clay, Apollo, Groq & KLYRR's GTM OS</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <Button className="inline-flex items-center justify-center gap-2 h-9 px-8 py-4 text-base rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium group" onClick={() => scrollToSection('engines')}>
                <span className="relative z-10">Fix My Funnel Now</span>
                <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button className="inline-flex items-center justify-center gap-2 h-9 px-8 py-4 text-base rounded-md bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 font-medium group" onClick={() => scrollToSection('pricing')}>
                <svg className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="relative z-10">Get Free Diagnosis</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden md:flex items-center justify-center animate-scale-in ml-8 lg:ml-12" style={{ animationDelay: '1.2s' }}>
            <div className="relative">
              {/* Main Dashboard Preview */}
              <div className="glass-card p-8 max-w-md rounded-2xl border-2 border-blue-200 shadow-md">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-foreground">GTM Dashboard</h3>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="metric-card">
                      <div className="text-3xl font-bold gradient-text font-mono">2.7x</div>
                      <div className="text-sm text-foreground/60">Demo → Close</div>
                    </div>
                    <div className="metric-card">
                      <div className="text-3xl font-bold gradient-text font-mono">150+</div>
                      <div className="text-sm text-foreground/60">SQLs/90 days</div>
                    </div>
                  </div>
                  
                  {/* Pipeline Visual */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                      <div className="flex-1 bg-emerald-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-emerald-500 h-full w-4/5 rounded-full animate-pulse"></div>
                      </div>
                      <span className="text-sm font-mono">85%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <div className="flex-1 bg-blue-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-blue-500 h-full w-3/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      <span className="text-sm font-mono">67%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-purple-500 rounded"></div>
                      <div className="flex-1 bg-purple-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-purple-500 h-full w-2/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                      </div>
                      <span className="text-sm font-mono">42%</span>
                    </div>
                  </div>
                  
                  {/* Engine Status */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-emerald-50 rounded-lg">
                      <span className="text-sm font-medium text-emerald-800">Pipeline Engine</span>
                      <span className="text-xs bg-emerald-200 text-emerald-800 px-2 py-1 rounded-full">ACTIVE</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-blue-800">Conversion Engine</span>
                      <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">LIVE</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass-card p-3 animate-float rounded-2xl border-2 border-blue-200">
                <div className="text-2xl font-bold gradient-text font-mono">$390K</div>
                <div className="text-xs text-foreground/60">Revenue Recovered</div>
              </div>
              
              <div className="absolute -bottom-4 -left-28 glass-card p-3 animate-float rounded-2xl border-2 border-blue-200" style={{ animationDelay: '3s' }}>
                <div className="text-xl font-bold gradient-text font-mono">3</div>
                <div className="text-xs text-foreground/60">$1M ARR in 120 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero