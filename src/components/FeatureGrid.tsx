'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Zap, 
  Bug, 
  RotateCcw, 
  Globe, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle,
  XCircle,
  Play,
  Code,
} from 'lucide-react';

// Animated demonstration components
const AutomatedTestingDemo = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 bg-gray-900 rounded-lg overflow-hidden group">
      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Code lines appearing */}
      <div className="p-4 space-y-2 relative z-10">
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isAnimating ? 1 : 0, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Code className="w-4 h-4 text-green-400" />
          <span className="text-green-400 text-sm font-mono">describe(&apos;Login Flow&apos;, () =&gt; {'{'} </span>
        </motion.div>
        <motion.div
          className="ml-4 flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isAnimating ? 1 : 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-blue-400 text-sm font-mono">it(&apos;should authenticate user&apos;, () =&gt; {'{'} </span>
        </motion.div>
        <motion.div
          className="ml-8 flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isAnimating ? 1 : 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span className="text-white text-sm font-mono">expect(auth).toBe(true)</span>
        </motion.div>
      </div>
      
      {/* Test runner indicator */}
      <motion.div
        className="absolute bottom-2 right-2 flex items-center space-x-1 bg-green-600 px-2 py-1 rounded"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isAnimating ? 1 : 0, scale: isAnimating ? 1 : 0.8 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <Play className="w-3 h-3 text-white" />
        <span className="text-white text-xs">Running tests...</span>
      </motion.div>
    </div>
  );
};

const BugReportingDemo = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 3000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 bg-gray-900 rounded-lg overflow-hidden">
      {/* App interface */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="w-16 h-8 bg-blue-500 rounded"></div>
          <motion.div
            className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
            animate={{ scale: isAnimating ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5, repeat: isAnimating ? 2 : 0 }}
          >
            <Bug className="w-4 h-4 text-white" />
          </motion.div>
        </div>
        
        {/* Bug report panel sliding in */}
        <motion.div
          className="bg-red-50 border border-red-200 rounded p-2"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: isAnimating ? 0 : 200, opacity: isAnimating ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center space-x-2">
            <XCircle className="w-4 h-4 text-red-500" />
            <span className="text-red-700 text-xs font-medium">Bug detected: Button not responding</span>
          </div>
          <div className="text-xs text-gray-600 mt-1">Priority: High | Component: Login</div>
        </motion.div>
      </div>
    </div>
  );
};

const RegressionTestingDemo = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 3000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-4 flex space-x-4">
        {/* Before panel */}
        <div className="flex-1">
          <div className="text-xs text-gray-400 mb-2">Before Update</div>
          <div className="space-y-1">
            <div className="w-full h-2 bg-green-500 rounded"></div>
            <div className="w-full h-2 bg-green-500 rounded"></div>
            <motion.div
              className="w-full h-2 bg-red-500 rounded"
              animate={{ opacity: isAnimating ? [1, 0.3, 1] : 1 }}
              transition={{ duration: 0.5, repeat: isAnimating ? 2 : 0 }}
            ></motion.div>
          </div>
        </div>
        
        {/* After panel */}
        <div className="flex-1">
          <div className="text-xs text-gray-400 mb-2">After Update</div>
          <div className="space-y-1">
            <div className="w-full h-2 bg-green-500 rounded"></div>
            <div className="w-full h-2 bg-green-500 rounded"></div>
            <motion.div
              className="w-full h-2 bg-green-500 rounded"
              initial={{ width: 0 }}
              animate={{ width: isAnimating ? "100%" : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
          </div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-2 right-2 bg-green-600 px-2 py-1 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 1 : 0 }}
        transition={{ delay: 1 }}
      >
        <span className="text-white text-xs">Regression fixed ✓</span>
      </motion.div>
    </div>
  );
};

const CrossBrowserDemo = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 3000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const browsers = [
    { name: 'Chrome', color: 'bg-blue-500' },
    { name: 'Firefox', color: 'bg-orange-500' },
    { name: 'Safari', color: 'bg-gray-500' },
    { name: 'Edge', color: 'bg-blue-600' }
  ];

  return (
    <div className="relative w-full h-32 bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2">
          {browsers.map((browser, index) => (
            <motion.div
              key={browser.name}
              className={`${browser.color} rounded p-2 flex items-center justify-center`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: isAnimating ? 1 : 0.8, 
                opacity: isAnimating ? 1 : 0.6 
              }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1,
                repeat: isAnimating ? 1 : 0
              }}
            >
              <span className="text-white text-xs font-medium">{browser.name}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="absolute bottom-2 right-2 bg-purple-600 px-2 py-1 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: isAnimating ? 1 : 0 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-white text-xs">All browsers ✓</span>
        </motion.div>
      </div>
    </div>
  );
};

