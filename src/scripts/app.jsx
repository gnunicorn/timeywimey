(function () {

  var React = require('react'),
      Router = require('react-router'),
      injectTapEventPlugin = require("react-tap-event-plugin"),
      AppRoutes = require('./routes.jsx');

    require("../styles/styles.less");

    //Needed for React Developer Tools
    window.React = React;
    //Needed for onTouchTap
    //Can go away when react 1.0 release
    //Check this repo:
    //https://github.com/zilverline/react-tap-event-plugin
    injectTapEventPlugin();

    Router
    .create({
      routes: AppRoutes,
      scrollBehavior: Router.ScrollToTopBehavior
    })
    .run(function (Handler) {
      React.render(<Handler/>, document.getElementById('main'));
    });
})();