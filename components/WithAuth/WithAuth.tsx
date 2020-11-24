import React from 'react';
import { Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import storeSelector from './selectors';

export const WithAuth = ({ children }) => {
  const { cookiesStore } = useSelector(storeSelector);
  if (!cookiesStore.netiToken) {
    return <Redirect to="/auth" />;
  }
  return children;
};
