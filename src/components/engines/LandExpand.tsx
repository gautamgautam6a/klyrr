import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const systemPhases = [
  {
    title: 'Phase 1 - Understand What\'s Leaking',
    items: [
      'Segment accounts by ARR, risk, expansion potential',
      'Map onboarding flows + renewal timelines',
      'Identify top churn signals and QBR gaps',
    ],
  },
  {
    title: 'Phase 2 – Install the Playbooks',
    items: [
      'Win-back campaigns for churned or silent accounts',
      'Expansion email flows + NPS trigger sequences',
      'CSM objection handling, renewal narratives, upsell scripts',
      'In-product nudges + feature activation pushes',
    ],
  },
  {
    title: 'Phase 3 – Forecast, Score, and Expand',
    items: [
      'AI-driven risk scoring and renewal forecasting',
      'KPI dashboards that expose usage and revenue trends',
      'Trigger-based workflows for deal rescue + expansion outreach',
      'Referral & advocacy loops baked into QBRs + testimonials',
    ],
  },
]

const LandExpand: React.FC = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-purple-600/20 rounded-full blur-xl animate-float"></div>
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
        <Badge className="inline-flex items-center rounded-md text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 bg-violet-600 text-white shadow-lg glow-badge px-4 py-2 mb-6">
          Land & Expand Engine
        </Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-violet-600 mb-6 text-center heading-gradient text-balance mb-4">
          Retention Isn't a Metric. It's a System — and Yours Is Bleeding.
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-violet-600 text-balance mb-6">
          The Land & Expand Engine installs a post-sale GTM infrastructure that turns silent accounts into pipeline, and renewals into expansion — without hiring more CSMs.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="btn-hero text-white px-8 py-4 text-lg group">
            <span className="relative z-10">🧠 Get a Retention System Audit</span>
          </Button>
          <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-violet-200 hover:border-violet-300">
            <span className="relative z-10">📈 See Expansion Playbooks</span>
          </Button>
        </div>
      </div>
      {/* Problem Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 text-center">❌ The Hidden Risks You're Ignoring</h3>
        <p className="text-center text-lg text-foreground/70 mb-4 max-w-2xl mx-auto">
          You're landing logos — but can't explain why some vanish.<br/>
          You're upselling manually — or not at all.<br/>
          Your CSMs are working hard — but flying blind.<br/>
          Here's what's happening underneath the surface:
        </p>
        <div className="max-w-2xl mx-auto mb-4">
          <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 text-left">
            <li>"Happy" customers ghosting at renewal time</li>
            <li>Expansion deals stuck because no one's proactively owning them</li>
            <li>Product features going unused — and unmissed</li>
            <li>No feedback loops between GTM and product</li>
            <li>No forecast on who's likely to churn until it's too late</li>
          </ul>
        </div>
        <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-violet-500 pl-4 py-2">
          If you're only running GTM pre-sale, you don't have a revenue engine. You have a leaky bucket.
        </blockquote>
      </div>
      {/* What It Does Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-violet-600 mb-4 text-center">🔧 What the Land & Expand Engine Actually Does</h3>
        <h4 className="text-xl font-semibold text-center mb-6">This is not customer success consulting.</h4>
        <p className="text-center text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          It's a modular post-sale GTM system — installed and optimized for pipeline, renewals, and expansion.<br/>
          We don't train CSMs.<br/>
          We give them the playbook, systems, and signals to win deals they didn't even know were on the table.
        </p>
      </div>
      {/* System Overview Phases */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-violet-600 mb-4 text-center">📐 System Overview – What's Inside</h3>
        {systemPhases.map((phase) => (
          <div key={phase.title} className="mb-8">
            <h4 className="text-lg md:text-xl font-bold text-violet-700 mb-2">{phase.title}</h4>
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
        <h3 className="text-2xl md:text-3xl font-bold text-violet-600 mb-4 text-center">🎯 Who This Is For</h3>
        <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 max-w-2xl mx-auto text-left mb-4">
          <li>Losing revenue silently after the sale</li>
          <li>Flying blind on expansion and renewal forecasting</li>
          <li>Treating CS as a support function instead of a revenue channel</li>
          <li>Struggling to scale without throwing bodies at the problem</li>
          <li>Wondering why NRR is flat — even when logo churn is low</li>
        </ul>
        <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-violet-500 pl-4 py-2">
          Your product isn't sticky by default.<br/>
          But the right system makes it feel that way.
        </blockquote>
      </div>
      {/* Real Results Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-violet-600 mb-4 text-center">📊 Real Results</h3>
        <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 max-w-2xl mx-auto text-left mb-4">
          <li>$490K recovered from reactivating 12 churned accounts</li>
          <li>28% increase in feature adoption after behavior-triggered nudges</li>
          <li>33% faster renewal cycles after QBR automation rollout</li>
          <li>2.4x more referrals when customer advocacy workflows were deployed</li>
          <li>3-point NRR lift in under 60 days — with zero new CSM hires</li>
        </ul>
      </div>
      {/* How It Works Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-violet-600 mb-4 text-center">⚙ How It Works</h3>
        <ol className="list-decimal list-inside text-lg text-foreground/80 space-y-4 max-w-2xl mx-auto text-left mb-4">
          <li><span className="font-bold">Diagnose Your Post-Sale Funnel</span><br/><span className="text-foreground/70">→ Map where usage, trust, and touchpoints are dropping</span></li>
          <li><span className="font-bold">Install Expansion Infrastructure</span><br/><span className="text-foreground/70">→ Email flows, playbooks, dashboards, in-product nudges, advocacy loops</span></li>
          <li><span className="font-bold">Watch NRR Compound</span><br/><span className="text-foreground/70">→ Better retention, faster renewals, more organic upsell and referrals</span></li>
        </ol>
      </div>
      {/* Final CTA Section */}
      <div className="text-center animate-fade-in-up mb-24" style={{ animationDelay: '0.8s' }}>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          You worked hard to land these accounts.<br/>Are you really okay watching them drift out the back door?
        </h3>
        <p className="text-foreground/70 mb-8">
          Retention isn't owned by product.<br/>
          Expansion isn't luck.<br/>
          Post-sale growth is a system — and we build it for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-hero text-white px-8 py-4 text-lg group">
            <span className="relative z-10">🧠 Get a Free Expansion Audit</span>
          </Button>
          <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-violet-200 hover:border-violet-300">
            <span className="relative z-10">📈 Request a Use Case Breakdown</span>
          </Button>
          <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-violet-200 hover:border-violet-300">
            <span className="relative z-10">⚙ Explore Packages</span>
          </Button>
        </div>
      </div>
    </div>
  </section>
)

export default LandExpand 