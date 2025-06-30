import React from 'react'

const WhatsAtStake: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
            What's At Stake — And What Actually Needs to Be Fixed
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
            <div className="card bg-gradient-to-br from-gray-50 to-white p-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
                Every week of delay costs:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-error-100 to-error-200 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-error-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  </div>
                  <div className="text-gray-700 font-semibold">Burnt leads</div>
                  <div className="text-gray-500 text-sm mt-1">Lost opportunities</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-warning-100 to-warning-200 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-warning-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="text-gray-700 font-semibold">Burnt budget</div>
                  <div className="text-gray-500 text-sm mt-1">Wasted investments</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-gray-700 font-semibold">Burnt out teams</div>
                  <div className="text-gray-500 text-sm mt-1">Decreased morale</div>
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