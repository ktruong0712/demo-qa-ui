'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 bg-blue-100 rounded-full opacity-30"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 right-20 w-14 h-14 bg-teal-100 rounded-full opacity-40"
        animate={{
          y: [0, 25, 0],
          x: [0, -18, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-12 h-12 bg-purple-100 rounded-full opacity-50"
        animate={{
          y: [0, -22, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-8 h-8 bg-yellow-100 rounded-full opacity-60"
        animate={{
          y: [0, 28, 0],
          x: [0, 10, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-2/3 left-1/4 w-6 h-6 bg-green-100 rounded-full opacity-70"
        animate={{
          y: [0, -20, 0],
          x: [0, 12, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-4xl mx-auto py-20 sm:py-24 px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Ready to dive in?<br />Start your free trial today.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-base font-semibold bg-sky-400 hover:bg-sky-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Get started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-base font-semibold leading-6 text-gray-900 hover:text-sky-600 transition-colors flex items-center gap-2"
          >
            Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FinalCTA;
