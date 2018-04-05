import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route 
} from 'react-router-dom';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import AddCouponPage from './components/AddCouponPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/addcoupon" component={AddCouponPage} />
        </div>
      </Router>
    );
  }
}

export default App;
