import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const inboundFeatures = [
  { icon: '✅', title: 'Inbound Audit', desc: 'Site, forms, CTAs, lead flows — diagnosed with precision' },
  { icon: '✅', title: 'Funnel Conversion Setup', desc: 'Calendly/HubSpot workflows that actually book calls' },
  { icon: '✅', title: '2x Email Nurtures', desc: 'Re-engage visitors post-signup and post-demo' },
  { icon: '✅', title: 'Lead Magnet', desc: 'Built to convert — checklists, calculators, or guides' },
  { icon: '✅', title: 'CRO Quick Wins', desc: 'Above-the-fold fixes, layout boosts, CTA upgrades' },
  { icon: '✅', title: 'Newsletter + Welcome Journey', desc: 'Prevents silent churn after sign-up' },
]
const tier2Features = [
  { icon: '🔍', title: 'Behavior analytics (Hotjar/VWO)' },
  { icon: '🤖', title: 'Chatbots / WhatsApp capture' },
  { icon: '🔌', title: 'AI-optimized company discovery (ChatGPT prompt upgrades)' },
  { icon: '🧪', title: 'Advanced CRO + A/B testing' },
  { icon: '🔁', title: 'Multi-path automation' },
  { icon: '🔥', title: 'Lead scoring & SQL filtering' },
]
const tier3Features = [
  { icon: '🎯', title: 'Website personalization (by ICP/intent)' },
  { icon: '📊', title: 'Attribution dashboard' },
  { icon: '🚨', title: 'SDR alerts for hot leads' },
  { icon: '🚪', title: 'Exit-intent re-engagement' },
  { icon: '📈', title: 'SEO optimization + cluster content' },
  { icon: '🧠', title: 'Session replay feedback reports' },
]
const inboundTiers = [
  { tier: 'Tier 1: Capture & Convert', outcome: 'Turn traffic into booked calls', who: 'Startups or lean teams with decent traffic' },
  { tier: 'Tier 2: Behavioral Engine', outcome: 'Nurture leads, score intent, automate growth', who: 'Teams struggling with volume vs. quality' },
  { tier: 'Tier 3: Compounding Layer', outcome: 'Personalization, attribution, CRO loops', who: 'SaaS teams scaling and optimizing for CAC & LTV' },
]

