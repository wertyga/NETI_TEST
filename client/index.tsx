import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { initializeStore } from '../stores/initializeStore';
import { App } from '../components/App/App';
import theme from '../components/theme/theme';

import './assets/styles.css';

const preloadedState = (window as any).__PRELOADED_STATE__;
delete (window as any).__PRELOADED_STATE__;

const store = initializeStore(preloadedState);

const Main = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side') as any;
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

hydrate(
  <Main />,
  document.getElementById('root'),
);
