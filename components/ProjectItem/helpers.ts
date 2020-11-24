import { Project } from '../../types/project';

export const getPropsList = (project: Project): [string, string][] => (
  Object.entries(project)
    .filter(([_, value]) => typeof value !== 'object')
    .map(([key, value]) => [key, String(value)])
);