const InboundMagnet: React.FC = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-600/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-pink-600/10 to-purple-700/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
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
        <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-50 to-pink-100 border-pink-200 text-pink-700 border mb-6">
          Inbound Magnet Engine
        </Badge>
        <h1 className="hero-text text-balance mb-4">
          Most Inbound Funnels Leak. You Just Don’t See It.
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-600 text-balance mb-6">
          KLYRR installs a compounding inbound engine that captures, qualifies, and converts high-intent traffic — turning visitors into meetings, not just leads.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="btn-hero text-white px-8 py-4 text-lg group">
            <span className="relative z-10">🧠 Run a Free Inbound Audit</span>
          </Button>
          <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-pink-200 hover:border-pink-300">
            <span className="relative z-10">📈 See the Full Inbound Engine</span>
          </Button>
        </div>
      </div>
      {/* Problem Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4 text-center">❌ The Problem You’re Tolerating</h3>
        <div className="max-w-2xl mx-auto mb-4">
          <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 text-left">
            <li>Visitors bounce without booking</li>
            <li>Demo signups drop off post-form</li>
            <li>You nurture no one — unless they beg</li>
            <li>Attribution? Still a black box</li>
            <li>Your LinkedIn, newsletter, and blog aren’t sending the right signals</li>
          </ul>
        </div>
        <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-purple-500 pl-4 py-2">
          The truth? You're leaking opportunity with every click.
        </blockquote>
      </div>
      {/* What the Engine Does Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4 text-center">✅ What the Inbound Magnet Engine Actually Does</h3>
        <h4 className="text-xl font-semibold text-center mb-6">This Isn’t “Lead Gen.” It’s Revenue Infrastructure.</h4>
        <p className="text-center text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          We don’t create fluff. We build <span className="font-bold">personalized, AI-enhanced inbound systems</span> that capture high-intent visitors, nurture them intelligently, and move them into meetings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          {inboundFeatures.map((feature, idx) => (
            <Card key={idx} className="interactive-card group"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">{feature.icon} {feature.title}</div><div className="text-foreground/70">{feature.desc}</div></CardContent></Card>
          ))}
        </div>
        {/* Tier 2 Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          {tier2Features.map((feature, idx) => (
            <Card key={idx} className="interactive-card group border-purple-200"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">{feature.icon} {feature.title}</div></CardContent></Card>
          ))}
        </div>
        {/* Tier 3 Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          {tier3Features.map((feature, idx) => (
            <Card key={idx} className="interactive-card group border-pink-200"><CardContent className="p-6"><div className="font-bold text-lg mb-2 flex items-center gap-2">{feature.icon} {feature.title}</div></CardContent></Card>
          ))}
        </div>
      </div>
      {/* Tier Table */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4 text-center">🧩 Choose Your Inbound Stack</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-purple-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-purple-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Tier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Outcome</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Who It’s For</th>
              </tr>
            </thead>
            <tbody>
              {inboundTiers.map((row, idx) => (
                <tr key={idx} className="border-t border-purple-100 bg-white hover:bg-purple-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-purple-700">{row.tier}</td>
                  <td className="px-6 py-4 text-foreground/80">{row.outcome}</td>
                  <td className="px-6 py-4 text-foreground/70">{row.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-purple-500 pl-4 py-2 mt-6">
          💡 Each tier stacks on ROI. Remove a layer, and it stops compounding.
        </blockquote>
      </div>
      {/* Who It's For Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4 text-center">🎯 Who This Is For</h3>
        <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 max-w-2xl mx-auto text-left mb-4">
          <li>Your traffic’s okay, but demo volume is low</li>
          <li>Cold leads go nowhere — and stay cold</li>
          <li>You can’t track what content converts or why</li>
          <li>Your nurture system is “send a newsletter sometimes”</li>
          <li>Your site isn’t tailored to ICP behavior or signals</li>
        </ul>
        <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-purple-500 pl-4 py-2">
          If your inbound funnel isn’t engineered, it’s just noise.
        </blockquote>
      </div>
      {/* Real Results Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4 text-center">📊 Real Results</h3>
        <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 max-w-2xl mx-auto text-left mb-4">
          <li>2.4x increase in form-to-call conversion</li>
          <li>40% shorter nurture-to-meeting time</li>
          <li>19% more booked calls after optimizing LinkedIn bios + landing CTAs</li>
          <li>3 new MQLs per week from website personalization alone</li>
          <li>SEO + lead magnet combo brought in 500+ new emails in 6 weeks</li>
        </ul>
      </div>
      {/* How It Works Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4 text-center">⚙ How It Works (3-Step)</h3>
        <ol className="list-decimal list-inside text-lg text-foreground/80 space-y-4 max-w-2xl mx-auto text-left mb-4">
          <li><span className="font-bold">🩺 Run Inbound Audit</span><br/><span className="text-foreground/70">→ We analyze your funnel, traffic, and drop-offs</span></li>
          <li><span className="font-bold">🔧 Install Conversion Engine</span><br/><span className="text-foreground/70">→ Pages, automations, chat flows, nurture, scoring, analytics — live</span></li>
          <li><span className="font-bold">📈 Watch Pipeline Lift</span><br/><span className="text-foreground/70">→ Visitors stay longer, convert faster, and show real buying intent</span></li>
        </ol>
      </div>
      {/* Final CTA Section */}
      <div className="text-center animate-fade-in-up mb-24" style={{ animationDelay: '0.8s' }}>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          You paid for the clicks.<br/>You wrote the content.<br/>You earned the visit.
        </h3>
        <p className="text-foreground/70 mb-8">
          So why are buyers still slipping away?<br/>
          This is the inbound engine that stops the bleeding — and compounds every lead into revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-hero text-white px-8 py-4 text-lg group">
            <span className="relative z-10">🧠 Run Free Inbound Audit</span>
          </Button>
          <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-pink-200 hover:border-pink-300">
            <span className="relative z-10">📈 Ask for Before/After Results</span>
          </Button>
          <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-purple-200 hover:border-purple-300">
            <span className="relative z-10">⚙ Compare Tier Options</span>
          </Button>
        </div>
      </div>
    </div>
  </section>
)

export default InboundMagnet
