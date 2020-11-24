import * as api from './api';
import { SignInRequest, UserResponse, userConstants } from '../../../types/user';
import { cookiesConstants } from '../../../types/cookies';

export const signIn = async (payload: SignInRequest, dispatch) => {
  const { data: { errors, data } }: UserResponse = await api.signIn(payload);
  // eslint-disable-next-line no-throw-literal
  if (errors) throw errors;

  dispatch({
    type: userConstants.USER_SIGN_IN,
    data,
  });
  dispatch({
    type: cookiesConstants.SET_COOKIE,
    data: {
      name: 'netiToken',
      value: (data || {}).accessToken,
    },
  });
};

export const clearUser = (dispatch) => {
  dispatch({
    type: userConstants.CLEAR_USER,
  });
};
