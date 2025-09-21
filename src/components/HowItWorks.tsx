'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FilePlus, Zap, BarChart, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: FilePlus,
    title: '1. Create Your Project',
    description: 'Easily set up a new project for your application. Connect your repository or provide a URL to get started in minutes.',
  },
  {
    icon: Zap,
    title: '2. Select QA Services',
    description: 'Choose from a suite of services like automated testing, security scans, and performance analysis to fit your needs.',
  },
  {
    icon: BarChart,
    title: '3. Run & Monitor',
    description: 'Execute tests and monitor the results in real-time from your dashboard. Get instant notifications and detailed reports.',
  },
  {
    icon: CheckCircle,
    title: '4. Improve & Iterate',
    description: 'Use the actionable insights from our reports to fix bugs, optimize performance, and continuously improve your software quality.',
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="py-20 sm:py-24 bg-white relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-16 right-20 w-20 h-20 bg-blue-100 rounded-full opacity-20"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 left-16 w-14 h-14 bg-teal-100 rounded-full opacity-30"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/3 w-10 h-10 bg-purple-100 rounded-full opacity-40"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-2/3 left-1/3 w-8 h-8 bg-yellow-100 rounded-full opacity-50"
        animate={{
          y: [0, 25, 0],
          x: [0, 12, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-teal-600">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better workflow for quality assurance.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Streamline your entire QA process in four simple steps.
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="text-center p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 group"
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <step.icon className="w-8 h-8 text-teal-600" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              
              {/* Step number indicator */}
              <motion.div
                className="mt-4 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.2 + 0.3,
                  ease: "easeOut"
                }}
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
