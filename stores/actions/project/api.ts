import axios from 'axios';

export const fetchProjects = (accessHeader: string) => (
  axios({
    method: 'get',
    url: 'https://cdsapi.netimob.com/api/project',
    headers: {
      'Access-Token': accessHeader,
    },
  })
);

export const fetchCurrentProject = (accessHeader: string, id: number, rootId: number) => (
  axios({
    method: 'get',
    url: `https://cdsapi.netimob.com/api/project/${id}/project-structure/${rootId}`,
    headers: {
      'Access-Token': accessHeader,
    },
  })
);
