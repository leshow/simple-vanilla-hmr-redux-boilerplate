import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Footer from '../components/Footer';

const App = (props) => (
  <div className="main-app-container">
    <div className="main-app-nav">
      <div id="main-app-title">Simple Vanilla-HMR Boilerplate</div>
      <div>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/foo">Foo</Link></span>
        <span><Link to="/bar">Bar</Link></span>
      </div>
    </div>
    <div>
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child)
      )}
    </div>
      <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
