import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Users, TrendingUp, Repeat, ClipboardList, BookOpen, BarChart3 } from 'lucide-react'

const problemSolution = [
  {
    problem: 'Reps fumble discovery calls and waste pipeline',
    solution: 'Structured discovery playbooks with proven question frameworks',
  },
  {
    problem: 'Deals lost due to inconsistent value articulation',
    solution: 'Standardized demo narratives tailored to your GTM motion',
  },
  {
    problem: 'Founders stepping back in because "they\'re not getting it"',
    solution: 'Founder\'s sales scripts cloned into coachable playbooks',
  },
  {
    problem: 'CS takes handoffs with zero context — then churns deals',
    solution: 'Seamless transition templates with context preservation',
  },
  {
    problem: 'New hires take 4-6 months to become productive',
    solution: 'Structured 30-60-90 day ramp plan with clear milestones',
  },
]

const featureCards = [
  {
    icon: <TrendingUp className="w-7 h-7 text-blue-600 mb-2" />, title: '🎯 Conversion-First Approach',
    items: [
      'Focus on revenue-generating activities from day one',
      'Skip theoretical training, jump to practical application',
      'Measure progress through deal progression, not completion certificates',
    ],
  },
  {
    icon: <Repeat className="w-7 h-7 text-blue-600 mb-2" />, title: '🔄 Seamless Transitions',
    items: [
      'Standardized handoff processes between teams',
      'Context preservation throughout the customer journey',
      'Reduced friction in SDR → AE → CS transitions',
    ],
  },
  {
    icon: <Users className="w-7 h-7 text-blue-600 mb-2" />, title: '📈 Scalable Excellence',
    items: [
      'Clone your best performer\'s approach',
      'Consistent messaging across all team members',
      'Repeatable processes that maintain quality at scale',
    ],
  },
]

const phases = [
  {
    title: 'Phase 1: Map the Gaps',
    items: [
      'Call Audit – Analyze current ramped reps, patterns, misses',
      'Persona & Objection Alignment – What buyers actually push back on',
      'Handoff Debriefs – Audit Sales > CS transitions for context gaps',
    ],
  },
  {
    title: 'Phase 2: Build the Assets',
    items: [
      'Demo Playbook + Narrative Templates – Tailored to your GTM motion',
      'Objection Handling Vault – Based on real rep calls and buyer insights',
      "Founder's Sales Scripts & Follow-ups – Cloned and coached into playbooks",
      'Transition Templates – For SDR > AE and AE > CS handoffs',
    ],
  },
  {
    title: 'Phase 3: Activate the Motion',
    items: [
      'Live Call Shadowing (2 reps) – Speed up pattern recognition',
      'Onboarding Ramp Plan – What to know, say, and send — by day/week',
      'Enablement LMS + Tracker Setup – Centralized training → measurement',
      'Handoff QA Checklist – Audit how GTM handoffs are impacting post-sale revenue',
    ],
  },
]

const audience = [
  {
    icon: '🚀',
    title: 'SaaS Founders',
    desc: `You're the best rep on your team, but you can't scale yourself. You need to clone your approach without losing effectiveness.`,
  },
  {
    icon: '📊',
    title: 'RevOps / Sales Leaders',
    desc: `You're frustrated with 4-6 month ramp times and inconsistent performance. You need a systematic approach to faster productivity.`,
  },
  {
    icon: '🎯',
    title: 'Customer Success Leaders',
    desc: `You're tired of inheriting confused, low-context accounts. You need better handoffs to reduce churn and increase expansion.`,
  },
  {
    icon: '🔄',
    title: 'GTM Teams',
    desc: `Your pipeline dies after handoffs every time. You need seamless transitions that preserve momentum and context.`,
  },
]

const stats = [
  { value: '38%', label: 'Reduction in Ramp Time' },
  { value: '2.4x', label: 'Higher 90-Day Close Rate' },
  { value: '29%', label: 'Drop in CS Churn' },
  { value: '100%', label: 'Process Documentation' },
]

const processSteps = [
  {
    title: 'Run GTM Execution Diagnostic',
    desc: 'We audit your current rep ramp process, sales flow, and handoff friction points to identify exactly where deals are being lost.',
    icon: <ClipboardList className="w-8 h-8 text-blue-600 mx-auto mb-4" />,
  },
  {
    title: 'Install the System',
    desc: 'We implement playbooks, ramp plans, handoff checklists, LMS, and shadowing setup for your team.',
    icon: <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-4" />,
  },
  {
    title: 'Watch Execution Level Up',
    desc: 'See faster ramp, better conversion, smoother transitions, and less chaos as your team levels up.',
    icon: <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-4" />,
  },
]

