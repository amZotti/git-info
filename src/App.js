import React from 'react';
import logo from './logo.svg';
import './App.css';
import transport from "./transport.js";

/*
  1. Instantiate git interface -> https://octokit.github.io/rest.js/v18
      - Download
      - Authenticate (ux)
  2. Orginzation selection (ux)
    - Number or search (depending on api)
  3. Repo/info list view with filters (ux)
    - filters depend on api
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
