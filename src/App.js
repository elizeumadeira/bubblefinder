import React, { useContext } from 'react';
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

const themes = {
  'bubble-finder': {
    class: "bubble-finder"
  },
  'mario': {
    class: "mario"
  }
};

const ThemeContext = React.createContext(themes['bubble-finder']);

function App() {
  const theme = useContext(ThemeContext);
  
  return (
    <Router>
      <ThemeContext.Provider value={themes.dark}>
        <div className={theme.class}>
          <Routes />
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
