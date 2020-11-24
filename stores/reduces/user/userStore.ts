import { User, userConstants } from '../../../types/user';

export const userInitialState: User = {};

export const userStore = (state = userInitialState, { type, data }) => {
  switch (type) {
    case userConstants.UPDATE_USER:
    case userConstants.USER_SIGN_IN:
      return {
        ...state,
        ...data,
      };

    case userConstants.SET_USER_ERROR:
      return {
        ...state,
        error: data,
      };

    case userConstants.CLEAR_USER:
      return userInitialState;

    default:
      return state;
  }
};
