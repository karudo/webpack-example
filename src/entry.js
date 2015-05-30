require('suitcss-base');
require('bootstrap/less/bootstrap.less');
require('./styles/styles.less');

import React from 'react/addons';
import Router from 'react-router';
import routes from './js/routes';

/**/
//import a11y from 'react-a11y'
//a11y({throw: true});

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler/>, document.getElementById('app'));
});