const PerformanceTestingDemo = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 3000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-4">
        {/* Performance chart */}
        <div className="flex items-end space-x-1 h-16">
          {[0.3, 0.6, 0.4, 0.8, 0.5, 0.7, 0.9].map((height, index) => (
            <motion.div
              key={index}
              className="bg-yellow-500 rounded-t"
              style={{ width: '8px' }}
              initial={{ height: 0 }}
              animate={{ 
                height: isAnimating ? `${height * 100}%` : 0 
              }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1,
                repeat: isAnimating ? 1 : 0
              }}
            />
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-400 text-xs">Load Time</span>
          <motion.span
            className="text-green-400 text-xs font-mono"
            animate={{ 
              color: isAnimating ? ['#10b981', '#f59e0b', '#10b981'] : '#10b981' 
            }}
            transition={{ duration: 1, repeat: isAnimating ? 1 : 0 }}
          >
            {isAnimating ? '1.2s' : '2.1s'}
          </motion.span>
        </div>
      </div>
    </div>
  );
};

const SecurityTestingDemo = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 3000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-4">
        {/* Security scan visualization */}
        <div className="space-y-2">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isAnimating ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-xs">SSL Certificate ✓</span>
          </motion.div>
          
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isAnimating ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-xs">SQL Injection ✓</span>
          </motion.div>
          
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isAnimating ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-xs">XSS Protection ✓</span>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-2 right-2 bg-teal-600 px-2 py-1 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: isAnimating ? 1 : 0 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-white text-xs">Security Score: 95%</span>
        </motion.div>
      </div>
    </div>
  );
};

const services = [
  {
    icon: Zap,
    title: "Automated Testing",
    description: "Generate and execute comprehensive test suites automatically, saving hours of manual work.",
    gradient: "from-blue-500 to-cyan-400",
    demo: AutomatedTestingDemo,
  },
  {
    icon: Bug,
    title: "Bug Reporting",
    description: "Advanced bug tracking with intelligent categorization and priority assignment.",
    gradient: "from-red-500 to-orange-400",
    demo: BugReportingDemo,
  },
  {
    icon: RotateCcw,
    title: "Regression Testing",
    description: "Ensure new changes don't break existing functionality with automated regression suites.",
    gradient: "from-green-500 to-emerald-400",
    demo: RegressionTestingDemo,
  },
  {
    icon: Globe,
    title: "Cross-Browser Testing",
    description: "Test your applications across multiple browsers and devices simultaneously.",
    gradient: "from-purple-500 to-violet-400",
    demo: CrossBrowserDemo,
  },
  {
    icon: TrendingUp,
    title: "Performance Testing",
    description: "Monitor and optimize application performance with comprehensive load testing.",
    gradient: "from-yellow-500 to-amber-400",
    demo: PerformanceTestingDemo,
  },
  {
    icon: Shield,
    title: "Security Testing",
    description: "Identify vulnerabilities and security flaws before they become critical issues.",
    gradient: "from-teal-500 to-cyan-400",
    demo: SecurityTestingDemo,
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-24 left-24 w-18 h-18 bg-blue-100 rounded-full opacity-25"
        animate={{
          y: [0, -35, 0],
          x: [0, 18, 0],
          rotate: [0, 270, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/4 right-24 w-16 h-16 bg-teal-100 rounded-full opacity-35"
        animate={{
          y: [0, 28, 0],
          x: [0, -22, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-24 left-1/3 w-12 h-12 bg-purple-100 rounded-full opacity-45"
        animate={{
          y: [0, -22, 0],
          rotate: [0, -90, -180],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-10 h-10 bg-yellow-100 rounded-full opacity-55"
        animate={{
          y: [0, 32, 0],
          x: [0, 14, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-6 h-6 bg-green-100 rounded-full opacity-60"
        animate={{
          y: [0, -18, 0],
          x: [0, 8, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-teal-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need for Quality Assurance
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Choose from our suite of professional testing services and apply them to your projects with just a few clicks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-2xl p-8 shadow-lg"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              
              {/* Animated Demo */}
              <div className="mb-6">
                <service.demo />
              </div>
              
              <div className="flex items-center text-sm font-semibold text-teal-600 group-hover:text-teal-700 transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
