import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const CTA: React.FC = () => {
  return (
    <section className="section-padding section-spacing bg-gradient-to-b from-white to-gray-50/50 animate-fade-in-up mb-20">
      <div className="container mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="relative overflow-hidden bg-blue-600 rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 group transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-white text-blue-600 border-blue-100">
              Get Started Today
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in-up">
              Ready to Install Your First Engine?
            </h2>
            
            <p className="text-xl md:text-2xl text-white mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Join forward-thinking companies using KLYRR to transform their go-to-market strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button className="w-full sm:w-auto bg-white hover:bg-blue-50 text-blue-600 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Schedule Demo
                <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              
              <Button variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-2 border-white text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA 