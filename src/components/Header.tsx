import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

const StyledAppBar = styled(AppBar)`
  font-weight: bold;
`;

const Header = ({ children }: { children: React.ReactNode }) => {
  return <StyledAppBar position='fixed'>{children}</StyledAppBar>;
};

export { Header };
