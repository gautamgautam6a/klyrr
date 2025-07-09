import React from 'react';
import Philosophy from './Philosophy';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useFunnelModal } from '../App';

const AboutUsPage: React.FC = () => {
  const values = [
    {
      icon: "🎯",
      title: "Founder-First Thinking",
      description: "We understand the weight of building something from nothing. Every system we build is designed by founders, for founders who refuse to accept 'good enough.'"
    },
    {
      icon: "⚡",
      title: "Speed Without Sacrifice",
      description: "Fast execution shouldn't mean cutting corners. Our modular approach delivers results in days, not quarters, while maintaining enterprise-grade quality."
    },
    {
      icon: "🔧",
      title: "Systems Over Services",
      description: "We don't believe in dependency. We build you engines that run independently, giving you ownership and control over your growth trajectory."
    },
    {
      icon: "📊",
      title: "Data-Driven Results",
      description: "Every recommendation is backed by data, every system is measurable, and every outcome is trackable. No vanity metrics, just real business impact."
    }
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "Co-Founder & CEO",
      bio: "Former VP of Growth at 2 successful SaaS exits. Obsessed with turning revenue chaos into predictable growth engines.",
      avatar: "AR",
      specialty: "GTM Strategy & Revenue Operations"
    },
    {
      name: "Sarah Chen",
      role: "Co-Founder & CTO", 
      bio: "Ex-Salesforce Principal Engineer. Builds the automation and integration backbone that powers our growth engines.",
      avatar: "SC",
      specialty: "Marketing Automation & Technical Architecture"
    },
    {
      name: "Marcus Johnson",
      role: "Head of Growth Engineering",
      bio: "15 years optimizing conversion funnels for B2B SaaS. Turned the art of growth into a science.",
      avatar: "MJ",
      specialty: "Conversion Optimization & A/B Testing"
    }
  ];



  const achievements = [
    {
      metric: "100+",
      label: "SaaS Companies Helped",
      description: "From seed stage to $50M ARR"
    },
    {
      metric: "340%",
      label: "Average Pipeline Increase",
      description: "Within first 90 days"
    },
    {
      metric: "30-90",
      label: "Day ROI Payback",
      description: "Typical investment recovery"
    },
    {
      metric: "97%",
      label: "Client Retention Rate",
      description: "Founders who stay and expand"
    }
  ];

  return (
    <main className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex flex-col pt-16 sm:pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="inline-flex items-center rounded-md text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 bg-blue-600 text-white shadow-lg glow-badge px-4 py-2 mb-6">
            Our Story
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Built by Founders, <span className="text-blue-600">For Founders</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            We've been where you are. The late nights wondering why your funnel isn't converting. 
            The expensive experiments that never pan out. The constant feeling that you're one breakthrough away from predictable growth.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            KLYRR was born from our own frustration with the status quo. We're not just another agency—we're founders who got tired of watching good companies struggle with broken growth systems.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="glass-card border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To eliminate the chaos and guesswork from SaaS growth by providing modular, 
                  data-driven systems that founders can install, own, and scale independently. 
                  No more dependency on agencies. No more Frankensteined funnels. Just clean, 
                  predictable growth engines that compound over time.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  A world where every SaaS founder has access to enterprise-grade growth infrastructure, 
                  regardless of budget or team size. Where growth is no longer a black box of hope and 
                  luck, but a systematic, measurable process that scales with your ambition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every system we build.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass-card border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet the <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Former founders and operators who've been in the trenches and know what actually works.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="glass-card border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 group-hover:scale-110 transition-transform duration-300">
                      {member.avatar}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    {member.bio}
                  </p>
                  <Badge className="text-xs bg-blue-50 text-blue-700 border border-blue-200">
                    {member.specialty}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Achievements */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Impact</span>
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real companies who trusted us with their growth.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-card border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
                <CardContent className="p-6">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {achievement.metric}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {achievement.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 sm:py-16">
        <Philosophy />
      </section>

    </main>
  );
};

export default AboutUsPage; 