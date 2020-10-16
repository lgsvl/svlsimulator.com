import React from 'react';
import { ThemeProvider } from './Theme';

interface PageContextProviderProps {
  children: React.ReactNode;
}

const PageContextProvider: React.FC<PageContextProviderProps> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default PageContextProvider;
export { PageContextProvider };
export type { PageContextProviderProps };
