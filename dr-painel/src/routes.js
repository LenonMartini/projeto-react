import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Logout = React.lazy(() => import('./views/Logout'));
const Companies = React.lazy(() => import('./views/pages/companies/Company'));
const CompanyEdit = React.lazy(() => import('./views/pages/companies/CompanyEdit'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/companies', name: 'Companies', component: Companies },
  { path: '/company/edit', name: 'CompanyEdit', component: CompanyEdit },
];

export default routes;