const SalesOnboarding: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
    {/* Hero Section */}
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden gradient-hero">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-blue-700/10 to-blue-800/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30h30v30H30V30zm15 15h15v15H45V45z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      <div className="container relative z-10 max-w-4xl mx-auto text-center py-24 animate-fade-in-up">
        <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white border-0 px-6 py-2 text-sm font-medium rounded-full shadow-lg">
          🚀 Sales Onboarding & Transition System
        </Badge>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          If Your Reps Don't Ramp Fast — You're Paying to Lose Deals
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-100 mb-8">
          KLYRR installs a modular onboarding and transition system that turns new hires into confident closers — and makes GTM handoffs frictionless, consistent, and accountable.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg">
            🧠 Run My Onboarding Diagnostic
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
            📊 See Ramp Time Benchmarks
          </Button>
        </div>
      </div>
    </section>

    {/* Problem vs Solution Table */}
    <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">The Problem vs. The Solution</h2>
        <div className="overflow-x-auto rounded-2xl shadow-lg">
          <table className="min-w-full bg-white rounded-2xl overflow-hidden">
            <thead>
              <tr>
                <th className="bg-blue-700 text-white px-6 py-4 text-lg font-semibold">❌ Current State (The Problem)</th>
                <th className="bg-blue-600 text-white px-6 py-4 text-lg font-semibold">✅ With KLYRR System (The Solution)</th>
              </tr>
            </thead>
            <tbody>
              {problemSolution.map((row) => (
                <tr key={row.problem} className="border-b last:border-b-0">
                  <td className="bg-red-50 text-red-800 px-6 py-4 font-medium">{row.problem}</td>
                  <td className="bg-green-50 text-green-800 px-6 py-4 font-medium">{row.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* What It Does Section */}
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">What the Sales Onboarding & Transition System Actually Does</h2>
        <h3 className="text-xl font-semibold text-center mb-6 text-blue-600">This isn't HR training.</h3>
        <p className="text-center text-lg text-blue-700 mb-12 max-w-2xl mx-auto">
          It's a <span className="font-bold">conversion-first enablement layer</span> that equips your team to sell (and retain) like founders — but faster.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {featureCards.map((card) => (
            <div key={card.title} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-t-4 border-blue-600">
              <div className="flex flex-col items-center mb-4">
                {card.icon}
                <h4 className="text-lg font-bold text-blue-700 mb-2 text-center">{card.title}</h4>
              </div>
              <ul className="space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* System Overview Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">📐 System Overview – What's Included</h2>
        <p className="text-center text-lg text-blue-700 mb-12 max-w-2xl mx-auto">
          Our comprehensive 3-phase approach transforms your onboarding from a checklist into a revenue-generating machine.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <div key={phase.title} className="bg-blue-50 rounded-2xl shadow-lg p-8 border-t-4 border-blue-600">
              <h4 className="text-lg font-bold text-blue-700 mb-4">{phase.title}</h4>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Who It's For Section */}
    <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">👥 Who This Is For</h2>
        <p className="text-center text-lg text-blue-700 mb-12 max-w-2xl mx-auto">
          If you recognize your situation in any of these scenarios, this system is built for you.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {audience.map((a) => (
            <div key={a.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-all border-t-4 border-blue-600">
              <div className="text-4xl mb-4">{a.icon}</div>
              <h4 className="text-lg font-bold text-blue-700 mb-2 text-center">{a.title}</h4>
              <p className="text-slate-700 text-center">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Results Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">📊 Real Results</h2>
        <p className="text-center text-lg text-blue-700 mb-12 max-w-2xl mx-auto">
          These aren't projections or estimates. These are actual results from companies that implemented our system.
        </p>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-all border-t-4 border-blue-600">
              <div className="text-4xl font-extrabold text-blue-700 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-blue-600 text-center">{stat.label}</div>
            </div>
          ))}
        </div>
        <blockquote className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl border-l-4 border-blue-600 font-semibold text-blue-700 text-xl italic text-center max-w-3xl mx-auto shadow">
          This is the first time I've seen our founder's sales process documented clearly. Our new reps are now closing deals in their second month instead of their fifth.
          <div className="text-base text-blue-500 mt-4 font-normal">— Head of Sales, SaaS Company</div>
        </blockquote>
      </div>
    </section>

    {/* How It Works Section */}
    <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">⚙️ How It Works (Simple 3-Step Process)</h2>
        <p className="text-center text-lg text-blue-100 mb-12 max-w-2xl mx-auto">
          We've streamlined the entire process into three clear phases that deliver results fast.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div key={step.title} className="bg-white/10 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-all border-t-4 border-white">
              {step.icon}
              <h4 className="text-lg font-bold text-white mb-2 text-center">{step.title}</h4>
              <p className="text-blue-100 text-center">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA Section */}
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="text-2xl font-bold mb-8">
          You don't need more reps.<br />
          You need a <span className="font-bold">repeatable version of your best rep</span> — and a handoff system that doesn't burn the pipeline.
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg">
            🧠 Run a Ramp Audit
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
            📊 Get the Onboarding Stack Breakdown
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
            ⚙ Build My Sales Transition System
          </Button>
        </div>
      </div>
    </section>
  </div>
)

export default SalesOnboarding 