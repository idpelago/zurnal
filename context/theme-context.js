import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  let lightTheme = "light";
  let darkTheme = "dark";

  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    let storedTheme = localStorage.getItem("theme");
    let persistedTheme = storedTheme !== darkTheme ? lightTheme : darkTheme;

    setTheme(persistedTheme);
    switchBodyClass(persistedTheme);
  }, []);

  function toggleTheme() {
    let selectedTheme;

    setTheme((prevTheme) => {
      selectedTheme = prevTheme == lightTheme ? darkTheme : lightTheme;

      switchBodyClass(selectedTheme, prevTheme);

      localStorage.setItem("theme", selectedTheme);

      return selectedTheme;
    });
  }

  function switchBodyClass(newTheme, oldTheme = darkTheme) {
    let dom = document.body;

    if (oldTheme != null) dom.classList.remove(oldTheme);

    dom.classList.add(newTheme);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
