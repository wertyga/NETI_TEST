import { projectConstants } from '../../../types/project';
import * as api from './api';

export const getProjects = async (token, dispatch, history) => {
  try {
    const { data: { data, errors } } = await api.fetchProjects(token);
    if (errors) throw new Error(errors[0]);

    dispatch({
      type: projectConstants.FILL_LIST,
      data,
    });
  } catch (e) {
    if (e.message === 'Срок действия токенов истек. Пожалуйста, повторите авторизацию') {
      history.push('/auth');
      return;
    }
    throw e;
  }
};

export const getCurrentProject = async (token, id, rootId, dispatch) => {
  const { data: { data, errors } } = await api.fetchCurrentProject(token, id, rootId);

  if (errors) throw new Error(errors[0]);

  dispatch({
    type: projectConstants.SET_PROJECT,
    data,
  });
};
