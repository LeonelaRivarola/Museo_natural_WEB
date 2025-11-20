import { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from './use-color-scheme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = useColorScheme();
  const [_, forceUpdate] = useState(0);

  // Forzar rerender cuando cambie el tema
  useEffect(() => {
    forceUpdate(n => n + 1);
  }, [theme.colorScheme]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};