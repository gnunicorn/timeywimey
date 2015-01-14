
var React = require('react'),
  mui = require('material-ui'),
  TimeAgo = require('react-timeago'),
  AppBar = mui.AppBar,
  AppCanvas = mui.AppCanvas,
  RaisedButton = mui.RaisedButton;

var Main = React.createClass({

  render: function() {

    return (
      <AppCanvas predefinedLayout={1}>
        <AppBar
          className="mui-dark-theme"
          onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
          title="TimeyWimey"
          zDepth={0}>
          <p className='subtitle'>wibbely wobbely time tracking</p>
        </AppBar>

        <div className="example-page">

          <h1>material-ui</h1>
          <h2>example project</h2>

          <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />

        </div>
      </AppCanvas>
    );
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  }
});

module.exports = Main;