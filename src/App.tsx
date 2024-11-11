import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Dashboard from './components/Dashboard/Dashboard';

// Add theme type declaration
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      cardBackground: string;
      text: string;
      textSecondary: string;
      border: string;
      chartGrid: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: string;
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
