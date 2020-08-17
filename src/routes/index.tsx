import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignInAdmin from '../pages/SignInAdmin';
import ArticleFormAdmin from '../pages/ArticleFormAdmin';
import DeleteArticleAdmin from '../pages/DeleteArticleAdmin';

import Main from '../pages/Main';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/admin" component={SignInAdmin} />
      <Route path="/create-articles" component={ArticleFormAdmin} />
      <Route path="/delete-articles" component={DeleteArticleAdmin} />

      <Route path="/" exact component={Main} />
    </Switch>
  );
};

export default Routes;
