import React from 'react';
import {
  Button, Toolbar, Typography, AppBar as UIAppBar,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

import { useSelector, useDispatch } from 'react-redux';
import storeSelector from './selectors';

import { clearUser } from '../../stores/actions/user/userActions';

import { useStyles } from './styles';

interface AppBarProps {
  history?: History,
}

export const AppBar: React.FC<AppBarProps> = withRouter(({ history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { metaStore: { appTitle } } = useSelector(storeSelector);

  const handleLogout = () => {
    clearUser(dispatch);
    history.replace('/auth');
  };

  return (
    <UIAppBar
      position="static"
      color="primary"
    >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>{appTitle}</Typography>
        <Button color="inherit" onClick={handleLogout}>Logout</Button>
      </Toolbar>
    </UIAppBar>
  );
});
