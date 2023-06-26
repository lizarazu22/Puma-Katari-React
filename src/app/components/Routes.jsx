import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from '../pages/index';
import BusRoutesPage from '../pages/bus-routes';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/bus-routes" component={BusRoutesPage} />
      <Route path="/bus-route1" component={Incallojeta1} />
      <Route path="/bus-route2" component={Incallojeta1} />
      <Route path="/bus-route3" component={Incallojeta1} />
      <Route path="/bus-route4" component={Incallojeta1} />
      <Route path="/bus-route5" component={Incallojeta1} />
      <Route path="/bus-route6" component={Incallojeta1} />
      <Route path="/bus-route7" component={Incallojeta1} />
      <Route path="/bus-route8" component={Incallojeta1} />
      <Route path="/bus-route9" component={Incallojeta1} />
      <Route path="/bus-route10" component={Incallojeta1} />
      {/* Otras rutas de la aplicación */}
    </Switch>
  );
};

export default Routes;
