import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import PageContextProvider from '../context/Page';
import { Header } from './Header';

const StyledPaper = styled(Paper)``;

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageContextProvider>
      <Header>Testing</Header>
      <StyledPaper elevation={3}>{children}</StyledPaper>
    </PageContextProvider>
  );
};

export default Page;
export { Page };
