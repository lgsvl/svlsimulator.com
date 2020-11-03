import { ThemeProvider as MuiThemeProvider, ThemeProviderProps } from '@material-ui/core/styles';
import React from 'react';
import { theme as defaultTheme } from '../styles/theme';

export const ThemeProvider = ({ children, theme = defaultTheme }: Partial<ThemeProviderProps>) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);
