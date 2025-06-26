import React from 'react'

const GrowthEngines: React.FC = () => {
  const engines = [
    {
      icon: "💥",
      problem: "Booking demos, but no one's buying?",
      solution: "You need the Zero to Pipeline Engine"
    },
    {
      icon: "🩸",
      problem: "Great calls, no closes?",
      solution: "You need the Conversion Killshot Engine"
    },
    {
      icon: "🌪",
      problem: "Traffic, no calendar fills?",
      solution: "You need the Inbound Magnet Engine"
    },
    {
      icon: "🕵️‍♂️",
      problem: "Enterprise buyers ghost you?",
      solution: "You need the ABM Fastlane Engine"
    },
    {
      icon: "🧱",
      problem: "You're not the founder they trust yet?",
      solution: "You need the Founder Signal Engine"
    },
    {
      icon: "🚪",
      problem: "Clients churn quietly after sale?",
      solution: "You need the Land & Expand Engine"
    }
  ]

  return (
    <section id="engines" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 heading-gradient">
            🚀 THE 6 KLYRR GROWTH ENGINES — PRODUCT OFFERING
          </h2>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 mb-4">
              Your GTM isn't broken everywhere — just at the choke points.
            </p>
            <p className="text-xl font-semibold text-gray-900">
              Each of our engines fixes a specific failure point — and turns it into a compounding asset:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engines.map((engine, index) => (
              <div key={index} className="card p-8 hover:shadow-large transition-all duration-300">
                <div className="text-4xl mb-4">{engine.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {engine.problem}
                </h3>
                <p className="text-primary-600 font-medium">
                  → {engine.solution}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="btn-primary text-lg px-8 py-4">
              📊 Diagnose Your Bottlenecks Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GrowthEngines 