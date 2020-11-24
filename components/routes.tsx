import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ProjectList } from './ProjectList/ProjectList';
import { ProjectItem } from './ProjectItem/ProjectItem';
import { AuthPage } from './AuthPage/AuthPage';

export const routes = [
  {
    path: '/',
    component: ProjectList,
  },
  {
    path: '/auth',
    component: AuthPage,
  },
  {
    path: '/:id',
    component: ProjectItem,
  },
];

export const Routes = () => (
  <Switch>
    {routes.map(({ path, component }) => (
      <Route key={path} exact path={path} component={component} />
    ))}
  </Switch>
);
