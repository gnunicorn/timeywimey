
var React = require('react'),
    mui =  require('material-ui'),
    FlatButton = mui.FlatButton,
    Input = mui.Input,
    Dialog = mui.Dialog,
    Snackbar = mui.Snackbar,
    DropDownIcon = mui.DropDownIcon,
    account = require("../stores/_hoodie").account;

var AccountMenu = React.createClass({

  _events: ['signup', 'signin', 'signout', 'reauthenticated', 'changeusername'],

  getInitialState: function(){
    return this._getState();
  },

  _getState: function () {
      return {username: account.username,
              loginError: null,
              isLoggedIn: account.username != undefined};
  },

  _refreshState: function() {
    this.setState(this._getState());
  },

  componentDidMount: function() {
    this._events.forEach(function(x){
        account.on(x, this._refreshState);
    }.bind(this))
  },
  componentWillUnmount: function() {
    this._events.forEach(function(x){
        account.unbind(x, this._refreshState);
    }.bind(this))
  },

  render: function(){
    if (!this.state.isLoggedIn){
        var dialogActions = [
              { text: 'Login', onClick: this._triggerLogin },
              { text: 'Signup', onClick: this._triggerSignup }
            ];

        return (<div>
            <FlatButton label="Login" onTouchTap={this._showLogin} />

            <Dialog
              ref="loginDialog"
              title="Login"
              actions={dialogActions}>

                <Input
                  ref="username"
                  type="email"
                  name="email"
                  placeholder="Email" />

                <Input
                  ref="password"
                  type="password"
                  name="password"
                  placeholder="Password" />
            </Dialog>
            <Snackbar
                ref="loginError"
                action="Reset Password"
                onActionTouchTap={this._requestPW}
                message={this.state.loginError} />
        </div>);
    }

    var iconMenuItems = [
          { payload: 'logout', text: 'Logout' }
        ];
    return (<div>{this.state.username}
            <span className="mui-toolbar-separator">&nbsp;</span>
            <FlatButton label="logout" onTouchTap={this._triggerLogout}/></div>);
  },

  _triggerLogout: function(){
    account.signOut();
  },

  _requestPW: function(){
    this.refs.loginError.dismiss();
    account.resetPassword(this.refs.username.getValue()).done(function(err){
        this.setState({loginError: "Password send."});
        this.refs.loginError.show();
      }.bind(this)).fail(function(err){
        this.setState({loginError: err});
        this.refs.loginError.show();
      }.bind(this));
  },

  _triggerLogin: function(){
    account.signIn(
        this.refs.username.getValue(),
        this.refs.password.getValue(),
        {moveData: true})
      .fail(function(err){
        this.setState({loginError: err});
        this.refs.loginError.show();
      }.bind(this));
  },

  _triggerSignup: function(){
    account.signUp(this.refs.username.getValue(),
                   this.refs.password.getValue()
        ).fail(function(err){
            this.setState({loginError: err});
            this.refs.loginError.show();
          }.bind(this));;
  },

  _showLogin: function(){
    this.refs.loginDialog.show();
  }
})

module.exports = AccountMenu;