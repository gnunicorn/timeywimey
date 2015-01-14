
var React = require('react'),
  mui = require('material-ui'),
  TimeAgo = require('react-timeago'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  AppBar = mui.AppBar,
  AppCanvas = mui.AppCanvas,
  AppLeftNav = require('./LeftNav'),
  AccountMenu = require('./AccountMenu'),
  ToolbarGroup = mui.ToolbarGroup,
  RaisedButton = mui.RaisedButton;

var Main = React.createClass({

  mixins: [Router.State],

  render: function() {

    return (
      <AppCanvas predefinedLayout={1}>
        <AppBar
          className="mui-light-theme"
          onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
          title="TimeyWimey"
          zDepth={0}>
          <h2 className='subtitle'>wibbely wobbely time tracking</h2>
            <AccountMenu />
        </AppBar>

        <AppLeftNav ref="leftNav" />
        <RouteHandler />
      </AppCanvas>
    );
  },

  _onMenuIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  }
});

module.exports = Main;