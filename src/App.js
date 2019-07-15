import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/Homepage';

const HatsPage = props => {
  return (
    <div>
      <p>Hats Page</p>
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' component={HatsPage} />
    </Switch>
  );
}

export default App;
