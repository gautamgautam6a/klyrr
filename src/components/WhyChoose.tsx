import React from 'react'

const WhyChoose: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
            💡 WHY CHOOSE KLYRR — PROOF + TRUST
          </h2>

          <div className="space-y-12">
            {/* Problem Statement */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Most teams tolerate chaos longer than they admit:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-error-500 mt-1">•</span>
                  <span>SDRs chasing the wrong ICPs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-error-500 mt-1">•</span>
                  <span>Founders stuck in sales calls</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-error-500 mt-1">•</span>
                  <span>Demos that go nowhere</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-error-500 mt-1">•</span>
                  <span>Channels you keep funding "just in case"</span>
                </li>
              </ul>
            </div>

            {/* Solution Promise */}
            <div className="text-center">
              <p className="text-xl text-gray-700 mb-8">
                You don't need another agency.
              </p>
              <p className="text-xl font-semibold text-gray-900 mb-12">
                You need an operating system for growth — one that's already compounding for teams like yours:
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">150+</div>
                <div className="text-gray-600">SQLs booked in 90 days</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-success-600 mb-2">2.7x</div>
                <div className="text-gray-600">increase in demo-to-close rate</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-600 mb-2">$390K</div>
                <div className="text-gray-600">in revenue recovered</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary-600 mb-2">3</div>
                <div className="text-gray-600">clients crossed $1M ARR in under 120 days</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
              <blockquote className="text-xl text-gray-800 italic mb-4">
                "We didn't realize how broken our funnel was until KLYRR turned the lights on."
              </blockquote>
              <cite className="text-gray-600 font-medium">— SaaS COO</cite>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="btn-primary text-lg px-8 py-4">
                📦 Explore the Engines That Do This
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose 