import Cookies from 'universal-cookie';

export const getInitialState = async (req) => {
  const cookies = new Cookies(req.headers.cookie);
  return {
    cookiesStore: cookies.getAll(),
  };
};
