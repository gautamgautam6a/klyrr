import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, Zap, TrendingUp, Users, Mail, Bot, BarChart3, ArrowRight, Play, Star, Quote, Download, Eye, Clock, DollarSign, MessageSquare, AlertTriangle, Shield, RefreshCw } from 'lucide-react';

const LandExpandPage = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  
  const metrics = [
    { number: "$490K", label: "Recovered Revenue", period: "from 12 churned accounts" },
    { number: "28%", label: "Feature Adoption", period: "increase after nudges" },
    { number: "33%", label: "Faster Renewals", period: "after QBR automation" },
    { number: "2.4x", label: "More Referrals", period: "with advocacy workflows" }
  ];

const systemPhases = [
  {
      phase: '01',
      title: 'Understand What\'s Leaking',
      description: '"You can\'t fix what you can\'t see."',
      focus: 'Diagnostic analysis of your post-sale funnel',
      deliverables: [
        { name: 'Account Segmentation', desc: 'Segment by ARR, risk, expansion potential' },
        { name: 'Onboarding Flow Mapping', desc: 'Map flows + renewal timelines' },
        { name: 'Churn Signal Analysis', desc: 'Identify top churn signals and QBR gaps' }
      ]
  },
  {
      phase: '02',
      title: 'Install the Playbooks',
      description: '"Systems beat strategies every time."',
      focus: 'Proven expansion and retention infrastructure',
      deliverables: [
        { name: 'Win-back Campaigns', desc: 'For churned or silent accounts' },
        { name: 'Expansion Email Flows', desc: 'NPS trigger sequences and upsell scripts' },
        { name: 'CSM Playbooks', desc: 'Objection handling, renewal narratives' },
        { name: 'In-product Nudges', desc: 'Feature activation pushes and usage triggers' }
      ]
  },
  {
      phase: '03',
      title: 'Forecast, Score, and Expand',
      description: '"Data-driven expansion is predictable expansion."',
      focus: 'AI-powered forecasting and automated workflows',
      deliverables: [
        { name: 'AI Risk Scoring', desc: 'Renewal forecasting and churn prediction' },
        { name: 'KPI Dashboards', desc: 'Usage and revenue trend exposure' },
        { name: 'Trigger Workflows', desc: 'Deal rescue + expansion outreach automation' },
        { name: 'Advocacy Loops', desc: 'Referral systems baked into QBRs' }
      ]
    }
  ];

  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: '❌ Silent Revenue Leaks',
      description: '"Happy" customers ghosting at renewal time with no warning signs.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '⏰ Stuck Expansion Deals',
      description: 'Expansion opportunities languishing because no one proactively owns them.'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: '👁️ Unused Features',
      description: 'Product features going unused — and customers don\'t even miss them.'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: '📉 No Feedback Loops',
      description: 'No connection between GTM and product teams for improvement.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: '🚨 Late Churn Detection',
      description: 'No forecast on who\'s likely to churn until it\'s too late to save them.'
    }
  ];

  const results = [
    { number: "$490K", description: "Recovered from reactivating 12 churned accounts" },
    { number: "28%", description: "Increase in feature adoption after behavior-triggered nudges" },
    { number: "33%", description: "Faster renewal cycles after QBR automation rollout" },
    { number: "2.4x", description: "More referrals when customer advocacy workflows were deployed" },
    { number: "3pt", description: "NRR lift in under 60 days — with zero new CSM hires" }
  ];

  const whoItsFor = [
    'Losing revenue silently after the sale',
    'Flying blind on expansion and renewal forecasting',
    'Treating CS as a support function instead of a revenue channel',
    'Struggling to scale without throwing bodies at the problem',
    'Wondering why NRR is flat — even when logo churn is low'
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Diagnose Your Post-Sale Funnel',
      description: 'We map where usage, trust, and touchpoints are dropping in your customer journey.'
    },
    {
      step: '02',
      title: 'Install Expansion Infrastructure',
      description: 'We build email flows, playbooks, dashboards, in-product nudges, and advocacy loops.'
    },
    {
      step: '03',
      title: 'Watch NRR Compound',
      description: 'Better retention, faster renewals, more organic upsell and referrals.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium">
          Land & Expand Engine
        </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Retention Isn't a Metric.<br />
              <span className="text-blue-600">It's a System — and Yours Is Bleeding.</span>
        </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The Land & Expand Engine installs a post-sale GTM infrastructure that turns silent accounts into pipeline, 
              and renewals into expansion — without hiring more CSMs.
            </p>
            
            {/* Rotating Metrics */}
            <div className="mb-10 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 max-w-md mx-auto">
              <div className="text-3xl font-bold text-blue-600 mb-1">
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
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <span className="mr-2">🧠</span>
                Get a Retention System Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
              <Button variant="outline" className="border-2 border-blue-200 hover:border-blue-300 px-8 py-4 text-lg font-medium rounded-xl bg-white/50 backdrop-blur-sm">
                <Play className="mr-2 w-5 h-5" />
                See Expansion Playbooks
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
                The Hidden Risks You're Ignoring
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You're landing logos — but can't explain why some vanish. You're upselling manually — or not at all. 
                Your CSMs are working hard — but flying blind.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
            
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center">
              <Quote className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
              <p className="text-xl font-medium text-gray-900 mb-4">
                If you're only running GTM pre-sale, you don't have a revenue engine. You have a leaky bucket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What the Land & Expand Engine Actually Does</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This is not customer success consulting. It's a modular post-sale GTM system — installed and optimized 
              for pipeline, renewals, and expansion. We don't train CSMs. We give them the playbook, systems, 
              and signals to win deals they didn't even know were on the table.
        </p>
      </div>
          
          {/* Process Table */}
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-xl">System Overview – What's Inside</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="p-4 text-left font-semibold text-gray-900">Phase</th>
                        <th className="p-4 text-left font-semibold text-gray-900">What We Build</th>
                        <th className="p-4 text-left font-semibold text-gray-900">Key Deliverables</th>
                      </tr>
                    </thead>
                    <tbody>
                      {systemPhases.map((phase, idx) => (
                        <tr key={idx} className="border-b border-gray-100 last:border-b-0">
                          <td className="p-6">
                            <div className="flex items-center gap-4 mb-3">
                              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
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

      {/* Who It's For Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who This Is For
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                {whoItsFor.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-lg font-medium text-gray-900 mb-4">
                  Your product isn't sticky by default. But the right system makes it feel that way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Real Results
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How It Works
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((step, idx) => (
                <Card key={idx} className="text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              You worked hard to land these accounts. Are you really okay watching them drift out the back door?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Retention isn't owned by product. Expansion isn't luck. Post-sale growth is a system — and we build it for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-medium rounded-xl shadow-lg">
                <span className="mr-2">🧠</span>
                Get a Free Expansion Audit
          </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-medium rounded-xl">
                <span className="mr-2">📈</span>
                Request a Use Case Breakdown
          </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-medium rounded-xl">
                <span className="mr-2">⚙</span>
                Explore Packages
          </Button>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
};

export default LandExpandPage; 