import React from 'react';
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bubble-finder">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
