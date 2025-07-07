import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'

// Shared header component for consistent headers
type HeaderSectionProps = { children: React.ReactNode; className?: string };
const HeaderSection = ({ children, className = '' }: HeaderSectionProps) => (
  <h2 className={`text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 text-center heading-gradient ${className}`}>{children}</h2>
);

const PricingTeaser: React.FC = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState([100000])
  const [currentConversionRate, setCurrentConversionRate] = useState([5])
  const [targetGrowth, setTargetGrowth] = useState([50])
  const [roiData, setRoiData] = useState({
    projectedRevenue: 0,
    additionalRevenue: 0,
    roiMultiplier: 0,
    paybackMonths: 0,
    annualImpact: 0
  })

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "One-time engine installs",
      description: "No recurring fees"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "30–90 day payback periods",
      description: "Fast ROI"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Transparent, scope-based pricing",
      description: "No hidden costs"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "2 referrals = 1 free engine tune-up",
      description: "Referral rewards"
    }
  ]

  // ROI Calculation Logic
  useEffect(() => {
    const revenue = monthlyRevenue[0]
    const conversionRate = currentConversionRate[0]
    const growthTarget = targetGrowth[0]
    
    // KLYRR typically improves conversion rates by 2-3x
    const klyrImprovementFactor = 2.5
    const newConversionRate = Math.min(conversionRate * klyrImprovementFactor, 25) // Cap at 25%
    
    // Calculate additional revenue from improved conversion
    const conversionImprovement = (newConversionRate - conversionRate) / conversionRate
    const additionalMonthlyRevenue = revenue * conversionImprovement * (growthTarget / 100)
    
    // Annual projections
    const annualAdditionalRevenue = additionalMonthlyRevenue * 12
    
    // Estimated KLYRR investment (based on typical pricing)
    const estimatedInvestment = Math.max(25000, revenue * 0.15) // Minimum $25K or 15% of monthly revenue
    
    // ROI calculations
    const roiMultiplier = annualAdditionalRevenue / estimatedInvestment
    const paybackMonths = estimatedInvestment / additionalMonthlyRevenue
    
    setRoiData({
      projectedRevenue: revenue + additionalMonthlyRevenue,
      additionalRevenue: additionalMonthlyRevenue,
      roiMultiplier: roiMultiplier,
      paybackMonths: paybackMonths,
      annualImpact: annualAdditionalRevenue
    })
  }, [monthlyRevenue, currentConversionRate, targetGrowth])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section id="pricing" className="section-padding section-spacing bg-gradient-to-b from-white to-gray-50/50 mb-20">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 lg:p-10 max-w-7xl mx-auto border-2 border-blue-200">
          {/* Section Header */}
          <div className="text-center mb-8 lg:mb-10 animate-fade-in-up">
            <Badge className="inline-flex items-center rounded-md text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 bg-blue-600 text-white shadow-lg glow-badge px-4 py-2 mb-4">
              Pricing & ROI
            </Badge>
            <HeaderSection>
              Ready to Install Your First Engine?
            </HeaderSection>
            <div className="space-y-4 max-w-4xl mx-auto">
              <p className="text-2xl font-bold text-black">
                You're not buying hours.
              </p>
              <p className="text-xl text-gray-700">
                You're buying infrastructure that prints pipeline — and prevents chaos.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Calculator and Impact Section */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* ROI Calculator */}
              <div className="animate-fade-in-up h-full" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white rounded-2xl border-2 border-blue-200 shadow-md p-8 h-full transition-all duration-300 hover:shadow-xl">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      ROI Calculator
                    </h3>
                    <p className="text-gray-600">
                      See your potential returns with KLYRR
                    </p>
                  </div>
                  <div className="space-y-8">
                    {/* Monthly Revenue Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Current Monthly Revenue
                      </label>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={monthlyRevenue}
                          onValueChange={setMonthlyRevenue}
                          max={1000000}
                          min={10000}
                          step={10000}
                          className="flex-1 slider-blue"
                          aria-label="Current Monthly Revenue Slider"
                        />
                        <span className="text-2xl font-bold text-blue-600 w-32 text-right">
                          {formatCurrency(monthlyRevenue[0])}
                        </span>
                      </div>
                    </div>
                    {/* Conversion Rate Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Current Demo-to-Close Rate
                      </label>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={currentConversionRate}
                          onValueChange={setCurrentConversionRate}
                          max={20}
                          min={1}
                          step={0.5}
                          className="flex-1 slider-blue"
                          aria-label="Current Demo-to-Close Rate Slider"
                        />
                        <span className="text-2xl font-bold text-blue-600 w-20 text-right">
                          {currentConversionRate[0]}%
                        </span>
                      </div>
                    </div>
                    {/* Growth Target */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Growth Target (% improvement)
                      </label>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={targetGrowth}
                          onValueChange={setTargetGrowth}
                          max={200}
                          min={25}
                          step={25}
                          className="flex-1 slider-blue"
                          aria-label="Growth Target Percentage Slider"
                        />
                        <span className="text-2xl font-bold text-blue-600 w-20 text-right">
                          +{targetGrowth[0]}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Results */}
              <div className="animate-fade-in-up h-full" style={{ animationDelay: '0.4s' }}>
                <div className="bg-white rounded-2xl border-2 border-blue-200 shadow-md p-8 h-full transition-all duration-300 hover:shadow-xl">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Projected Impact</h3>
                    <p className="text-gray-600">See your real-time impact metrics</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 h-[calc(100%-8rem)]">
                    <div className="p-6 bg-emerald-50 rounded-xl">
                      <div className="text-sm text-gray-600 mb-2">Additional Monthly Revenue</div>
                      <div className="text-2xl font-bold text-emerald-600">{formatCurrency(roiData.additionalRevenue)}</div>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-xl">
                      <div className="text-sm text-gray-600 mb-2">ROI Multiplier</div>
                      <div className="text-2xl font-bold text-blue-600">{roiData.roiMultiplier.toFixed(1)}x</div>
                    </div>
                    <div className="p-6 bg-purple-50 rounded-xl">
                      <div className="text-sm text-gray-600 mb-2">Payback Period</div>
                      <div className="text-2xl font-bold text-purple-600">{Math.ceil(roiData.paybackMonths)} months</div>
                    </div>
                    <div className="p-6 bg-orange-50 rounded-xl">
                      <div className="text-sm text-gray-600 mb-2">Annual Impact</div>
                      <div className="text-2xl font-bold text-orange-600">{formatCurrency(roiData.annualImpact)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white rounded-2xl border-2 border-blue-200 shadow-md p-8 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose KLYRR</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <Button className="inline-flex items-center justify-center gap-2 h-9 px-8 py-4 text-base rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium group animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              Get Free Diagnosis
              <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingTeaser