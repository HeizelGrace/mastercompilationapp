import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';

const AppContext = createContext(undefined);

export function AppProvider({ children }) {
  return (
    <ThemeProvider>
      <AppStateProvider>{children}</AppStateProvider>
    </ThemeProvider>
  );
}

function AppStateProvider({ children }) {
  const theme = useTheme();
  const [profileName, setProfileName] = useState('Student');

  const value = useMemo(() => {
    return {
      ...theme,
      colors: theme,
      isDarkTheme: theme.themeMode === 'dark',
      profileName,
      updateProfileName: (nextName) => {
        const trimmedName = String(nextName || '').trim();
        setProfileName(trimmedName || 'Student');
      },
    };
  }, [profileName, theme]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
}
