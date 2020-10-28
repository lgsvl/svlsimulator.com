import { ButtonProps, withTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid, { GridProps } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';
import Button, { ButtonGetDemo, ButtonReadMore } from 'src/components/Button';
import GridBox from 'src/components/GridBox';
import { px } from 'src/utils/theme';
import styled from 'styled-components';
import { LinkProps } from './Link';

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
  min-height: 300px;
  background-image: linear-gradient(-205deg, #e83d95, #862155 30%, black);
  border-radius: 8px;
`);

type ContentProps = {
  buttonProps?: ButtonProps & LinkProps;
  buttonText?: string;
  children: React.ReactNode;
  direction?: GridProps['direction'];
  title: string;
  variant?: TypographyProps['variant'];
};
const Content = ({ buttonProps, buttonText, children, title, variant = 'h5' }: ContentProps) => {
  let button;
  switch (buttonText) {
    case 'getDemo':
      button = <ButtonGetDemo {...buttonProps} />;
      break;
    case 'readMore':
      button = <ButtonReadMore {...buttonProps} />;
      break;
    default:
      button = <Button {...buttonProps}>{buttonText}</Button>;
  }
  return (
    <Grid container direction='column'>
      <GridBox item>
        <Typography variant={variant}>{title}</Typography>
      </GridBox>
      <GridBox item my={5}>
        {children}
      </GridBox>
      {buttonText && <GridBox item>{button}</GridBox>}
    </Grid>
  );
};

interface SectionProps extends ContentProps {
  flip?: boolean;
  tuckImage?: boolean;
}

const Section = ({ buttonText, children, flip, title, tuckImage, variant }: SectionProps) => (
  <SectionContainer component='section'>
    <StyledPaper elevation={0}>
      <Grid container spacing={2} direction={flip ? 'row-reverse' : 'row'}>
        <Grid item xs={12} md={6}>
          <Image />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box px={2}>
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
