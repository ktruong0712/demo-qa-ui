'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EmptyState from './EmptyState';
import CreateProjectModal from './CreateProjectModal';
import ProjectsList from './ProjectsList';

const Dashboard = () => {
  const [projects, setProjects] = useState([
    { 
      id: '1', 
      name: 'E-commerce Mobile App v2.1', 
      description: 'Mobile application for online shopping platform',
      status: 'active' as const, 
      last_test_run: '2024-01-15T10:30:00Z',
      progress: 75 
    },
    { 
      id: '2', 
      name: 'Web Dashboard v1.0', 
      description: 'Admin dashboard for managing user accounts',
      status: 'active' as const, 
      last_test_run: '2024-01-14T15:45:00Z',
      progress: 90 
    },
    { 
      id: '3', 
      name: 'API Service v3.2', 
      description: 'RESTful API for data management',
      status: 'on_hold' as const, 
      last_test_run: '2024-01-12T09:15:00Z',
      progress: 45 
    },
  ]);
  
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isLoading] = useState(false);

  const handleCreateProject = async (projectData: { name: string; description: string; services: string[] }) => {
    const newProject = {
      ...projectData,
      id: Date.now().toString(),
      progress: 0,
      last_test_run: new Date().toISOString()
    };
    
    setProjects(prev => [...prev, newProject]);
    setShowCreateModal(false);
  };

  const handleNewProjectClick = () => {
    setShowCreateModal(true);
  };

  const handleSelectProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  if (projects.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <EmptyState onCreateProject={handleNewProjectClick} />
        <CreateProjectModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          onCreateProject={handleCreateProject}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Dashboard Header Bar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold text-gray-900">
                  QA Dashboard
                </h1>
                <div className="px-3 py-1 text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded-full">
                  {projects.length} Projects
                </div>
              </div>
              <p className="text-gray-500">Monitor and manage all your testing projects in one place</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNewProjectClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Project
            </motion.button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Projects Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Projects</h2>
              <ProjectsList
                projects={projects}
                selectedProject={selectedProject}
                onSelectProject={handleSelectProject}
                isLoading={isLoading}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedProject?.name}
              </h2>
              <p className="text-gray-600 mb-8">
                {selectedProject?.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                  <div className="text-sm text-green-700">Test Coverage</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
                  <div className="text-sm text-blue-700">Tests Passed</div>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">23</div>
                  <div className="text-sm text-red-700">Bugs Found</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CreateProjectModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreateProject={handleCreateProject}
      />
    </div>
  );
};

export default Dashboard;