import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-success-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in">
            <span className="block">What If Your Growth Has Already</span>
            <span className="block heading-gradient">Flatlined — And You're the</span>
            <span className="block heading-gradient">Last to Know?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Leads look fine. Metrics look "okay." But deals keep slipping, buyers ghost, and your CAC quietly climbs.
          </p>

          {/* Punchline */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-soft border border-white/20 animate-scale-in">
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              <strong>KLYRR installs modular GTM systems</strong> that replace duct-taped growth with predictable pipeline, conversion, and expansion — in days, not quarters.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-success-500">✅</span>
                <span className="text-gray-700">Built for SaaS Founders</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-success-500">✅</span>
                <span className="text-gray-700">Installs in days — no hires, no retainers</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-success-500">✅</span>
                <span className="text-gray-700">Powered by Clay, Apollo, Groq, GPT, n8n & KLYRR's GTM OS</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button className="btn-accent text-lg px-8 py-4">
              🚨 Fix My Funnel Now
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              🔍 See What I'm Losing
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 