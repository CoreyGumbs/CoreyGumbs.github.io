import React, { Component } from 'react';
import './css/App.css';

import NavComponent from './components/navigation/NavComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavComponent />
      </div>
    );
  }
}

export default App;
