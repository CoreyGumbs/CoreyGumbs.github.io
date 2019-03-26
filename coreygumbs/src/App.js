import React, { Component } from 'react';

import NavComponent from './components/navigation/NavComponent';
import Jumbotron from './components/jumbotron/jumbotron';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavComponent />
          <Jumbotron />
      </div>
    );
  }
}

export default App;
