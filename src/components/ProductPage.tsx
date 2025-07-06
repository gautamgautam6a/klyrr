import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const engineTiers = [
  { tier: 'Starter', outcome: '15–20 demos in 30–45 days', who: 'Early-stage teams launching outbound' },
  { tier: 'Conversion Engine', outcome: 'Async + inbound + CRO', who: 'Founders scaling but still too involved' },
  { tier: 'Revenue Engine', outcome: 'Fully autonomous pipeline machine', who: 'SaaS teams offloading GTM to scale fast' },
]

const ProductPage: React.FC = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-blue-600/10 to-blue-700/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
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
        <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-blue-700 border mb-6">
          Zero-to-Pipeline Engine
        </Badge>
        <h1 className="hero-text text-balance mb-4">
          You Don’t Need More Leads. You Need Pipeline That Converts.
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-600 text-balance mb-6">
          You're not short on activity — you're short on systems that deliver results.
        </h2>
        <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto text-balance mb-8">
          KLYRR installs a zero-to-pipeline engine that books 15–20 qualified demos in 30–45 days. No fluff. No freelancers. No guessing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="btn-hero text-white px-8 py-4 text-lg group">
            <span className="relative z-10">🧠 Book Free Funnel Diagnosis</span>
          </Button>
          <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-blue-200 hover:border-blue-300">
            <span className="relative z-10">📩 See Real Campaigns</span>
          </Button>
        </div>
      </div>
      {/* Problem Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 text-center">❌ The Problem You're Tolerating</h3>
        <h4 className="text-xl font-semibold text-center mb-2">You think it’s a volume issue. It’s a system failure.</h4>
        <div className="max-w-2xl mx-auto mb-4">
          <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 text-left">
            <li>SDRs burn out chasing the wrong ICPs</li>
            <li>Founders are still doing manual follow-ups</li>
            <li>Sequences sound “smart,” but get ghosted</li>
            <li>Agencies pitch “awareness,” not conversions</li>
            <li>You’re leaking time, trust, and cash — daily</li>
          </ul>
        </div>
        <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-blue-500 pl-4 py-2">
          You're not running outbound. Outbound is running you.
        </blockquote>
      </div>
      {/* What the Engine Does Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 text-center">✅ What the Zero-to-Pipeline Engine Actually Does</h3>
        <h4 className="text-xl font-semibold text-center mb-6">A GTM Growth Stack — Installed, Not Consulted</h4>
        <p className="text-center text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          We don’t sell outreach. We install the system that delivers results across cold, warm, and inbound.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          <Card className="interactive-card group"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">🎯 ICP Mapping + Data Enrichment</div><div className="text-foreground/70">→ Built with Clay, Apollo, Groq — 100% precision targeting</div></CardContent></Card>
          <Card className="interactive-card group"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">📬 Cold Outreach System</div><div className="text-foreground/70">→ Persona-specific email & LinkedIn flows that create urgency, not annoyance</div></CardContent></Card>
          <Card className="interactive-card group"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">🧠 Reply Intelligence Bot</div><div className="text-foreground/70">→ AI replies instantly to objections, FAQs, and CTAs — so no lead goes cold</div></CardContent></Card>
          <Card className="interactive-card group"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">📈 Inbound Amplification</div><div className="text-foreground/70">→ CRO-tuned landing pages + proof-rich content built to convert silent lurkers</div></CardContent></Card>
          <Card className="interactive-card group"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">🧪 Weekly Signal-Based Optimization</div><div className="text-foreground/70">→ Every reply type, every bounce, every “not now” feeds back into smarter ops</div></CardContent></Card>
        </div>
      </div>
      {/* Engine Intensity Table */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 text-center">🧩 Choose Your Engine Intensity</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-blue-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-blue-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Tier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Outcome</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Who It’s For</th>
              </tr>
            </thead>
            <tbody>
              {engineTiers.map((row, idx) => (
                <tr key={idx} className="border-t border-blue-100 bg-white hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-blue-700">{row.tier}</td>
                  <td className="px-6 py-4 text-foreground/80">{row.outcome}</td>
                  <td className="px-6 py-4 text-foreground/70">{row.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-blue-500 pl-4 py-2 mt-6">
          💡 This isn’t deliverables. It’s designed outcomes.<br/>
          Remove one layer — and you remove compound results.
        </blockquote>
      </div>
      {/* Who It's For Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 text-center">🎯 Who It’s For</h3>
        <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 max-w-2xl mx-auto text-left mb-4">
          <li>You’ve wasted months on SDRs, agencies, or internal hacks</li>
          <li>You're sending 100s of emails and getting silence</li>
          <li>You’re still jumping on cold calls just to keep the funnel alive</li>
          <li>You <em>feel</em> like you’re working hard — but growth isn’t compounding</li>
        </ul>
        <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-blue-500 pl-4 py-2">
          It’s not you. It’s the system you haven’t installed yet.
        </blockquote>
      </div>
      {/* Real Results Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 text-center">📊 Real Results</h3>
        <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 max-w-2xl mx-auto text-left mb-4">
          <li>📈 31 demos in 30 days from just 1 sequence</li>
          <li>💰 $82K pipeline from “non-buyers” reactivated by AI</li>
          <li>💡 3.4x close rate increase after removing founder from calls</li>
          <li>🔁 44% reply rate using pain-first, pattern-breaker messaging</li>
        </ul>
      </div>
      {/* How It Works Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 text-center">⚙️ How It Works (3-Step Snapshot)</h3>
        <ol className="list-decimal list-inside text-lg text-foreground/80 space-y-4 max-w-2xl mx-auto text-left mb-4">
          <li><span className="font-bold">🩺 Funnel Diagnosis</span><br/><span className="text-foreground/70">→ Audit your current GTM leaks, assets, ICP, and reply data</span></li>
          <li><span className="font-bold">🧱 Engine Install</span><br/><span className="text-foreground/70">→ Positioning, targeting, outbound, reply automation — done-for-you</span></li>
          <li><span className="font-bold">📈 Pipeline Compounds</span><br/><span className="text-foreground/70">→ Close rates increase, CAC drops, founder effort disappears</span></li>
        </ol>
      </div>
      {/* Final CTA Section */}
      <div className="text-center animate-fade-in-up mb-24" style={{ animationDelay: '0.8s' }}>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          How many more weeks will you spend guessing why cold leads don’t convert?
        </h3>
        <p className="text-foreground/70 mb-8">
          You don’t need another tool. You need a system.<br/>
          This one installs in weeks, runs on signal — and doesn’t break.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-hero text-white px-8 py-4 text-lg group">
            <span className="relative z-10">🧠 Book Your Diagnosis</span>
          </Button>
          <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-blue-200 hover:border-blue-300">
            <span className="relative z-10">📩 Ask for a Campaign Breakdown</span>
          </Button>
        </div>
      </div>
    </div>
  </section>
)

export default ProductPage