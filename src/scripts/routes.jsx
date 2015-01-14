
var React = require('react/addons'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    Main = require('./components/main'),
    Home = require('./components/home');

var AppRoutes = (
  <Route name="root" path="/" handler={Main}>
    <Route name="home" handler={Home} />
    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = AppRoutes;
