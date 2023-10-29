import React from 'react';
import logo from './logo-math.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={"App-title"}>
          <code>Math Kids</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get start
        </a>
      </header>
    </div>
  );
}

export default App;
