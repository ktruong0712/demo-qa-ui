'use client';

import { motion } from 'framer-motion';
import { Plus, Folder } from 'lucide-react';

interface EmptyStateProps {
  onCreateProject: () => void;
}

export default function EmptyState({ onCreateProject }: EmptyStateProps) {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white border border-gray-200 rounded-xl shadow-sm p-12"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-100 flex items-center justify-center rounded-2xl mx-auto mb-8">
          <Folder className="w-10 h-10 text-blue-500" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome to QA Master
        </h2>
        
        <p className="text-gray-600 mb-8">
          Create your first project to start leveraging automated testing and bug tracking.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onCreateProject}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
        >
          <Plus className="w-5 h-5" />
          Create Your First Project
        </motion.button>
      </motion.div>
    </div>
  );
}
