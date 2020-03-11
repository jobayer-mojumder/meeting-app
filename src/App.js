import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';

class App extends Component {

  state = {
    user: null,
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        <Home user={this.state.user} />
      </div>
    );
  }
}

export default App;
