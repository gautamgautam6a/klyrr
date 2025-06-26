import React from 'react'

const WhatsAtStake: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
            ⚠️ WHAT'S AT STAKE — AND WHAT ACTUALLY NEEDS TO BE FIXED
          </h2>

          <div className="space-y-12">
            {/* Problem Statement */}
            <div className="bg-gradient-to-r from-error-50 to-warning-50 rounded-2xl p-8 border border-error-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                You're not "fine." You're tolerating:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-error-500 mt-1">•</span>
                  <span>Silent churn and unexplained ghosting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-error-500 mt-1">•</span>
                  <span>Sales pipelines stitched together with guesswork</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-error-500 mt-1">•</span>
                  <span>Campaigns that look active but convert nothing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-error-500 mt-1">•</span>
                  <span>Founders stepping in just to save deals</span>
                </li>
              </ul>
            </div>

            {/* Truth Statement */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
              <p className="text-xl text-gray-800 font-semibold mb-4">
                And here's the truth no one tells you:
              </p>
              <p className="text-2xl font-bold text-primary-700">
                If your growth relies on hustle instead of infrastructure, you're not scaling. You're spinning.
              </p>
            </div>

            {/* Cost of Delay */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Every week of delay costs:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-error-600 mb-2">🔥</div>
                  <div className="text-gray-700 font-medium">Burnt leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning-600 mb-2">💰</div>
                  <div className="text-gray-700 font-medium">Burnt budget</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-600 mb-2">😤</div>
                  <div className="text-gray-700 font-medium">Burnt out teams</div>
                </div>
              </div>
            </div>

            {/* Urgency Call */}
            <div className="text-center bg-gradient-to-r from-accent-50 to-warning-50 rounded-2xl p-8 border border-accent-100">
              <p className="text-2xl font-bold text-gray-900 mb-4">
                Others have already systemized this.
              </p>
              <p className="text-xl text-gray-700">
                So what's keeping you here?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsAtStake 