import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

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

const SalesOnboarding: React.FC = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-orange-600/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-purple-600/10 to-purple-700/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30h30v30H30V30zm15 15h15v15H45V45z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
    </div>
    <div className="container relative z-10 max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="pt-32 pb-16 text-center animate-fade-in-up">
        <Badge className="inline-flex items-center rounded-md text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 bg-orange-600 text-white shadow-lg glow-badge px-4 py-2 mb-6">
          Sales Onboarding & Transition System
        </Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-6 text-center heading-gradient text-balance mb-4">
          If Your Reps Don't Ramp Fast — You're Paying to Lose Deals.
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-orange-600 text-balance mb-6">
          KLYRR installs a modular onboarding and transition system that turns new hires into confident closers — and makes GTM handoffs frictionless, consistent, and accountable.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="btn-hero text-white px-8 py-4 text-lg group">
            <span className="relative z-10">🧠 Run My Onboarding Diagnostic</span>
          </Button>
          <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-orange-200 hover:border-orange-300">
            <span className="relative z-10">📊 See Ramp Time Benchmarks</span>
          </Button>
        </div>
      </div>
      {/* Risks Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 text-center">❌ The Risks You're Tolerating</h3>
        <p className="text-center text-lg text-foreground/70 mb-4 max-w-2xl mx-auto">
          Most teams assume onboarding is a checklist.<br/>
          But the real cost comes after that list is "done" — in the form of:
        </p>
        <div className="max-w-2xl mx-auto mb-4">
          <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 text-left">
            <li>Reps fumbling discovery calls and wasting pipeline</li>
            <li>Deals lost due to inconsistency in value articulation</li>
            <li>Founders stepping back in because "they're not getting it"</li>
            <li>CS taking handoffs with zero context — then churning deals they didn't close</li>
          </ul>
        </div>
        <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-orange-500 pl-4 py-2">
          Bad onboarding isn't just slow. It creates a leak you'll feel 90 days later — in lost trust, weak demos, and misaligned retention.
        </blockquote>
      </div>
      {/* What It Does Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4 text-center">✅ What the Sales Onboarding & Transition System Actually Does</h3>
        <h4 className="text-xl font-semibold text-center mb-6">This isn't HR training.</h4>
        <p className="text-center text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          It's a <span className="font-bold">conversion-first enablement layer</span> that equips your team to sell (and retain) like founders — but faster.
        </p>
      </div>
      {/* System Overview Phases */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4 text-center">📐 System Overview – What's Included</h3>
        {phases.map((phase) => (
          <div key={phase.title} className="mb-8">
            <h4 className="text-lg md:text-xl font-bold text-orange-700 mb-2">{phase.title}</h4>
            <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 ml-4">
              {phase.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Who It's For Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4 text-center">👥 Who This Is For</h3>
        <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 max-w-2xl mx-auto text-left mb-4">
          <li>SaaS founders who are the best rep — but can't scale themselves</li>
          <li>RevOps / Sales leaders frustrated with long ramp times</li>
          <li>CS leads tired of inheriting confused, low-context accounts</li>
          <li>Teams where pipeline dies after the handoff — every time</li>
        </ul>
      </div>
      {/* Real Results Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4 text-center">📊 Real Results</h3>
        <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 max-w-2xl mx-auto text-left mb-4">
          <li>Ramp time reduced by 38% for new hires</li>
          <li>2.4x higher first 90-day close rate for reps who used this system</li>
          <li>29% drop in CS churn tied to better handoff processes</li>
          <li>"This is the first time I've seen our founder's sales process documented clearly." — SaaS Head of Sales</li>
        </ul>
      </div>
      {/* How It Works Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4 text-center">⚙ How It Works (Simple 3-Step)</h3>
        <ol className="list-decimal list-inside text-lg text-foreground/80 space-y-4 max-w-2xl mx-auto text-left mb-4">
          <li><span className="font-bold">Run a GTM Execution Diagnostic</span><br/><span className="text-foreground/70">→ Audit rep ramp, sales flow, handoff friction</span></li>
          <li><span className="font-bold">Install the System</span><br/><span className="text-foreground/70">→ Playbooks, ramp plans, handoff checklists, LMS, shadowing setup</span></li>
          <li><span className="font-bold">Watch Execution Level Up</span><br/><span className="text-foreground/70">→ Faster ramp, better conversion, smoother transitions, less chaos</span></li>
        </ol>
      </div>
      {/* Final CTA Section */}
      <div className="text-center animate-fade-in-up mb-24" style={{ animationDelay: '0.8s' }}>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          You don't need more reps.<br/>
          You need a <span className="font-bold">repeatable version of your best rep</span> — and a handoff system that doesn't burn the pipeline.
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-hero text-white px-8 py-4 text-lg group">
            <span className="relative z-10">🧠 Run a Ramp Audit</span>
          </Button>
          <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-orange-200 hover:border-orange-300">
            <span className="relative z-10">📊 Get the Onboarding Stack Breakdown</span>
          </Button>
          <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-orange-200 hover:border-orange-300">
            <span className="relative z-10">⚙ Build My Sales Transition System</span>
          </Button>
        </div>
      </div>
    </div>
  </section>
)

export default SalesOnboarding 