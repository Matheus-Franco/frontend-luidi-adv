import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignInAdmin from '../pages/SignInAdmin';
import AdminDashboard from '../pages/AdminDashboard';

import Main from '../pages/Main';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />

      <Route path="/admin-auth" component={SignInAdmin} />
      <Route path="/admin-dashboard" component={AdminDashboard} />
    </Switch>
  );
};

export default Routes;
