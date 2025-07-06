import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Ready to Transform Your GTM?
            </h2>
            
            <div className="space-y-8 mb-12">
              <p className="text-xl text-gray-200">
                You already know your funnel isn't performing like it should.
              </p>
              <p className="text-xl text-gray-200">
                You've known for weeks. Maybe months.
              </p>
              <p className="text-xl text-gray-200">
                So here's the only question left:
              </p>
              <p className="text-3xl font-bold text-white">
                How many more quarters are you willing to lose to a system you already know is broken?
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-xl text-gray-200">
                This isn't marketing.
              </p>
              <p className="text-xl text-gray-200">
                This is architecture.
              </p>
              <p className="text-2xl font-bold text-white">
                Let's fix it.
              </p>
            </div>

            {/* Final CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <button className="btn-secondary text-lg w-full sm:w-auto">
                Get Free Diagnosis
              </button>
              <button className="btn-accent text-lg w-full sm:w-auto">
                Fix My Funnel Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-12 bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-white">KLYRR – Modular GTM Systems for SaaS Growth</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Based in India. Serving global SaaS founders.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2 text-gray-300">
                <a href="#" className="block hover:text-white transition-colors duration-300">Free GTM Diagnosis</a>
                <a href="#" className="block hover:text-white transition-colors duration-300">Browse GTM Engines</a>
                <a href="#" className="block hover:text-white transition-colors duration-300">Pricing & ROI</a>
                <a href="#" className="block hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="block hover:text-white transition-colors duration-300">Terms of Service</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <a href="mailto:contact@klyrr.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                contact@klyrr.com
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 KLYRR. All rights reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer 