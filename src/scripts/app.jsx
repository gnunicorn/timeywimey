
var React = require('react'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    MainApp = require('./components/main.jsx')
    ;

require("../styles/styles.less");

console.log(MainApp);

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


React.render(<MainApp />,
    document.getElementById('main'));
