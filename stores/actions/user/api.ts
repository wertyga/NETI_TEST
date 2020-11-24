import axios from 'axios';

export const signIn = (data) => (
  axios({
    method: 'post',
    url: 'https://cdsapi.netimob.com/api/auth',
    data: {
      ...data,
      type: 'web',
    },
  })
);
