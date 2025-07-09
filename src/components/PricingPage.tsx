import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const plans = [
  {
    name: 'Basic',
    price: { monthly: 49, yearly: 490 },
    features: [
      'All core features',
      'Email support',
      'Single user',
      'Access to updates',
    ],
    cta: 'Get Started',
    recommended: false,
  },
  {
    name: 'Pro',
    price: { monthly: 129, yearly: 1290 },
    features: [
      'Everything in Basic',
      'Priority support',
      'Up to 5 users',
      'Advanced analytics',
      'Custom integrations',
    ],
    cta: 'Start Pro',
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 299, yearly: 2990 },
    features: [
      'Everything in Pro',
      'Dedicated manager',
      'Unlimited users',
      'Custom onboarding',
      'SLA & compliance',
    ],
    cta: 'Contact Sales',
    recommended: false,
  },
];

const faqs = [
  {
    q: 'Can I switch plans later?',
    a: 'Absolutely! You can upgrade or downgrade your plan at any time from your dashboard.'
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes, we offer a 14-day free trial on all plans. No credit card required.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards. For Enterprise, we also support invoicing.'
  },
  {
    q: 'Do you offer discounts for startups?',
    a: 'Yes! Contact us for special pricing if you are an early-stage startup.'
  },
  {
    q: 'Is my data secure?',
    a: 'We use industry-standard security and compliance practices to keep your data safe.'
  },
];

const PricingPage: React.FC = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex flex-col pt-16 sm:pt-20 md:pt-24 animate-fade-in-up">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="inline-flex items-center rounded-md text-xs font-semibold transition-colors border-0 bg-blue-600 text-white shadow-lg glow-badge px-4 py-2 mb-6">
          Pricing
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-6">
          Simple, transparent pricing for <span className="text-blue-600">every stage</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          No hidden fees. No surprises. Just powerful growth engines, ready to install.
        </p>
        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-8 animate-fade-in-up">
          <Button
            variant={billing === 'monthly' ? 'default' : 'outline'}
            size="sm"
            className="transition-all duration-200"
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </Button>
          <span className="text-gray-400 font-medium">/</span>
          <Button
            variant={billing === 'yearly' ? 'default' : 'outline'}
            size="sm"
            className="transition-all duration-200"
            onClick={() => setBilling('yearly')}
          >
            Yearly <span className="ml-1 text-emerald-600 font-semibold">(2 months free)</span>
          </Button>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container section-padding section-spacing grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up">
        {plans.map((plan, idx) => (
          <Card
            key={plan.name}
            className={`relative flex flex-col shadow-xl border-2 transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl ${plan.recommended ? 'border-blue-600 bg-white/90 z-10 scale-105 shadow-2xl animate-pulse-glow' : 'border-blue-200 bg-white/80'} ${plan.recommended ? 'ring-2 ring-blue-400' : ''}`}
            style={{ minHeight: 480 }}
          >
            {plan.recommended && (
              <Badge className="absolute top-4 right-4 bg-emerald-600 text-white shadow glow-badge z-20">Recommended</Badge>
            )}
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold mb-2 text-blue-700">{plan.name}</CardTitle>
              <CardDescription className="text-4xl font-extrabold text-gray-900 mb-2">
                ${plan.price[billing].toLocaleString()}
                <span className="text-base font-medium text-gray-500">/mo</span>
              </CardDescription>
              {billing === 'yearly' && (
                <div className="text-emerald-600 text-xs font-semibold">Billed ${plan.price.yearly.toLocaleString()} / year</div>
              )}
            </CardHeader>
            <Separator className="my-2" />
            <CardContent className="flex-1 flex flex-col justify-between">
              <ul className="space-y-3 text-left mt-4 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 text-base">
                    <span className="inline-block w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                      <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <Button
                variant={plan.recommended ? 'default' : 'outline'}
                size="lg"
                className={`w-full transition-all duration-200 shadow-md hover:shadow-xl ${plan.recommended ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="container section-padding max-w-3xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border border-blue-200 bg-white/80 shadow-md transition-all duration-300 hover:shadow-lg ${openFaq === i ? 'ring-2 ring-blue-400' : ''}`}
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-left text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span>{faq.q}</span>
                <svg
                  className={`w-5 h-5 ml-4 transform transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 pb-4 text-gray-600 text-base transition-all duration-300 ${openFaq === i ? 'block' : 'hidden'}`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PricingPage; 