export type SignInRequest = {
  login: string,
  password: string,
};

export type User = {
  accessToken?: string,
  avatar?: string,
  email?: string,
  fullName?: string,
  id?: number,
  isCounterparty?: boolean,
  organization?: string,
  phone?: string,
  sector?: string,
};

export interface UserResponse {
  data: {
    data?: User,
    errors?: string[],
    success: boolean,
  },
}

export enum userConstants {
  UPDATE_USER = 'UPDATE_USER',
  USER_SIGN_IN = 'USER_SIGN_IN',
  SET_USER_ERROR = 'SET_USER_ERROR',
  CLEAR_USER = 'CLEAR_USER',
}
