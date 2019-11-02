import React, { ReactElement } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Login from '@components/authentication/login/login';

// Style
import './app.scss';

const App: React.FC = (): ReactElement => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <div>This is home!</div>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/:404">
          <div>404 NOT FOUND!</div>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
