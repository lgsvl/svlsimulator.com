import { withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid, { GridProps } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import { px } from 'src/utils/theme';
import Button, { ButtonReadMore, ButtonGetDemo } from 'src/components/Button';
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

type ContentProps = {
  buttonText?: string;
  children: React.ReactNode;
  direction?: GridProps['direction'];
  title: string;
  variant?: TypographyProps['variant'];
};
const Content = ({ buttonText, children, title, variant = 'h5' }: ContentProps) => {
  let button;
  switch (buttonText) {
    case 'getDemo':
      button = <ButtonGetDemo />;
      break;
    case 'readMore':
      button = <ButtonReadMore />;
      break;
    default:
      button = <Button>{buttonText}</Button>;
  }
  return (
    <Grid container direction='column' spacing={5}>
      <Grid item>
        <Typography variant={variant}>{title}</Typography>
      </Grid>
      <Grid item>{children}</Grid>
      {buttonText && <Grid item>{button}</Grid>}
    </Grid>
  );
};

interface SectionProps extends ContentProps {
  flip?: boolean;
}

const Section = ({ buttonText, children, flip, title, variant }: SectionProps) => (
  <SectionContainer component='section'>
    <StyledPaper elevation={3}>
      <Grid container spacing={2} direction={flip ? 'row-reverse' : 'row'}>
        <Grid item xs={12} md={6}>
          <Image />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2}>
            <Content title={title} buttonText={buttonText} variant={variant}>
              {children}
            </Content>
          </Box>
        </Grid>
      </Grid>
    </StyledPaper>
  </SectionContainer>
);

export default Section;
export { Section, Content as SectionContent };
