import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BarChart2, TrendingUp, DollarSign, Award, AlertTriangle, UserX, Ban, CheckCircle, FileText, Clock, Gift } from 'lucide-react'
import { useFunnelModal } from '@/App';

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
      icon: <BarChart2 size={28} strokeWidth={1.5} className="text-blue-600" />,
      color: 'text-blue-600'
    },
    {
      value: 2.7,
      suffix: 'x',
      label: 'increase in demo-to-close rate',
      icon: <TrendingUp size={28} strokeWidth={1.5} className="text-emerald-600" />,
      color: 'text-emerald-600'
    },
    {
      value: 390,
      suffix: 'K',
      prefix: '$',
      label: 'in revenue recovered',
      icon: <DollarSign size={28} strokeWidth={1.5} className="text-amber-600" />,
      color: 'text-amber-600'
    },
    {
      value: 3,
      suffix: '',
      label: 'clients crossed $1M ARR in under 120 days',
      icon: <Award size={28} strokeWidth={1.5} className="text-purple-600" />,
      color: 'text-purple-600'
    }
  ]

  const painPoints = [
    {
      icon: <AlertTriangle size={22} strokeWidth={1.5} className="text-red-600" />,
      text: "SDRs chasing the wrong ICPs"
    },
    {
      icon: <UserX size={22} strokeWidth={1.5} className="text-red-600" />,
      text: "Founders stuck in sales calls"
    },
    {
      icon: <Ban size={22} strokeWidth={1.5} className="text-red-600" />,
      text: "Demos that go nowhere"
    },
    {
      icon: <DollarSign size={22} strokeWidth={1.5} className="text-red-600" />,
      text: "Channels you keep funding \"just in case\""
    }
  ]

  const features = [
    {
      icon: <CheckCircle size={28} strokeWidth={1.5} className="text-emerald-600" />,
      title: 'One-time engine installs',
      description: 'No recurring fees',
      color: 'bg-white/80 border-2 border-blue-200 text-emerald-600'
    },
    {
      icon: <Clock size={28} strokeWidth={1.5} className="text-blue-600" />,
      title: '30–90 day payback periods',
      description: 'Fast ROI',
      color: 'bg-white/80 border-2 border-blue-200 text-blue-600'
    },
    {
      icon: <FileText size={28} strokeWidth={1.5} className="text-purple-600" />,
      title: 'Transparent, scope-based pricing',
      description: 'No hidden costs',
      color: 'bg-white/80 border-2 border-blue-200 text-purple-600'
    },
    {
      icon: <Gift size={28} strokeWidth={1.5} className="text-orange-500" />,
      title: '2 referrals = 1 free engine tune-up',
      description: 'Referral rewards',
      color: 'bg-white/80 border-2 border-blue-200 text-orange-500'
    }
  ]

  const { openModal } = useFunnelModal();

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
    <section id="why-choose" className="section-padding section-spacing gradient-section animate-fade-in-up mb-20 pt-0 pb-0">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 lg:p-10 max-w-7xl mx-auto border-2 border-blue-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Section Header */}
          <div className="text-center mb-8 lg:mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Badge className="inline-flex items-center rounded-md text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 bg-blue-600 text-white shadow-lg glow-badge px-4 py-2 mb-4">
              Social Proof & Results
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
              <span className="text-black">Why Choose KLYRR -</span> <span className="text-blue-600">Proof + Trust</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
              You don't need another agency. You need an operating system for growth, one that's already compounding for teams like yours.
            </p>
          </div>

          {/* Before/After Comparison with Visual */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {/* Problem Statement */}
            <div>
              <Card className="glass-card border-red-200/50 h-full bg-red-50 hover:bg-red-100 transition-colors duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        <span className="text-blue-600">Before KLYRR:</span> Most teams tolerate chaos longer than they admit
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
                        <div className="icon-modern glass-card relative w-10 h-10 rounded-xl bg-white/80 border-2 border-red-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
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
                <div className="glass-card p-6 md:p-8 max-w-sm border-2 border-red-200 rounded-2xl bg-red-50 hover:bg-red-100 transition-colors duration-300 hover:shadow-xl hover:scale-105">
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
                      <div className="bg-red-100 rounded p-1">
                        <div className="flex items-center space-x-2 text-xs text-red-600 bg-red-50 p-2 rounded border border-red-200">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span>Data silos detected</span>
                      </div>
                      </div>
                      <div className="bg-red-100 rounded p-1">
                        <div className="flex items-center space-x-2 text-xs text-red-600 bg-red-50 p-2 rounded border border-red-200">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span>Revenue leaks active</span>
                        </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {metrics.map((metric, index) => (
              <Card key={index} className="metric-card group border-2 border-blue-200 rounded-xl bg-card text-card-foreground shadow">
                <CardContent className="p-6 text-center">
                  <div className="icon-modern glass-card relative w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/80 border-2 border-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <div className={metric.color}>{metric.icon}</div>
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
          <div className="mb-16 animate-scale-in" style={{ animationDelay: '1s' }}>
            <Card className="glass-card border-2 border-blue-200 rounded-3xl bg-gradient-to-br from-blue-50/80 to-white/60 relative overflow-hidden backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-blue-400 hover:bg-white/80 hover:shadow-xl group">
              <CardContent className="p-10 lg:p-16 rounded-3xl">
                {/* Quote icon */}
                <div className="absolute top-8 left-8 opacity-30">
                  <svg className="w-24 h-24 text-blue-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 32 32">
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

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center p-6 rounded-xl bg-blue-50/40 border border-blue-200 shadow group transition-all duration-300 hover:bg-white hover:border-blue-400 hover:shadow-xl hover:scale-[1.03]">
                <div className={`icon-modern glass-card w-12 h-12 flex items-center justify-center rounded-xl shadow-md mr-4 transition-colors duration-300 ${feature.color} group-hover:text-blue-600`}>
                  {feature.icon}
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground mb-1 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</div>
                  <div className="text-foreground/60 text-sm">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <Button className="btn-hero text-white px-8 py-4 text-lg group" onClick={openModal}>
              <svg className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="relative z-10">Fix My Funnel</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose