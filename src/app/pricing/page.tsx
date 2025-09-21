'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams getting started',
      features: [
        '1 Project',
        'AI Test Generation',
        'Basic Bug Reporting',
        'Email Support',
        '100 test runs/month'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Most popular for growing teams',
      features: [
        '5 Projects',
        'All QA Services',
        'Advanced Analytics',
        'Priority Support',
        'Unlimited test runs',
        'Team Collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited Projects',
        'All QA Services',
        'Custom Integrations',
        '24/7 Support',
        'Dedicated Account Manager',
        'On-premise Deployment'
      ],
      popular: false
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-text-dark mb-6">Simple, Transparent Pricing</h1>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">
              Choose the plan that fits your team's needs. All plans include our core QA services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-primary-blue scale-105' 
                    : 'border-gray-200 hover:border-primary-blue'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text-dark mb-2">{plan.name}</h3>
                  <p className="text-text-medium mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-text-dark">{plan.price}</span>
                    <span className="text-text-medium ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + featureIndex * 0.1, duration: 0.4 }}
                      className="flex items-center space-x-3"
                    >
                      <Check className="w-5 h-5 text-primary-blue flex-shrink-0" />
                      <span className="text-text-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary-blue text-white hover:bg-primary-indigo'
                      : 'bg-gray-100 text-text-dark hover:bg-primary-blue hover:text-white'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
