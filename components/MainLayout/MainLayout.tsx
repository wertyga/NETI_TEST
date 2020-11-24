import React from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Breadcrumbs, Breadcrumb } from '../Breadcrumbs/Breadcrumbs';

interface MainLayoutProps {
  breadcrumbs?: Breadcrumb[],
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, breadcrumbs }) => (
  <div>
    <AppBar />
    {breadcrumbs && !!breadcrumbs.length && <Breadcrumbs list={breadcrumbs} />}
    {children}
  </div>
);
