import React, { createContext, useContext, useMemo, useState } from 'react';

export const themePalettes = {
  light: {
    mode: 'light',
    primary: '#243B64',
    secondary: '#4169A1',
    accent: '#4F8FE8',
    background: '#F5F7FB',
    surface: '#FFFFFF',
    text: '#1E293B',
    textSecondary: '#64748B',
    success: '#22C55E',
    warning: '#F59E0B',
    border: '#E2E8F0',
    cardShadow: 'rgba(15, 23, 42, 0.08)',
    inputBackground: '#F8FAFC',
    muted: '#EAF1FF',
  },
  dark: {
    mode: 'dark',
    primary: '#8BADEB',
    secondary: '#AEC8F6',
    accent: '#7EB7FF',
    background: '#111827',
    surface: '#1F2937',
    text: '#F9FAFB',
    textSecondary: '#9CA3AF',
    success: '#34D399',
    warning: '#FBBF24',
    border: '#334155',
    cardShadow: 'rgba(15, 23, 42, 0.35)',
    inputBackground: '#0B1220',
    muted: '#16253E',
  },
};

export const ThemeContext = createContext(themePalettes.light);

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState('light');

  const value = useMemo(() => {
    const palette = themePalettes[themeMode] ?? themePalettes.light;

    return {
      ...palette,
      themeMode,
      setThemeMode,
      toggleTheme: () =>
        setThemeMode((currentMode) =>
          currentMode === 'light' ? 'dark' : 'light'
        ),
    };
  }, [themeMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
