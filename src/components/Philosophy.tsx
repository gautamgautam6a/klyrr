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
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">We didn't start this as an agency.</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-2">We started it because we were <span className="font-bold">done watching SaaS founders burn out</span> chasing results with Frankensteined funnels and disconnected tools.</p>
            </div>

            {/* Experience */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-left max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-black mb-4">We've been inside the chaos:</h3>
              <ul className="space-y-3 text-gray-900">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Sales calls that never convert</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>"Growth experiments" that stall after 2 weeks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Pressure from investors, boards, and burnt-out teams</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-left max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-black mb-4">KLYRR is the system we wish we had:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-2xl font-bold text-blue-700 mb-2">Fast</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-2xl font-bold text-blue-700 mb-2">Modular</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">Engineered for control</div>
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