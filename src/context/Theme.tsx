import React from 'react';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { theme } from '../styles/theme';

interface IThemeProvider {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => (
  <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
);
