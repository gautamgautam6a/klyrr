import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Diagnose What's Actually Broken",
      description: "Funnel leaks, ICP misfires, message-market gaps",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Match the Right Growth Engine",
      description: "6 pre-built, plug-and-play systems built for SaaS",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Install Copy, Workflows & Automations",
      description: "No retainers, no fluff — just working infrastructure",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: 4,
      title: "Run Weekly Signal-Based Sprints",
      description: "No guesswork. Just compounding insights",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: 5,
      title: "Scale What's Proven",
      description: "Attribution-ready. Team-agnostic. Repeatable.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ]

  return (
    <section className="section-padding section-spacing bg-gradient-to-b from-white to-gray-50/50 animate-fade-in-up mb-20">
      <div className="container mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 lg:p-10 max-w-7xl mx-auto border-2 border-blue-200">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <Badge className="inline-flex items-center rounded-md text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 bg-blue-600 text-white shadow-lg glow-badge px-4 py-2 mb-6">
              Our Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              How <span className="text-blue-600">It Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              GTM transformation in 5 strategic moves
            </p>
          </div>

          {/* Desktop Layout - Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-6 mb-10">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute top-12 -right-4 z-10">
                    <svg className="w-8 h-8 text-gray-300 group-hover:text-primary-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
                
                {/* Step Card */}
                <div className="glass-card bg-white/80 rounded-2xl p-6 shadow-md border-2 border-blue-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 h-full">
                  <div className="text-center">
                    {/* Step Number */}
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-600 font-bold text-lg">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-primary-600 mb-4 flex justify-center">{step.icon}</div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout - Vertical */}
          <div className="lg:hidden space-y-6 mb-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-primary-200 to-gray-200"></div>
                )}
                
                <div className="flex items-start space-x-4">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-primary-600">{step.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button className="inline-flex items-center justify-center gap-2 h-9 px-8 py-4 text-base rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium group">
              Get Free Diagnosis
              <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 