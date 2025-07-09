import React, { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { motion, AnimatePresence } from 'framer-motion'

const Philosophy: React.FC = () => {
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null);
  const [floatingElements, setFloatingElements] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  // Generate floating elements
  useEffect(() => {
    const elements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setFloatingElements(elements);
  }, []);

  const timelineEvents = [
    {
      year: "2018",
      title: "The Problem",
      description: "Watching SaaS founders burn out chasing results with Frankensteined funnels and disconnected tools.",
      icon: "💡",
      color: "from-red-400 to-pink-500",
      particles: ["☕", "💭", "✨"]
    },
    {
      year: "2019",
      title: "The Decision",
      description: "We didn't start this as an agency. We started it because we were done watching the chaos.",
      icon: "🚀",
      color: "from-blue-400 to-indigo-500",
      particles: ["🏠", "💪", "🎯"]
    },
    {
      year: "2021",
      title: "The Experience",
      description: "We've been inside the chaos - sales calls that never convert, growth experiments that stall.",
      icon: "⚡",
      color: "from-purple-400 to-pink-500",
      particles: ["🌟", "🔥", "💫"]
    },
    {
      year: "2023",
      title: "The Solution",
      description: "KLYRR is the system we wish we had - fast, modular, and engineered for complete control.",
      icon: "⚙️",
      color: "from-emerald-400 to-teal-500",
      particles: ["🌱", "🤝", "🌈"]
    },
    {
      year: "2025",
      title: "The Future",
      description: "Built by founders, for founders. No more duct tape solutions.",
      icon: "🔮",
      color: "from-cyan-400 to-blue-500",
      particles: ["🚀", "⭐", "🌟"]
    }
  ];

  return (
    <section id="about" className="section-padding section-spacing relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 mb-4 pt-0 pb-0">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl -top-48 -right-48"
        />
        <motion.div 
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl top-1/2 -left-48"
        />
        <motion.div 
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
          className="absolute w-[350px] h-[350px] bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl bottom-0 right-1/4"
        />
        
        {/* Floating Elements */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            animate={{
              y: [-20, -80, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + element.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: element.delay
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto">
        {/* Enhanced Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <Badge className="border-transparent hover:bg-primary/80 inline-flex items-center rounded-md text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 bg-blue-600 text-white shadow-lg glow-badge px-4 py-2 mb-4">
              Our Story
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 px-4 sm:px-0"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            Why We Built <span className="text-blue-600">KLYRR</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            A founder's perspective on transforming go-to-market chaos into engineered success
          </motion.p>
        </motion.div>

        {/* Enhanced Interactive Timeline */}
        <motion.div 
          className="relative max-w-6xl mx-auto mb-16 min-h-[600px] sm:min-h-[800px] px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 rounded-full z-0"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0,
                y: 30
              }}
              whileInView={{ 
                opacity: 1,
                y: 0
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className={`relative flex items-center mb-8 sm:mb-12 ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
              } flex-col sm:flex-row`}
            >
              {/* Timeline Node */}
              <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 sm:-translate-x-1/2 z-20 sm:relative sm:left-auto sm:transform-none">
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${event.color} shadow-lg flex items-center justify-center cursor-pointer relative z-20`}
                  onMouseEnter={() => setActiveTimeline(index)}
                  onMouseLeave={() => setActiveTimeline(null)}
                >
                  <motion.span 
                    className="text-lg sm:text-2xl"
                    animate={{
                      scale: activeTimeline === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {event.icon}
                  </motion.span>
                  
                  {/* Subtle Pulse Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${event.color} opacity-30`}
                    animate={{
                      scale: activeTimeline === index ? [1, 1.3, 1] : 1,
                      opacity: activeTimeline === index ? [0.3, 0.1, 0.3] : 0.3
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: activeTimeline === index ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Simplified Particle Effects */}
                <AnimatePresence>
                  {activeTimeline === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      {event.particles.slice(0, 3).map((particle, pIndex) => (
                        <motion.div
                          key={pIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: [0, (pIndex - 1) * 25],
                            y: [0, -15 - pIndex * 8]
                          }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: pIndex * 0.2
                          }}
                          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm pointer-events-none"
                        >
                          {particle}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Content Card */}
              <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'} pl-16 sm:pl-0 relative z-10 mt-4 sm:mt-0`}>
                <motion.div
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className={`bg-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border-2 relative overflow-hidden ${
                    activeTimeline === index ? 'border-blue-300' : 'border-blue-200'
                  }`}
                >
                  {/* Subtle Card Background Animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200"
                    animate={{
                      opacity: activeTimeline === index ? 0.2 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <Badge variant="outline" className="mr-3 bg-white text-blue-900 border-2 border-blue-500">
                        {event.year}
                      </Badge>
                      <h3 className="text-lg sm:text-2xl font-bold text-blue-900">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-blue-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              KLYRR is the System We <span className="text-blue-600">Wish We Had</span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Built by founders, for founders. No more duct tape solutions.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {[
              {
                title: "Fast",
                icon: "⚡",
                description: "Quick implementation, faster results",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                title: "Modular",
                icon: "🧩",
                description: "Flexible, adaptable components",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                title: "Engineered",
                icon: "⚙️",
                description: "Built for complete control",
                gradient: "from-emerald-500 to-blue-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 * index }}
                className="relative group"
              >
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl
                `}></div>
                <div className="relative bg-white text-gray-900 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 h-full shadow-lg
                  hover:border-blue-300 transition-all duration-500 group-hover:transform group-hover:-translate-y-2 group-hover:shadow-xl">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{feature.icon}</div>
                    <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 text-base sm:text-lg">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="px-4 sm:px-0">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-blue-600 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 mx-auto border-2 border-blue-500 relative overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Ready to transform your go-to-market strategy?
                </h3>
                <motion.p 
                  className="text-base sm:text-lg text-blue-100 mb-4 sm:mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Join the founders who've already engineered their success with KLYRR.
                </motion.p>
              <motion.button
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
                  backgroundPosition: "100%"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop"
                  }
                }}
                className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
                style={{
                  backgroundSize: "200% 100%"
                }}
              >
                <motion.span
                  animate={{
                    x: [0, 2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  Get Started Today
                </motion.span>
              </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Philosophy 