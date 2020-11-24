import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemText } from '@material-ui/core';

import storeSelector from './selectors';

import { MainLayout } from '../MainLayout/MainLayout';
import { getProjects } from '../../stores/actions/project/projectActions';
import { setMetaData } from '../../stores/actions/meta/metaActions';
import { WithAuth } from '../WithAuth/WithAuth';
import { RouteComponentProps } from '../../types/location';

import { useStyles } from './styles';

const ProjectListComponent: React.FC<RouteComponentProps<any>> = ({ history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { accessToken, list } = useSelector(storeSelector);
  const [error, setError] = useState('');

  const getProjectList = async () => {
    try {
      await getProjects(accessToken, dispatch, history);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleItemClick = (id) => () => {
    history.push(`/${id}`);
  };

  useEffect(() => {
    setMetaData({ appTitle: 'Project List' }, dispatch);
    getProjectList();
  }, []);

  return (
    <MainLayout>
      <div>
        {error && <span className="error">{error}</span>}

        <List>
          {list.map(({ id, title, address }) => (
            <ListItem
              key={id}
              onClick={handleItemClick(id)}
              button
              className={classes.listItem}
            >
              <ListItemText>{title}</ListItemText>
              <ListItemText>{address}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </MainLayout>
  );
};

export const ProjectList = (props) => (
  <WithAuth>
    <ProjectListComponent {...props} />
  </WithAuth>
);
