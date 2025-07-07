import React from 'react'
import { FireIcon, CurrencyDollarIcon, UsersIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Shared header component for consistent headers
type HeaderSectionProps = { children: React.ReactNode; className?: string };
const HeaderSection = ({ children, className = '' }: HeaderSectionProps) => (
  <h2 className={`text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 text-center heading-gradient ${className}`}>{children}</h2>
);

const WhatsAtStake: React.FC = () => {
  return (
    <section id="about" className="section-padding section-spacing">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 lg:p-10 max-w-7xl mx-auto border-2 border-blue-200">
          {/* Section Header */}
          <div className="text-center mb-8 lg:mb-10">
            <Badge className="inline-flex items-center rounded-md text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 bg-blue-600 text-white shadow-lg glow-badge px-4 py-2 mb-6">
              The Problem
            </Badge>
            <HeaderSection>
              What's At <span className="text-blue-600">Stake</span> And What Actually <span className="text-blue-600">Needs to Be Fixed</span>
            </HeaderSection>
          </div>

          <div className="space-y-8">
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
            <div className="card bg-white p-8 animate-fade-in-up rounded-3xl shadow-md border border-blue-100" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
                Every week of delay costs:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Burnt leads */}
                <div className="text-center flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-blue-100">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-red-100 flex items-center justify-center">
                    <FireIcon className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="text-gray-900 font-semibold text-lg mb-2">Burnt leads</div>
                  <div className="text-gray-400 text-base">Lost opportunities</div>
                </div>
                {/* Burnt budget */}
                <div className="text-center flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-blue-100">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-yellow-100 flex items-center justify-center">
                    <CurrencyDollarIcon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div className="text-gray-900 font-semibold text-lg mb-2">Burnt budget</div>
                  <div className="text-gray-400 text-base">Wasted investments</div>
                </div>
                {/* Burnt out teams */}
                <div className="text-center flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-blue-100">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-orange-100 flex items-center justify-center">
                    <UsersIcon className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-gray-900 font-semibold text-lg mb-2">Burnt out teams</div>
                  <div className="text-gray-400 text-base">Decreased morale</div>
                </div>
              </div>
            </div>

            {/* Urgency Call */}
            <div className="text-center bg-orange-50 bg-gradient-to-r from-accent-50 to-warning-50 rounded-2xl p-8 border border-accent-100">
              <p className="text-2xl font-bold text-gray-900 mb-4">
                Others have already systemized this.
              </p>
              <p className="text-xl text-gray-700 mb-6">
                So what's keeping you here?
              </p>
              <Button className="btn-hero text-white px-8 py-4 text-lg group">
                <svg className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="relative z-10">Get Free Diagnosis</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsAtStake 