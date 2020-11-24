import React from 'react';
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import { StaticContext } from 'react-router';

import { ServerStyleSheets } from '@material-ui/core/styles';

import { initializeStore } from '../stores/initializeStore';
import { getInitialState } from '../stores/utils';
import { AppRoot } from './AppRoot';

export const handleRender = async (req: Request, res: Response) => {
  try {
    const context: StaticContext = {};
    const initialState = await getInitialState(req);

    const sheets = new ServerStyleSheets();
    const indexFile = fs.readFileSync(
      path.resolve(process.cwd(), 'public/index.html'),
      'utf8',
    );

    const store = initializeStore(initialState);
    const preloadedState = store.getState();
    const html = renderToString(
      sheets.collect(<AppRoot req={req} context={context} store={store} />),
    );
    if (context.url) return res.redirect(301, context.url);
    const css = sheets.toString();

    const page = indexFile
      .replace('<!-- ::APP:: -->', html)
      .replace('<!-- ::CSS:: -->', `<style id="jss-server-side">${css}</style>`)
      .replace('<!-- ::DATA:: -->',
        `<script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
      </script>`);

    return res.send(page);
  } catch (e) {
    console.log(e);
  }
};
