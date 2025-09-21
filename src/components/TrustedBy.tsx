'use client';

import { motion } from 'framer-motion';

const logos = [
  { 
    name: 'Google', 
    component: () => (
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">G</span>
        </div>
        <span className="text-gray-700 font-semibold">Google</span>
      </div>
    )
  },
  { 
    name: 'Microsoft', 
    component: () => (
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
          <div className="bg-blue-500 rounded-sm"></div>
          <div className="bg-green-500 rounded-sm"></div>
          <div className="bg-yellow-500 rounded-sm"></div>
          <div className="bg-red-500 rounded-sm"></div>
        </div>
        <span className="text-gray-700 font-semibold">Microsoft</span>
      </div>
    )
  },
  { 
    name: 'Amazon', 
    component: () => (
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">A</span>
        </div>
        <span className="text-gray-700 font-semibold">Amazon</span>
      </div>
    )
  },
  { 
    name: 'Slack', 
    component: () => (
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">#</span>
        </div>
        <span className="text-gray-700 font-semibold">Slack</span>
      </div>
    )
  },
  { 
    name: 'Netflix', 
    component: () => (
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">N</span>
        </div>
        <span className="text-gray-700 font-semibold">NETFLIX</span>
      </div>
    )
  },
];

const TrustedBy = () => {
  return (
    <div className="bg-gradient-to-r from-sky-50 via-blue-50 to-cyan-50 py-12 sm:py-16 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-16 left-16 w-12 h-12 bg-blue-100 rounded-full opacity-25"
        animate={{
          y: [0, -20, 0],
          x: [0, 12, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 right-16 w-10 h-10 bg-teal-100 rounded-full opacity-35"
        animate={{
          y: [0, 22, 0],
          x: [0, -14, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-16 left-1/3 w-8 h-8 bg-purple-100 rounded-full opacity-45"
        animate={{
          y: [0, -18, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-100 rounded-full opacity-55"
        animate={{
          y: [0, 24, 0],
          x: [0, 8, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-lg font-semibold leading-8 text-gray-900"
        >
          Trusted by the world&apos;s most innovative teams
        </motion.h2>
        <div className="mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="col-span-1 flex justify-center items-center"
            >
              <logo.component />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
