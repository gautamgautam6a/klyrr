import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

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
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-12 max-w-7xl mx-auto border-2 border-blue-200">
          {/* Section Header */}
          <div className="text-center mb-16">
            <HeaderSection>
              What Does KLYRR Cost? — Pricing Teaser
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

          <div className="grid lg:grid-cols-2 gap-8 items-start h-full flex-col">
            {/* ROI Calculator */}
            <div className="flex-1 h-full">
              <div className="glass-card bg-white/80 border-2 border-blue-200 rounded-2xl shadow-md p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    ROI Calculator
                  </h3>
                  <p className="text-gray-600">
                    See your potential returns with KLYRR
                  </p>
                </div>
                <div className="space-y-8">
                  {/* Monthly Revenue Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Current Monthly Revenue
                    </label>
                    <div className="flex items-center space-x-4">
                      <Slider
                        value={monthlyRevenue}
                        onValueChange={setMonthlyRevenue}
                        max={1000000}
                        min={10000}
                        step={10000}
                        className="w-full slider-blue"
                        aria-label="Current Monthly Revenue Slider"
                      />
                      <span className="text-2xl font-extrabold text-blue-600 min-w-[110px] text-right">
                        {formatCurrency(monthlyRevenue[0])}
                      </span>
                    </div>
                  </div>
                  {/* Conversion Rate Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Current Demo-to-Close Rate
                    </label>
                    <div className="flex items-center space-x-4">
                      <Slider
                        value={currentConversionRate}
                        onValueChange={setCurrentConversionRate}
                        max={20}
                        min={1}
                        step={0.5}
                        className="w-full slider-blue"
                        aria-label="Current Demo-to-Close Rate Slider"
                      />
                      <span className="text-2xl font-extrabold text-blue-600 min-w-[60px] text-right">
                        {currentConversionRate[0]}%
                      </span>
                    </div>
                  </div>
                  {/* Growth Target */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Growth Target (% improvement)
                    </label>
                    <div className="flex items-center space-x-4">
                      <Slider
                        value={targetGrowth}
                        onValueChange={setTargetGrowth}
                        max={200}
                        min={25}
                        step={25}
                        className="w-full slider-blue"
                        aria-label="Growth Target Percentage Slider"
                      />
                      <span className="text-2xl font-extrabold text-blue-600 min-w-[60px] text-right">
                        +{targetGrowth[0]}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="flex-1 h-full">
              <div className="glass-card bg-white/80 border-2 border-blue-200 rounded-2xl shadow-md p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Your Projected Results
                  </h3>
                  <p className="text-gray-600">
                    Based on typical KLYRR outcomes
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-extrabold text-emerald-600 mb-1">
                      {formatCurrency(roiData.additionalRevenue)}
                    </div>
                    <div className="text-sm text-gray-500">Additional Monthly Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-extrabold text-blue-600 mb-1">
                      {roiData.roiMultiplier.toFixed(1)}x
                    </div>
                    <div className="text-sm text-gray-500">ROI Multiplier</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-extrabold text-amber-600 mb-1">
                      {roiData.paybackMonths.toFixed(1)}
                    </div>
                    <div className="text-sm text-gray-500">Months to Payback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-extrabold text-purple-600 mb-1">
                      {formatCurrency(roiData.annualImpact)}
                    </div>
                    <div className="text-sm text-gray-500">Annual Impact</div>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-4">
                  <div>
                    <div className="text-sm font-medium text-emerald-800">Before KLYRR</div>
                    <div className="text-2xl font-bold text-emerald-800">
                      {formatCurrency(monthlyRevenue[0])}
                    </div>
                  </div>
                  <div className="text-emerald-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-emerald-800">After KLYRR</div>
                    <div className="text-2xl font-bold text-emerald-800">
                      {formatCurrency(roiData.projectedRevenue)}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 text-center bg-blue-50 p-3 rounded-2xl border-2 border-blue-200">
                  *Results based on typical KLYRR client outcomes. Actual results may vary.
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 my-12 md:my-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {benefits.map((benefit, index) => (
              <Card key={index} className="rounded-2xl border-2 border-blue-200 bg-card text-card-foreground shadow interactive-card group">
                <CardContent className="p-6 text-center">
                  <div className="icon-modern mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg">
                    {benefit.icon}
                  </div>
                  <div className="font-semibold text-foreground mb-1 text-sm">
                    {benefit.title}
                  </div>
                  <div className="text-foreground/60 text-xs">
                    {benefit.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cost Question */}
          <div className="mb-16 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <Card className="glass-card border-orange-200/50">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    What's the cost of <span className="gradient-text">not</span> fixing your GTM?
                  </h3>
                  <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                    (Hint: It's not just missed revenue. It's the compounding chaos you don't see.)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-foreground/70">
                Book a free GTM diagnosis to see exactly which engines will deliver the biggest impact for your business.
              </p>
            </div>
            <Button className="btn-hero text-white px-8 py-4 text-lg group">
              <span className="relative z-10">Fix My Funnel Now</span>
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