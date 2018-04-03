import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route 
} from 'react-router-dom';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import AddCouponPage from './components/AddCouponPage';
import TestPage from './components/TestPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/addcoupon" component={AddCouponPage} />
          <Route exact path="/testpage" component={TestPage} />
        </div>
      </Router>
    );
  }
}

export default App;
