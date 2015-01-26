

var React = require('react'),
  Router = require('react-router'),
  hoodie = require('../stores/_hoodie'),
  store = hoodie.store,
  projectsEmitter = hoodie.emitter('project'),
  mui = require('material-ui'),
  DropDownMenu = mui.DropDownMenu,
  moment = require('moment'),
  FlatButton = mui.FlatButton;

var FormattedNumber = React.createClass({
  render: function(){
    var number = this.props.number;

    if (number < 10){
      number = "0" + number;
    }
    return (<span className={this.props.className}>{number}</span>)
  }
})

var Counter = React.createClass({

  componentDidMount: function(){
    this.tick(true);
  },

  tick: function(refresh){
    if(!this.isMounted()){
      return;
    }
    this.forceUpdate();
    setTimeout(this.tick, 1000);
  },

  render: function(){
    var diff = moment.duration(moment().diff(moment(this.props.date))),
        seconds = diff.seconds(),
        minutes = diff.minutes(),
        hours = diff.hours();

    return (<div className='counter'>
        <FormattedNumber className="hours" number={hours} />:
        <FormattedNumber className="minutes" number={minutes} />:
        <FormattedNumber className="seconds" number={seconds} />
      </div>)
  }
})

var Recorder = React.createClass({

  mixins: [Router.State],

  getInitialState: function (argument) {
    return {running: false, since: null};
  },

  render: function() {
    var button = (<FlatButton label='start tracking'
            primary={true} onTouchTap={this._startTracking} />);
    if (this.state.running){
      var counter = (<Counter date={this.state.since} />)
      button = (<FlatButton label={counter}
            primary={true} onTouchTap={this._stopTracking} />);
    }
    return (
        <div className="recorder">
          {button}
        </div>)
  },

  _stopTracking: function(){
    this.setState({running: false});
  },

  _startTracking: function(){
    this.setState({running: true, since: new Date()});
  }
});

module.exports = Recorder;