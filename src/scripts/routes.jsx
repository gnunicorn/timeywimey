
var React = require('react/addons'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    Main = require('./components/main'),
    Recorder = require('./components/recorder'),
    Adding = require('./components/adding'),
    Home = require('./components/home');

var AppRoutes = (
  <Route name="root" path="/" handler={Main}>
    <Route name="adding" path="/adding" handler={Adding} />
    <DefaultRoute name="recorder" path="/recorder" handler={Recorder}/>
  </Route>
);

module.exports = AppRoutes;
