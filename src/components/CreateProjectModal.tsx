'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Bug, 
  RotateCcw, 
  Globe, 
  TrendingUp, 
  Shield,
  X
} from 'lucide-react';

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateProject: (project: { name: string; description: string; services: string[]; status: string; progress: number; tests_passed: number; tests_total: number }) => void;
}

const serviceOptions = [
  {
    id: "automated_testing",
    name: "Automated Testing",
    description: "AI-powered test generation and execution",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    id: "bug_reporting", 
    name: "Bug Reporting",
    description: "Advanced bug tracking and management",
    icon: Bug,
    gradient: "from-red-500 to-orange-400"
  },
  {
    id: "regression_testing",
    name: "Regression Testing", 
    description: "Automated regression test suites",
    icon: RotateCcw,
    gradient: "from-green-500 to-emerald-400"
  },
  {
    id: "cross_browser_testing",
    name: "Cross-Browser Testing",
    description: "Multi-browser and device testing",
    icon: Globe,
    gradient: "from-purple-500 to-violet-400"
  },
  {
    id: "performance_testing",
    name: "Performance Testing",
    description: "Load testing and performance monitoring", 
    icon: TrendingUp,
    gradient: "from-yellow-500 to-amber-400"
  },
  {
    id: "security_testing",
    name: "Security Testing",
    description: "Vulnerability scanning and security audits",
    icon: Shield,
    gradient: "from-teal-500 to-cyan-400"
  }
];

export default function CreateProjectModal({ isOpen, onClose, onCreateProject }: CreateProjectModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "", 
    services: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || formData.services.length === 0) return;
    
    setIsSubmitting(true);
    await onCreateProject({
      ...formData,
      status: "active",
      progress: 0,
      tests_passed: 0,
      tests_total: 0, 
      bugs_found: 0,
      bugs_resolved: 0
    });
    setIsSubmitting(false);
    setFormData({ name: "", description: "", services: [] });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl w-full bg-white rounded-xl border border-gray-200 text-gray-900 max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  Create New QA Project
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Project Name
                  </label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="My App v2.0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description (Optional)
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Comprehensive QA testing for our mobile application..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-lg font-semibold text-gray-900">
                  Select QA Services
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {serviceOptions.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceToggle(service.id)}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        formData.services.includes(service.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${service.gradient} p-1`}>
                              <service.icon className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="font-semibold text-gray-900">{service.name}</h3>
                          </div>
                          <p className="text-xs text-gray-500">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!formData.name || formData.services.length === 0 || isSubmitting}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
                >
                  {isSubmitting ? "Creating..." : "Create Project"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
