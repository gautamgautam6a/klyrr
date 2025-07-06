import React from 'react'

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Diagnose What's Actually Broken",
      description: "Funnel leaks, ICP misfires, message-market gaps"
    },
    {
      number: 2,
      title: "Match the Right Growth Engine",
      description: "6 pre-built, plug-and-play systems built for SaaS"
    },
    {
      number: 3,
      title: "Install Copy, Workflows & Automations",
      description: "No retainers, no fluff — just working infrastructure"
    },
    {
      number: 4,
      title: "Run Weekly Signal-Based Sprints",
      description: "No guesswork. Just compounding insights"
    },
    {
      number: 5,
      title: "Scale What's Proven",
      description: "Attribution-ready. Team-agnostic. Repeatable."
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
            How It Works — Clarity + Simplicity
          </h2>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              GTM transformation in 5 moves:
            </h3>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-primary-400 to-primary-200 hidden md:block"></div>
                )}
                
                <div className="flex items-start space-x-6 group">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                    <span className="relative z-10">{step.number}</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 card p-6 group-hover:shadow-large group-hover:-translate-y-1 transition-all duration-500">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                      {step.title}
                    </h4>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="btn-primary text-lg">
              Fix My Funnel Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 