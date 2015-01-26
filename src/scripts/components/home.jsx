

var React = require('react'),
  Router = require('react-router'),
  hoodie = require('../stores/_hoodie'),
  store = hoodie.store,
  projectsEmitter = hoodie.emitter('project'),
  mui = require('material-ui'),
  DropDownMenu = mui.DropDownMenu,
  TimeAgo = require('react-timeago'),
  RaisedButton = mui.RaisedButton;

var Home = React.createClass({

  mixins: [Router.State],

  didMountComponent: function(){
    projectsEmitter.on('refresh', this.refreshState);
    if (projectsEmitter.loaded) this.refreshState();
  },

  getInitialState: function (argument) {
    return {projects: []};
  },

  refreshState: function(){
    console.log("emit");
    this.setState({'projects': projectsEmitter.getItems()});
  },

  render: function() {

    var menuItems = this.state.projects.map(function(x){
            return {payload: x.id, text: x.name}}),
        projects = <DropDownMenu menuItems={menuItems} />;

    if (menuItems.length === 0){
        projects = <p>You need to add projects first</p>;
    }

    return (
        <div className="example-page">

          <h1>Time Tracking</h1>
          <h2>is a timey wimey <br/> wibbely wobbely</h2>

          {projects}

          <RaisedButton label='Add Items' primary={true} onTouchTap={this._addProject} />

        </div>)
  },

  _addProject: function(){
    store.add('project', {'name': new Date()})
  },

  _handleTouchTap: function(){
    alert('aaaaa');
  }
});

module.exports = Home;