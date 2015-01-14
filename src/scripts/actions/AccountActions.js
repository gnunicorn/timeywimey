var dispatcher = require("../dispatcher"),
    ACCOUNT = require("../CONSTS").ACCOUNT;

module.exports = {
    signup: function (username) {
        dispatcher.dispatch({
            action: ACCOUNT.SIGNUP,
            'data': {username: username}
        });
    },
    login: function (username, password) {
        dispatcher.dispatch({
            action: ACCOUNT.LOGIN,
            'data': {username: username, password: password}
        })
    },
    logout: function () {
        dispatcher.dispatch({
            action: ACCOUNT.LOGOUT
        });
    },
};