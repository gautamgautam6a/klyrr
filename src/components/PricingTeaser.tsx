import React from 'react'

const PricingTeaser: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
            💸 WHAT DOES KLYRR COST? — PRICING TEASER
          </h2>

          <div className="space-y-12">
            {/* Value Proposition */}
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-900 mb-4">
                You're not buying hours.
              </p>
              <p className="text-xl text-gray-700">
                You're buying infrastructure that prints pipeline — and prevents chaos.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card p-6 text-center">
                <div className="text-2xl mb-3">✅</div>
                <div className="text-gray-700 font-medium">One-time engine installs</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-2xl mb-3">⏱️</div>
                <div className="text-gray-700 font-medium">30–90 day payback periods</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-2xl mb-3">🔍</div>
                <div className="text-gray-700 font-medium">Transparent, scope-based pricing</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-2xl mb-3">🎁</div>
                <div className="text-gray-700 font-medium">2 referrals = 1 free engine tune-up</div>
              </div>
            </div>

            {/* Cost Question */}
            <div className="bg-gradient-to-r from-warning-50 to-accent-50 rounded-2xl p-8 border border-warning-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What's the cost of not fixing your GTM?
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  (Hint: It's not just missed revenue. It's the compounding chaos you don't see.)
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="btn-accent text-lg px-8 py-4">
                💸 View Pricing + ROI Breakdown
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingTeaser 