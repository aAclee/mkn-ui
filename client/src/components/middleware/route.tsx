import React, { ReactElement } from 'react';
import { RouteChildrenProps } from 'react-router';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Types
import { AppState } from '@store/index';
type Children = ((props: RouteChildrenProps<unknown>) => React.ReactNode) | React.ReactNode;

const LOGIN_PATH = '/login';

const MKNRoute: React.FC<RouteProps> = ({children, ...otherProps}: RouteProps): ReactElement => {
  // TODO: Refactor redirect logic
  const token = useSelector((state: AppState): string => state.system.token);

  let pathname: string;
  let redirect = false;
  if (token && otherProps.path === LOGIN_PATH) {
    redirect = true;
    pathname = '/';
  } else if (!token && otherProps.path !== LOGIN_PATH) {
    redirect = true;
    pathname = LOGIN_PATH;
  }
  // END TODO

  return (
    <Route
      {...otherProps}
      render={({ location }): Children => (
        redirect ? (
          <Redirect 
            to={{
              pathname,
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      )}
    />
  );
};

export default MKNRoute
;