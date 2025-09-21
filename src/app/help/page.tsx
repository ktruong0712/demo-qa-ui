'use client';

import { motion } from 'framer-motion';

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-text-dark mb-6">Help & Documentation</h1>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">
              Find answers, guides, and resources to help you get the most out of VibeCode QA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Getting Started',
                description: 'Learn the basics of VibeCode QA and set up your first project',
                icon: '🚀'
              },
              {
                title: 'Dashboard Guide',
                description: 'Master the dashboard interface and project management features',
                icon: '📊'
              },
              {
                title: 'Testing Services',
                description: 'Understand each QA service and how to configure them',
                icon: '🔧'
              },
              {
                title: 'API Documentation',
                description: 'Integrate VibeCode QA with your existing workflows',
                icon: '⚡'
              },
              {
                title: 'Troubleshooting',
                description: 'Common issues and solutions to get you back on track',
                icon: '🛠️'
              },
              {
                title: 'Contact Support',
                description: 'Get help from our team when you need it most',
                icon: '💬'
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-text-dark mb-4 group-hover:text-primary-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
