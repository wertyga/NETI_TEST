import { CookieSetOptions } from 'universal-cookie';

export enum cookiesConstants {
  SET_COOKIE = 'SET_COOKIE',
  GET_COOKIE = 'GET_COOKIE',
}

export interface cookieAction {
  type: cookiesConstants,
  data: {
    name: string,
    value: string | number | undefined,
    options?: CookieSetOptions,
  },
}
