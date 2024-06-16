import React, { useState, createContext, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box, Button } from "@mui/material";
import { theme, darkTheme } from "../themes/theme";

const ThemeToggleContext = createContext();

export const useThemeToggle = () => useContext(ThemeToggleContext);

const ThemeProviderWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeToggleContext.Provider value={[toggleTheme, isDarkMode]}>
      <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
        {/* <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button variant="contained" onClick={toggleTheme}>
            Toggle to {isDarkMode ? "Light" : "Dark"} Mode
          </Button>
        </Box> */}
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProviderWrapper;
