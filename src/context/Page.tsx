import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import { ThemeProvider } from './Theme';

// injectFirst tip
// https://gist.github.com/Danilo-Araujo-Silva/2ce11fd0540dcc7eb3ad3e67fd75d02a#gistcomment-2935337

interface PageContextProviderProps {
  children: React.ReactNode;
}

const PageContextProvider: React.FC<PageContextProviderProps> = ({ children }) => (
  <StylesProvider injectFirst>
    <ThemeProvider>{children}</ThemeProvider>
  </StylesProvider>
);

export default PageContextProvider;
export { PageContextProvider };
export type { PageContextProviderProps };
