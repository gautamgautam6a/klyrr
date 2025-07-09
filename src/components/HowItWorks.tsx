import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, Puzzle, ClipboardCheck, Repeat, TrendingUp } from 'lucide-react'
import { useFunnelModal } from '@/App';

const HowItWorks: React.FC = () => {
  const { openModal } = useFunnelModal();
  const steps = [
    {
      number: 1,
      title: "Diagnose What's Actually Broken",
      description: "Funnel leaks, ICP misfires, message-market gaps",
      icon: <Search size={28} strokeWidth={2.2} className="text-blue-500" />
    },
    {
      number: 2,
      title: "Match the Right Growth Engine",
      description: "6 pre-built, plug-and-play systems built for SaaS",
      icon: <Puzzle size={28} strokeWidth={2.2} className="text-purple-500" />
    },
    {
      number: 3,
      title: "Install Copy, Workflows & Automations",
      description: "No retainers, no fluff — just working infrastructure",
      icon: <ClipboardCheck size={28} strokeWidth={2.2} className="text-emerald-500" />
    },
    {
      number: 4,
      title: "Run Weekly Signal-Based Sprints",
      description: "No guesswork. Just compounding insights",
      icon: <Repeat size={28} strokeWidth={2.2} className="text-orange-500" />
    },
    {
      number: 5,
      title: "Scale What's Proven",
      description: "Attribution-ready. Team-agnostic. Repeatable.",
      icon: <TrendingUp size={28} strokeWidth={2.2} className="text-blue-500" />
    }
  ]

  return (
    <section id="how-it-works" className="section-padding section-spacing gradient-section animate-fade-in-up pt-0 pb-0">
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
                <div className="glass-card bg-white/80 rounded-2xl p-6 shadow-md border-2 border-blue-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 h-full group">
                  <div className="flex flex-col items-center mb-4">
                    <span className="text-xs font-bold text-blue-500 tracking-widest mb-2">{`0${step.number}`}</span>
                    <div className="w-16 h-16 rounded-xl bg-white border border-blue-200 flex items-center justify-center shadow group-hover:border-blue-400 group-hover:bg-blue-50 transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-black mb-1 mt-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
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
            <Button className="inline-flex items-center justify-center gap-2 h-9 px-8 py-4 text-base rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium group" onClick={openModal}>
              Fix My Funnel
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