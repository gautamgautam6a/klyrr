import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const phases = [
  {
    title: 'Phase 1: Build the Signal',
    quote: 'You don\'t need more noise. You need clarity.',
    items: [
      { label: 'Narrative Strategy Call', desc: 'Clarify your founder POV, category stance, and buyer magnetics.' },
      { label: 'LinkedIn Bio Rewrite + Founder Banner', desc: 'Designed to stop scrolls and sharpen positioning in 10 seconds or less.' },
      { label: 'Signature Founder Stories (x2)', desc: 'Posts built around your origin, vision, or pain - to trigger emotion, attention, and credibility.' },
    ],
  },
  {
    title: 'Phase 2: Create Weekly Compounding Trust',
    quote: 'Most founders post. The best ones build a movement.',
    items: [
      { label: '4 Weekly Founder Posts', desc: 'Written in your voice. Designed to resonate with your ICP, not farm likes.' },
      { label: 'ICP Comment & Trigger Plan', desc: 'Strategic engagement with buyer/investor circles to place you in every key conversation.' },
      { label: 'Silent Funnel Follow-Up Assets', desc: 'Post-demo posts. Pain reactivation content. Asynchronous credibility builders.' },
    ],
  },
  {
    title: 'Phase 3: Expand Beyond LinkedIn',
    quote: 'Your voice should be working - even when you\'re not.',
    items: [
      { label: '20+ Prompt-Driven Founder Content Ideas', desc: 'Never run dry. Use our bank or let us write them for you.' },
      { label: 'Founder DM Flow Kit', desc: 'Open conversations without pitching. Convert profile views into pipeline.' },
      { label: 'Podcast Booking & Strategy', desc: 'Get on 3–5 ICP-aligned podcasts with scripted CTAs and sequencing support.' },
    ],
  },
  {
    title: 'Phase 4: Distribute + Compound Your Signal',
    quote: 'This is how real influence scales.',
    items: [
      { label: 'Shortform Video Kit (2–4 clips/month)', desc: 'Chop key ideas into high-signal snackable content for X, LinkedIn, YouTube.' },
      { label: 'Newsletter Setup + Launch Plan', desc: 'Your founder letter, engineered for resonance. Not just a Substack.' },
      { label: 'Investor GTM Asset', desc: 'Build confidence and raise faster - with a founder-led narrative investors feel.' },
    ],
  },
]

