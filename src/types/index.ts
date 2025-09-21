// Simplified types to avoid deployment issues
export interface Project {
  id: string;
  name: string;
  description: string;
  status?: string;
  last_test_run?: string;
  progress?: number;
  services?: string[];
  tests_passed?: number;
  tests_total?: number;
  bugs_found?: number;
  bugs_resolved?: number;
}

export interface CreateProjectData {
  name: string;
  description: string;
  services: string[];
  [key: string]: any; // Allow any additional properties
}
