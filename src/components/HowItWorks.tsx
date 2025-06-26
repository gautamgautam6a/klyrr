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
            🔧 HOW IT WORKS — CLARITY + SIMPLICITY
          </h2>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              GTM transformation in 5 moves:
            </h3>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-primary-300 to-primary-100 hidden md:block"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-soft">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">
                      → {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="btn-primary text-lg px-8 py-4">
              ⚙️ See the Full Blueprint
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 