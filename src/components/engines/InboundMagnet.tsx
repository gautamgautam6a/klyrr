import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CheckCircle, ArrowRight, Target, Zap, TrendingUp, Users, Clock, Shield, BarChart3, Brain, Cpu, Database, Globe, MessageCircle, Search, Star, Award, ChevronRight } from 'lucide-react'

const painPoints = [
  {
    icon: <TrendingUp className="w-6 h-6 text-red-500" />,
    title: "Low Conversion Rates",
    description: "Only 2-3% of website visitors convert to leads",
    impact: "Lost Revenue"
  },
  {
    icon: <Users className="w-6 h-6 text-red-500" />,
    title: "Poor Lead Quality",
    description: "Unqualified leads waste sales team time",
    impact: "Inefficient Sales"
  },
  {
    icon: <Clock className="w-6 h-6 text-red-500" />,
    title: "Long Sales Cycles",
    description: "Prospects take months to make decisions",
    impact: "Delayed Revenue"
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-red-500" />,
    title: "Attribution Blindness",
    description: "Can't track which channels drive revenue",
    impact: "Wasted Marketing Spend"
  }
]

const solutions = [
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: "Intelligent Lead Scoring",
    description: "AI-powered qualification that identifies high-intent prospects automatically",
    features: ["Behavioral scoring", "Engagement tracking", "Predictive analytics", "Auto-qualification"],
    metrics: "40% more qualified leads"
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-600" />,
    title: "Conversion Optimization",
    description: "Scientific approach to improving every touchpoint in your funnel",
    features: ["A/B testing framework", "Heatmap analysis", "Form optimization", "CTA enhancement"],
    metrics: "2.4x conversion increase"
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-green-600" />,
    title: "Automated Nurturing",
    description: "Personalized sequences that move prospects through the buyer journey",
    features: ["Behavioral triggers", "Dynamic content", "Multi-channel approach", "Lifecycle automation"],
    metrics: "60% faster sales cycles"
  },
  {
    icon: <Target className="w-8 h-8 text-orange-600" />,
    title: "Personalization Engine",
    description: "Deliver relevant experiences based on visitor behavior and company data",
    features: ["Dynamic content", "Account-based targeting", "Industry customization", "Role-based messaging"],
    metrics: "3x engagement rates"
  }
]

const features = [
  {
    category: "Capture & Qualify",
    items: [
      { name: "Advanced Form Optimization", desc: "Multi-step forms with conditional logic" },
      { name: "Progressive Profiling", desc: "Gradually collect prospect information" },
      { name: "Intent Data Integration", desc: "Connect with 6sense, Bombora, ZoomInfo" },
      { name: "Chatbot Qualification", desc: "AI-powered pre-qualification conversations" }
    ]
  },
  {
    category: "Nurture & Convert",
    items: [
      { name: "Behavioral Email Sequences", desc: "Triggered campaigns based on actions" },
      { name: "Content Recommendation", desc: "AI-driven content suggestions" },
      { name: "Meeting Scheduling", desc: "Calendly/Chili Piper integration" },
      { name: "Sales Handoff Automation", desc: "Seamless lead routing to sales reps" }
    ]
  },
  {
    category: "Measure & Optimize",
    items: [
      { name: "Revenue Attribution", desc: "Track every touchpoint to closed won" },
      { name: "Conversion Analytics", desc: "Detailed funnel performance metrics" },
      { name: "Predictive Insights", desc: "Forecast pipeline and revenue impact" },
      { name: "ROI Reporting", desc: "Measure marketing contribution to revenue" }
    ]
  }
]

const testimonials = [
  {
    quote: "KLYRR transformed our inbound funnel from a cost center to our biggest revenue driver. We went from 12 demos/month to 47 in 8 weeks.",
    author: "Sarah Chen",
    title: "VP Marketing",
    company: "TechFlow Solutions",
    logo: "🚀"
  },
  {
    quote: "The attribution clarity alone was worth the investment. We finally know which channels drive actual revenue, not just vanity metrics.",
    author: "Michael Rodriguez",
    title: "Head of Growth",
    company: "DataPrime Inc",
    logo: "📊"
  },
  {
    quote: "Our sales team loves the quality of leads now. Every meeting is with someone who's actually ready to buy.",
    author: "Jennifer Kim",
    title: "Sales Director",
    company: "CloudScale Systems",
    logo: "☁️"
  }
]

const pricing = [
  {
    name: "Foundation",
    tier: "Essential",
    price: "Starting at $8,500/month",
    description: "Perfect for growing SaaS companies ready to scale their inbound engine",
    features: [
      "Complete funnel audit & strategy",
      "Landing page optimization",
      "Lead capture system setup",
      "Email nurture sequences (2x)",
      "CRO implementation",
      "Basic analytics dashboard"
    ],
    cta: "Start Foundation",
    popular: false
  },
  {
    name: "Growth",
    tier: "Advanced",
    price: "Starting at $15,000/month",
    description: "For companies ready to implement sophisticated lead qualification and nurturing",
    features: [
      "Everything in Foundation",
      "Advanced lead scoring",
      "Behavioral analytics setup",
      "Chatbot implementation",
      "A/B testing framework",
      "Multi-channel automation",
      "Advanced attribution"
    ],
    cta: "Scale with Growth",
    popular: true
  },
  {
    name: "Enterprise",
    tier: "Premium",
    price: "Starting at $25,000/month",
    description: "Complete revenue engine for companies optimizing at scale",
    features: [
      "Everything in Growth",
      "Website personalization",
      "Account-based targeting",
      "Predictive analytics",
      "Custom integrations",
      "Dedicated success manager",
      "White-glove implementation"
    ],
    cta: "Enterprise Solution",
    popular: false
  }
]

