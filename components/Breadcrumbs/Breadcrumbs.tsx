import React from 'react';
import { Breadcrumbs as UIBreadcrumbs, Link } from '@material-ui/core';

import { useStyles } from './styles';

export interface Breadcrumb {
  id: number,
  root_document_id: number,
  title: string,
  type: string,
}

interface BreadcrumbsProps {
  list: Breadcrumb[],
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ list = [] }) => {
  const classes = useStyles();
  return (
    <UIBreadcrumbs className={classes.main}>
      {list.map(({ id, title }) => (
        <Link key={id} href={`/${id}`}>{title}</Link>
      ))}
    </UIBreadcrumbs>
  );
};
