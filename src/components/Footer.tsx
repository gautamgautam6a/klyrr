import React from 'react'
import { Button } from '@/components/ui/button'

const Footer: React.FC = () => (
  <footer className="w-full bg-white border-t border-gray-200 py-8 mt-16">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-xl text-blue-600">KLYRR</span>
        <span className="text-gray-400">© {new Date().getFullYear()}</span>
      </div>
      <div className="flex space-x-6 items-center">
        <a href="/privacy" className="text-gray-500 hover:text-blue-600 transition">Privacy</a>
        <a href="/terms" className="text-gray-500 hover:text-blue-600 transition">Terms</a>
        <a href="/contact" className="text-gray-500 hover:text-blue-600 transition">Contact</a>
        <a href="https://www.linkedin.com/company/klyrr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition" aria-label="LinkedIn">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
)

export default Footer 