import React, { Fragment, ReactElement } from 'react';

// Hooks
import { useFunctionDispatch } from '@hooks/function-dispatch.hook';

// Actions
import { logout } from '@store/system/actions';

const Homepage: React.FC = (): ReactElement => {
  const dispatchLogout = useFunctionDispatch<void>(logout);

  return (
    <Fragment>
      <div>This is home!</div>
      <button onClick={(): void => dispatchLogout()}>logout</button>
    </Fragment>
  );
};

export default Homepage;
