import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const StyledContainer = styled(Paper)`
  --styled-container: 1;
`;

const Footer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Box mt={2}>
      <StyledContainer>
        <Typography>Footer Info</Typography>
      </StyledContainer>
    </Box>
  );
};

export default Footer;
export { Footer };
