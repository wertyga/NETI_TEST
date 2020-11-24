import { projectConstants, Project } from '../../../types/project';

export const projectStore = (state: (Project | {}) = {}, { type, data }) => {
  switch (type) {
    case projectConstants.SET_PROJECT:
      return data;

    default:
      return state;
  }
};
