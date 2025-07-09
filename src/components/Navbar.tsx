import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useFunnelModal } from '../App'

const engines = [
  {
    title: 'Zero to Pipeline Engine',
    icon: <span role="img" aria-label="Pipeline" className="text-blue-600 text-2xl">🚀</span>,
    desc: 'Drive pipeline with precision targeting and automation.',
    route: '/engine/zero-to-pipeline',
  },
  {
    title: 'Conversion Killshot Engine',
    icon: <span role="img" aria-label="Conversion" className="text-emerald-600 text-2xl">🎯</span>,
    desc: 'Turn demos into deals with conversion-optimized flows.',
    route: '/engine/conversion-killshot',
  },
  {
    title: 'Inbound Magnet Engine',
    icon: <span role="img" aria-label="Inbound" className="text-purple-600 text-2xl">🧲</span>,
    desc: 'Attract high-intent leads with inbound content and offers.',
    route: '/engine/inbound-magnet',
  },
  {
    title: 'Sales Onboarding & Transition System',
    icon: <span role="img" aria-label="Onboarding" className="text-orange-600 text-2xl">🧑‍💼</span>,
    desc: 'Seamlessly onboard and transition sales teams for scale.',
    route: '/engine/abm-fastlane',
  },
  {
    title: 'Founder Signal Engine',
    icon: <span role="img" aria-label="Founder" className="text-cyan-600 text-2xl">📡</span>,
    desc: 'Boost founder-led sales with personal brand and trust.',
    route: '/engine/founder-signal',
  },
  {
    title: 'Land & Expand Engine',
    icon: <span role="img" aria-label="LandExpand" className="text-violet-600 text-2xl">🌱</span>,
    desc: 'Expand accounts and reduce churn with post-sale systems.',
    route: '/engine/land-expand',
  },
]

function MegaMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const menuRef = useRef<HTMLDivElement>(null)

  // Close on escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  // Trap focus
  useEffect(() => {
    if (!open || !menuRef.current) return
    const first = menuRef.current.querySelector('a,button,div[tabindex]') as HTMLElement | null
    if (first) first.focus()
  }, [open])

  return (
    <div
      ref={menuRef}
      className={cn(
        'absolute right-0 top-full z-40 w-[95vw] max-w-3xl mt-4 rounded-md shadow-lg border border-gray-200 bg-white p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-300',
        // Height and scroll
        'min-h-[300px] max-h-[80vh] overflow-y-auto',
        open ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'
      )}
      tabIndex={-1}
      onMouseLeave={onClose}
      style={{ minWidth: 320 }}
      role="menu"
      aria-label="Product Engines Menu"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none -z-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30h30v30H30V30zm15 15h15v15H45V45z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      {engines.map((engine) => (
        <Link
          key={engine.title}
          to={engine.route}
          className="group flex flex-col items-start gap-2 p-4 rounded-md transition-all duration-200 bg-gray-50 hover:bg-blue-50 focus:bg-blue-100 shadow hover:shadow-lg outline-none cursor-pointer"
          onClick={onClose}
          tabIndex={0}
          role="menuitem"
        >
          <div className="flex items-center gap-3">
            <span className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
              {engine.icon}
            </span>
            <span className="font-bold text-gray-900 text-sm md:text-base">
              {engine.title}
            </span>
          </div>
          <span className="text-xs md:text-sm text-gray-600 group-hover:text-blue-700 transition-colors">
            {engine.desc}
          </span>
        </Link>
      ))}
    </div>
  )
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileProductOpen, setMobileProductOpen] = useState(false)
  const menuTimeout = useRef<NodeJS.Timeout | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const { openModal } = useFunnelModal()
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll when mobile nav or product menu is open
  useEffect(() => {
    if (isOpen || mobileProductOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, mobileProductOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
      setMobileProductOpen(false)
    }
  }

  // Desktop hover handlers
  const handleMenuEnter = () => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current)
    setMenuOpen(true)
  }
  const handleMenuLeave = () => {
    menuTimeout.current = setTimeout(() => setMenuOpen(false), 120)
  }

  // Mobile tap handler
  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setMenuOpen((v) => !v)
  }

  const handleMobileClose = () => {
    setIsOpen(false)
    setMobileProductOpen(false)
  }

  const handleMenuButtonClick = () => {
    setIsOpen((prev) => !prev);
    // Always blur after click (open or close)
    setTimeout(() => menuButtonRef.current?.blur(), 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex justify-center items-center py-2 sm:py-4 px-4 sm:px-6 lg:px-8">
      <div className={cn(
          "w-full max-w-7xl mx-auto bg-white rounded-md transition-all duration-300 px-4 sm:px-8",
          isScrolled ? "shadow-lg" : "shadow-md"
      )}>
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <img src="/assets/mainlogo.svg" alt="KLYRR logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            <Link
              to="/#growthengines"
              className="text-gray-900 hover:text-blue-600 font-medium text-base transition-all duration-300 hover:scale-105 relative group p-0 h-auto bg-transparent hover:bg-transparent"
            >
              Engines
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/pricing"
              className="text-gray-900 hover:text-blue-600 font-medium text-base transition-all duration-300 hover:scale-105 relative group p-0 h-auto bg-transparent hover:bg-transparent"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:text-blue-600 font-medium text-base transition-all duration-300 hover:scale-105 relative group p-0 h-auto bg-transparent hover:bg-transparent px-2 py-1 rounded-md"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div
              className="relative"
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
            >
              <Button
                variant="ghost"
                className="text-gray-900 hover:text-blue-600 font-medium text-base transition-all duration-300 hover:scale-105 relative group p-0 h-auto bg-transparent hover:bg-transparent"
                aria-haspopup="true"
                aria-expanded={menuOpen}
                aria-controls="product-megamenu"
                onClick={handleMenuClick}
                tabIndex={0}
              >
                Product
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Button>
              {menuOpen && <MegaMenu open={menuOpen} onClose={() => setMenuOpen(false)} />}
            </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-base px-6 py-2 rounded-md transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ml-4" onClick={openModal}>
              <span className="relative z-10">Fix My Funnel</span>
            </Button>
          </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
            <Button
              ref={menuButtonRef}
              variant="ghost"
              size="icon"
              onClick={handleMenuButtonClick}
                className="p-2 text-gray-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg transition-all duration-300 h-10 w-10 flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
                <div className="w-6 h-6 relative flex items-center justify-center">
                <span className={cn(
                  "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                    isOpen ? "rotate-45" : "-translate-y-2"
                )}></span>
                <span className={cn(
                  "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                  isOpen ? "opacity-0" : "opacity-100"
                )}></span>
                <span className={cn(
                  "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                    isOpen ? "-rotate-45" : "translate-y-2"
                )}></span>
              </div>
            </Button>
            </div>
          </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
        "lg:hidden transition-all duration-300 ease-in-out px-4 sm:px-6",
        isOpen ? "max-h-[500px] opacity-100 pointer-events-auto pb-4" : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
        )}>
        <div className="bg-white border border-gray-200 mx-auto max-w-7xl rounded-md shadow-lg p-0 flex flex-col" style={{height: 'calc(100vh - 64px)'}}>
          <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-3">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('engines')}
              className="block w-full text-left justify-start px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-blue-50 rounded-lg font-medium text-base transition-all duration-300 h-auto"
            >
              Engines
            </Button>
            <Link
              to="/pricing"
              className="block w-full text-left justify-start px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-blue-50 rounded-lg font-medium text-base transition-all duration-300 h-auto"
              onClick={handleMobileClose}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="block w-full text-left justify-start px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-blue-50 rounded-lg font-medium text-base transition-all duration-300 h-auto"
              onClick={handleMobileClose}
            >
              About
            </Link>
            {/* Mobile Product Dropdown */}
            <div className="space-y-2">
              <Button
                variant="ghost"
                onClick={() => setMobileProductOpen(!mobileProductOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-blue-50 rounded-lg font-medium text-base transition-all duration-300 h-auto"
              >
                Product
                <svg 
                  className={cn("w-5 h-5 transition-transform duration-200", mobileProductOpen ? "rotate-180" : "")}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
              {/* Mobile Product Submenu */}
              <div className={cn(
                "transition-all duration-300 ease-in-out space-y-2",
                mobileProductOpen ? "max-h-full overflow-y-auto scrollbar-hide opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              )}>
                {engines.map((engine) => (
                  <Link
                    key={engine.title}
                    to={engine.route}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all duration-200 group"
                    onClick={handleMobileClose}
                  >
                    <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                      {engine.icon}
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-gray-900 group-hover:text-blue-700 transition-colors">
                        {engine.title}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {engine.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 bg-white">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-base w-full py-3 rounded-md transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => {
                openModal()
                handleMobileClose()
              }}
            >
              <span className="relative z-10">Fix My Funnel</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar