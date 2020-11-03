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

const Image = withTheme(styled(({ src, ...rest }) => <Box {...rest} />)`
  height: 100%;
  width: 100%;
  min-height: 300px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
`);

const countChildren = (children: React.ReactNode | React.ReactChildren) =>
  React.Children.toArray(children).filter(c => Boolean(c)).length;

const roundTo = (num: number, toPlaces = 0) => Math.round(num * Math.pow(10, toPlaces)) / Math.pow(10, toPlaces);

const twoColumns = roundTo(2 / 12, 4);
// Must double this, since it's being applied inside a box that's half the normal width.
const doubleTwoColumns = twoColumns * 2;

const TuckingBox = withTheme(styled(Box)`
  min-height: 300px;
  width: 100%;
  height: 100%;
  position: relative;

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: ${(1 + doubleTwoColumns) * 100}%;
  }
`);

const ReverseTuckingBox = withTheme(styled(TuckingBox)`
  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-inline-start: ${roundTo(doubleTwoColumns * -100, 4)}%;
  }
`);

type BaseSectionProps = {
  children: React.ReactNode;
  src?: string;
  title: string;
  variant?: TypographyProps['variant'];
};

interface ContentProps extends BaseSectionProps {
  buttonProps?: ButtonProps & LinkProps;
  buttonText?: string;
  direction?: GridProps['direction'];
}

interface SectionProps extends ContentProps {
  flip?: boolean;
  image?: React.ReactNode;
  tuckImage?: boolean;
}

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
      <GridBox item my={{ xs: 2, md: 5 }}>
        {children}
      </GridBox>
      {buttonText && <GridBox item>{button}</GridBox>}
    </Grid>
  );
};

const Section = ({ buttonText, children, flip, image, src, title, tuckImage, variant }: SectionProps) => {
  let imageTag = image || <Image src={src} />;
  if (tuckImage) {
    let ImageContainerComponent = TuckingBox;
    if (flip) {
      ImageContainerComponent = ReverseTuckingBox;
    }
    imageTag = <ImageContainerComponent>{imageTag}</ImageContainerComponent>;
  }
  return (
    <SectionContainer component='section' disableGutters>
      <StyledPaper elevation={0}>
        <Grid container spacing={tuckImage ? 0 : 3} direction={flip ? 'row-reverse' : 'row'}>
          <Grid item xs={12} md={6}>
            {imageTag}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box position='relative'>
              <Content title={title} buttonText={buttonText} variant={variant}>
                {children}
              </Content>
            </Box>
          </Grid>
        </Grid>
      </StyledPaper>
    </SectionContainer>
  );
};
const FullWidthSection = ({ children, src, title, variant = 'h5' }: BaseSectionProps) => (
  <SectionContainer component='section' disableGutters>
    <StyledPaper elevation={0}>
      <Box>
        {title ? (
          <Box mb={{ xs: 2, md: 5 }}>
            <Typography variant={variant}>{title}</Typography>
          </Box>
        ) : null}
        <Image src={src} />
        {countChildren(children) ? <Box mt={{ xs: 2, md: 5 }}>{children}</Box> : null}
      </Box>
    </StyledPaper>
  </SectionContainer>
);

export default Section;
export { Section, Content as SectionContent, FullWidthSection };
