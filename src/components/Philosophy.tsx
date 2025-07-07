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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const nodeVariants = {
    hidden: { 
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    visible: { 
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="section-padding section-spacing relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
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
          >
            <Badge className="border-transparent hover:bg-primary/80 inline-flex items-center rounded-md text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 bg-blue-600 text-white shadow-lg glow-badge px-4 py-2 mb-4">
              Our Story
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6"
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
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
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
          className="relative max-w-6xl mx-auto mb-16 min-h-[800px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 rounded-full z-0"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                y: 50,
                rotateY: 90
              }}
              whileInView={{ 
                opacity: 1,
                x: 0,
                y: 0,
                rotateY: 0
              }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 1.2,
                delay: index * 0.2
              }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
                              {/* Enhanced Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  {/* Light Blue Background Circle */}
                  <div className="absolute inset-0 w-20 h-20 bg-blue-100 rounded-full -translate-x-2 -translate-y-2 z-10"></div>
                  <motion.div
                    variants={nodeVariants}
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)"
                    }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${event.color} shadow-lg flex items-center justify-center cursor-pointer relative z-20`}
                    onMouseEnter={() => setActiveTimeline(index)}
                    onMouseLeave={() => setActiveTimeline(null)}
                  >
                  <motion.span 
                    className="text-2xl"
                    animate={{
                      rotate: activeTimeline === index ? [0, 360] : 0,
                      scale: activeTimeline === index ? [1, 1.2, 1] : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {event.icon}
                  </motion.span>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    variants={pulseVariants}
                    animate="animate"
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${event.color} -z-10`}
                  />
                </motion.div>

                {/* Particle Effects */}
                <AnimatePresence>
                  {activeTimeline === index && (
                    <div className="absolute inset-0">
                      {event.particles.map((particle, pIndex) => (
                        <motion.div
                          key={pIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: [0, (pIndex - 1) * 30],
                            y: [0, -20 - pIndex * 10]
                          }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: pIndex * 0.3
                          }}
                          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg pointer-events-none"
                        >
                          {particle}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Enhanced Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'} relative z-10`}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  }}
                  className={`bg-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border-2 relative overflow-hidden ${
                    activeTimeline === index ? 'border-blue-300' : 'border-blue-200'
                  }`}
                >
                  {/* Card Background Animation */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 opacity-0`}
                    animate={{
                      opacity: activeTimeline === index ? 0.3 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Badge variant="outline" className={`mr-3 bg-white text-blue-900 border-2 border-blue-500`}>
                          {event.year}
                        </Badge>
                      </motion.div>
                                          <motion.h3 
                      className="text-2xl font-bold text-blue-900"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {event.title}
                    </motion.h3>
                    </div>
                    <motion.p 
                      className="text-blue-700 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {event.description}
                    </motion.p>
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
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
              KLYRR is the System We <span className="text-blue-600">Wish We Had</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by founders, for founders. No more duct tape solutions.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="relative bg-white text-gray-900 border-2 border-blue-200 rounded-2xl p-8 h-full shadow-lg
                  hover:border-blue-300 transition-all duration-500 group-hover:transform group-hover:-translate-y-2 group-hover:shadow-xl">
                  <div className="text-center">
                    <div className="text-5xl mb-6">{feature.icon}</div>
                    <h4 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 text-lg">{feature.description}</p>
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
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-blue-600 backdrop-blur-sm rounded-2xl shadow-lg p-8 mx-auto border-2 border-blue-500 relative overflow-hidden"
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
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to transform your go-to-market strategy?
              </h3>
              <motion.p 
                className="text-lg text-blue-100 mb-6"
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
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
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
        </motion.div>
      </div>
    </section>
  )
}

export default Philosophy 