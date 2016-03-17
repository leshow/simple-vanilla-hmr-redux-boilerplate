import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';
import App from '../containers/App';
import {
  NotFoundView, FooView,
  BarView, HomeView
} from '../components';

export default () => {
  return (
    <Router history={browserHistory}>
      {/* 'App' acts as a wrapper for the child components */}
      <Route path="/" component={App}>
        {/* IndexRoute is the initial component that is loaded,
            other routes are loaded according to the component
            property specified here */}
        <IndexRoute component={HomeView} />
        <Route path="foo" component={FooView} />
        <Route path="bar" component={BarView} />
        <Route path="*" component={NotFoundView} />
      </Route>
    </Router>
  );
};
