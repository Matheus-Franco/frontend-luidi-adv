import React from 'react';
import { Switch } from 'react-router-dom';

import SignInAdmin from '../pages/SignInAdmin';
import ArticleFormAdmin from '../pages/ArticleFormAdmin';
import DeleteArticleAdmin from '../pages/DeleteArticleAdmin';

import Route from './Route';

import Main from '../pages/Main';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/admin" component={SignInAdmin} />

      <Route path="/create-articles" component={ArticleFormAdmin} isPrivate />
      <Route path="/delete-articles" component={DeleteArticleAdmin} isPrivate />
    </Switch>
  );
};

export default Routes;
