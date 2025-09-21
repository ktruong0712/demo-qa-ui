'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Dayan',
    role: 'Lead Developer @ TechCorp',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'QA Master has revolutionized our testing process. We catch bugs faster and deploy with more confidence than ever before. It\'s an indispensable tool for our team.',
    company: 'TechCorp',
    logo: () => (
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
        <span className="text-white text-xs font-bold">TC</span>
      </div>
    ),
    stats: '99.7% bug detection'
  },
  {
    name: 'Alex Johnson',
    role: 'Product Manager @ Innovate Solutions',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'The insights we get from the dashboard are incredible. We can track quality trends and make data-driven decisions. Our release cycles are 30% faster now.',
    company: 'Innovate Solutions',
    logo: () => (
      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
        <span className="text-white text-xs font-bold">IS</span>
      </div>
    ),
    stats: '30% faster releases'
  },
  {
    name: 'Maria Garcia',
    role: 'CTO @ AppMakers',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'As a startup, we need to move fast without sacrificing quality. QA Master allows us to do just that. The automated testing is a game-changer for our small team.',
    company: 'AppMakers',
    logo: () => (
      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
        <span className="text-white text-xs font-bold">AM</span>
      </div>
    ),
    stats: '10x test automation'
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-20 sm:py-24 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 bg-blue-100 rounded-full opacity-30"
        animate={{
          y: [0, -28, 0],
          x: [0, 16, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-14 h-14 bg-teal-100 rounded-full opacity-40"
        animate={{
          y: [0, 26, 0],
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
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-100 rounded-full opacity-50"
        animate={{
          y: [0, -24, 0],
          rotate: [0, -270, -360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-2/3 right-1/3 w-8 h-8 bg-yellow-100 rounded-full opacity-60"
        animate={{
          y: [0, 30, 0],
          x: [0, 12, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-6 h-6 bg-green-100 rounded-full opacity-70"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What our customers are saying
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're helping thousands of teams build higher-quality software, faster.
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-shadow"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              
              {/* Stats badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {testimonial.stats}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img className="w-12 h-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <testimonial.logo />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join thousands of teams already using QA Master
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Start your free trial today and experience the power of automated testing, 
              real-time collaboration, and comprehensive quality insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
