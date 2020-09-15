import React, { useEffect, useState, useRef } from 'react';
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeContext from './configs/theme-context.js';
import { setLocalStorage, storedConfigs } from './configs/index.js'

function App() {
  const [theme, setTheme] = useState(storedConfigs().theme);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setLocalStorage({
        theme: theme
      });
    }
  }, [theme])

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme}>
          <Routes />
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
