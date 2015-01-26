
var React = require('react'),
  mui = require('material-ui'),
  TimeAgo = require('react-timeago'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  AppBar = mui.AppBar,
  AppCanvas = mui.AppCanvas,
  AccountMenu = require('./AccountMenu'),
  RaisedButton = mui.RaisedButton;

var Main = React.createClass({

  mixins: [Router.State],

  render: function() {

    return (
      <AppCanvas>
        <div className="brand">TimeyWimey</div>
        <AccountMenu />
        <RouteHandler />
      </AppCanvas>
    );
  },

  _onMenuIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  }
});

module.exports = Main;