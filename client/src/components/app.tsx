import React, { ReactElement } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';

// Components
import Route from '@components/middleware/route';
import Character from '@components/character/character';
import Homepage from '@components/homepage/homepage';
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
        <Route path="/character/:id">
          <Character />
        </Route>
        <Route path="/:404">
          <div>404 NOT FOUND!</div>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
