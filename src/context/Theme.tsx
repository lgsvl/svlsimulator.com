import React from 'react';
import { ThemeProvider as MuiThemeProvider, ThemeProviderProps } from '@material-ui/core/styles';
import { theme as defaultTheme } from '../styles/theme';

export const ThemeProvider = ({ children, theme = defaultTheme }: ThemeProviderProps) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);
