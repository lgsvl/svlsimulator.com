import { withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import { px } from 'src/utils/theme';
import styled from 'styled-components';

const SectionContainer = withTheme(styled(Container)`
  margin-bottom: ${({ theme }) => px(theme.spacing(9))};
  &:last-child {
    margin-bottom: 0;
  }
`);

const StyledPaper = withTheme(styled(Paper)``);

const Image = withTheme(styled(Box)`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(-205deg, white, #9c27b0 30%, black);
  border-radius: 20px;
`);

interface SectionProps {
  children?: React.ReactNode;
  flip?: boolean;
  title?: string;
  variant?: TypographyProps['variant'];
}

const Section = ({ children, flip, title, variant = 'h3' }: SectionProps) => (
  <SectionContainer component='section'>
    <StyledPaper elevation={3}>
      <Grid container spacing={2} direction={flip ? 'row-reverse' : 'row'}>
        <Grid item xs={12} md={6}>
          <Image />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2}>
            <Typography variant={variant}>{title}</Typography>
            {children}
          </Box>
        </Grid>
      </Grid>
    </StyledPaper>
  </SectionContainer>
);

export default Section;
export { Section };
