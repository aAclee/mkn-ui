import React, { ReactElement } from 'react';
import { Route, RouteProps } from 'react-router-dom';

const MKNRoute: React.FC<RouteProps> = (props: RouteProps): ReactElement => {

  return (
    <Route {...props}>
      {props.children}
    </Route>
  );
};

export default MKNRoute
;