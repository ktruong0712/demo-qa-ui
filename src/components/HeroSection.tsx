'use client';

import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight, ChevronDown, Bug } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-tr from-sky-200 via-blue-100 to-cyan-100 overflow-hidden min-h-screen">

      {/* Background pattern overlay - matching the Anthology design */}
      <div className="absolute inset-0 opacity-35">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Vertical lines on the right side */}
          <g opacity="1">
            {Array.from({length: 25}).map((_, i) => (
              <line 
                key={`vertical-${i}`}
                x1={800 + i * 8} 
                y1="0" 
                x2={800 + i * 8} 
                y2="800" 
                stroke="white" 
                strokeWidth="1.5"
              />
            ))}
          </g>
          
          {/* Curved/wavy lines in the background */}
          <g opacity="0.9">
            <path 
              d="M0,200 Q200,150 400,200 T800,200" 
              stroke="white" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M0,300 Q300,250 600,300 T1200,300" 
              stroke="white" 
              strokeWidth="1.5" 
              fill="none"
            />
            <path 
              d="M200,100 Q400,50 600,100 T1000,100" 
              stroke="white" 
              strokeWidth="1.5" 
              fill="none"
            />
            <path 
              d="M0,450 Q250,400 500,450 T1000,450" 
              stroke="white" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M100,600 Q350,550 600,600 T1100,600" 
              stroke="white" 
              strokeWidth="1.5" 
              fill="none"
            />
          </g>
          
          {/* Diagonal subtle lines */}
          <g opacity="0.7">
            {Array.from({length: 8}).map((_, i) => (
              <line 
                key={`diagonal-${i}`}
                x1={i * 150} 
                y1="0" 
                x2={i * 150 + 200} 
                y2="800" 
                stroke="white" 
                strokeWidth="1.2"
              />
            ))}
          </g>
          
          {/* Small circles/dots scattered */}
          <g opacity="0.8">
            <circle cx="150" cy="120" r="3" fill="white"/>
            <circle cx="350" cy="180" r="2.5" fill="white"/>
            <circle cx="550" cy="90" r="3" fill="white"/>
            <circle cx="750" cy="250" r="2" fill="white"/>
            <circle cx="950" cy="150" r="2.5" fill="white"/>
            <circle cx="200" cy="400" r="2" fill="white"/>
            <circle cx="450" cy="350" r="3" fill="white"/>
            <circle cx="650" cy="480" r="2.5" fill="white"/>
            <circle cx="120" cy="650" r="2" fill="white"/>
            <circle cx="380" cy="720" r="2.5" fill="white"/>
          </g>
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-32 px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="text-left pt-8">
            {/* Watch Demo Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 max-w-xs hover:bg-white/40 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="relative w-16 h-12 bg-gray-800 rounded-md overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <span className="text-white font-medium">Watch Demo</span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-light text-white leading-tight mb-8"
            >
              <span className="block">Experience the</span>
              <span className="block">power of </span>
              <span className="block italic font-serif">Quality Assurance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-white/90 text-lg max-w-lg leading-relaxed mb-10"
            >
              At QA Master, we believe in the power of together. 
              Development teams, QA engineers, and stakeholders with the right 
              technology and the right testing partner have 
              exponentially greater power to succeed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white hover:bg-gray-100 text-sky-600 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Sign up
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2"
              >
                <span>Get to know us</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
          
          {/* Right Content - Moved further right and down */}
          <div className="space-y-4 pt-16 ml-auto max-w-md">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden ml-8"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-xl"></div>
              </div>
              <div className="absolute bottom-0 right-4 w-16 h-16 opacity-30">
                <div className="w-full h-full bg-gradient-to-tr from-blue-200 to-teal-200 rounded-full"></div>
              </div>
              <div className="absolute bottom-4 right-12 w-8 h-8 opacity-40">
                <div className="w-full h-full bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-bold text-gray-900">QA Master</div>
                  <div className="w-6 h-6 text-sky-500">^</div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">AI Test Generation</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Included in QA Master to help you efficiently create testing suites.
                </p>
                <a href="#" className="font-semibold text-gray-900 hover:text-sky-600 text-sm flex items-center gap-1 group">
                  Learn more 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden ml-8"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-teal-100 to-green-100 rounded-full blur-lg"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-xl text-gray-900">Smart Bug Reporting</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Our award-winning accessibility solution creates more inclusive bug reports
                </p>
                <a href="#" className="font-semibold text-gray-900 hover:text-sky-600 text-sm flex items-center gap-1 group">
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
