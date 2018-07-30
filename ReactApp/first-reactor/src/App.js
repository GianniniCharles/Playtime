import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello, React</h1>
        </header>
        <p className="App-intro">
          Here we are don't turn away now! WE are the <code>warriors</code> that built this town!
        </p>

      <div>
          <input type = "text"></input>
          <button>CLICKME </button>

      </div>
      </div>

    );
  }
}

export default App;
