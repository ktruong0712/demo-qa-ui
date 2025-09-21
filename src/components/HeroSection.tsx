'use client';

import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-100 overflow-hidden min-h-screen">
      {/* Enhanced abstract circuit/tech patterns */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="3" fill="#3B82F6" opacity="0.4"/>
              <circle cx="90" cy="90" r="2" fill="#10B981" opacity="0.4"/>
              <circle cx="60" cy="20" r="1.5" fill="#06B6D4" opacity="0.3"/>
              <path d="M30,30 L90,90" stroke="#3B82F6" strokeWidth="0.8" opacity="0.3"/>
              <path d="M90,30 L30,90" stroke="#10B981" strokeWidth="0.8" opacity="0.3"/>
              <path d="M60,20 L30,30" stroke="#06B6D4" strokeWidth="0.6" opacity="0.2"/>
              <rect x="45" y="45" width="30" height="30" rx="6" fill="none" stroke="#3B82F6" strokeWidth="0.8" opacity="0.3"/>
              <rect x="15" y="60" width="20" height="15" rx="3" fill="#10B981" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
      
      {/* Subtle floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-blue-200/30 rounded-full opacity-40"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-12 h-12 bg-teal-200/30 rounded-lg opacity-40"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-1/4 w-8 h-8 bg-cyan-200/30 rounded-full opacity-50"
        animate={{
          y: [0, -10, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="relative max-w-7xl mx-auto py-20 lg:py-32 px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight"
            >
              <span className="block">Experience the power of</span>
              <span className="block font-light italic text-gray-700 font-serif">Quality Assurance</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 text-lg lg:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              At QA Master, we believe in the power of together. Development teams, 
              QA engineers, and stakeholders with the right technology and the right 
              testing partner have exponentially greater power to succeed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
                <motion.button
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "#f8fafc"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full px-8 py-4 text-base font-semibold bg-white border border-blue-200 text-blue-600 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Sign up
                </motion.button>
                <motion.button
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "#0284c7"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full px-8 py-4 text-base font-semibold bg-blue-400 hover:bg-blue-500 text-white flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>Get to know us</span>
                  <motion.div
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer p-4 max-w-sm mx-auto lg:mx-0">
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-32 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <PlayCircle className="w-8 h-8 text-blue-600 ml-1" />
                  </motion.div>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-sm font-semibold text-gray-700">Watch Demo</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 relative overflow-hidden"
            >
              {/* Abstract gradient accents */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-xl"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-15">
                <div className="w-full h-full bg-gradient-to-tr from-teal-100 to-emerald-100 rounded-full blur-lg"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-medium">AI</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">AI Test Generation</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Included in QA Master to help you efficiently create testing suites.</p>
                <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 text-sm flex items-center gap-1 group">
                  Learn more 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 relative overflow-hidden"
            >
              {/* Abstract gradient accents */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full blur-xl"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-15">
                <div className="w-full h-full bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-full blur-lg"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-medium">J</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Smart Bug Reporting</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Our award-winning accessibility solution creates more inclusive bug reports.</p>
                <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 text-sm flex items-center gap-1 group">
                  Learn more 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
