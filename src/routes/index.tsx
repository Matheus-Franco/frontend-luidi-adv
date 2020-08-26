import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignInAdmin from '../pages/SignInAdmin';
import AdminDashboard from '../pages/AdminDashboard';
import ArticleDetails from '../pages/ArticleDetails';

import Main from '../pages/Main';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/article/:id" component={ArticleDetails} />

      <Route path="/admin-auth" component={SignInAdmin} />
      <Route path="/admin-dashboard" component={AdminDashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
