import { projectConstants, Projects } from '../../../types/project';

const initialState = {
  list: [],
};

export const projectsStore = (state: Projects = initialState, { type, data }) => {
  switch (type) {
    case projectConstants.FILL_LIST:
      return {
        ...state,
        list: data,
      };

    default:
      return state;
  }
};
