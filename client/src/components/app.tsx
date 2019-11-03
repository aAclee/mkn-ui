import React, { ReactElement } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';

// Components
import Homepage from '@components/homepage/homepage';
import Route from '@components/middleware/route';
import Login from '@components/authentication/login/login';

// Style
import './app.scss';

const App: React.FC = (): ReactElement => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
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
