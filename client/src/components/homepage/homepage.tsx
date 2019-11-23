import React, { Fragment, ReactElement } from 'react';

// Actions
import { logout } from '@store/system/actions';

const Homepage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <div>This is home!</div>
      <button onClick={(): void => logout()}>logout</button>
    </Fragment>
  );
};

export default Homepage;
