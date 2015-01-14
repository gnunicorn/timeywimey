

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

          <h1>material-ui</h1>
          <h2>example project</h2>

          <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />

        </div>)
  },

  _handleTouchTap: function(){
    alert('aaaaa');
  }
});

module.exports = Home;