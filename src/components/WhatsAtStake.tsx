import React from 'react'
import { FireIcon, CurrencyDollarIcon, UsersIcon } from '@heroicons/react/24/outline'

// Shared header component for consistent headers
type HeaderSectionProps = { children: React.ReactNode; className?: string };
const HeaderSection = ({ children, className = '' }: HeaderSectionProps) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient ${className}`}>{children}</h2>
);

const WhatsAtStake: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-12 max-w-7xl mx-auto border-2 border-blue-200">
          <HeaderSection>
            What's At <span className="text-blue-600">Stake</span> And What Actually <span className="text-blue-600">Needs to Be Fixed</span>
          </HeaderSection>

          <div className="space-y-12">
            {/* Problem Statement */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-md hover:shadow-lg transition-shadow duration-300">
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
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-md hover:shadow-lg transition-shadow duration-300">
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
                <div className="text-center group border border-blue-200/60 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg transition-all duration-300 p-8 hover:shadow-2xl hover:-translate-y-1 hover:bg-white">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-error-100 to-error-200 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <FireIcon className="w-10 h-10 text-error-600" />
                  </div>
                  <div className="text-gray-700 font-semibold mb-7">Burnt leads</div>
                  <div className="text-gray-500 text-sm mt-1">Lost opportunities</div>
                </div>
                <div className="text-center group border border-blue-200/60 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg transition-all duration-300 p-8 hover:shadow-2xl hover:-translate-y-1 hover:bg-white">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-warning-100 to-warning-200 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <CurrencyDollarIcon className="w-10 h-10 text-warning-600" />
                  </div>
                  <div className="text-gray-700 font-semibold mb-7">Burnt budget</div>
                  <div className="text-gray-500 text-sm mt-1">Wasted investments</div>
                </div>
                <div className="text-center group border border-blue-200/60 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg transition-all duration-300 p-8 hover:shadow-2xl hover:-translate-y-1 hover:bg-white">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <UsersIcon className="w-10 h-10 text-accent-600" />
                  </div>
                  <div className="text-gray-700 font-semibold mb-7">Burnt out teams</div>
                  <div className="text-gray-500 text-sm mt-1">Decreased morale</div>
                </div>
              </div>
            </div>

            {/* Urgency Call */}
            <div className="text-center bg-orange-50 bg-gradient-to-r from-accent-50 to-warning-50 rounded-2xl p-8 border border-accent-100">
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