import React, { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const executionTiers = [
  { tier: 'Tier 1: Killshot Audit', outcome: 'Demo + script teardown with rewrite', who: 'Founders or small teams needing immediate clarity' },
  { tier: 'Tier 2: Execution System', outcome: 'AI scoring, coaching loops, objection mastery', who: 'SaaS teams needing ramp-up & consistency' },
  { tier: 'Tier 3: Culture Engine', outcome: 'Full performance layer + LMS + attribution', who: 'Leaders scaling a sales team with predictability & data' },
]

const ConversionKillshot: React.FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-emerald-600/20 rounded-full blur-xl animate-float"></div>
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
          <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-red-50 to-red-100 border-red-200 text-red-700 border mb-6">
            Conversion Killshot Engine
          </Badge>
          <h1 className="hero-text text-balance mb-4">
            {loading ? (
              <span className="shimmer">Your Demos Aren't Bad. They're Quietly Killing Your Close Rate.</span>
            ) : (
              <span>Your Demos Aren't Bad. They're Quietly Killing Your Close Rate.</span>
            )}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-emerald-600 text-balance mb-6">
            KLYRR's Conversion Killshot Engine turns broken demos into high-converting sales machines — powered by real buyer psychology, AI training loops, and repeatable pitch systems.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="btn-hero text-white px-8 py-4 text-lg group">
              <span className="relative z-10">🧠 Run a Demo Audit</span>
            </Button>
            <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-emerald-200 hover:border-emerald-300">
              <span className="relative z-10">🎯 See the Killshot System</span>
            </Button>
          </div>
        </div>
        {/* Problem Section */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 text-center">❌ The Problem You're Tolerating</h3>
          <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-emerald-500 pl-4 py-2 mb-4">
            If your demos "feel fine," but deals stall or go cold, here's the truth:<br/>
            <br/>
            You're <span className="font-bold">not closing because your team is misfiring where it matters most.</span>
          </blockquote>
          <div className="max-w-2xl mx-auto mb-4">
            <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 text-left">
              <li>Reps improvise value props every call</li>
              <li>Objections get handled with hope, not structure</li>
              <li>Follow-ups feel rushed, weak, or inconsistent</li>
              <li>Founders still lead the most critical deals</li>
              <li>Coaching = "listen to this call" instead of systemized progress</li>
            </ul>
          </div>
          <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-emerald-500 pl-4 py-2">
            🧠 You're not running demos. You're surviving them.
          </blockquote>
        </div>
        {/* What the Engine Delivers Section */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4 text-center">✅ What the Conversion Killshot Engine Actually Delivers</h3>
          <h4 className="text-xl font-semibold text-center mb-6">This Isn't Sales Training. It's Sales Infrastructure.</h4>
          <p className="text-center text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            We rebuild your team's sales execution system from the <span className="font-bold">first question to the final close</span> — and we back it with AI tools, call analysis, and repeatable coaching ops.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
            <Card className="interactive-card group"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">🔍 Call Audit</div><div className="text-foreground/70">→ We score 10–20 demo recordings to pinpoint where you're bleeding trust or momentum</div></CardContent></Card>
            <Card className="interactive-card group"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">🧠 AI-Powered Scoring</div><div className="text-foreground/70">→ Every rep's discovery and demo moves tracked, benchmarked, and decoded</div></CardContent></Card>
            <Card className="interactive-card group"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">🛠 Narrative Rewrite</div><div className="text-foreground/70">→ Demo script, value drivers, persona-based flows rebuilt from scratch</div></CardContent></Card>
            <Card className="interactive-card group"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">✍ Objection Templates</div><div className="text-foreground/70">→ We turn objections into opportunities — pre-mapped and battle-tested</div></CardContent></Card>
            <Card className="interactive-card group"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">📬 Follow-Up Frameworks</div><div className="text-foreground/70">→ High-converting email + LinkedIn templates built to drive post-demo action</div></CardContent></Card>
            <Card className="interactive-card group"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">🎯 Live Drill Systems</div><div className="text-foreground/70">→ AI call practice + roleplay setups to build rep muscle memory</div></CardContent></Card>
            <Card className="interactive-card group"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">📈 Performance Dashboards</div><div className="text-foreground/70">→ Every rep. Every metric. Tracked. Coached. Improved.</div></CardContent></Card>
          </div>
        </div>
        {/* Execution Mode Table */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4 text-center">🧩 Choose Your Execution Mode</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-emerald-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-emerald-700 uppercase tracking-wider">Tier</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-emerald-700 uppercase tracking-wider">Outcome</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-emerald-700 uppercase tracking-wider">Who It's For</th>
                </tr>
              </thead>
              <tbody>
                {executionTiers.map((row, idx) => (
                  <tr key={idx} className="border-t border-emerald-100 bg-white hover:bg-emerald-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-emerald-700">{row.tier}</td>
                    <td className="px-6 py-4 text-foreground/80">{row.outcome}</td>
                    <td className="px-6 py-4 text-foreground/70">{row.who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-emerald-500 pl-4 py-2 mt-6">
            💡 Each layer is built to stack. Remove one and you lose the system's compounding effect.
          </blockquote>
        </div>
        {/* Who It's For Section */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4 text-center">🎯 Who This Is For</h3>
          <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 max-w-2xl mx-auto text-left mb-4">
            <li>Your demos go long — but not deep</li>
            <li>Reps say "value," but buyers don't hear it</li>
            <li>Objections crush deals instead of being handled confidently</li>
            <li>You rely on 1–2 closers, not a reliable team</li>
            <li>Your win rate looks... flat</li>
          </ul>
          <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-emerald-500 pl-4 py-2">
            The real leak isn't in your leads. It's in how you convert them.
          </blockquote>
        </div>
        {/* Results Section */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4 text-center">📊 Results That Stack</h3>
          <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 max-w-2xl mx-auto text-left mb-4">
            <li>2.7x demo-to-close rate increase in 45 days</li>
            <li>40% reduction in sales cycle time by removing "dead air" in pitch</li>
            <li>68% faster onboarding for new reps via LMS + roleplay system</li>
            <li>$180K pipeline saved from improved objection handling and follow-ups</li>
          </ul>
          <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-emerald-500 pl-4 py-2">
            🧠 "We didn't just fix our demo. We made our whole team 30% more lethal."
          </blockquote>
        </div>
        {/* How It Works Section */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4 text-center">⚙ How It Works (3-Step)</h3>
          <ol className="list-decimal list-inside text-lg text-foreground/80 space-y-4 max-w-2xl mx-auto text-left mb-4">
            <li><span className="font-bold">🎧 Run a Demo Audit</span><br/><span className="text-foreground/70">→ We analyze your calls, scoring them with AI + sales psychology</span></li>
            <li><span className="font-bold">🔧 Rebuild the Pitch System</span><br/><span className="text-foreground/70">→ Scripts, slides, follow-ups, objection flows, practice — installed</span></li>
            <li><span className="font-bold">�� Scale the Killshot</span><br/><span className="text-foreground/70">→ Weekly reviews, dashboards, and LMS make it repeatable</span></li>
          </ol>
        </div>
        {/* Final CTA Section */}
        <div className="text-center animate-fade-in-up mb-24" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            How many more deals will you lose to the exact same demo mistakes?
          </h3>
          <p className="text-foreground/70 mb-8">
            Your product isn't the problem.<br/>
            Your pitch is.<br/>
            Let's rebuild it — once, and permanently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-white px-8 py-4 text-lg group">
              <span className="relative z-10">🧠 Get a Demo Audit</span>
            </Button>
            <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-emerald-200 hover:border-emerald-300">
              <span className="relative z-10">📈 See the Engine in Action</span>
            </Button>
            <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-emerald-200 hover:border-emerald-300">
              <span className="relative z-10">⚙ Compare Tiers</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConversionKillshot 