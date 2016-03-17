import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import Routes from '../routes';

/**
 * Component is exported for conditional usage in Root.js
 */
const Root = (props) => (
  <Provider store={props.store}>
    <div>
      <Routes />
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
