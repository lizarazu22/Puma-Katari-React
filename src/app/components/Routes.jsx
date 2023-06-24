import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from '../pages/index';
import BusRoutesPage from '../pages/bus-routes';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/bus-routes" component={BusRoutesPage} />
      {/* Otras rutas de la aplicación */}
    </Switch>
  );
};

export default Routes;
