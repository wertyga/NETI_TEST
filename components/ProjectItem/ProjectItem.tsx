import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemText } from '@material-ui/core';
import storeSelector from './selectors';

import { MainLayout } from '../MainLayout/MainLayout';
import { getCurrentProject, getProjects } from '../../stores/actions/project/projectActions';
import { setMetaData } from '../../stores/actions/meta/metaActions';
import { RouteComponentProps } from '../../types/location';

import { getPropsList } from './helpers';

import { useStyles } from './styles';

interface MatchParams {
  id: string,
}

export const ProjectItem: React.FC<RouteComponentProps<MatchParams>> = withRouter(({ match: { params: { id } }, history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { accessToken, list, project } = useSelector(storeSelector);
  const [error, setError] = useState('');

  const getProject = async () => {
    setError('');
    try {
      const rootId = (list.find((item) => item.id === +id) || {}).root_structure_id;
      if (list && !!list.length && !rootId) {
        setError('There is no such project');
        return;
      }
      if (!rootId) return;

      await getCurrentProject(accessToken, id, rootId, dispatch);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    if (!list || !list.length) getProjects(accessToken, dispatch, history);
    setMetaData({ appTitle: `Project ${id}` }, dispatch);
  }, []);

  useEffect(() => {
    getProject();
  }, [list.length]);

  const properties = getPropsList(project);
  return (
    <MainLayout
      breadcrumbs={project.breadcrumbs}
    >
      <div>
        {error && <span className="error">{error}</span>}
        <List dense>
          {properties.map(([key, value]) => (
            <ListItem key={key}>
              <ListItemText className={classes.itemTitle}>
                <strong>{key}</strong>
              </ListItemText>
              <ListItemText>{value}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </MainLayout>
  );
});
