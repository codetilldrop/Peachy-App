import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

// Importing Components...
import Home from './Components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home}/>
      </Router>
    );
  }
}

export default App;
