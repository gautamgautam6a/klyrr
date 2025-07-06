import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Engine {
  id: string
  icon: React.ReactNode
  color: string
  problem: string
  solution: string
  category: 'pipeline' | 'conversion' | 'expansion' | 'all'
  results: string
  tools: string[]
  timeline: string
}

const GrowthEngines: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'pipeline' | 'conversion' | 'expansion' | 'all'>('all')
  const [selectedEngine, setSelectedEngine] = useState<string | null>(null)

  const engines: Engine[] = [
    {
      id: 'zero-pipeline',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-600",
      problem: "Booking demos, but no one's buying?",
      solution: "Zero to Pipeline Engine",
      category: 'pipeline',
      results: "3x qualified lead volume in 60 days",
      tools: ["Clay", "Apollo", "Outreach"],
      timeline: "30-45 days"
    },
    {
      id: 'conversion-killshot',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-emerald-500 to-teal-600",
      problem: "Great calls, no closes?",
      solution: "Conversion Killshot Engine",
      category: 'conversion',
      results: "2.7x demo-to-close rate improvement",
      tools: ["Gong", "Salesforce", "Calendly"],
      timeline: "45-60 days"
    },
    {
      id: 'inbound-magnet',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      color: "from-purple-500 to-pink-600",
      problem: "Traffic, no calendar fills?",
      solution: "Inbound Magnet Engine",
      category: 'pipeline',
      results: "5x increase in qualified inbound leads",
      tools: ["HubSpot", "Unbounce", "Typeform"],
      timeline: "60-90 days"
    },
    {
      id: 'abm-fastlane',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: "from-orange-500 to-red-600",
      problem: "Enterprise buyers ghost you?",
      solution: "ABM Fastlane Engine",
      category: 'pipeline',
      results: "85% enterprise response rate",
      tools: ["6sense", "Demandbase", "LinkedIn Sales Navigator"],
      timeline: "90-120 days"
    },
    {
      id: 'founder-signal',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: "from-cyan-500 to-blue-600",
      problem: "You're not the founder they trust yet?",
      solution: "Founder Signal Engine",
      category: 'conversion',
      results: "10x founder-led deal velocity",
      tools: ["LinkedIn", "Twitter", "Luma"],
      timeline: "60-90 days"
    },
    {
      id: 'land-expand',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "from-violet-500 to-purple-600",
      problem: "Clients churn quietly after sale?",
      solution: "Land & Expand Engine",
      category: 'expansion',
      results: "300% account expansion revenue",
      tools: ["ChurnZero", "Gainsight", "Slack"],
      timeline: "120-180 days"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Engines', count: engines.length },
    { id: 'pipeline', label: 'Pipeline', count: engines.filter(e => e.category === 'pipeline').length },
    { id: 'conversion', label: 'Conversion', count: engines.filter(e => e.category === 'conversion').length },
    { id: 'expansion', label: 'Expansion', count: engines.filter(e => e.category === 'expansion').length }
  ]

  const filteredEngines = selectedCategory === 'all' 
    ? engines 
    : engines.filter(engine => engine.category === selectedCategory)

  return (
    <section id="engines" className="section-padding gradient-section">
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-blue-700 border">
              Product Offering
            </Badge>
            <h2 className="gradient-text text-balance mb-6">
              The 6 KLYRR Growth Engines
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              <p className="text-xl text-foreground/70 text-balance">
                Your GTM isn't broken everywhere — just at the choke points.
              </p>
              <p className="text-xl font-semibold text-foreground text-balance">
                Each of our engines fixes a specific failure point — and turns it into a compounding asset:
              </p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as any)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 text-sm md:text-base ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg scale-105'
                    : 'bg-white/70 hover:bg-white/90 text-blue-700 hover:text-foreground border border-blue-200/50 hover:border-blue-300'
                }`}
              >
                <span>{category.label}</span>
                <Badge className="ml-2 px-2 py-1 text-xs bg-white/20 text-current border-0">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>

          {/* Engines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
            {filteredEngines.map((engine, index) => (
              <Card 
                key={engine.id}
                className={`interactive-card group cursor-pointer transition-all duration-500 ${
                  selectedEngine === engine.id ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
                onClick={() => setSelectedEngine(selectedEngine === engine.id ? null : engine.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${engine.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Icon container */}
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${engine.color} flex items-center justify-center mb-6 text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    {engine.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      {engine.problem}
                    </h3>
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      <p className="text-foreground/80 font-semibold group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                        You need the <span className="gradient-text">{engine.solution}</span>
                      </p>
                    </div>

                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      selectedEngine === engine.id ? 'max-h-[500px] md:max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-blue-200/50 space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground/80 mb-2">Results:</h4>
                          <p className="text-sm text-emerald-700 font-medium bg-emerald-50 px-3 py-2 rounded-lg">
                            {engine.results}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground/80 mb-2">Tools Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {engine.tools.map((tool, toolIndex) => (
                              <Badge key={toolIndex} className="text-xs bg-blue-50 text-blue-700 border border-blue-200">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground/80 mb-2">Timeline:</h4>
                          <p className="text-sm text-amber-700 font-medium bg-amber-50 px-3 py-2 rounded-lg">
                            {engine.timeline}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expand/Collapse indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-300 ${
                      selectedEngine === engine.id ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Subtle pattern overlay */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500 overflow-hidden rounded-2xl">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                      <pattern id={`pattern-${engine.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor"/>
                      </pattern>
                      <rect width="100" height="100" fill={`url(#pattern-${engine.id})`}/>
                    </svg>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Engine Flow Visualization */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Description */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Engines Work <span className="gradient-text">Together</span>
                </h3>
                <p className="text-lg text-foreground/70 mb-6">
                  Each engine feeds data and insights to the others, creating compound growth effects.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <span className="text-foreground/80">Attribution Engine identifies what's working</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-sm">2</span>
                    </div>
                    <span className="text-foreground/80">Conversion Engine optimizes those channels</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">3</span>
                    </div>
                    <span className="text-foreground/80">Scaling Engine amplifies the winners</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-sm">4</span>
                    </div>
                    <span className="text-foreground/80">Growth compounds across all engines</span>
                  </div>
                </div>
              </div>

              {/* Right: Interactive Flow */}
              <div className="hidden md:flex items-center justify-center">
                <div className="relative">
                  {/* Central Hub */}
                  <div className="glass-card p-6 rounded-2xl">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center relative">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="text-xs font-bold text-blue-900">GTM OS</span>
                      </div>
                      
                      {/* Pulsing Ring */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-blue-300 animate-ping opacity-75"></div>
                    </div>
                  </div>

                  {/* Orbiting Engine Nodes */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl flex items-center justify-center border-2 border-emerald-200 animate-pulse">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center border-2 border-purple-200 animate-pulse" style={{animationDelay: '0.5s'}}>
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center border-2 border-orange-200 animate-pulse" style={{animationDelay: '1s'}}>
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center border-2 border-amber-200 animate-pulse" style={{animationDelay: '1.5s'}}>
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Connecting Lines (animated) */}
                  <svg className="absolute inset-0 w-full h-full" style={{width: '200px', height: '200px', top: '-50px', left: '-50px'}}>
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="60" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-spin" style={{animationDuration: '20s'}}/>
                    <circle cx="100" cy="100" r="80" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Process Overview */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Card className="glass-card border-blue-200/50">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    How Engine Installation Works
                  </h3>
                  <p className="text-foreground/70 max-w-2xl mx-auto">
                    Each engine follows our proven 4-phase methodology for rapid deployment and measurable results.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      step: "01",
                      title: "Diagnose",
                      description: "Identify specific choke points",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      )
                    },
                    {
                      step: "02",
                      title: "Design",
                      description: "Custom engine configuration",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                        </svg>
                      )
                    },
                    {
                      step: "03",
                      title: "Deploy",
                      description: "Install workflows & automations",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )
                    },
                    {
                      step: "04",
                      title: "Drive",
                      description: "Monitor & optimize results",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )
                    }
                  ].map((phase, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-blue-600">
                          {phase.icon}
                        </div>
                      </div>
                      <div className="text-sm font-mono text-blue-600 font-bold mb-2">{phase.step}</div>
                      <h4 className="font-bold text-foreground mb-2">{phase.title}</h4>
                      <p className="text-sm text-foreground/60">{phase.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Install Your First Engine?
              </h3>
              <p className="text-foreground/70 mb-8">
                Get a free GTM diagnosis to identify which engine will deliver the biggest impact for your business.
              </p>
            </div>
            <Button className="btn-hero text-white px-8 py-4 text-lg group">
              <span className="relative z-10">Get Free Diagnosis</span>
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

export default GrowthEngines