import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, Zap, TrendingUp, Users, Mail, Bot, BarChart3, ArrowRight, Play, Star, Quote, Download, Eye, Clock, DollarSign, MessageSquare } from 'lucide-react';

const FounderSignalPage = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  
  const metrics = [
    { number: "$190K", label: "ARR from single post", period: "post → DM → demo → close" },
    { number: "44%", label: "Increase in deal velocity", period: "post-demo conversion" },
    { number: "3", label: "Investor conversations", period: "from newsletter" },
    { number: "5x", label: "Brand recognition", period: "mentions in discovery calls" }
  ];

  const processPhases = [
    {
      phase: '01',
      title: 'Build the Signal',
      description: '"You don\'t need more noise. You need clarity."',
      focus: 'Foundation of your founder narrative and positioning strategy',
      deliverables: [
        { name: 'Narrative Strategy Session', desc: 'Founder POV, category stance, buyer psychology' },
        { name: 'LinkedIn Profile Optimization', desc: 'Bio + banner designed to stop scrolls in 10 seconds' },
        { name: '2 Signature Founder Stories', desc: 'Origin/vision posts that build emotional connection' }
      ]
  },
  {
      phase: '02',
      title: 'Create Weekly Trust',
      description: '"Most founders post. The best ones build movements."',
      focus: 'Consistent content system that builds credibility with your ICP',
      deliverables: [
        { name: '4 Weekly ICP-Focused Posts', desc: 'Written in your voice, designed for resonance' },
        { name: 'Strategic Engagement Plan', desc: 'Comment strategy for buyer/investor circles' },
        { name: 'Silent Funnel Assets', desc: 'Post-demo content that reactivates interest' }
      ]
  },
  {
      phase: '03',
      title: 'Expand Your Reach',
      description: '"Your voice should work even when you\'re not."',
      focus: 'Multi-channel presence that compounds your authority',
      deliverables: [
        { name: '20+ Content Prompts', desc: 'Never run out of high-signal ideas' },
        { name: 'DM Flow Templates', desc: 'Convert profile views into pipeline' },
        { name: 'Podcast Strategy', desc: '3-5 ICP-aligned bookings with CTA scripts' }
      ]
  },
  {
      phase: '04',
      title: 'Scale Your Signal',
      description: '"This is how real influence scales."',
      focus: 'Systematic distribution that amplifies your founder voice',
      deliverables: [
        { name: 'Video Content System', desc: '2-4 clips/month for multi-platform distribution' },
        { name: 'Newsletter Launch', desc: 'Founder letter designed for engagement' },
        { name: 'Investor Narrative', desc: 'Founder-led story that builds investor confidence' }
      ]
    }
  ];

  const problems = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: '🔍 Invisible Leadership',
      description: 'Strategic buyers can\'t connect with your vision because they don\'t know who you are or what you stand for.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '⏰ Slow Deal Velocity',
      description: 'Prospects take weeks to convert because they\'re researching you personally, not just your product.'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: '💰 Missed Opportunities',
      description: 'Investors and key partnerships slip away because your narrative feels generic, not founder-driven.'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: '📉 Declining Engagement',
      description: 'Demo no-shows increase when prospects can\'t feel the human leadership behind the brand.'
    }
  ];

  const results = [
    { number: "$190K", description: "ARR from single founder post → DM → demo → close" },
    { number: "44%", description: "Increase in post-demo deal velocity" },
    { number: "3", description: "Inbound investor conversations from newsletter" },
    { number: "5x", description: "\"You're everywhere\" mentions in discovery calls" }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Diagnose Your Signal Gap',
      description: 'We analyze your current founder presence, narrative clarity, and ICP alignment to identify exactly what\'s missing from your trust equation.'
    },
    {
      step: '02',
      title: 'Install the System',
      description: 'We build and implement your founder signal engine—from content strategy to engagement flows to distribution systems.'
    },
    {
      step: '03',
      title: 'Watch It Compound',
      description: 'Your founder presence starts working 24/7, generating trust, credibility, and pipeline while you focus on running your business.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-sm font-medium">
          Founder Signal Engine
        </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              If They Don't Trust You,<br />
              <span className="text-purple-600">They Won't Buy From You</span>
        </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We build founder-led trust systems that turn your expertise into predictable pipeline
            </p>
            
            {/* Rotating Metrics */}
            <div className="mb-10 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-100 max-w-md mx-auto">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {metrics[currentMetric].number}
              </div>
              <div className="text-gray-700 font-medium mb-1">
                {metrics[currentMetric].label}
              </div>
              <div className="text-sm text-gray-500">
                {metrics[currentMetric].period}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <span className="mr-2">🧠</span>
                Get Your Free Founder Signal Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
              <Button variant="outline" className="border-2 border-purple-200 hover:border-purple-300 px-8 py-4 text-lg font-medium rounded-xl bg-white/50 backdrop-blur-sm">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
          </Button>
        </div>
      </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Silent Revenue Killer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your product works. Your team delivers. But something's missing in your growth equation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {problems.map((problem, idx) => (
                <Card key={idx} className="bg-white border-l-4 border-l-red-500 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-100 rounded-lg text-red-600">
                        {problem.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-red-600 mb-2">{problem.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gray-800 p-8 rounded-2xl text-white text-center">
              <Quote className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <p className="text-xl font-medium mb-4">
                "People buy from people" isn't marketing fluff—it's your strongest competitive advantage waiting to be activated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Founder Signal Engine</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building founder-led trust that converts prospects before they even book a demo. 
              Not content marketing—strategic influence engineering.
            </p>
          </div>
          
          {/* Process Table */}
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="bg-purple-600 text-white">
                <CardTitle className="text-xl">Process Overview</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-purple-50">
                      <tr>
                        <th className="p-4 text-left font-semibold text-gray-900">Phase</th>
                        <th className="p-4 text-left font-semibold text-gray-900">What We Build</th>
                        <th className="p-4 text-left font-semibold text-gray-900">Key Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      {processPhases.map((phase, idx) => (
                        <tr key={idx} className="border-b border-gray-100 last:border-b-0">
                          <td className="p-6">
                            <div className="flex items-center gap-4 mb-3">
                              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {phase.phase}
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900">{phase.title}</h4>
                                <p className="text-sm text-gray-600 italic">{phase.description}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-6">
                            <p className="text-gray-700">{phase.focus}</p>
                          </td>
                          <td className="p-6">
                            <ul className="space-y-3">
                              {phase.deliverables.map((deliverable, deliverableIdx) => (
                                <li key={deliverableIdx} className="flex items-start gap-2">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="font-semibold text-gray-900">{deliverable.name}</div>
                                    <div className="text-sm text-gray-600">{deliverable.desc}</div>
      </div>
                </li>
              ))}
            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Real Results from Real Founders
              </h2>
              <p className="text-xl text-gray-600">
                When founders show up consistently, the numbers follow
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, idx) => (
                <Card key={idx} className="text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-3xl font-bold text-green-600 mb-2">{result.number}</div>
                    <div className="text-gray-600">{result.description}</div>
                  </CardContent>
                </Card>
        ))}
      </div>
      </div>
      </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                Simple 3-step process that builds systematic founder presence
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((step, idx) => (
                <Card key={idx} className="text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
      </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Turn Your Founder Voice Into Revenue?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Stop being the best-kept secret in your industry. Let's build a founder signal that works.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-medium rounded-xl shadow-lg">
                <span className="mr-2">🧠</span>
                Get Your Free Founder Signal Audit
          </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-medium rounded-xl">
                <span className="mr-2">📞</span>
                Schedule Strategy Call
          </Button>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
};

export default FounderSignalPage; 