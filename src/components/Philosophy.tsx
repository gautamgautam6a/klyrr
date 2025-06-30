import React from 'react'

const Philosophy: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
            Why We Built KLYRR — Founder's Philosophy
          </h2>

          <div className="space-y-12">
            {/* Opening Statement */}
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-900 mb-4">
                We didn't start this as an agency.
              </p>
              <p className="text-xl text-gray-700">
                We started it because we were <strong>done watching SaaS founders burn out</strong> chasing results with Frankensteined funnels and disconnected tools.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                We've been inside the chaos:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-error-500 mt-1">•</span>
                  <span>Sales calls that never convert</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-error-500 mt-1">•</span>
                  <span>"Growth experiments" that stall after 2 weeks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-error-500 mt-1">•</span>
                  <span>Pressure from investors, boards, and burnt-out teams</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-r from-success-50 to-accent-50 rounded-2xl p-8 border border-success-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                KLYRR is the system we wish we had:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 shadow-soft">
                  <div className="text-2xl font-bold text-primary-600 mb-2">Fast</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-soft">
                  <div className="text-2xl font-bold text-secondary-600 mb-2">Modular</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-soft">
                  <div className="text-2xl font-bold text-success-600 mb-2">Engineered for control</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Philosophy 