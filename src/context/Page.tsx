import { AppState } from './AppState';
import React from 'react';
import { ThemeProvider } from './Theme';

// injectFirst tip
// https://gist.github.com/Danilo-Araujo-Silva/2ce11fd0540dcc7eb3ad3e67fd75d02a#gistcomment-2935337

// interface PageContextProviderProps {
//   children: React.ReactNode;
// }

const PageContextProvider: React.FC = ({ children }) => (
  <AppState>
    <ThemeProvider>{children}</ThemeProvider>
  </AppState>
);

export default PageContextProvider;
export { PageContextProvider };
