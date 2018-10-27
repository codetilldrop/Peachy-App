import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

// Importing Components...
import Home from './Components/Home';
import Content from './Components/Content';

// Importing Icon Library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';

library.add(faGhost)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home}/>
          <Route path="/content" component={Content}/>
        </div>
      </Router>
    );
  }
}

export default App;
