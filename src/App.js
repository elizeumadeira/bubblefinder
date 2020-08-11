import React from 'react';

import Routes from "./routes";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <ul>
            <li>
              <Link to="/level-selection">Level selection</Link>
            </li>
            <li>
              <Link to="/options">Options</Link>
            </li>
            <li>
              <Link to="/level/3">Nível 1</Link>
            </li>
          </ul>
        </header>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
