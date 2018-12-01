import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            TODO: Send click events to the root window
          </p>
          <table>
            <tr>
                <td>1.</td>
                <td>First template</td>
                <td>Button here</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Second template</td>
                <td>Button here</td>
            </tr>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
