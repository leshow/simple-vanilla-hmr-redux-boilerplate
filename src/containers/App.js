import React from 'react';
import { Link } from 'react-router';
import Footer from '../components/Footer';
import HomeView from '../components/HomeView';

export default () => (
  <div className="main-app-container">
    <div className="main-app-nav">
      <div id="main-app-title">Simple Vanilla-HMR Boilerplate</div>
      <div>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/foo">Foo</Link></span>
        <span><Link to="/bar">Bar</Link></span>
      </div>
    </div>
      <HomeView />
      <Footer />
  </div>
);
