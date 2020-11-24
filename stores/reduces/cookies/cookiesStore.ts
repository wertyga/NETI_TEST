import Cookies, { CookieSetOptions } from 'universal-cookie';
import { cookiesConstants, cookieAction } from '../../../types/cookies';

const MONTH_IN_SECONDS = 2592000;
const defaultOptions = {
  path: '/',
  maxAge: MONTH_IN_SECONDS,
} as CookieSetOptions;

type State = {
  [key: string]: string,
};

export const cookiesStore = (state: State = {}, { type, data }: cookieAction) => {
  const cookies = new Cookies(state);

  switch (type) {
    case cookiesConstants.SET_COOKIE:
      const { name, value, options = defaultOptions } = data;
      cookies.set(name, value, options);
      return {
        ...state,
        [name]: value,
      };

    case cookiesConstants.GET_COOKIE:
      return state[data.name];

    default:
      return state;
  }
};
