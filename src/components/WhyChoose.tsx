import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const WhyChoose: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [animatedNumbers, setAnimatedNumbers] = useState({
    sqls: 0,
    conversion: 0,
    revenue: 0,
    clients: 0
  })

  const testimonials = [
    {
      quote: "We didn't realize how broken our funnel was until KLYRR turned the lights on.",
      author: "Sarah Chen",
      role: "SaaS COO",
      company: "TechFlow",
      avatar: "SC"
    },
    {
      quote: "KLYRR transformed our entire GTM approach in just 45 days. Pipeline quality is through the roof.",
      author: "Marcus Rodriguez",
      role: "Founder",
      company: "DataStream",
      avatar: "MR"
    },
    {
      quote: "Finally, a system that actually works. Our conversion rates doubled in the first quarter.",
      author: "Emily Watson",
      role: "VP Sales",
      company: "CloudSync",
      avatar: "EW"
    }
  ]

  const metrics = [
    {
      value: 150,
      suffix: '+',
      label: 'SQLs booked in 90 days',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'text-blue-600'
    },
    {
      value: 2.7,
      suffix: 'x',
      label: 'increase in demo-to-close rate',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'text-emerald-600'
    },
    {
      value: 390,
      suffix: 'K',
      prefix: '$',
      label: 'in revenue recovered',
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      color: 'text-amber-600'
    },
    {
      value: 3,
      suffix: '',
      label: 'clients crossed $1M ARR in under 120 days',
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: 'text-purple-600'
    }
  ]

  const painPoints = [
    {
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      text: "SDRs chasing the wrong ICPs"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Founders stuck in sales calls"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      text: "Demos that go nowhere"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      text: "Channels you keep funding \"just in case\""
    }
  ]

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Number animation
  useEffect(() => {
    const targets = {
      sqls: 150,
      conversion: 2.7,
      revenue: 390,
      clients: 3
    }

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / 100
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setAnimatedNumbers(prev => ({
          ...prev,
          [key]: key === 'conversion' ? Number(current.toFixed(1)) : Math.floor(current)
        }))
      }, 20)
    })
  }, [])

  return (
    <section id="why-choose" className="section-padding gradient-section">
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-blue-700 border">
              Social Proof & Results
            </Badge>
            <h2 className="gradient-text text-balance mb-6">
              Why Choose KLYRR — Proof + Trust
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
              You don't need another agency. You need an operating system for growth — one that's already compounding for teams like yours.
            </p>
          </div>

          {/* Before/After Comparison with Visual */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Problem Statement */}
            <div>
              <Card className="glass-card border-red-200/50 h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="icon-modern bg-gradient-to-br from-red-50 to-red-100">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        Before KLYRR: Most teams tolerate chaos longer than they admit
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {painPoints.map((point, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors duration-300 group"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="icon-modern bg-gradient-to-br from-red-50 to-red-100 group-hover:scale-110">
                          {point.icon}
                        </div>
                        <span className="font-medium text-foreground/80 text-sm md:text-base">{point.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Visual Dashboard */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                {/* Broken Dashboard Visualization */}
                <div className="glass-card p-6 md:p-8 max-w-sm">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-foreground">Current GTM State</h4>
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Broken Metrics */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 bg-red-50 rounded border border-red-200">
                        <span className="text-sm text-red-700">Pipeline</span>
                        <span className="text-sm font-mono text-red-600">↓ 32%</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-red-50 rounded border border-red-200">
                        <span className="text-sm text-red-700">Conversion</span>
                        <span className="text-sm font-mono text-red-600">2.1%</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-red-50 rounded border border-red-200">
                        <span className="text-sm text-red-700">CAC Payback</span>
                        <span className="text-sm font-mono text-red-600">18mo</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-red-50 rounded border border-red-200">
                        <span className="text-sm text-red-700">Attribution</span>
                        <span className="text-sm font-mono text-red-600">Unknown</span>
                      </div>
                    </div>

                    {/* Warning Alerts */}
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center space-x-2 text-xs text-red-600 bg-red-50 p-2 rounded">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span>Data silos detected</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-red-600 bg-red-50 p-2 rounded">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span>Revenue leaks active</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Warning Icons */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
                  !
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs animate-pulse">
                  ?
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {metrics.map((metric, index) => (
              <Card key={index} className="metric-card group">
                <CardContent className="p-6 text-center">
                  <div className="icon-modern mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg">
                    {metric.icon}
                  </div>
                  <div className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 font-mono ${metric.color}`}>
                    {metric.prefix}{index === 0 ? animatedNumbers.sqls : 
                     index === 1 ? animatedNumbers.conversion : 
                     index === 2 ? animatedNumbers.revenue : 
                     animatedNumbers.clients}{metric.suffix}
                  </div>
                  <div className="text-foreground/60 font-medium text-sm leading-tight">
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial Carousel */}
          <div className="mb-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Card className="glass-card border-blue-200/50 relative overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                {/* Quote icon */}
                <div className="absolute top-6 left-6 opacity-20">
                  <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8zM22 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8z"/>
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <blockquote className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-foreground/90 mb-6 md:mb-8 leading-relaxed text-center">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div className="text-center">
                      <cite className="text-foreground font-bold not-italic text-lg">
                        {testimonials[currentTestimonial].author}
                      </cite>
                      <div className="text-foreground/60 text-sm">
                        {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-blue-600 scale-125' 
                          : 'bg-blue-200 hover:bg-blue-300'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="inline-flex flex-wrap items-center gap-8 justify-center">
              <div className="flex items-center space-x-2 text-foreground/60">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.25-7.5a4.5 4.5 0 00-7.5 0v6.75H8.25A2.25 2.25 0 006 14.25v3.75a2.25 2.25 0 002.25 2.25h5.25v2.25a4.5 4.5 0 009 0v-2.25h5.25a2.25 2.25 0 002.25-2.25v-3.75a2.25 2.25 0 00-2.25-2.25h-5.25V6.75z" />
                </svg>
                <span className="font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground/60">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.25-7.5a4.5 4.5 0 00-7.5 0v6.75H8.25A2.25 2.25 0 006 14.25v3.75a2.25 2.25 0 002.25 2.25h5.25v2.25a4.5 4.5 0 009 0v-2.25h5.25a2.25 2.25 0 002.25-2.25v-3.75a2.25 2.25 0 00-2.25-2.25h-5.25V6.75z" />
                </svg>
                <span className="font-medium">SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground/60">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">50+ SaaS Companies</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Button className="btn-hero text-white px-8 py-4 text-lg group">
              <svg className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="relative z-10">Get Free Diagnosis</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose