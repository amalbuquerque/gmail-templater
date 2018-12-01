import React, { Component } from 'react';
import ReplyTemplate from './ReplyTemplate';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <table>
            <ReplyTemplate number="1." contents="Foo" />
            <ReplyTemplate number="2." contents="Bar" />
            <ReplyTemplate number="3." contents="Baz" />
          </table>
        </header>
      </div>
    );
  }
}

export default App;
