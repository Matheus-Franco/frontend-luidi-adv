import React from 'react';
import {
  RouteProps as ReactDOMRouterProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  // eslint-disable-next-line react/prop-types
  isPrivate = false,
  // eslint-disable-next-line react/prop-types
  component: Component,
  ...rest
}) => {
  const { admin } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!admin ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/create-articles',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
