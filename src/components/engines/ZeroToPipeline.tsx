import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, Zap, TrendingUp, Users, Mail, Bot, BarChart3, ArrowRight, Play, Star, Quote, Download } from 'lucide-react';

const PipelineEnginePage = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  
  const metrics = [
    { number: "15-20", label: "Qualified Demos", period: "30-45 days" },
    { number: "44%", label: "Reply Rate", period: "avg increase" },
    { number: "3.4x", label: "Close Rate", period: "improvement" },
    { number: "$82K", label: "Pipeline Value", period: "reactivated" }
  ];

  const engineTiers = [
    { 
      tier: 'Starter Engine', 
      price: 'Custom Quote',
      outcome: '15–20 qualified demos in 30–45 days', 
      who: 'Early-stage teams launching systematic outbound',
      features: ['ICP mapping & data enrichment', 'Cold email sequences', 'Basic reply automation', 'Weekly optimization']
    },
    { 
      tier: 'Conversion Engine', 
      price: 'Custom Quote',
      outcome: 'Multi-channel pipeline with async + inbound + CRO', 
      who: 'Growing companies where founders need to step back',
      features: ['Everything in Starter', 'LinkedIn automation', 'Landing page optimization', 'Advanced AI replies', 'Inbound lead nurturing']
    },
    { 
      tier: 'Revenue Engine', 
      price: 'Custom Quote',
      outcome: 'Fully autonomous pipeline machine', 
      who: 'SaaS teams ready to scale GTM operations',
      features: ['Everything in Conversion', 'Full marketing automation', 'Advanced analytics', 'Custom integrations', 'Dedicated success manager']
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Pipeline Diagnosis',
      description: 'We audit your current GTM stack, identify conversion leaks, and map your ideal customer profile with surgical precision.',
      icon: <Target className="w-8 h-8" />,
      duration: '3-5 days'
    },
    {
      step: '02',
      title: 'System Architecture',
      description: 'Custom-built outbound sequences, AI reply automation, and conversion-optimized landing pages designed for your specific market.',
      icon: <Zap className="w-8 h-8" />,
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Launch & Optimize',
      description: 'Your pipeline engine goes live with continuous optimization based on real performance data and prospect behavior.',
      icon: <TrendingUp className="w-8 h-8" />,
      duration: 'Ongoing'
    }
  ];

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Precision ICP Targeting',
      description: 'Built with Clay, Apollo, and Groq for 100% accurate prospect identification and enrichment.'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Multi-Channel Outreach',
      description: 'Coordinated email and LinkedIn sequences that create urgency without being pushy or generic.'
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'AI Reply Intelligence',
      description: 'Automated responses to objections, FAQs, and follow-ups ensure no qualified lead goes cold.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Conversion Optimization',
      description: 'Landing pages and content assets designed specifically to convert traffic into qualified pipeline.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Signal-Based Optimization',
      description: 'Every interaction feeds back into smarter targeting and messaging for compound improvements.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Pipeline Automation',
      description: 'Reduce founder involvement while increasing conversion rates through systematic processes.'
    }
  ];

  const testimonials = [
    {
      quote: "KLYRR transformed our outbound from a time-consuming guessing game into a predictable revenue engine. We went from 2-3 demos per month to 18 qualified calls in our first 6 weeks.",
      author: "Sarah Chen",
      role: "CEO, TechFlow Solutions",
      company: "B2B SaaS",
      industry: "Technology",
      result: "18 qualified calls in 6 weeks"
    },
    {
      quote: "The AI reply system alone saved us 15 hours per week while increasing our response rate by 40%. This isn't just automation - it's intelligent automation.",
      author: "Marcus Rodriguez",
      role: "Head of Sales, DataSync",
      company: "Enterprise Software",
      industry: "Software",
      result: "40% increase in response rate"
    }
  ];

  const urgencyFactors = [
    {
      stat: "100%",
      text: "Guaranteed Increase in Demo Quality"
    },
    {
      stat: "100%",
      text: "Guaranteed Increase in Reply Rate"
    },
    {
      stat: "100%",
      text: "Guaranteed Increase in Close Rate"
    },
    {
      stat: "100%",
      text: "Guaranteed Increase in Pipeline Value"
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium">
              Pipeline Engine Technology
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Chasing Leads.<br />
              <span className="text-blue-600">Start Converting Pipeline.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              KLYRR installs a complete pipeline generation system that books qualified demos automatically. 
              No more manual outreach, no more guesswork, no more wasted time.
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
                Get Your Free Pipeline Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 border-blue-200 hover:border-blue-300 px-8 py-4 text-lg font-medium rounded-xl bg-white/50 backdrop-blur-sm">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.12'%3E%3Cpath d='M30 30h30v30H30V30zm15 15h15v15H45V45z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
              position: 'relative',
            }}
          >
            {/* Animated blue gradient overlay for extra depth */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 60% 40%, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0) 70%)',
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Pipeline Problem Every Growing Company Faces
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You're not short on leads. You're short on a system that converts prospects into revenue predictably.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-red-600 mb-4">❌ What's Not Working</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Manual Outreach Chaos</p>
                      <p className="text-gray-600">SDRs burning out on wrong-fit prospects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Founder Bottlenecks</p>
                      <p className="text-gray-600">You're still doing follow-ups manually</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Generic Messaging</p>
                      <p className="text-gray-600">Sequences that sound smart but get ignored</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Vanity Metrics</p>
                      <p className="text-gray-600">Agencies focus on "awareness" not conversions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">✅ What Success Looks Like</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Predictable Demo Flow</p>
                      <p className="text-gray-600">15-20 qualified demos every month</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Automated Follow-ups</p>
                      <p className="text-gray-600">AI handles objections and scheduling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Higher-Quality Prospects</p>
                      <p className="text-gray-600">Precise targeting increases close rates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Founder Freedom</p>
                      <p className="text-gray-600">Focus on closing, not prospecting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-xl font-medium text-gray-900 mb-4">
                "You're not running outbound. Outbound is running you."
              </p>
              <p className="text-gray-600">
                The difference between successful companies and struggling ones isn't effort—it's systematic execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Complete Pipeline Engine System
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don't just do outreach. We install a complete growth system that works across cold outbound, 
                warm follow-ups, and inbound conversion.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <Card key={idx} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How We Install Your Pipeline Engine
              </h2>
              <p className="text-xl text-gray-600">
                A proven 3-phase process that transforms your GTM operations in weeks, not months.
              </p>
            </div>
            
            <div className="space-y-12">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-blue-600 font-medium">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Choose Your Pipeline Engine
              </h2>
              <p className="text-xl text-gray-600">
                Scalable solutions designed for different stages of growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {engineTiers.map((tier, idx) => (
                <Card key={idx} className={`relative ${idx === 1 ? 'ring-2 ring-blue-600 shadow-2xl' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}>
                  {idx === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-gray-900">{tier.tier}</CardTitle>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{tier.price}</div>
                    <p className="text-gray-600">{tier.who}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Expected Outcome:</h4>
                      <p className="text-gray-600">{tier.outcome}</p>
                    </div>
                    <div className="space-y-3">
                      {tier.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className={`w-full mt-6 py-3 ${idx === 1 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'} text-white font-medium`}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Real Results from Real Companies
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <Card key={idx} className="bg-blue-50 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-900 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-blue-600">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency/ROI Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">Why Act Now?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {urgencyFactors.map((factor, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{factor.stat}</div>
                  <div className="text-sm text-gray-700">{factor.text}</div>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 mb-6">The best time to install a pipeline engine was last year. The second best time is now.</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg">
              <Download className="mr-2 w-5 h-5" />
              Download Full Case Study
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Pipeline?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Stop wondering why your outbound isn't working. Install a system that delivers predictable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-medium rounded-xl shadow-lg">
                <span className="mr-2">🧠</span>
                Get Your Free Pipeline Audit
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-medium rounded-xl">
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

export default PipelineEnginePage; 