
var React = require('react/addons'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    Main = require('./components/main'),
    Recorder = require('./components/recoder'),
    Home = require('./components/home');

var AppRoutes = (
  <Route name="root" path="/" handler={Main}>
    <DefaultRoute handler={Recorder}/>
  </Route>
);

module.exports = AppRoutes;
