import React from 'react';
import { Request } from 'express';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { StaticContext } from 'react-router';

import { App } from '../components/App/App';
import theme from '../components/theme/theme';

type AppType = {
  req: Request,
  context?: StaticContext,
  store: any,
};

export const AppRoot = ({ req, context, store }: AppType) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ThemeProvider>
  </Provider>
);
