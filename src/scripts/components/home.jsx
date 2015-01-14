

var React = require('react'),
      Router = require('react-router'),
  mui = require('material-ui'),
  TimeAgo = require('react-timeago'),
  RaisedButton = mui.RaisedButton;

var Home = React.createClass({

  mixins: [Router.State],

  render: function() {

    return (
        <div className="example-page">

          <h1>Time Tracking</h1>
          <h2>is a timey wimey <br/> wibbely wobbely</h2>

          <RaisedButton label='Start Tracking' />
          <RaisedButton label='Start Tracking' primary={true} onTouchTap={this._handleTouchTap} />

        </div>)
  },

  _handleTouchTap: function(){
    alert('aaaaa');
  }
});

module.exports = Home;