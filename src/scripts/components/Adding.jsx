
var React = require('react'),
    Router = require('react-router');

var Editable = React.createClass({
    render: function(){
        return <span
            className={this.props.className}
            onInput={this.emitChange}
            onBlur={this.emitChange}
            contentEditable
            >{this.props.content}</span>;
    },

    shouldComponentUpdate: function(nextProps){
        return nextProps.content !== this.getDOMNode().innerHTML;
    },

    componentDidUpdate: function() {
        if ( this.props.content !== this.getDOMNode().innerHTML ) {
           this.getDOMNode().innerHTML = this.props.content;
        }
    },

    emitChange: function(evt){
        var content = this.getDOMNode().innerHTML;
        if (this.props.onChange && content !== this.lastcontent) {
            evt.target = { value: content };
            this.props.onChange(evt);
        }
        this.lastcontent = content;
    }
});

var Adding = React.createClass({

  mixins: [Router.State],

  getInitialState: function(){
    return {date: "today", tags: "openSource", "hours": 1, "minutes": 3}
  },

  render: function() {
    return (<div className="page">
            <p className="adding-entry">
            <Editable className="date"
                      content={this.state.date}
                      onChange={this.ondateChange}/>
            <span>I spent</span>
            <Editable className="hours"
                      content={this.state.hours}
                      onChange={this.onhoursChange}/>
            <span>h</span>
            <Editable className="minutes"
                      content={this.state.minutes}
                      onChange={this.onminutesChange}/>
            <span>m</span>
            <span>working on</span>
            <Editable className="tags"
                      content={this.state.tags}
                      onChange={this.ontagsChange}/>
            </p></div>);
  },

  ondateChange: function(evt){
    this.setState({date: evt.target.value});
  },

  onhoursChange: function(evt){
    this.setState({hours: evt.target.value});
  },

  onminutesChange: function(evt){
    this.setState({minutes: evt.target.value});
  },

  ontagsChange: function(evt){
    this.setState({tags: evt.target.value});
  },

});

module.exports = Adding;