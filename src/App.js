import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route 
} from 'react-router-dom';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
