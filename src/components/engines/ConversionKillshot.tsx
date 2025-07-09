import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowRight, Play, BarChart3, Users, Target, Zap, Brain, Shield, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const executionTiers = [
  { 
    tier: 'Tier 1: Killshot Audit', 
    outcome: 'Demo + script teardown with rewrite', 
    who: 'Founders or small teams needing immediate clarity',
    price: 'Starting at $2,997'
  },
  { 
    tier: 'Tier 2: Execution System', 
    outcome: 'AI scoring, coaching loops, objection mastery', 
    who: 'SaaS teams needing ramp-up & consistency',
    price: 'Starting at $7,997'
  },
  { 
    tier: 'Tier 3: Culture Engine', 
    outcome: 'Full performance layer + LMS + attribution', 
    who: 'Leaders scaling a sales team with predictability & data',
    price: 'Starting at $15,997'
  },
]

const testimonials = [
  {
    quote: "We didn't just fix our demo. We made our whole team 30% more lethal.",
    author: "Sarah Chen",
    role: "VP of Sales, TechFlow",
    company: "Series B SaaS"
  },
  {
    quote: "The ROI was immediate. We saved $180K in pipeline in the first month alone.",
    author: "Michael Rodriguez",
    role: "CEO",
    company: "CloudSync Solutions"
  }
]

const stats = [
  { value: "2.7x", label: "Demo-to-close rate increase", icon: BarChart3 },
  { value: "40%", label: "Reduction in sales cycle time", icon: Zap },
  { value: "68%", label: "Faster rep onboarding", icon: Users },
  { value: "$180K", label: "Pipeline saved from objections", icon: Target }
]

const ConversionKillshot = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-400/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Conversion Killshot Engine
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Your Demos Aren't Bad.<br/>
              <span className="text-blue-600">They're Quietly Killing</span><br/>
              Your Close Rate.
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              KLYRR's Conversion Killshot Engine turns broken demos into high-converting sales machines — 
              powered by real buyer psychology, AI training loops, and repeatable pitch systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Brain className="w-5 h-5 mr-2" />
                Get Demo Audit
              </Button>
              <Button variant="outline" className="border-blue-200 hover:bg-blue-50 px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
              The Problem You're Tolerating
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 text-left">
              <p className="text-lg text-slate-700 italic">
                If your demos "feel fine," but deals stall or go cold, here's the truth:<br/><br/>
                <span className="font-bold text-red-600">You're not closing because your team is misfiring where it matters most.</span>
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-4">Common Demo Failures</h3>
                <ul className="text-left space-y-2 text-slate-600">
                  <li>• Reps improvise value props every call</li>
                  <li>• Objections get handled with hope, not structure</li>
                  <li>• Follow-ups feel rushed, weak, or inconsistent</li>
                  <li>• Founders still lead the most critical deals</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-4">The Real Cost</h3>
                <ul className="text-left space-y-2 text-slate-600">
                  <li>• Deals that should close... don't</li>
                  <li>• Reps lack confidence in critical moments</li>
                  <li>• Coaching becomes reactive, not systematic</li>
                  <li>• Revenue growth plateaus despite good leads</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="text-lg text-slate-700 italic">
                <Brain className="w-5 h-5 inline mr-2" />
                You're not running demos. You're surviving them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                What the Conversion Killshot Engine Delivers
              </h2>
              <p className="text-xl text-slate-600 mb-4">This Isn't Sales Training. It's Sales Infrastructure.</p>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We rebuild your team's sales execution system from the first question to the final close — 
                backed by AI tools, call analysis, and repeatable coaching operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Target, title: "Call Audit", desc: "Score 10–20 demo recordings to pinpoint where you're bleeding trust or momentum" },
                { icon: Brain, title: "AI-Powered Scoring", desc: "Every rep's discovery and demo moves tracked, benchmarked, and decoded" },
                { icon: Zap, title: "Narrative Rewrite", desc: "Demo script, value drivers, persona-based flows rebuilt from scratch" },
                { icon: Shield, title: "Objection Templates", desc: "Turn objections into opportunities — pre-mapped and battle-tested" },
                { icon: Users, title: "Follow-Up Frameworks", desc: "High-converting email + LinkedIn templates built to drive post-demo action" },
                { icon: BarChart3, title: "Performance Dashboards", desc: "Every rep. Every metric. Tracked. Coached. Improved." }
              ].map((item, idx) => (
                <Card key={idx} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-800">{item.title}</h3>
                    </div>
                    <p className="text-slate-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section id="tiers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Choose Your Execution Mode
              </h2>
              <p className="text-lg text-slate-600">
                Each tier builds on the last to create a complete conversion system
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {executionTiers.map((tier, idx) => (
                <Card key={idx} className={`relative ${idx === 1 ? 'border-blue-500 shadow-lg scale-105' : 'border-slate-200'}`}>
                  {idx === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{tier.tier}</h3>
                      <p className="text-2xl font-bold text-blue-600 mb-4">{tier.price}</p>
                      <p className="text-slate-600 mb-4">{tier.outcome}</p>
                      <p className="text-sm text-slate-500">{tier.who}</p>
                    </div>
                    <Button className={`w-full ${idx === 1 ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'}`}>
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-12">
              <p className="text-lg text-slate-700 italic text-center">
                💡 Each layer is built to stack. Remove one and you lose the system's compounding effect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
              Results That Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-4">Performance Improvements</h3>
                <ul className="text-left space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    2.7x demo-to-close rate increase in 45 days
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    40% reduction in sales cycle time
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    68% faster onboarding for new reps
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-4">Revenue Impact</h3>
                <ul className="text-left space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    $180K pipeline saved from objections
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    Consistent quota attainment across team
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    Predictable revenue growth
                  </li>
                </ul>
              </div>
            </div>
            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <Card key={idx} className="bg-white">
                  <CardContent className="p-6">
                    <p className="text-slate-700 italic mb-4">"{testimonial.quote}"</p>
                    <div className="text-sm">
                      <p className="font-semibold text-slate-800">{testimonial.author}</p>
                      <p className="text-slate-600">{testimonial.role}</p>
                      <p className="text-slate-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                How It Works (3-Step Process)
              </h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Run a Demo Audit",
                  desc: "We analyze your calls, scoring them with AI + sales psychology",
                  icon: Target
                },
                {
                  step: "02", 
                  title: "Rebuild the Pitch System",
                  desc: "Scripts, slides, follow-ups, objection flows, practice — installed",
                  icon: Zap
                },
                {
                  step: "03",
                  title: "Scale the Killshot",
                  desc: "Weekly reviews, dashboards, and LMS make it repeatable",
                  icon: BarChart3
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                    </div>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Many More Deals Will You Lose to the Same Demo Mistakes?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Your product isn't the problem. Your pitch is.<br/>
              Let's rebuild it — once, and permanently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                <Brain className="w-5 h-5 mr-2" />
                Get Demo Audit
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <BarChart3 className="w-5 h-5 mr-2" />
                See the Engine in Action
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConversionKillshot 