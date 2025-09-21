'use client';

import { motion } from 'framer-motion';
import { CheckCircle, PauseCircle, Clock } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'on_hold' | 'completed' | 'draft';
  last_test_run: string;
  progress: number;
}

interface ProjectsListProps {
  projects: Project[];
  selectedProject?: Project;
  onSelectProject: (project: Project) => void;
  isLoading: boolean;
}

const statusIcons = {
  active: <CheckCircle className="w-4 h-4 text-green-500" />,
  on_hold: <PauseCircle className="w-4 h-4 text-yellow-500" />,
  completed: <Clock className="w-4 h-4 text-gray-500" />,
  draft: <Clock className="w-4 h-4 text-gray-500" />
};

const formatDistanceToNow = (date: Date) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  return `${Math.floor(diffInSeconds / 86400)} days ago`;
};

export default function ProjectsList({ projects, selectedProject, onSelectProject, isLoading }: ProjectsListProps) {
  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array(3).fill(0).map((_, i) => (
          <div key={i} className="h-20 w-full bg-gray-200 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          onClick={() => onSelectProject(project)}
          className={`cursor-pointer transition-all duration-200 border-2 rounded-lg ${
            selectedProject?.id === project.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-transparent bg-white hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          <div className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-gray-800 flex-1 pr-2">{project.name}</h3>
              {statusIcons[project.status]}
            </div>
            <p className="text-sm text-gray-500 mt-1 truncate">{project.description}</p>
            <p className="text-xs text-gray-400 mt-2">
              Last run: {project.last_test_run ? formatDistanceToNow(new Date(project.last_test_run)) : 'Never'}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
