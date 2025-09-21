'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Search, 
  Zap, 
  Shield, 
  Users, 
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const promises = [
  {
    icon: Search,
    title: "Uncover",
    description: "Discover hidden bugs and vulnerabilities before they impact users",
    color: "from-red-500 to-orange-400",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    stats: "99.7% bug detection rate",
    demo: () => (
      <div className="relative w-full h-24 bg-gray-900 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 border-2 border-red-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <motion.div
          className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Bug Found!
        </motion.div>
      </div>
    )
  },
  {
    icon: Zap,
    title: "Automate",
    description: "Generate and execute comprehensive test suites automatically",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    stats: "10x faster test execution",
    demo: () => (
      <div className="relative w-full h-24 bg-gray-900 rounded-lg overflow-hidden">
        <div className="p-3 space-y-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-2 bg-blue-500 rounded"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                delay: i * 0.3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          ))}
        </div>
        <motion.div
          className="absolute bottom-2 right-2 text-green-400 text-xs"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✓ Automated
        </motion.div>
      </div>
    )
  },
  {
    icon: Shield,
    title: "Stabilize",
    description: "Ensure consistent performance across all environments",
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    stats: "99.9% uptime guarantee",
    demo: () => (
      <div className="relative w-full h-24 bg-gray-900 rounded-lg overflow-hidden">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <motion.div
              className="text-green-400 text-xs"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Stable
            </motion.div>
          </div>
          <div className="w-full h-1 bg-gray-700 rounded">
            <motion.div
              className="h-full bg-green-500 rounded"
              animate={{
                width: ["0%", "100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Users,
    title: "Collaborate",
    description: "Enable seamless teamwork with real-time insights and sharing",
    color: "from-purple-500 to-violet-400",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    stats: "50+ team integrations",
    demo: () => (
      <div className="relative w-full h-24 bg-gray-900 rounded-lg overflow-hidden">
        <div className="p-3">
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-6 h-6 bg-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          <motion.div
            className="mt-2 text-xs text-purple-400"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Team Connected
          </motion.div>
        </div>
      </div>
    )
  },
  {
    icon: BarChart3,
    title: "Measure",
    description: "Track quality metrics and performance with detailed analytics",
    color: "from-yellow-500 to-amber-400",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    stats: "Real-time insights",
    demo: () => (
      <div className="relative w-full h-24 bg-gray-900 rounded-lg overflow-hidden">
        <div className="p-3">
          <div className="flex items-end space-x-1 h-12">
            {[0.3, 0.6, 0.4, 0.8, 0.5, 0.7].map((height, index) => (
              <motion.div
                key={index}
                className="w-2 bg-yellow-500 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${height * 100}%` }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
          </div>
          <motion.div
            className="mt-2 text-xs text-yellow-400"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Measuring...
          </motion.div>
        </div>
      </div>
    )
  }
];

const CoreQAPromises = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 bg-blue-100 rounded-full opacity-30"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-32 w-12 h-12 bg-teal-100 rounded-full opacity-40"
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-8 h-8 bg-purple-100 rounded-full opacity-50"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-6 h-6 bg-yellow-100 rounded-full opacity-60"
        animate={{
          y: [0, 30, 0],
          x: [0, 10, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">Core QA Promises</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The five pillars of quality assurance
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Every great testing strategy is built on these fundamental principles. 
            See them in action with live demonstrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="bg-white hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-2xl p-6 shadow-lg"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${promise.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <promise.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{promise.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">{promise.description}</p>
              
              {/* Live Demo */}
              <div className="mb-4">
                <promise.demo />
              </div>
              
              <div className={`${promise.bgColor} p-2 rounded-lg mb-4`}>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-semibold ${promise.iconColor}`}>
                    {promise.stats}
                  </span>
                  <CheckCircle className={`w-4 h-4 ${promise.iconColor}`} />
                </div>
              </div>
              
              <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to experience all five promises?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of teams who&apos;ve transformed their QA process with our comprehensive platform.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreQAPromises;
