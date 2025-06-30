import React from 'react'
import { Button } from '@/components/ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      {/* Final CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
              Ready to Transform Your GTM?
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6 mb-12">
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
                You already know your funnel isn't performing like it should. You've known for weeks. Maybe months.
              </p>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
                <p className="text-xl lg:text-2xl font-semibold text-white mb-2">
                  So here's the only question left:
                </p>
                <p className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                  How many more quarters are you willing to lose to a system you already know is broken?
                </p>
              </div>
            </div>

            <div className="mb-12">
              <div className="inline-flex items-center space-x-6 text-lg lg:text-xl text-gray-200">
                <span>This isn't marketing.</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>This is architecture.</span>
              </div>
              <p className="text-2xl lg:text-3xl font-bold text-white mt-4">
                Let's fix it.
              </p>
            </div>

            {/* Final CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Get Free Diagnosis
              </Button>
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 font-semibold"
              >
                Fix My Funnel Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="lg:col-span-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">KLYRR</h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                    Modular GTM Systems for SaaS Growth. Based in India, serving global SaaS founders.
                  </p>
                </div>
                
                {/* Contact */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact</h4>
                  <a 
                    href="mailto:contact@klyrr.com" 
                    className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@klyrr.com
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-3">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h4>
                <div className="space-y-3">
                  <a href="#" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium">Free GTM Diagnosis</a>
                  <a href="#" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium">Browse GTM Engines</a>
                  <a href="#" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium">Pricing & ROI</a>
                </div>
              </div>

              {/* Legal */}
              <div className="lg:col-span-3">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
                <div className="space-y-3">
                  <a href="#" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium">Privacy Policy</a>
                  <a href="#" className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium">Terms of Service</a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <p className="text-gray-500 text-sm">
                  &copy; 2024 KLYRR. All rights reserved.
                </p>
                <div className="flex items-center space-x-6">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Follow Us</span>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer 