import React from 'react';

import { AuthProvider } from './auth';
import { ArticleProvider } from './articles';

// eslint-disable-next-line react/prop-types
const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ArticleProvider>{children}</ArticleProvider>
    </AuthProvider>
  );
};

export default AppProvider;
