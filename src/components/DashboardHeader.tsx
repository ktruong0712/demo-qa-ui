'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface DashboardHeaderProps {
  onNewProjectClick: () => void;
  projectCount: number;
}

export default function DashboardHeader({ onNewProjectClick, projectCount }: DashboardHeaderProps) {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-gray-900">
                QA Dashboard
              </h1>
              <div className="px-3 py-1 text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded-full">
                {projectCount} Projects
              </div>
            </div>
            <p className="text-gray-500">Monitor and manage all your testing projects in one place</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNewProjectClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Project
          </motion.button>
        </div>
      </div>
    </div>
  );
}