const FounderSignal: React.FC = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-600/20 rounded-full blur-xl animate-float"></div>
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
        <Badge className="inline-flex items-center rounded-md text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 bg-cyan-600 text-white shadow-lg glow-badge px-4 py-2 mb-6">
          Founder Signal Engine
        </Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-600 mb-6 text-center heading-gradient text-balance mb-4">
          If They Don't Trust You, They Won't Buy From You.
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-cyan-600 text-balance mb-6">
          KLYRR installs a founder-led trust engine that turns silence into sales, thought into traction, and presence into predictable pipeline.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="btn-hero text-white px-8 py-4 text-lg group">
            <span className="relative z-10">🧠 Book a Founder Signal Audit</span>
          </Button>
          <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-cyan-200 hover:border-cyan-300">
            <span className="relative z-10">📣 See Founder-Led Growth Systems</span>
          </Button>
        </div>
      </div>
      {/* Problem Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 text-center">❌ The Problem You're Tolerating</h3>
        <p className="text-center text-lg text-foreground/70 mb-4 max-w-2xl mx-auto">
          Your product is good.<br/>
          Your GTM might even be working.<br/>
          But if you - the founder - aren't showing up with clarity and consistency, here's what you're silently bleeding:
        </p>
        <div className="max-w-2xl mx-auto mb-4">
          <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 text-left">
            <li>Strategic buyers ghosting because they don't feel leadership confidence</li>
            <li>Demo attendance dropping because there's no face behind the brand</li>
            <li>Investors feeling uncertain because your narrative feels... rehearsed</li>
            <li>Cold leads taking weeks to convert because they're still trying to figure out "who you are"</li>
          </ul>
        </div>
        <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-cyan-500 pl-4 py-2">
          "People buy from people" isn't a cliché. It's a funnel. And right now, yours is missing its strongest lever.
        </blockquote>
      </div>
      {/* What It Does Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-cyan-600 mb-4 text-center">🧱 The Founder Signal Engine - What It Actually Does</h3>
        <h4 className="text-xl font-semibold text-center mb-6">This isn't a ghostwritten content package.</h4>
        <p className="text-center text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          It's a modular system that helps your market recognize, remember, and trust you - before the demo, during the deal, and long after onboarding.
        </p>
        {phases.map((phase) => (
          <div key={phase.title} className="mb-10">
            <h4 className="text-lg md:text-xl font-bold text-cyan-700 mb-2">{phase.title}</h4>
            <blockquote className="italic text-foreground/70 border-l-4 border-cyan-400 pl-4 py-2 mb-2">{phase.quote}</blockquote>
            <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 ml-4">
              {phase.items.map((item, i) => (
                <li key={i}>
                  <span className="font-semibold text-cyan-700">{item.label}</span> - {item.desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Not for Everyone Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-cyan-600 mb-4 text-center">🧩 Not for Everyone</h3>
        <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 max-w-2xl mx-auto text-left mb-4">
          <li>Still lead sales, but know they're becoming a bottleneck</li>
          <li>Can't afford to stay invisible, inconsistent, or generic</li>
          <li>Know their product is strong - but their presence isn't pulling its weight</li>
          <li>Want to build something that feels inevitable, not optional</li>
        </ul>
      </div>
      {/* Real Results Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-cyan-600 mb-4 text-center">📊 Real Results</h3>
        <ul className="list-disc list-inside text-lg text-foreground/80 space-y-2 max-w-2xl mx-auto text-left mb-4">
          <li>$190K ARR sourced from a single founder post → DM → demo → close</li>
          <li>3 inbound investor convos triggered by LinkedIn newsletter replies</li>
          <li>44% post-demo increase in deal velocity when founder content was active</li>
          <li>"You're everywhere" mentioned 5x in one discovery call</li>
        </ul>
        <blockquote className="italic text-center text-foreground/70 max-w-2xl mx-auto border-l-4 border-cyan-500 pl-4 py-2">
          Founder-led GTM doesn't just get noticed. It closes deals.
        </blockquote>
      </div>
      {/* How It Works Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-cyan-600 mb-4 text-center">⚙ How It Works (Simple 3-Step)</h3>
        <ol className="list-decimal list-inside text-lg text-foreground/80 space-y-4 max-w-2xl mx-auto text-left mb-4">
          <li><span className="font-bold">Diagnose the Signal Gap</span><br/><span className="text-foreground/70">→ Narrative, posture, platform, ICP alignment</span></li>
          <li><span className="font-bold">Install the System</span><br/><span className="text-foreground/70">→ Posts, flows, visuals, strategy, motion</span></li>
          <li><span className="font-bold">Watch It Compound</span><br/><span className="text-foreground/70">→ More replies, more reach, more trust → more revenue</span></li>
        </ol>
      </div>
      {/* Final CTA Section */}
      <div className="text-center animate-fade-in-up mb-24" style={{ animationDelay: '0.7s' }}>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          If your company's brand feels invisible...<br/>ask yourself: is your founder signal doing any heavy lifting at all?
        </h3>
        <p className="text-foreground/70 mb-8">
          Buyers follow founders.<br/>
          Founders who show up win.<br/>
          Founders who hesitate fall behind - silently, but surely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-hero text-white px-8 py-4 text-lg group">
            <span className="relative z-10">🧠 Book My Founder Audit</span>
          </Button>
          <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-cyan-200 hover:border-cyan-300">
            <span className="relative z-10">📣 See Real Signal Systems</span>
          </Button>
          <Button className="px-8 py-4 text-lg group bg-white/50 backdrop-blur-sm hover:bg-white/70 border-2 border-cyan-200 hover:border-cyan-300">
            <span className="relative z-10">⚙ Build My Engine</span>
          </Button>
        </div>
      </div>
    </div>
  </section>
)

export default FounderSignal 