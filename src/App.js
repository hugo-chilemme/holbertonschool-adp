import React from 'react';

import CampusChoice from './pages/components/CampusChoice';
import CampusPreference from './pages/components/CampusPreference';
import Dashboard from './pages/Dashboard';

import checkCookie from './ressources/functions/checkCookie';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CampusChoice} />
        <Route path="/campus/:CampusCode" component={CampusPreference} />

        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}



export default App;