const process = [
  {
    phase: "Discovery & Audit",
    duration: "Week 1-2",
    description: "Comprehensive analysis of your current funnel, traffic, and conversion patterns",
    deliverables: ["Funnel audit report", "Conversion opportunity map", "Technical assessment", "Strategy roadmap"]
  },
  {
    phase: "Implementation",
    duration: "Week 3-8",
    description: "Build and deploy your optimized inbound engine with all systems integrated",
    deliverables: ["Optimized landing pages", "Automated workflows", "Lead scoring system", "Analytics setup"]
  },
  {
    phase: "Launch & Optimize",
    duration: "Week 9-12",
    description: "Monitor performance and continuously optimize for maximum ROI",
    deliverables: ["Performance monitoring", "A/B test results", "Optimization recommendations", "ROI reporting"]
  },
  {
    phase: "Scale & Expand",
    duration: "Ongoing",
    description: "Expand successful strategies and implement advanced features",
    deliverables: ["Advanced features", "Scaling strategies", "Predictive insights", "Strategic consulting"]
  }
]

const InboundEngineEnterprise: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding section-spacing relative flex flex-col items-center justify-center text-center animate-fade-in-up mt-24 md:mt-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 w-full">
        <div className={
          `absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M30 30h30v30H30V30zm15 15h15v15H45V45z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20`
        }></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white border-0 px-6 py-2 text-sm font-medium rounded-full">
              Revenue Engineering Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Visitors Into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
                Revenue
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Enterprise-grade inbound engine that captures, qualifies, and converts high-intent prospects 
              into booked meetings and closed deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Strategic Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-slate-300 text-slate-300 hover:bg-slate-800 hover:border-slate-200 px-8 py-4 text-lg rounded-lg transition-all duration-300">
                View Case Studies
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">2.4x</div>
                <div className="text-sm text-slate-400">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">60%</div>
                <div className="text-sm text-slate-400">Faster Sales Cycles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">40%</div>
                <div className="text-sm text-slate-400">More Qualified Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">3x</div>
                <div className="text-sm text-slate-400">ROI Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The $2.3M Revenue Leak
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most B2B SaaS companies lose millions in potential revenue due to broken inbound funnels. 
              Here's what's costing you deals:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {painPoints.map((point, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    {point.icon}
                    <Badge variant="destructive" className="text-xs">
                      {point.impact}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-red-800 mb-4">The Real Cost</h3>
              <p className="text-red-700 text-lg">
                For every 10,000 monthly visitors, poor conversion rates cost the average SaaS company 
                <span className="font-bold"> $2.3M annually</span> in lost revenue opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Engineered Solutions That Drive Revenue
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proprietary inbound engine addresses each revenue leak with precision-engineered solutions
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {solutions.map((solution, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      {solution.icon}
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-0">
                      {solution.metrics}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{solution.title}</h3>
                  <p className="text-slate-600 text-lg">{solution.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {solution.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Complete Revenue Infrastructure
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every component engineered to work together for maximum revenue impact
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((category, idx) => (
              <Card key={idx} className="border-0 shadow-lg bg-white">
                <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                  <h3 className="text-xl font-bold text-center">{category.category}</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-slate-900 mb-1">{item.name}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Revenue Leaders
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how companies transformed their inbound funnels into revenue engines
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-slate-800 border-slate-700 text-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-200 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{testimonial.logo}</div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-slate-400">{testimonial.title}</div>
                      <div className="text-sm text-slate-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Strategic Implementation Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Proven methodology that delivers results in 12 weeks
            </p>
          </div>
          <div className="space-y-8">
            {process.map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {idx + 1}
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-slate-900">{phase.phase}</h3>
                        <Badge className="bg-blue-100 text-blue-800 border-0">
                          {phase.duration}
                        </Badge>
                      </div>
                      <p className="text-slate-600 mb-4">{phase.description}</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {phase.deliverables.map((deliverable, deliverableIdx) => (
                          <div key={deliverableIdx} className="flex items-center text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {idx < process.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-8 bg-gradient-to-b from-blue-600 to-blue-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Investment Tiers
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the level of transformation that matches your growth stage
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.map((tier, idx) => (
              <Card key={idx} className={`border-0 shadow-lg ${tier.popular ? 'shadow-2xl scale-105 border-2 border-blue-500' : ''} bg-white relative overflow-hidden`}>
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className={`${tier.popular ? 'pt-12' : 'pt-6'} pb-4`}>
                  <div className="text-center">
                    <Badge className={`mb-3 ${tier.popular ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-800'} border-0`}>
                      {tier.tier}
                    </Badge>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-slate-900 mb-4">{tier.price}</div>
                    <p className="text-slate-600">{tier.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full py-3 ${tier.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                    } transition-all duration-300`}
                  >
                    {tier.cta}
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Revenue Engine?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join 200+ B2B SaaS companies that have transformed their inbound funnels into 
              predictable revenue engines. Start with a comprehensive strategic audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Strategic Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-slate-300 text-slate-300 hover:bg-slate-800 hover:border-slate-200 px-8 py-4 text-lg rounded-lg transition-all duration-300">
                Schedule Consultation
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-slate-400">
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Enterprise Security
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                SOC 2 Compliant
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                90-Day Guarantee
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InboundEngineEnterprise
