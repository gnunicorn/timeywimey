
var React = require('react'),
  mui = require('material-ui'),
  TimeAgo = require('react-timeago'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  Link = Router.Link,
  AppBar = mui.AppBar,
  AppCanvas = mui.AppCanvas,
  TransitionGroup = require('react/lib/ReactCSSTransitionGroup'),
  AccountMenu = require('./AccountMenu'),
  RaisedButton = mui.RaisedButton;

var Main = React.createClass({

  mixins: [Router.State],

  render: function() {
    var name = this.getRoutes().reverse()[0].name;

    return (
      <AppCanvas>
        <div className="brand"><Link to="adding">TimeyWimey</Link></div>
        <AccountMenu />
        <TransitionGroup component="div" transitionName="example">
          <RouteHandler key={name}/>
        </TransitionGroup>
      </AppCanvas>
    );
  },

  _onMenuIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  }
});

module.exports = Main;